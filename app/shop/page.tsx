// app/shop/page.tsx
"use client"
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const mockCandles = [
  {
    id: "1",
    title: "Lavender Bliss",
    price: 450,
    category: "Aromatherapy",
    image: "/candles/lavender.jpg",
  },
  {
    id: "2",
    title: "Citrus Sunrise",
    price: 380,
    category: "Citrus",
    image: "/candles/citrus.jpg",
  },
  {
    id: "3",
    title: "Vanilla Woods",
    price: 520,
    category: "Woodsy",
    image: "/candles/vanilla.jpg",
  },
];

export default function ShopPage() {
  return (
    <main className="px-6 md:px-12 py-10 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">🕯️ MonAlo Candle Shop</h1>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">Explore hand-poured artisan candles crafted to light up your soul.</p>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {mockCandles.map((candle) => (
          <Card key={candle.id} className="hover:shadow-lg transition">
            <div className="relative h-48 w-full">
              <Image
                src={candle.image}
                alt={candle.title}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardContent className="py-4 space-y-2">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">{candle.title}</h2>
                <Badge variant="secondary">{candle.category}</Badge>
              </div>
              <p className="text-amber-600 font-bold">৳ {candle.price}</p>
              <Button className="w-full">Add to Cart</Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}
