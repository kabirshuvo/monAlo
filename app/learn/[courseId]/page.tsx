import { notFound } from "next/navigation";
import { Course } from "@/types"; //Cannot find module '@/types' or its corresponding type declarations.ts(2307)
import { cn } from "@/lib/utils";

interface CoursePageProps {
  params: { courseId: string };
}

async function getCourse(courseId: string): Promise<Course | null> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  try {
    const res = await fetch(`${baseUrl}/api/courses/${courseId}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Failed to fetch course");
      return null;
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching course:", error);
    return null;
  }
}

export default async function CoursePage({ params }: CoursePageProps) {
  if (!params.courseId) {
    console.error("Missing courseId in params");
    return notFound();
  }

  const course = await getCourse(params.courseId);
  if (!course) return notFound();

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      <p className="text-muted-foreground mb-8">{course.description}</p>

      <section className="space-y-6">
        {course.lessons && course.lessons.length > 0 ? (
          course.lessons.map((lesson, index) => (
            <div key={lesson.id} className="border rounded-lg p-4 bg-card">
              <h2 className="text-xl font-semibold mb-2">
                {index + 1}. {lesson.title}
              </h2>
              <p className="text-sm whitespace-pre-line">{lesson.content}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No lessons available for this course.</p>
        )}
      </section>
    </main>
  );
}
