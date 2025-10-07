// /lib/mongodb.ts
import mongoose, { Mongoose } from "mongoose";

// --- Validate environment variable with type narrowing ---
const MONGODB_URI: string = process.env.MONGODB_URI!;
if (!MONGODB_URI) {
  throw new Error("❌ Missing MONGODB_URI in environment variables");
}

// --- Global cache for hot reloads ---
declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: { conn: Mongoose | null; promise: Promise<Mongoose> | null } | undefined;
}

if (!global.mongooseCache) {
  global.mongooseCache = { conn: null, promise: null };
}

const cached = global.mongooseCache;

// --- Connection helper ---
export async function connectToDatabase(): Promise<Mongoose> {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, { bufferCommands: false })
      .then((mongooseInstance) => {
        console.log("✅ MongoDB connected");
        return mongooseInstance;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (err) {
    cached.promise = null; // reset on failure
    throw err;
  }

  return cached.conn;
}
