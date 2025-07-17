import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Shop", href: "/shop" },
  { label: "Learn", href: "/learn" },
  { label: "Orders", href: "/orders" },
];

const NavLinks = () => {
  return (
    <>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </>
  );
};

export default NavLinks;
