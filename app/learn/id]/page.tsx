// app/learn/[courseId]/page.tsx
'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface Course {
  _id: string;
  title: string;
  description: string;
  price: number;
  instructor: string;
  lessons: { title: string; _id: string }[];
}

async function getCourse(courseId: string): Promise<Course> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/courses/${courseId}`);
  if (!res.ok) throw new Error('Failed to fetch course data');
  return res.json();
}

export default function CoursePage() {
  const router = useRouter();
  const { courseId } = router.query;

  const [course, setCourse] = useState<Course | null>(null);

  useEffect(() => {
    if (courseId) {
      getCourse(courseId as string)
        .then((data) => setCourse(data))
        .catch((err) => console.error(err));
    }
  }, [courseId]);

  if (!course) {
    return <div>Loading...</div>; // Or a skeleton loader
  }

  return (
    <main className="px-6 md:px-20 py-12 space-y-6">
      {/* Course Title */}
      <h1 className="text-3xl font-bold text-gray-800">{course.title}</h1>

      {/* Course Description */}
      <p className="text-lg text-gray-600">{course.description}</p>

      {/* Instructor Info */}
      <div className="text-gray-500 mt-4">
        <strong>Instructor:</strong> {course.instructor}
      </div>

      {/* Course Price */}
      <div className="text-2xl text-amber-600 font-semibold mt-4">
        ৳ {course.price}
      </div>

      {/* Lessons List */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Lessons</h2>
        <ul className="space-y-4 mt-4">
          {course.lessons.map((lesson) => (
            <li key={lesson._id} className="flex items-center space-x-4">
              <span>{lesson.title}</span>
              <Link href={`/learn/lesson/${lesson._id}`}>
                <Button variant="outline" size="sm">View Lesson</Button>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Enroll Button */}
      <div className="mt-8">
        <Button size="lg">Enroll Now</Button>
      </div>
    </main>
  );
}
