import { cn } from "@/lib/utils";

interface CardProps {
  children:  React.ReactNode;
  className?: string;
  hover?:    boolean;
  padding?:  "sm" | "md" | "lg";
  accent?:   boolean; // top border accent line on hover
}

const paddingStyles = { sm: "p-5", md: "p-6 md:p-8", lg: "p-8 md:p-10" };

export function Card({
  children,
  className,
  hover   = true,
  padding = "md",
  accent  = false,
}: CardProps) {
  return (
    <div
      className={cn(
        "relative bg-white rounded-2xl border border-ink-100 shadow-soft overflow-hidden",
        hover && "card-hover cursor-default",
        accent && [
          "before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:rounded-t-2xl",
          "before:bg-brand-gradient before:opacity-0 before:transition-opacity before:duration-300",
          hover && "hover:before:opacity-100",
        ],
        paddingStyles[padding],
        className
      )}
    >
      {children}
    </div>
  );
}
