// /lib/handleError.ts
import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { Error as MongooseError } from "mongoose";

function isZodError(err: unknown): err is ZodError {
  return err instanceof ZodError;
}

function isMongooseValidationError(err: unknown): err is MongooseError.ValidationError {
  return typeof err === "object" && err !== null && "errors" in err;
}

export function handleError(err: unknown) {
  console.error("API error:", err);

  if (isZodError(err)) {
    return NextResponse.json(
      { success: false, error: "validation_error", details: err.validation },
      { status: 422 }
    );
  }

  if (isMongooseValidationError(err)) {
    return NextResponse.json(
      { success: false, error: "mongoose_validation_error", details: err.errors },
      { status: 422 }
    );
  }

  if (err instanceof Error) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }

  return NextResponse.json({ success: false, error: "unknown_error" }, { status: 500 });
}
