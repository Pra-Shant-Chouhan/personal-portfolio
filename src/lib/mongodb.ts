// /lib/mongodb.ts
import mongoose, { Mongoose } from "mongoose";

// Validate environment variable
const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) throw new Error("❌ Missing MONGODB_URI");

// Define a proper global type
declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
  } | undefined;
}

// Initialize global cache if not exists
if (!global.mongooseCache) {
  global.mongooseCache = { conn: null, promise: null };
}

// TypeScript now knows global.mongooseCache is defined
const cached = global.mongooseCache;

// Connection helper
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
