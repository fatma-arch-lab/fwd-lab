/** Merge class names, filtering out falsy values */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

/** Map a portfolio project category to a representative emoji */
const CATEGORY_ICONS: Record<string, string> = {
  "Business Application":        "🏢",
  "Web Application":             "⚙️",
  "Business Process Automation": "🤖",
  "Website Development":         "🌐",
  "Low-Code Solution":           "⚡",
};

export function getCategoryIcon(category: string): string {
  return CATEGORY_ICONS[category] ?? "📊";
}
