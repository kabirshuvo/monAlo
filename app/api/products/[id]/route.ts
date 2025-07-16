import { connectDB } from "@/lib/db";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  await connectDB();
  const product = await Product.findById(params.id);
  return NextResponse.json(product);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  await connectDB();
  const body = await req.json();
  const updated = await Product.findByIdAndUpdate(params.id, body, { new: true });
  return NextResponse.json(updated);
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  await connectDB();
  await Product.findByIdAndDelete(params.id);
  return NextResponse.json({ success: true });
}
