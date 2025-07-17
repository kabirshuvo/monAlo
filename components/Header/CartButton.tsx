"use client";

import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import Link from "next/link";

const CartButton = () => {
  const itemCount = useSelector((state: RootState) => state.cart.items.length);

  return (
    <Link href="/cart" className="relative">
      <ShoppingCart className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </Link>
  );
};

export default CartButton;
