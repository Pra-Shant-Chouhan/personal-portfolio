// app/api/projects/route.ts
import { NextRequest, NextResponse } from "next/server";
import z from "zod";
import { ApiResponse, PaginatedResponse } from "@/lib/types/api";
import { ProjectQueryValidationSchema, ProjectValidationSchema } from "@/lib/validators/ProjectValidators";
import { Project } from "@/app/models/Project.model";
import { connectToDatabase } from "@/lib/mongodb";

export async function GET(request: NextRequest) {
  try {
    await connectToDatabase();

    const { searchParams } = new URL(request.url);

    // collect raw query params (strings | null)
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

    // validate & coerce using Zod schema (preprocess inside schema)
    const validatedQuery = ProjectQueryValidationSchema.parse(rawQuery);

    // Build filter object
    const filter: any = {};
    // example: only public projects? (uncomment and add field in schema/model if required)
    // filter.isPublic = true;

    if (validatedQuery.category) filter.category = validatedQuery.category;
    if (typeof validatedQuery.featured === "boolean") filter.featured = validatedQuery.featured;
    if (validatedQuery.tags && validatedQuery.tags.length) filter.tags = { $in: validatedQuery.tags };
    if (validatedQuery.search) {
      filter.$or = [
        { title: { $regex: validatedQuery.search, $options: "i" } },
        { description: { $regex: validatedQuery.search, $options: "i" } },
        { shortDescription: { $regex: validatedQuery.search, $options: "i" } },
        { company: { $regex: validatedQuery.search, $options: "i" } },
      ];
    }

    const page = validatedQuery.page;
    const limit = validatedQuery.limit;
    const skip = (page - 1) * limit;

    const sort: any = {};
    sort[validatedQuery.sortBy] = validatedQuery.sortOrder === "desc" ? -1 : 1;

    const [projects, total] = await Promise.all([
      Project.find(filter)
        .select("-details") // exclude heavy details for list view
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

    // Zod validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid query parameters",
          data: error.errors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();

    const body = await request.json();

    const validatedData = ProjectValidationSchema.parse(body);

    // check unique slug
    const existing = await Project.findOne({ slug: validatedData.slug }).lean();
    if (existing) {
      return NextResponse.json(
        { success: false, error: "Project with this slug already exists" },
        { status: 409 }
      );
    }

    // convert date strings to Date objects (if present)
    const projectDoc = new Project({
      ...validatedData,
      startDate: validatedData.startDate ? new Date(validatedData.startDate) : undefined,
      endDate: validatedData.endDate ? new Date(validatedData.endDate) : undefined,
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

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          data: error.errors.map((err) => ({ field: err.path.join("."), message: err.message })),
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
}
