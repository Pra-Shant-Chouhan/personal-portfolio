// --- FILE: models/Contact.ts ---
import { Schema, model, models, Document } from "mongoose";

export interface IContact extends Document {
    name: string;
    email: string;
    subject?: string | null;
    message: string;
    mobile?: string | null;
    createdAt: Date;
}

const ContactSchema = new Schema<IContact>(
    {
        name: { type: String, required: true, trim: true },
        email: { type: String, required: true, trim: true, lowercase: true },
        subject: { type: String, default: null, trim: true },
        message: { type: String, required: true },
        mobile: {
            type: String,
            default: null,
        },
    },
    { timestamps: { createdAt: true, updatedAt: false } }
);

export const Contact =
    models.Contact ||
    model<IContact>( "Contact", ContactSchema, "contacts" );
