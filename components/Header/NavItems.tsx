"use client";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants/nav";

export default function NavItems({ onClick }: { onClick?: () => void }) {
  return (
    <>
      {NAV_LINKS.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          onClick={onClick}
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          {link.name}
        </Link>
      ))}
    </>
  );
}
