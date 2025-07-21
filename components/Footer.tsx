// components/Footer.tsx
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground dark:bg-gray-900 dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-amber-600">MonAlo</h2>
          <p className="text-sm leading-relaxed">
            A candle shop infused with a spark of learning. Light up your space,
            light up your mind.
          </p>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/shop">🕯️ All Candles</Link></li>
            <li><Link href="/categories">🧴 Categories</Link></li>
            <li><Link href="/offers">🔥 Offers</Link></li>
            <li><Link href="/cart">🛒 View Cart</Link></li>
          </ul>
        </div>

        {/* Learn Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Learn</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/learn">🎓 All Courses</Link></li>
            <li><Link href="/learn/categories">📚 Categories</Link></li>
            <li><Link href="/learn/enrollments">🧠 My Learning</Link></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold mb-3">Connect</h3>
          <p className="text-sm flex items-center gap-2"><Mail className="h-4 w-4" /> hello@monalo.com</p>
          <p className="text-sm flex items-center gap-2"><Phone className="h-4 w-4" /> +880 123 456 789</p>
          <div className="flex space-x-4 mt-4">
            <Link href="https://facebook.com" target="_blank"><Facebook className="w-5 h-5" /></Link>
            <Link href="https://instagram.com" target="_blank"><Instagram className="w-5 h-5" /></Link>
            <Link href="https://linkedin.com" target="_blank"><Linkedin className="w-5 h-5" /></Link>
          </div>
        </div>
      </div>

      <div className="border-t border-border text-center py-4 text-xs text-muted-foreground">
        © {new Date().getFullYear()} MonAlo. Crafted with 🕯️ & ❤️ in Bangladesh.
      </div>
    </footer>
  );
}
