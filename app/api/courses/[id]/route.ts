import { NextResponse } from 'next/server';
import Course from '@/models/courseModel';
import { connectDB } from '@/lib/db';
import { ParamsWithId } from '@/types/api'; // ✅ import the type

export async function GET(req: Request, context: ParamsWithId) {
  try {
    await connectDB();

    const { id } = context.params;
    const course = await Course.findById(id);

    if (!course) {
      return new NextResponse('Course not found', { status: 404 });
    }

    return NextResponse.json(course);
  } catch (error) {
    console.error('[GET COURSE ERROR]', error);
    return new NextResponse('Failed to fetch course', { status: 500 });
  }
}
