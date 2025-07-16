import { connectDB } from "@/lib/db";
import Order from "@/models/Order";
import { NextResponse } from "next/server";

// GET order by ID
export async function GET(_: Request, { params }: { params: { id: string } }) {
  await connectDB();
  const order = await Order.findById(params.id).populate("userId").populate("products.productId");
  return NextResponse.json(order);
}

// PUT update order (e.g., payment status, delivery status)
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  await connectDB();
  const body = await req.json();
  const updated = await Order.findByIdAndUpdate(params.id, body, { new: true });
  return NextResponse.json(updated);
}

// DELETE order
export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  await connectDB();
  await Order.findByIdAndDelete(params.id);
  return NextResponse.json({ success: true });
}
