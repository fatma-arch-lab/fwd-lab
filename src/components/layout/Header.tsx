"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { navLinks } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "./Container";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-neutral-100 shadow-soft"
          : "bg-transparent"
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between md:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white text-xs font-bold tracking-tight select-none">
              FWD
            </span>
            <span className="text-lg font-bold text-neutral-900 tracking-tight">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={cn(
                  "rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-150",
                  pathname === link.href
                    ? "bg-brand-50 text-brand-700"
                    : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Button href="/contact" size="sm" className="hidden md:inline-flex">
              Start a Project
            </Button>

            {/* Hamburger */}
            <button
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
              className="flex md:hidden h-9 w-9 items-center justify-center rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors"
            >
              {menuOpen ? (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="2" y1="2" x2="16" y2="16" />
                  <line x1="16" y1="2" x2="2" y2="16" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="2" y1="5" x2="16" y2="5" />
                  <line x1="2" y1="9" x2="16" y2="9" />
                  <line x1="2" y1="13" x2="16" y2="13" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu drawer */}
      {menuOpen && (
        <div className="md:hidden border-t border-neutral-100 bg-white/98 backdrop-blur-md shadow-card">
          <Container>
            <nav className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={cn(
                    "rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "bg-brand-50 text-brand-700"
                      : "text-neutral-700 hover:bg-neutral-50"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 pb-1">
                <Button href="/contact" className="w-full justify-center">
                  Start a Project
                </Button>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
