// ─────────────────────────────────────────────────────────────
//  SITE-WIDE CONFIGURATION — edit here to change company info,
//  hero copy, contact details, colors, and social links.
// ─────────────────────────────────────────────────────────────

export const siteConfig = {
  name: "FWD Lab",
  tagline: "Building simple, smart digital solutions for growing businesses.",
  description:
    "FWD Lab is a boutique IT consultancy based in Muscat, Oman. We help businesses design, build, and automate digital solutions with a practical, modern approach.",
  url: "https://fwdlab.om",

  hero: {
    eyebrow: "Muscat, Oman · IT Consultancy",
    headline: "Building simple, smart digital solutions for growing businesses.",
    headlineHighlight: "simple, smart",
    subheadline:
      "FWD Lab helps businesses design, build, and automate websites, applications, and digital workflows with a practical, modern approach.",
    primaryCta:   { label: "Start a Project",   href: "/contact" },
    secondaryCta: { label: "Explore Services",  href: "/services" },
    trustItems: [
      "Website Development",
      "Web Applications",
      "Business Automation",
      "IT Consulting",
    ],
  },

  contact: {
    email:   "hello@fwdlab.om",
    phone:   "+968 9000 0000",
    address: "Muscat, Oman",
  },

  social: {
    linkedin: "https://linkedin.com/company/fwdlab",
    twitter:  "https://twitter.com/fwdlab",
    github:   "https://github.com/fatma-arch-lab",
  },

  seo: {
    defaultTitle:    "FWD Lab — Digital Solutions for Growing Businesses",
    titleTemplate:   "%s | FWD Lab",
    defaultDescription:
      "FWD Lab is an Oman-based IT consultancy that designs, builds, and automates digital solutions — websites, web apps, business applications, and workflow automation.",
  },
} as const;
