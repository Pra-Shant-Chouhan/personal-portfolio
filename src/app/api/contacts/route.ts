import { getDB } from "@/utils/mongodb";
import { NextResponse } from "next/server";


export async function GET() {
  try {
    const db = await getDB();
    const collections = await db.listCollections().toArray();

    return NextResponse.json({
      success: true,
      collections: collections.map((c) => c.name),
    });
  } catch (err) {
    console.error("❌ MongoDB route error:", err);
    return NextResponse.json({ success: false, error: "Database error" }, { status: 500 });
  }
}
