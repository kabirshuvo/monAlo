import { NextRequest, NextResponse } from 'next/server';
import Course from '@/models/courseModel';
import { connectDB } from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();
    const { title, description, lessons } = body;

    if (!title || !description || !Array.isArray(lessons)) {
      return new NextResponse('Invalid course data', { status: 400 });
    }

    const course = new Course({
      title,
      description,
      lessons,
    });

    const saved = await course.save();

    return NextResponse.json(saved, { status: 201 });
  } catch (error) {
    console.error('[COURSE POST ERROR]', error);
    return new NextResponse('Failed to add course', { status: 500 });
  }
}
