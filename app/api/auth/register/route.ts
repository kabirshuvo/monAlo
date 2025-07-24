import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import User from '@/models/userModel';
import { connectDB } from '@/lib/db';

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();
    await connectDB();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: 'Email already exists' }, { status: 400 });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    await User.create({ name, email, password: hashedPassword });

    return NextResponse.json({ message: 'User registered successfully' }, { status: 201 });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json({ error: 'Registration failed' }, { status: 500 });
  }
}
