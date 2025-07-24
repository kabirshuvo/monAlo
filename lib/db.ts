// lib/db.ts
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("⚠️ MONGODB_URI not defined in .env.local");
}

interface MongooseConnection {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// declare global cached object
const globalWithMongoose = global as typeof global & {
  mongoose: MongooseConnection;
};

const cached: MongooseConnection = globalWithMongoose.mongoose || {
  conn: null,
  promise: null,
};

export async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI!, {
      dbName: "monalo",
      bufferCommands: false,
    }).then((mongoose) => {
      console.log("✅ MongoDB Connected");
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  globalWithMongoose.mongoose = cached;

  return cached.conn;
}