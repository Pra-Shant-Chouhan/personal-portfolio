// app/api/projects/route.ts
import { NextRequest, NextResponse } from "next/server";
import z from "zod";
import { ApiResponse, PaginatedResponse } from "@/lib/types/api";
import { ProjectQueryValidationSchema, ProjectValidationSchema } from "@/lib/validators/ProjectValidators";
import { Project } from "@/app/models/Project.model";
import { connectToDatabase } from "@/lib/mongodb";
import { handleZodValidation } from "@/lib/handleZodValidation";

export async function GET(request: NextRequest) {
  try {
    await connectToDatabase();

    const { searchParams } = new URL(request.url);

    const rawQuery = {
      page: searchParams.get("page"),
      limit: searchParams.get("limit"),
      category: searchParams.get("category"),
      featured: searchParams.get("featured"),
      tags: searchParams.get("tags"),
      sortBy: searchParams.get("sortBy"),
      sortOrder: searchParams.get("sortOrder"),
      search: searchParams.get("search"),
    };

    // 🟢 changed: use safeParse instead of parse + utility for cleaner handling
    const validation = ProjectQueryValidationSchema.safeParse(rawQuery);
    const validationError = handleZodValidation(validation);
    if (validationError) {
      return NextResponse.json(validationError, { status: 400 });
    }

    const validatedQuery = validation.data;

    const filter: any = {};
    if (validatedQuery?.category) filter.category = validatedQuery.category;
    if (typeof validatedQuery?.featured === "boolean") filter.featured = validatedQuery.featured;
    if (validatedQuery?.tags && validatedQuery.tags.length) filter.tags = { $in: validatedQuery.tags };
    if (validatedQuery?.search) {
      filter.$or = [
        { title: { $regex: validatedQuery.search, $options: "i" } },
        { description: { $regex: validatedQuery.search, $options: "i" } },
        { shortDescription: { $regex: validatedQuery.search, $options: "i" } },
        { company: { $regex: validatedQuery.search, $options: "i" } },
      ];
    }

    const page = validatedQuery?.page || 1;
    const limit = validatedQuery?.limit || 3;
    const skip = (page - 1) * limit;

    const sort: any = {};
    sort[validatedQuery?.sortBy] = validatedQuery?.sortOrder === "desc" ? -1 : 1;

    const [projects, total] = await Promise.all([
      Project.find(filter)
        .select("-details")
        .sort(sort)
        .skip(skip)
        .limit(limit)
        .lean(),
      Project.countDocuments(filter),
    ]);

    const totalPages = Math.ceil(total / limit);
    const hasNext = page < totalPages;
    const hasPrev = page > 1;

    const response: ApiResponse<PaginatedResponse<any>> = {
      success: true,
      data: {
        data: projects,
        pagination: {
          page,
          limit,
          total,
          totalPages,
          hasNext,
          hasPrev,
        },
      },
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error: any) {
    console.error("GET /api/projects error:", error);

    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // ✅ Early validation before DB logic
    const body = await request.json();

     // 🟢 changed: use safeParse + reusable utility
    const validation = ProjectValidationSchema.safeParse(body);
    const validationError = handleZodValidation(validation);
    if (validationError) {
      return NextResponse.json(validationError, { status: 400 });
    }

    const validatedData = validation.data;

    // now safe to connect and insert
    await connectToDatabase();
    const existing = await Project.findOne({ slug: validatedData?.slug });

    if (existing) {
      return NextResponse.json(
        { success: false, error: "Project with this slug already exists" },
        { status: 409 }
      );
    }

    // convert date strings to Date objects (if present)
    const projectDoc = new Project({
      ...validatedData,
      startDate: validatedData?.startDate ? new Date(validatedData?.startDate) : null,
      endDate: validatedData?.endDate ? new Date(validatedData?.endDate) : null,
    });

    await projectDoc.save();

    const response: ApiResponse<any> = {
      success: true,
      data: projectDoc.toObject(),
      message: "Project created successfully",
    };

    return NextResponse.json(response, { status: 201 });
  } catch (error: any) {
    console.error("POST /api/projects error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Internal server error",
      },
      { status: 500 }
    );
  }
}
