import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

const paddingStyles = {
  sm: "p-5",
  md: "p-6 md:p-8",
  lg: "p-8 md:p-10",
};

export function Card({ children, className, hover = true, padding = "md" }: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl border border-neutral-100 shadow-soft",
        hover && "card-hover",
        paddingStyles[padding],
        className
      )}
    >
      {children}
    </div>
  );
}
