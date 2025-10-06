// /app/api/contact/route.ts
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Contact } from "@/app/models/Contact.model";
import { ContactInput, validateContact } from "@/lib/validators/ContactValidators";

export const runtime = "nodejs"; // Ensure this runs on Node.js runtime (not Edge)

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const data: ContactInput = validateContact(json);

    // Connect to DB
    await connectToDatabase();

    // Create a new contact document
    const created = await Contact.create({
      name: data.name,
      email: data.email,
      subject: data.subject ?? null,
      message: data.message,
      mobile: data.mobile ?? null,
    });

    return NextResponse.json({ success: true, id: created._id }, { status: 201 });
  } catch (err) {
    console.error("/api/contact POST error:", err);

    // Type narrowing for Zod validation errors
    if (typeof err === "object" && err !== null && "validation" in err) {
      return NextResponse.json(
        { success: false, error: "validation_error", details: (err as any).validation },
        { status: 422 }
      );
    }

    // Type narrowing for normal Error instances
    const message =
      err instanceof Error
        ? err.message
        : typeof err === "string"
          ? err
          : "unknown_error";

    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }

}

// export async function GET() {
//   try {
//     await connectToDatabase();

//     const items = await Contact.find().sort({ createdAt: -1 }).limit(10).lean();

//     return NextResponse.json({ success: true, items });
//   } catch (err: any) {
//     console.error("/api/contact GET error:", err);
//     return NextResponse.json(
//       { success: false, error: err?.message ?? "unknown" },
//       { status: 500 }
//     );
//   }
// }
