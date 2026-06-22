import { cn } from "@/lib/utils";

type BadgeVariant = "brand" | "neutral" | "success";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  brand:   "bg-brand-50 text-brand-700 border border-brand-100",
  neutral: "bg-neutral-100 text-neutral-600 border border-neutral-200",
  success: "bg-green-50 text-green-700 border border-green-100",
};

export function Badge({ children, variant = "brand", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
