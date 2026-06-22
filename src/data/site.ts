// ─────────────────────────────────────────────
//  SITE-WIDE CONFIGURATION
//  Edit this file to update company info, hero
//  text, contact details, and social links.
// ─────────────────────────────────────────────

export const siteConfig = {
  name: "FWD Lab",
  tagline: "Building simple, smart digital solutions for growing businesses.",
  description:
    "FWD Lab helps businesses in Oman design, build, and automate websites, applications, and digital workflows with a practical, modern approach.",
  url: "https://fwdlab.om",

  hero: {
    eyebrow: "Muscat, Oman · Digital Consultancy",
    // headlineHighlight is the portion rendered in gradient colour.
    // It must appear exactly inside `headline`.
    headline: "Building simple, smart digital solutions for growing businesses.",
    headlineHighlight: "simple, smart",
    subheadline:
      "FWD Lab helps businesses design, build, and automate websites, applications, and digital workflows with a practical, modern approach.",
    primaryCta: { label: "Start a Project", href: "/contact" },
    secondaryCta: { label: "View Our Work", href: "/work" },
    // Items listed below the CTAs as quick trust signals
    trustItems: [
      "Website Development",
      "Web Applications",
      "Business Automation",
      "IT Consulting",
    ],
  },

  contact: {
    email: "info@fwdlab.om",
    phone: "+968 9000 0000",
    address: "Muscat, Oman",
  },

  social: {
    linkedin: "https://linkedin.com/company/fwdlab",
    twitter: "https://twitter.com/fwdlab",
    github: "https://github.com/fatma-arch-lab",
  },

  seo: {
    defaultTitle: "FWD Lab — Digital Solutions for Growing Businesses",
    titleTemplate: "%s | FWD Lab",
    defaultDescription:
      "FWD Lab is an Oman-based IT consultancy that designs, builds, and automates digital solutions — websites, web apps, business applications, and workflow automation.",
  },
} as const;
