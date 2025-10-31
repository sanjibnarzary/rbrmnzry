"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/language-context";

type NavigationProps = {
  isMobile?: boolean;
};

export function Navigation({ isMobile = false }: NavigationProps) {
  const pathname = usePathname();
  const { language, t } = useLanguage();

  const navItems = [
    { href: "/", label: t('nav_home') },
    { href: "/about", label: t('nav_about') },
    { href: "/portfolio", label: t('nav_portfolio') },
    { href: "/education", label: t('nav_education') },
    { href: "/events", label: t('nav_events') },
  ];

  return (
    <nav
      className={cn(
        "flex items-center",
        isMobile ? "flex-col space-y-4" : "space-x-4 lg:space-x-6"
      )}
    >
      {navItems.map((item) => {
        const itemPath = `/${language}${item.href === '/' ? '' : item.href}`;
        const isActive = pathname === itemPath || (item.href !== '/' && pathname.startsWith(itemPath));

        return (
          <Link
            key={item.href}
            href={itemPath}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive
                ? "text-primary"
                : "text-muted-foreground",
              isMobile && "text-lg"
            )}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  );
}
