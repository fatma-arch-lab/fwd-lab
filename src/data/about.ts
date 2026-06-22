// ─────────────────────────────────────────────
//  ABOUT PAGE CONTENT
//  Edit here to update the About page text
//  and company values without touching any
//  component files.
// ─────────────────────────────────────────────

export interface AboutValue {
  title: string;
  description: string;
}

export const aboutContent = {
  hero: {
    eyebrow: "About Us",
    title: "We help businesses move forward with technology.",
    description:
      "FWD Lab is a boutique digital consultancy based in Muscat, Oman. We work with businesses across sectors to design, build, and automate their digital products and processes — with a focus on outcomes that actually matter.",
  },

  whatWeDo: {
    title: "What we do",
    paragraphs: [
      "We build websites, web applications, business software, and automated workflows. We also help organisations navigate technology decisions — from choosing the right tools to planning a digital transformation.",
      "Our strength is in combining clear thinking with strong technical execution. We don't just write code — we help you understand your options, plan properly, and build the right thing.",
    ],
  },

  whoWeWorkWith: {
    title: "Who we work with",
    paragraphs: [
      "We work best with growing businesses and established organisations that need a reliable technical partner — not just a vendor. Our clients range from SMEs launching their first digital product to larger organisations streamlining internal operations.",
      "We're based in Oman and serve clients across the Gulf and beyond.",
    ],
  },
};

export const companyValues: AboutValue[] = [
  {
    title: "Clarity over complexity",
    description:
      "We favour simple, maintainable solutions over clever ones. Good technology should make life easier, not harder.",
  },
  {
    title: "Honest communication",
    description:
      "We say what we think, flag risks early, and tell you when something won't work — even if it's not what you want to hear.",
  },
  {
    title: "Craft and quality",
    description:
      "We take pride in writing clean code and designing intuitive interfaces. Work we're proud to put our name on.",
  },
  {
    title: "Results, not output",
    description:
      "We measure success by the impact our work has on your business — not the number of features delivered.",
  },
];
