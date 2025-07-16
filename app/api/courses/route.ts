import { connectDB } from "@/lib/db";
import Course from "@/models/Course";
import { NextResponse } from "next/server";

// GET all courses
export async function GET() {
  await connectDB();
  const courses = await Course.find();
  return NextResponse.json(courses);
}

// POST a new course
export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();
  const course = await Course.create(body);
  return NextResponse.json(course, { status: 201 });
}
