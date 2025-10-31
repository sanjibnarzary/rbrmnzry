"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";
import { Logo } from "../logo";
import { useLanguage } from "@/context/language-context";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t, language } = useLanguage();

  const quickLinks = [
    { href: "/", label: t('nav_home') },
    { href: "/about", label: t('nav_about') },
    { href: "/portfolio", label: t('nav_portfolio') },
    { href: "/education", label: t('nav_education') },
    { href: "/events", label: t('nav_events') },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Link href={`/${language}/`} className="inline-block">
              <Logo className="h-8 w-auto fill-primary-foreground" />
              <span className="sr-only">Rabiram Narzary</span>
            </Link>
            <p className="text-sm text-primary-foreground/80" dangerouslySetInnerHTML={{ __html: t('footer_bio') }} />
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold uppercase tracking-wider">
              {t('footer_quick_links')}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                 <li key={link.href}><Link href={`/${language}${link.href === '/' ? '' : link.href}`} className="text-sm hover:underline">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold uppercase tracking-wider">
              {t('footer_follow_me')}
            </h4>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-6 w-6 hover:opacity-80 transition-opacity" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-6 w-6 hover:opacity-80 transition-opacity" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-6 w-6 hover:opacity-80 transition-opacity" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {currentYear} {t('footer_copyright')}</p>
          <p dangerouslySetInnerHTML={{ __html: t('footer_created_by') }} />
        </div>
      </div>
    </footer>
  );
}
