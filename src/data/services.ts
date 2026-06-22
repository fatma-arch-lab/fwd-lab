// ─────────────────────────────────────────────────────────────
//  SERVICES — add, remove, or edit services here.
//  Changes propagate automatically to all pages and the footer.
// ─────────────────────────────────────────────────────────────

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  features: string[];
  tag?: string;
}

export const services: Service[] = [
  {
    id: "website-development",
    title: "Website Development",
    shortDescription:
      "Professional, fast, and mobile-first websites that represent your brand online.",
    fullDescription:
      "We design and develop clean, high-performance websites tailored to your business. From landing pages to multi-page corporate sites, every build is mobile-first, accessible, and built to convert.",
    icon: "🌐",
    features: [
      "Custom design & branding",
      "Mobile-first & responsive",
      "SEO-ready structure",
      "Fast load performance",
      "CMS integration (optional)",
    ],
  },
  {
    id: "web-application-development",
    title: "Web Application Development",
    shortDescription:
      "Full-featured web apps with modern frameworks, clean code, and great UX.",
    fullDescription:
      "We build robust web applications — from internal tools to customer-facing platforms. We use modern, maintainable technology stacks and follow best practices for scalability and security.",
    icon: "⚙️",
    features: [
      "React / Next.js frontend",
      "Scalable backend APIs",
      "Authentication & roles",
      "Database design",
      "Cloud deployment",
    ],
  },
  {
    id: "business-applications",
    title: "Business Applications",
    shortDescription:
      "Custom software built around your workflows — not the other way around.",
    fullDescription:
      "We create tailor-made business applications that fit exactly how your team works. CRM systems, dashboards, internal portals, and operational tools that improve efficiency and reduce manual effort.",
    icon: "🏢",
    features: [
      "ERP & CRM modules",
      "Custom dashboards",
      "Role-based access control",
      "Reporting & analytics",
      "Integration with existing systems",
    ],
    tag: "Popular",
  },
  {
    id: "business-process-automation",
    title: "Business Process Automation",
    shortDescription:
      "Eliminate repetitive tasks and let your team focus on what matters.",
    fullDescription:
      "We analyse your business workflows and design automations that save time, reduce errors, and increase consistency. From document generation to approval workflows, we automate what slows you down.",
    icon: "🤖",
    features: [
      "Workflow design & mapping",
      "Automated notifications",
      "Document generation",
      "API & system integrations",
      "Scheduled automations",
    ],
  },
  {
    id: "low-code-solutions",
    title: "Low-Code Solutions",
    shortDescription:
      "Fast, flexible solutions using modern low-code platforms when they're the right fit.",
    fullDescription:
      "When speed matters more than custom code, we leverage leading low-code platforms to deliver working solutions quickly. We select the right tool for your needs and ensure it integrates properly with your systems.",
    icon: "⚡",
    features: [
      "Platform evaluation & selection",
      "Rapid prototyping",
      "Third-party integrations",
      "Training & handover",
      "Ongoing support available",
    ],
  },
  {
    id: "it-consulting",
    title: "IT Consulting",
    shortDescription:
      "Clear, practical technology advice — no jargon, no unnecessary complexity.",
    fullDescription:
      "We help businesses make smart technology decisions. Whether you're choosing software, planning a digital transformation, or trying to fix a broken process, we bring a clear, business-first perspective.",
    icon: "💡",
    features: [
      "Technology assessment",
      "Digital transformation roadmaps",
      "Software selection advice",
      "Architecture review",
      "Team capability planning",
    ],
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation Consulting",
    shortDescription:
      "Strategic guidance to help your organisation embrace digital ways of working.",
    fullDescription:
      "We help organisations plan and execute their digital transformation journeys — from strategy through implementation. We focus on people, processes, and technology in equal measure.",
    icon: "🔮",
    features: [
      "Current-state assessment",
      "Transformation roadmap",
      "Change management support",
      "Vendor selection",
      "Pilot programme design",
    ],
    tag: "New",
  },
  {
    id: "support-maintenance",
    title: "Support & Maintenance",
    shortDescription:
      "Reliable ongoing support so your digital products keep running smoothly.",
    fullDescription:
      "We provide maintenance and support for websites and applications — monitoring, updates, bug fixes, and enhancements. We act as your long-term technical partner, not just a one-time vendor.",
    icon: "🛡️",
    features: [
      "Bug fixes & patches",
      "Performance monitoring",
      "Security updates",
      "Content updates",
      "Monthly reporting",
    ],
  },
];
