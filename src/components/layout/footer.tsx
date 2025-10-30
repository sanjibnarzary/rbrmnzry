import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";
import { Logo } from "../logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Logo className="h-8 w-auto fill-primary-foreground" />
              <span className="sr-only">Rabiram Narzary</span>
            </Link>
            <p className="text-sm text-primary-foreground/80">
              Hon'ble Executive Member (Education),<br />
              Bodoland Territorial Council (BTC).<br />
              Dedicated to public service and progress.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm hover:underline">Home</Link></li>
              <li><Link href="/about" className="text-sm hover:underline">About</Link></li>
              <li><Link href="/portfolio" className="text-sm hover:underline">Portfolio</Link></li>
              <li><Link href="/education" className="text-sm hover:underline">Education</Link></li>
              <li><Link href="/events" className="text-sm hover:underline">Events</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold uppercase tracking-wider">
              Follow Me
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
          <p>&copy; {currentYear} Sjt. Rabiram Narzary. All Rights Reserved.</p>
          <p>
            Created by{" "}
            <a href="https://narzary.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary-foreground">
              narzary.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
