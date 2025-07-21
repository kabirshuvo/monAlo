// app/api/courses/[id]/route.ts
import { NextResponse } from 'next/server';
import Course from '@/models/courseModel';
import { connectDB } from '@/lib/db';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectDB();
    const course = await Course.findById(params.id);
    if (!course) {
      return new NextResponse('Course not found', { status: 404 });
    }
    return NextResponse.json(course);
  } catch (error) {
    return new NextResponse('Failed to fetch course', { status: 500 });
  }
}
