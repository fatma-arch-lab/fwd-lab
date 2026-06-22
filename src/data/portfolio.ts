// ─────────────────────────────────────────────
//  PORTFOLIO / WORK DATA
//  Add real projects here as you complete them.
//  Placeholder projects are included for design.
// ─────────────────────────────────────────────

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  category: string;
  shortDescription: string;
  fullDescription?: string;
  tags: string[];
  // Replace with real image paths in /public once you have them
  imagePlaceholderColor: string;
  featured?: boolean;
  link?: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "hr-portal",
    title: "Employee HR Portal",
    client: "Regional Services Company",
    category: "Business Application",
    shortDescription:
      "A custom internal HR portal for leave management, payroll visibility, and employee self-service.",
    fullDescription:
      "Built a full-featured HR portal that replaced manual spreadsheets and email approvals. Includes leave requests, approval workflows, payroll summaries, and an admin dashboard.",
    tags: ["Next.js", "PostgreSQL", "Role-based Access"],
    imagePlaceholderColor: "#e8edf8",
    featured: true,
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    client: "Retail Brand, Muscat",
    category: "Web Application",
    shortDescription:
      "A fast, modern online store with inventory management, order tracking, and payment integration.",
    fullDescription:
      "Designed and built a scalable e-commerce platform with a product catalogue, cart, checkout, and an admin panel for order and inventory management.",
    tags: ["Next.js", "Stripe", "Inventory Management"],
    imagePlaceholderColor: "#eef3ec",
    featured: true,
  },
  {
    id: "process-automation",
    title: "Document Approval Automation",
    client: "Professional Services Firm",
    category: "Business Process Automation",
    shortDescription:
      "Automated a multi-step document approval process that was previously handled entirely by email.",
    fullDescription:
      "Replaced a slow email-based approval chain with an automated workflow — document submission, role-based approvals, notifications, and a full audit trail.",
    tags: ["Workflow Automation", "Notifications", "Audit Trail"],
    imagePlaceholderColor: "#f5f0f8",
    featured: true,
  },
  {
    id: "corporate-website",
    title: "Corporate Website Redesign",
    client: "Engineering Consultancy",
    category: "Website Development",
    shortDescription:
      "A complete redesign of an outdated corporate website — modern design, fast loading, mobile-first.",
    tags: ["Next.js", "Tailwind CSS", "SEO"],
    imagePlaceholderColor: "#fdf5ec",
    featured: false,
  },
  {
    id: "crm-dashboard",
    title: "Sales CRM Dashboard",
    client: "Distribution Company",
    category: "Business Application",
    shortDescription:
      "A lightweight CRM with lead tracking, deal pipeline, and sales reporting for a 12-person team.",
    tags: ["CRM", "Dashboards", "React"],
    imagePlaceholderColor: "#ecf5fd",
    featured: false,
  },
  {
    id: "low-code-operations",
    title: "Operations Tracking App",
    client: "Logistics Provider",
    category: "Low-Code Solution",
    shortDescription:
      "A rapid-delivery operations dashboard built with a low-code platform, delivered in 3 weeks.",
    tags: ["Low-Code", "Operations", "Fast Delivery"],
    imagePlaceholderColor: "#fdf0f5",
    featured: false,
  },
];

export const featuredProjects = portfolioProjects.filter((p) => p.featured);
