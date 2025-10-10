// import { ZodError, z } from "zod";
import { z, type ZodSafeParseError, type ZodSafeParseSuccess } from "zod";

type SafeParseResult = ZodSafeParseSuccess<any> | ZodSafeParseError<any>;

// Use the top-level `z.flattenError()` function
export function handleZodValidation(validation: SafeParseResult) {
  if (validation.success) {
    return null;
  }
  const { error } = validation as ZodSafeParseError<any>;

  return {
    success: false,
    error: "Validation failed",
    data: z.flattenError(error), // Use the top-level function
  };
}
