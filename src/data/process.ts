// ─────────────────────────────────────────────
//  PROCESS STEPS
//  Edit label, title, and description to update
//  the "How We Work" section on the homepage.
// ─────────────────────────────────────────────

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    description:
      "We start by understanding your business, your goals, and the problem you're trying to solve — before talking about technology.",
  },
  {
    step: "02",
    title: "Plan",
    description:
      "We map out a clear scope, timeline, and approach. No surprises. You know exactly what you're getting and when.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "We design and develop your solution in focused sprints, sharing progress regularly so you stay informed throughout.",
  },
  {
    step: "04",
    title: "Deliver",
    description:
      "We launch your product, ensure everything works as expected, and provide documentation and a smooth handover.",
  },
  {
    step: "05",
    title: "Support",
    description:
      "We're available after launch for maintenance, improvements, and long-term support — we don't disappear after delivery.",
  },
];
