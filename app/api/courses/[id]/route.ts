// app/api/courses/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import Course from '@/models/courseModel';
import { connectDB } from '@/lib/db';

interface Params {
  params: {
    id: string;
  };
}

export async function GET(_req: NextRequest, { params }: Params) {
  try {
    await connectDB();
    const course = await Course.findById(params.id);

    if (!course) {
      return new NextResponse('Course not found', { status: 404 });
    }

    return NextResponse.json(course);
  } catch (error) {
    console.error('[GET COURSE ERROR]', error);
    return new NextResponse('Failed to fetch course', { status: 500 });
  }
}
