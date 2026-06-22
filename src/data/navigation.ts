// ─────────────────────────────────────────────
//  NAVIGATION LINKS
//  Add, remove, or reorder navigation items here.
// ─────────────────────────────────────────────

export const navLinks = [
  { label: "Home",     href: "/" },
  { label: "About",    href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work",     href: "/work" },
  { label: "Contact",  href: "/contact" },
] as const;

export type NavLink = (typeof navLinks)[number];
