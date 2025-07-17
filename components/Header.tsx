"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import { Menu, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { RootState } from "@/lib/redux/store";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-amber-700">
          MonAlo
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center text-gray-700">
          <Link href="/" className="hover:text-amber-600">Home</Link>
          <Link href="/shop" className="hover:text-amber-600">Shop</Link>
          <Link href="/learn" className="hover:text-amber-600">Learn</Link>

          {/* Cart Icon */}
          <Link href="/cart" className="relative">
            <ShoppingCart className="w-6 h-6" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">
                {cartItems.length}
              </span>
            )}
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2 text-gray-700">
          <Link href="/" className="block hover:text-amber-600">Home</Link>
          <Link href="/shop" className="block hover:text-amber-600">Shop</Link>
          <Link href="/learn" className="block hover:text-amber-600">Learn</Link>
          <Link href="/cart" className="block hover:text-amber-600">Cart ({cartItems.length})</Link>
        </div>
      )}
    </header>
  );
}
