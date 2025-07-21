import { NextResponse } from 'next/server';
import Product from '@/models/productModel';
import { connectDB } from '@/lib/db';

export async function GET() {
  await connectDB();
  const products = await Product.find();
  return NextResponse.json(products);
}

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    console.log("Received data:", body);

    const product = await Product.create({
      name: body.name,
      description: body.description,
      price: body.price,
      category: body.category,
      image: body.image, // e.g. "/candles/lavender.jpg"
    });



    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error('[PRODUCT POST ERROR]', error);
    
    return new NextResponse('Failed to add product', { status: 500 });
  }
}
