import { NextResponse } from "next/server";

import { connectToDatabase } from "@/lib/mongodb";
import { Project } from "@/app/models/Project.model";

// GET all projects
export async function GET() {
  try {
    await connectToDatabase();
    const projects = await Project.find().sort({ order: 1, createdAt: -1 });
    return NextResponse.json({ success: true, projects });
  } catch (err) {
    console.error("❌ Error fetching projects:", err);
    return NextResponse.json({ success: false, message: "Failed to fetch projects" }, { status: 500 });
  }
}

// CREATE new project
export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const data = await req.json();
    const project = await Project.create(data);
    return NextResponse.json({ success: true, project });
  } catch (err: any) {
    console.error("❌ Error creating project:", err);
    return NextResponse.json({ success: false, message: err.message || "Failed to create project" }, { status: 500 });
  }
}
