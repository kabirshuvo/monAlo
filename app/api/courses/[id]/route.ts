// app/api/courses/[id]/routeModule.ts

import { connectDB } from "@/lib/db";
import Course from "@/models/courseModel";
import { NextResponse } from "next/server";

// GET course by ID
export async function GET(_: Request, { params }: { params: { id: string } }) {
  await connectDB();
  const course = await Course.findById(params.id);
  return NextResponse.json(course);
}

// PUT update course
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  await connectDB();
  const body = await req.json();
  const updated = await Course.findByIdAndUpdate(params.id, body, { new: true });
  return NextResponse.json(updated);
}

// DELETE course
export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  await connectDB();
  await Course.findByIdAndDelete(params.id);
  return NextResponse.json({ success: true });
}
