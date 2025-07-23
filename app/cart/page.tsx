'use client';

import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '@/lib/redux/features/cartSlice';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { AppDispatch, RootState } from '@/lib/redux/store';

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: 'scented' | 'unscented' | 'candles' | string;
}

export default function Cart() {
  const dispatch = useDispatch<AppDispatch>();
  const { cart } = useSelector((state: RootState) => state.cart);
  const total = cart.reduce((sum: number, item: Product) => sum + item.price, 0);

  return (
    <div className="container mx-auto py-12 min-h-screen bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item: Product) => (
              <Card key={item._id}>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">{item.name}</CardTitle>
                  <p className="text-gray-500">{item.description}</p>
                </CardHeader>
                <CardContent className="flex justify-between items-center p-4">
                  <p className="text-lg font-medium text-gray-800">${item.price}</p>
                  <Button
                    variant="destructive"
                    onClick={() => dispatch(removeFromCart(item._id))}
                  >
                    Remove
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8">
            <p className="text-xl font-semibold">Total: ${total.toFixed(2)}</p>
            <Link href="/checkout">
              <Button className="mt-4 bg-amber-500 hover:bg-amber-600">
                Proceed to Checkout
              </Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
