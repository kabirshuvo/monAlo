// "use client";

// import { Menu, ShoppingCart } from "lucide-react";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import CartButton from "./Header/CartButton";
// import NavLinks from "./Header/NavLinks";
// import Logo from "./Header/Logo";
// import MobileMenu from "./Header/MobileMenu";





// import { useSession, signOut } from 'next-auth/react';
// import { Button } from '@/components/ui/button';

// const Header = () => {
//    const { data: session } = useSession();

//   return (
//     <header className="w-full border-b shadow-sm sticky top-0 z-50 bg-white">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
//         <Logo />
//         <nav className="hidden md:flex items-center gap-6">
//           <NavLinks />
//           <CartButton />
//           {session ? (
//             <Button variant="ghost" onClick={() => signOut({ callbackUrl: '/' })}>
//               Logout
//             </Button>
//           ) : (
//             <Button variant="ghost" asChild>
//               <a href="/login">Login</a>
//             </Button>
//           )}
//         </nav>
//         <div className="md:hidden">
//           <Sheet>
//             <SheetTrigger>
//               <Menu className="h-6 w-6" />
//             </SheetTrigger>
//             <SheetContent side="right" className="w-64">
//               <MobileMenu />
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;



'use client';

import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import CartButton from './Header/CartButton';
import NavLinks from './Header/NavLinks';
import Logo from './Header/Logo';
import MobileMenu from './Header/MobileMenu';
import { useSession, signOut } from 'next-auth/react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="w-full border-b shadow-sm sticky top-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Logo />
        <nav className="hidden md:flex items-center gap-6">
          <NavLinks />
          <CartButton />
          {session ? (
            <Button variant="ghost" onClick={() => signOut({ callbackUrl: '/' })}>
              Logout
            </Button>
          ) : (
            <Button variant="ghost" asChild>
              <a href="/login">Login</a>
            </Button>
          )}
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
}
