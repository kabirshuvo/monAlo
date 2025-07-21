// types/next-auth.d.ts

import { DefaultSession, DefaultUser } from 'next-auth';

declare module 'next-auth' {
  interface User extends DefaultUser {
    id: string;
    role: string;
  }

  interface Session {
    user: {
      id: string;
      role: string;
    } & DefaultSession['user'];
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    role: string;
  }
}
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
