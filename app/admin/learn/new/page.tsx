'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function NewCoursePage() {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [lessons, setLessons] = useState([
    { id: '', title: '', content: '' },
  ]);

  const handleLessonChange = (index: number, field: string, value: string) => {
    const updated = [...lessons];
    updated[index] = { ...updated[index], [field]: value };
    setLessons(updated);
  };

  const addLesson = () => {
    setLessons([...lessons, { id: '', title: '', content: '' }]);
  };

  const removeLesson = (index: number) => {
    const updated = [...lessons];
    updated.splice(index, 1);
    setLessons(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/courses', {
        title,
        description,
        lessons,
      });

      console.log('Course created:', response.data);
      router.push('/learn');
    } catch (error) {
      console.error('Failed to create course:', error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-8">➕ Add New Course</h1>
      <form onSubmit={handleSubmit} className="space-y-8">

        <div>
          <label className="block text-sm font-medium mb-2">Course Title</label>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Course Description</label>
          <Textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Lessons</h2>
          {lessons.map((lesson, index) => (
            <div key={index} className="border p-4 rounded-md space-y-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1">Lesson ID</label>
                <Input
                  value={lesson.id}
                  onChange={(e) => handleLessonChange(index, 'id', e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Lesson Title</label>
                <Input
                  value={lesson.title}
                  onChange={(e) => handleLessonChange(index, 'title', e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Lesson Content</label>
                <Textarea
                  value={lesson.content}
                  onChange={(e) => handleLessonChange(index, 'content', e.target.value)}
                  required
                />
              </div>
              <Button type="button" variant="destructive" onClick={() => removeLesson(index)}>
                Remove Lesson
              </Button>
            </div>
          ))}

          <Button type="button" variant="outline" onClick={addLesson}>
            ➕ Add Another Lesson
          </Button>
        </div>

        <Button type="submit" className="w-full">
          ✅ Submit Course
        </Button>
      </form>
    </div>
  );
}
