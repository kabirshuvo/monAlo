import { NextRequest, NextResponse } from 'next/server';
import Product from '@/models/productModel';
import { connectDB } from '@/lib/db';

interface Params {
  params: {
    id: string;
  };
}

export async function GET(_req: NextRequest, { params }: Params) {
  try {
    await connectDB();
    const product = await Product.findById(params.id);

    if (!product) {
      return new NextResponse('Product not found', { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error('[GET PRODUCT ERROR]', error);
    return new NextResponse('Failed to fetch product', { status: 500 });
  }
}
