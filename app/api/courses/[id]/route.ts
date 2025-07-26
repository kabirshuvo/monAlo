// ✅ app/api/courses/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import Course from '@/models/courseModel';
import { connectDB } from '@/lib/db';

export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    await connectDB();

    const course = await Course.findById(context.params.id);
    if (!course) {
      return new NextResponse('Course not found', { status: 404 });
    }

    return NextResponse.json(course);
  } catch (error) {
    console.error('[GET COURSE ERROR]', error);
    return new NextResponse('Failed to fetch course', { status: 500 });
  }
}
