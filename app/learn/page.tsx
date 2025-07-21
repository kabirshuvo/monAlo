// app/learn/page.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LearnPage() {
  return (
    <main className="px-6 md:px-20 py-12 space-y-12">
      {/* 🎓 Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Explore Learning with <span className="text-blue-600">MonAlo</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Light up your mind with creative courses in crafts, wellness, and inspiration.
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <Link href="/learn/courses">
            <Button>📚 Browse Courses</Button>
          </Link>
          <Link href="/learn/categories">
            <Button variant="outline">🔎 Explore by Category</Button>
          </Link>
        </div>
      </section>

      {/* ✨ Featured Courses (mock) */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Featured Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((id) => (
            <div
              key={id}
              className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 border border-muted"
            >
              <div className="h-40 bg-blue-100 dark:bg-blue-950 rounded mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Course #{id}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Learn something enriching and creative.
              </p>
              <Button className="mt-3 w-full" variant="outline">
                Enroll
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* 💡 Call to Action */}
      <section className="bg-blue-50 dark:bg-blue-900 text-center py-14 rounded-xl px-6">
        <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
          Ready to Start Learning?
        </h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-xl mx-auto mb-6">
          Explore our diverse collection of courses and ignite your creative journey.
        </p>
        <Link href="/learn/courses">
          <Button size="lg">Start Now</Button>
        </Link>
      </section>
    </main>
  );
}
