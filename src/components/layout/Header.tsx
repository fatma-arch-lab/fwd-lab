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
  const pathname  = usePathname();
  const [menuOpen, setMenuOpen]  = useState(false);
  const [scrolled, setScrolled]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-ink-100/80 shadow-soft"
          : "bg-transparent"
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between md:h-[4.5rem]">

          {/* ── Logo ──────────────────────────────── */}
          <Link href="/" className="group flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 shadow-sm transition-all duration-200 group-hover:bg-brand-700">
              <span className="text-[10px] font-black tracking-tighter text-white select-none">
                FWD
              </span>
            </div>
            <span className="text-[1.05rem] font-bold tracking-tight text-ink-950">
              {siteConfig.name}
            </span>
          </Link>

          {/* ── Desktop nav ───────────────────────── */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "relative rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-150",
                    isActive
                      ? "text-brand-600"
                      : "text-ink-600 hover:text-ink-950 hover:bg-ink-50"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute inset-x-4 bottom-1 h-0.5 rounded-full bg-brand-500" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ── CTA + hamburger ───────────────────── */}
          <div className="flex items-center gap-3">
            <Button href="/contact" size="sm" className="hidden md:inline-flex">
              Start a Project
            </Button>
            <button
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
              className="flex md:hidden h-9 w-9 items-center justify-center rounded-lg text-ink-700 hover:bg-ink-100 transition-colors"
            >
              {menuOpen ? (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                  <line x1="2" y1="2" x2="14" y2="14" /><line x1="14" y1="2" x2="2" y2="14" />
                </svg>
              ) : (
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                  <line x1="0" y1="1" x2="18" y2="1" /><line x1="0" y1="7" x2="18" y2="7" /><line x1="0" y1="13" x2="18" y2="13" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* ── Mobile drawer ─────────────────────────── */}
      {menuOpen && (
        <div className="md:hidden border-t border-ink-100 bg-white/95 backdrop-blur-xl shadow-card">
          <Container>
            <nav aria-label="Mobile navigation" className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-brand-50 text-brand-700"
                        : "text-ink-700 hover:bg-ink-50"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-3 pb-1">
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
