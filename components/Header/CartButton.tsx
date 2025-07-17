
'use client';

import { useSelector } from 'react-redux';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { RootState } from '@/lib/redux/store';

export default function CartButton() {
  const cart = useSelector((state: RootState) => state.cart?.cart ?? []);
  const cartItemCount = cart.length;

  return (
    <Button variant="ghost" asChild className="relative">
      <Link href="/cart">
        <ShoppingCart className="h-6 w-6" />
        {cartItemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-amber-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            {cartItemCount}
          </span>
        )}
      </Link>
    </Button>
  );
}
