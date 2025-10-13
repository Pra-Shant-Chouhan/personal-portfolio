import { z } from "zod";

import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .nonempty("Name is required")
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name must be at most 50 characters long"),

  email: z
    .string()
    .trim()
    .nonempty("Email is required")
    .email("Please enter a valid email address")
    .max(100, "Email must be at most 100 characters long"),

  message: z
    .string()
    .trim()
    .nonempty("Message is required")
    .min(5, "Message must be at least 5 characters long")
    .max(1000, "Message must be at most 1000 characters long"),

  subject: z
    .string()
    .trim()
    .max(100, "Subject must be at most 100 characters long")
    .optional()
    .nullable(),

  mobile: z
    .string()
    .trim()
    .optional()
    .nullable()
    .refine(
      (val) => !val || /^[+]?[\d\s-]{7,15}$/.test(val),
      "Please enter a valid mobile number"
    ),
});

// export const contactSchema = z.object({
//   name: z.string().min(2, "Name is too short"),
//   email: z.string().email("Invalid email address"),
//   subject: z.string().optional().nullable(),
//   message: z.string().min(5, "Message is too short"),
//   mobile: z
//     .string()
//     .optional()
//     .nullable()
//     .refine((val) => !val || /^[+]?[\d\s-]{7,15}$/.test(val), "Invalid mobile number"),
// });

export type ContactInput = z.infer<typeof contactSchema>;

export function validateContact(data: unknown): ContactInput {
  const parsed = contactSchema.safeParse(data);
  if (!parsed.success) {
    throw { validation: parsed.error.flatten() };
  }
  return parsed.data;
}
