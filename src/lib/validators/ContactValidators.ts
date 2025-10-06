import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email address"),
  subject: z.string().optional().nullable(),
  message: z.string().min(5, "Message is too short"),
  mobile: z
    .string()
    .optional()
    .nullable()
    .refine((val) => !val || /^[+]?[\d\s-]{7,15}$/.test(val), "Invalid mobile number"),
});

export type ContactInput = z.infer<typeof contactSchema>;

export function validateContact(data: unknown): ContactInput {
  const parsed = contactSchema.safeParse(data);
  if (!parsed.success) {
    throw { validation: parsed.error.flatten() };
  }
  return parsed.data;
}
