import { Schema, model, models, Document } from "mongoose";

/**
 * Project interface for a portfolio or company showcase.
 * Includes SEO fields and extended metadata for detail pages.
 */
export interface IProject extends Document {
  title: string;
  slug: string;
  shortDescription?: string;
  description?: string;
  details?: string; // Rich text / HTML (used for full project detail content)
  company?: string;
  role?: string;
  techStack: string[]; // Core technologies (e.g., ["Next.js", "MongoDB", "TailwindCSS"])
  tags?: string[]; // General topic labels (e.g., ["Dashboard", "SaaS"])
  category?: string; // Type of project (e.g., "Web App", "Landing Page")
  skills?: string[]; // Specific tools or integrations (e.g., ["GSAP", "Razorpay Integration"])
  startDate?: Date;
  endDate?: Date;
  isOngoing?: boolean;
  liveUrl?: string;
  githubUrl?: string;
  image?: string; // Main preview image
  gallery?: string[]; // Extra images for carousel or modal
  featured?: boolean;
  order?: number; // Manual display order
  rank?: number; // Sorting priority (e.g., 10 = top project)

  // 🧠 SEO fields
  metaTitle?: string; // Custom title for SEO (e.g., "Travel App | Built with Next.js & MongoDB")
  metaDescription?: string; // Meta description (for OpenGraph and SEO)

  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * Mongoose schema definition for Project documents.
 */
const projectSchema = new Schema<IProject>(
  {
    /**
     * Title of the project (main heading).
     */
    title: { type: String, required: true, trim: true },

    /**
     * SEO-friendly unique slug for routing (used in URLs).
     * Example: "travel-booking-app"
     */
    slug: { type: String, required: true, unique: true, lowercase: true },

    /**
     * 1-line short summary for preview cards.
     */
    shortDescription: { type: String, trim: true },

    /**
     * Brief paragraph used in summary sections.
     */
    description: { type: String, trim: true },

    /**
     * Rich HTML content from text editor, used for full detail pages.
     */
    details: { type: String },

    /**
     * Company or client this project was built for (optional).
     */
    company: { type: String, trim: true },

    /**
     * Your specific role in the project (e.g., "Full Stack Developer").
     */
    role: { type: String, trim: true },

    // ---------- CORE CLASSIFICATION ----------

    /**
     * Major frameworks and languages used.
     */
    techStack: { type: [String], required: true },

    /**
     * Descriptive tags for filtering and grouping.
     */
    tags: [{ type: String, trim: true }],

    /**
     * Specific tools, APIs, and integrations.
     */
    skills: [{ type: String, trim: true }],

    /**
     * Category or type of project.
     */
    category: { type: String, trim: true },

    // ---------- TIMELINE ----------

    /**
     * When development started.
     */
    startDate: Date,

    /**
     * When project completed.
     */
    endDate: Date,

    /**
     * Indicates if project is still ongoing.
     */
    isOngoing: { type: Boolean, default: false },

    // ---------- LINKS ----------

    /**
     * Live site or deployment link.
     */
    liveUrl: { type: String, trim: true },

    /**
     * Repository link (e.g., GitHub, GitLab).
     */
    githubUrl: { type: String, trim: true },

    // ---------- VISUALS ----------

    /**
     * Main image (thumbnail or banner for card view).
     */
    image: { type: String, trim: true },

    /**
     * Array of extra screenshots for gallery.
     */
    gallery: [{ type: String, trim: true }],

    // ---------- DISPLAY CONTROL ----------

    /**
     * Whether this project should appear in featured section.
     */
    featured: { type: Boolean, default: false },

    /**
     * Manual display order for sorting on frontend.
     */
    order: { type: Number, default: 0 },

    /**
     * Custom ranking for highlighting best projects.
     */
    rank: { type: Number, default: 0 },

    // ---------- SEO META DATA ----------

    /**
     * Custom meta title for SEO and Open Graph tags.
     * If not provided, defaults to project title.
     */
    metaTitle: { type: String, trim: true },

    /**
     * Meta description for SEO (used in HTML <meta> tag).
     */
    metaDescription: { type: String, trim: true },
  },
  {
    /**
     * Adds createdAt and updatedAt timestamps automatically.
     */
    timestamps: true,
  }
);

/**
 * Exports the model — reuses existing model during hot reloads.
 */
export const Project = models.Project || model<IProject>("Project", projectSchema);
