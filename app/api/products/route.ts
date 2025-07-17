import { NextResponse } from 'next/server';
import Product from '@/models/productModel';
import { connectDB } from '@/lib/db';

export async function GET() {
  await connectDB();
  const products = await Product.find();
  return NextResponse.json(products);
}