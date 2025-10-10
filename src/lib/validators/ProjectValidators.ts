// lib/validators/ProjectValidators.ts
import { z } from "zod";

/**
 * Helper preprocessors
 */
const toNumber = (val: unknown) => {
  if (val === undefined || val === null || val === "") return undefined;
  const n = Number(val);
  return Number.isNaN(n) ? undefined : n;
};

const toBool = (val: unknown) => {
  if (val === "true" || val === true) return true;
  if (val === "false" || val === false) return false;
  return undefined;
};

const splitTags = (val: unknown) => {
  if (!val) return [];
  if (Array.isArray(val)) return val.map(String);
  if (typeof val === "string") return val.split(",").map((s) => s.trim()).filter(Boolean);
  return [];
};

// CREATE / POST validator
export const ProjectValidationSchema = z.object({
  title: z.string().min(1, "Title is required").max(100, "Title too long"),
  slug: z
    .string()
    .min(1, "Slug is required")
    .max(100, "Slug too long")
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be URL-friendly (lowercase, numbers, hyphens)"),
  shortDescription: z.string().max(200, "Short description too long").optional(),
  description: z.string().max(500, "Description too long").optional(),
  details: z.string().optional(),
  company: z.string().max(100, "Company name too long").optional(),
  role: z.string().max(100, "Role too long").optional(),
  techStack: z.array(z.string().min(1, "Tech stack item cannot be empty")).min(1, "At least one tech stack item is required").max(20, "Too many tech stack items"),
  tags: z.array(z.string().min(1, "Tag cannot be empty")).max(15, "Too many tags").optional(),
  category: z.string().max(50, "Category too long").optional(),
  skills: z.array(z.string().min(1, "Skill cannot be empty")).max(20, "Too many skills").optional(),
  // Accept ISO strings or Date objects; coerce to string so route converts to Date when saving
  startDate: z.preprocess((v) => {
    if (!v) return undefined;
    return typeof v === "string" ? v : v;
  }, z.string().optional()),
  endDate: z.preprocess((v) => {
    if (!v) return undefined;
    return typeof v === "string" ? v : v;
  }, z.string().optional()),
  isOngoing: z.boolean().optional().default(false),
  liveUrl: z.string().url("Invalid live URL").optional().or(z.literal("")),
  githubUrl: z.string().url("Invalid GitHub URL").optional().or(z.literal("")),
  image: z.string().url("Invalid image URL").optional().or(z.literal("")),
  gallery: z.array(z.string().url("Invalid gallery image URL")).max(10, "Too many gallery images").optional(),
  featured: z.boolean().optional().default(false),
  order: z.number().int().min(0, "Order must be non-negative").optional().default(0),
  rank: z.number().int().min(0, "Rank must be non-negative").optional().default(0),
  metaTitle: z.string().max(100, "Meta title too long").optional(),
  metaDescription: z.string().max(300, "Meta description too long").optional(),
});

// Partial for updates
export const ProjectUpdateValidationSchema = ProjectValidationSchema.partial();

// Query params (coerce strings from URL -> types)
export const ProjectQueryValidationSchema = z.object({
  page: z.preprocess((val) => {
    const n = toNumber(val);
    return n ?? 1;
  }, z.number().int().positive()),
  limit: z.preprocess((val) => {
    const n = toNumber(val);
    return n ?? 10;
  }, z.number().int().min(1).max(100)),
  category: z.string().optional(),
  featured: z.preprocess((val) => toBool(val), z.boolean().optional()),
  tags: z.preprocess((val) => splitTags(val), z.array(z.string()).optional()),
  sortBy: z.enum(["createdAt", "updatedAt", "order", "rank", "title"]).optional().default("order"),
  sortOrder: z.enum(["asc", "desc"]).optional().default("desc"),
  search: z.string().optional(),
});

export type CreateProjectInput = z.infer<typeof ProjectValidationSchema>;
export type UpdateProjectInput = z.infer<typeof ProjectUpdateValidationSchema>;
export type ProjectQueryParams = z.infer<typeof ProjectQueryValidationSchema>;
