import { MongoClient, Db } from "mongodb";

// --- Validate env variable ---
const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("❌ Missing MONGODB_URI in environment variables");
}

// --- Global cache for hot reloads in dev ---
declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

const options = {}; // You can customize pool settings if needed

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);

    // Event listeners for visibility
    client.on("connectionReady", () => console.log("✅ MongoDB connection ready"));
    client.on("close", () => console.log("❌ MongoDB connection closed"));
    client.on("error", (err) => console.error("⚠️ MongoDB error:", err));

    global._mongoClientPromise = client.connect().then((client) => {
      console.log("✅ MongoDB connected (dev mode)");
      return client;
    });
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);

  client.on("connectionReady", () => console.log("✅ MongoDB connection ready"));
  client.on("close", () => console.log("❌ MongoDB connection closed"));
  client.on("error", (err) => console.error("⚠️ MongoDB error:", err));

  clientPromise = client.connect().then((client) => {
    console.log("✅ MongoDB connected (prod mode)");
    return client;
  });
}

// --- Graceful shutdown for Bun/Node ---
process.on("SIGINT", async () => {
  console.log("🛑 SIGINT received, closing MongoDB connection...");
  await clientPromise.then((c) => c.close());
  process.exit(0);
});

// --- Helper function to get default DB from connection string ---
export async function getDB(): Promise<Db> {
  const client = await clientPromise;
  return client.db(); // Uses the DB name from connection string automatically
}

export default clientPromise;

// --- Sample usage ---
// import { getDB } from "./mongodb";
// const db = await getDB();
// const collection = db.collection("users");