'use client';

import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/redux/store';

export default function MobileMenu() {
  const cart = useSelector((state: RootState) => state.cart?.cart ?? []);
  const cartItemCount = cart.length;

  return (
    <div className="flex flex-col gap-4 mt-6">
      <Link href="/shop" className="text-gray-700 hover:text-amber-600 text-lg">
        Shop
      </Link>
      <Link href="/learn" className="text-gray-700 hover:text-amber-600 text-lg">
        Learn
      </Link>
      <Link href="/cart" className="text-gray-700 hover:text-amber-600 text-lg">
        Cart ({cartItemCount})
      </Link>
      <Link href="/contact" className="text-gray-700 hover:text-amber-600 text-lg">
        Contact
      </Link>
      <Link href="/login" className="text-gray-700 hover:text-amber-600 text-lg">
        Login
      </Link>
    </div>
  );
}
