"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/education", label: "Education" },
  { href: "/events", label: "Events" },
];

type NavigationProps = {
  isMobile?: boolean;
};

export function Navigation({ isMobile = false }: NavigationProps) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "flex items-center",
        isMobile ? "flex-col space-y-4" : "space-x-4 lg:space-x-6"
      )}
    >
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === item.href
              ? "text-primary"
              : "text-muted-foreground",
            isMobile && "text-lg"
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
