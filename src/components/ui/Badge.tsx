import { cn } from "@/lib/utils";

type BadgeVariant = "brand" | "neutral" | "success" | "dark";

interface BadgeProps {
  children:  React.ReactNode;
  variant?:  BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  brand:   "bg-brand-50 text-brand-700 border border-brand-100",
  neutral: "bg-ink-100 text-ink-600 border border-ink-200",
  success: "bg-emerald-50 text-emerald-700 border border-emerald-100",
  dark:    "bg-ink-800 text-ink-200 border border-ink-700",
};

export function Badge({ children, variant = "brand", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold tracking-wide",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
