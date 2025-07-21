// app/api/courses/route.ts
import { NextResponse } from 'next/server';
import Course from '@/models/courseModel';
import { connectDB } from '@/lib/db';

export async function GET() {
  try {
    await connectDB();
    const courses = await Course.find();
    return NextResponse.json(courses);
  } catch (error) {
    return new NextResponse('Failed to fetch courses', { status: 500 });
  }
}
