import { connectDB } from "@/lib/db";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

// GET all users
export async function GET() {
  await connectDB();
  const users = await User.find();
  return NextResponse.json(users);
}

// POST: create new user (admin use only)
export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();
  const user = await User.create(body);
  return NextResponse.json(user, { status: 201 });
}
