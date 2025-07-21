// app/learn/page.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

type Lesson = {
  id: string;
  title: string;
  content: string;
};

type Course = {
  _id: string;
  title: string;
  description: string;
  lessons: Lesson[];
};

export default function LearnPage() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch('/api/courses');
        const data = await res.json();
        setCourses(data);
      } catch (err) {
        console.error('Failed to load courses', err);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Available Courses</h1>
      {courses.length === 0 ? (
        <p>No courses available yet.</p>
      ) : (
        <div className="space-y-6">
          {courses.map((course) => (
            <div
              key={course._id}
              className="p-6 border rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold">{course.title}</h2>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <Link
                href={`/learn/${course._id}`}
                className="text-blue-600 hover:underline font-medium"
              >
                View Lessons →
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
