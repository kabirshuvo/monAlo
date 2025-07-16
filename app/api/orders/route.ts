import { connectDB } from "@/lib/db";
import Order from "@/models/Order";
import { NextResponse } from "next/server";

// GET all orders
export async function GET() {
  await connectDB();
  const orders = await Order.find().populate("userId").populate("products.productId");
  return NextResponse.json(orders);
}

// POST a new order
export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();
  const order = await Order.create(body);
  return NextResponse.json(order, { status: 201 });
}
