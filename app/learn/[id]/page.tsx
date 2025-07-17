'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourseById } from '@/lib/redux/features/courseSlice';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useParams } from 'next/navigation';
import { AppDispatch, RootState } from '@/lib/redux/store';

interface Lesson {
  id: string;
  title: string;
  content: string;
}

interface Course {
  _id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export default function CourseDetail() {
  const dispatch = useDispatch<AppDispatch>();
  const params = useParams();
  const id = params.id as string;
  const { course, status, error } = useSelector((state: RootState) => state.courses);

  useEffect(() => {
    if (id) {
      dispatch(fetchCourseById(id));
    }
  }, [id, dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!course) return <p>Course not found</p>;

  return (
    <div className="container mx-auto py-12 min-h-screen bg-gray-50">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{course.title}</CardTitle>
          <p className="text-gray-600">{course.description}</p>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue={course.lessons[0]?.id}>
            <TabsList>
              {course.lessons.map((lesson: Lesson) => (
                <TabsTrigger key={lesson.id} value={lesson.id}>
                  {lesson.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {course.lessons.map((lesson: Lesson) => (
              <TabsContent key={lesson.id} value={lesson.id}>
                <h3 className="text-xl font-semibold">{lesson.title}</h3>
                <p className="text-gray-700 mt-4">{lesson.content}</p>
                <Button className="mt-4 bg-rose-500 hover:bg-rose-600">
                  Start Lesson
                </Button>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}