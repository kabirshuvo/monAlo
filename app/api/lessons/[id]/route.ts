import { connectDB } from "@/lib/db";
import Lesson from "@/models/Lesson";
import { NextResponse } from "next/server";

// GET lesson by ID
export async function GET(_: Request, { params }: { params: { id: string } }) {
  await connectDB();
  const lesson = await Lesson.findById(params.id).populate("courseId");
  return NextResponse.json(lesson);
}

// PUT update lesson
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  await connectDB();
  const body = await req.json();
  const updated = await Lesson.findByIdAndUpdate(params.id, body, { new: true });
  return NextResponse.json(updated);
}

// DELETE lesson
export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  await connectDB();
  await Lesson.findByIdAndDelete(params.id);
  return NextResponse.json({ success: true });
}
