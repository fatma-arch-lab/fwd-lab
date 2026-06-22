import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "dark";
type Size    = "sm" | "md" | "lg";

interface ButtonProps {
  variant?:  Variant;
  size?:     Size;
  href?:     string;
  className?: string;
  children:  React.ReactNode;
  onClick?:  () => void;
  type?:     "button" | "submit" | "reset";
  disabled?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-brand-600 text-white hover:bg-brand-700 shadow-sm hover:shadow-md active:scale-[0.98]",
  secondary:
    "bg-white text-ink-800 border border-ink-200 hover:border-ink-300 hover:bg-ink-50 active:scale-[0.98]",
  ghost:
    "text-ink-700 hover:text-brand-600 hover:bg-ink-100 active:scale-[0.98]",
  dark:
    "bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm active:scale-[0.98]",
};

const sizeStyles: Record<Size, string> = {
  sm: "h-9  px-4   text-sm  rounded-full gap-1.5",
  md: "h-11 px-6   text-sm  rounded-full gap-2",
  lg: "h-13 px-8   text-base rounded-full gap-2",
};

export function Button({
  variant  = "primary",
  size     = "md",
  href,
  className,
  children,
  onClick,
  type     = "button",
  disabled,
}: ButtonProps) {
  const base = cn(
    "inline-flex items-center justify-center font-semibold tracking-[-0.01em] transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return <Link href={href} className={base}>{children}</Link>;
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={base}>
      {children}
    </button>
  );
}
