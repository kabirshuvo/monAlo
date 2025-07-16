"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useDispatch } from "react-redux";
import { addToCart } from "@/lib/redux/features/cartSlice";

const mockCandles = [
  {
    id: "1",
    title: "Lavender Bliss",
    description: "A calming blend of lavender essential oil in a soy wax base.",
    price: 450,
    category: "Aromatherapy",
    image: "/candles/lavender.jpg",
  },
  {
    id: "2",
    title: "Citrus Sunrise",
    description: "Bright citrusy notes to energize your space and mood.",
    price: 380,
    category: "Citrus",
    image: "/candles/citrus.jpg",
  },
  {
    id: "3",
    title: "Vanilla Woods",
    description: "Rich vanilla layered with warm, earthy undertones of cedarwood.",
    price: 520,
    category: "Woodsy",
    image: "/candles/vanilla.jpg",
  },
];

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const dispatch = useDispatch();
  const candle = mockCandles.find((item) => item.id === params.id);

  if (!candle) return notFound();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: candle.id,
        title: candle.title,
        price: candle.price,
        image: candle.image,
      })
    );
  };

  return (
    <main className="px-6 md:px-20 py-12 space-y-6">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Image */}
        <div className="relative h-96 w-full shadow rounded-xl overflow-hidden">
          <Image
            src={candle.image}
            alt={candle.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Details */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{candle.title}</h1>
          <Badge variant="secondary">{candle.category}</Badge>
          <p className="text-gray-600">{candle.description}</p>
          <div className="text-2xl text-amber-600 font-semibold">৳ {candle.price}</div>

          <Button onClick={handleAddToCart} size="lg" className="mt-4 w-full sm:w-auto">
            🛒 Add to Cart
          </Button>
        </div>
      </div>
    </main>
  );
}
