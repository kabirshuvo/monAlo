// types.ts or types/index.ts

export interface Lesson {
  id: string;
  title: string;
  content: string;
}

export interface Course {
  _id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}
