import { connectDB } from "@/lib/db";
import Enrollment from "@/models/Enrollment";
import { NextResponse } from "next/server";

// GET all enrollments
export async function GET() {
  await connectDB();
  const enrollments = await Enrollment.find()
    .populate("userId")
    .populate("courseId")
    .populate("progress.lessonId");
  return NextResponse.json(enrollments);
}

// POST new enrollment
export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();
  const enrollment = await Enrollment.create(body);
  return NextResponse.json(enrollment, { status: 201 });
}
