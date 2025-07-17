"use client";

import { Menu, ShoppingCart } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import CartButton from "./Header/CartButton";
import NavLinks from "./Header/NavLinks";
import Logo from "./Header/Logo";
import MobileMenu from "./Header/MobileMenu";

const Header = () => {
  return (
    <header className="w-full border-b shadow-sm sticky top-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Logo />

        <nav className="hidden md:flex items-center gap-6">
          <NavLinks />
          <CartButton />
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <MobileMenu />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
