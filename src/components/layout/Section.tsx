import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "light" | "dark";
}

const bgStyles = {
  white: "bg-white",
  light: "bg-neutral-50",
  dark:  "bg-neutral-950 text-white",
};

export function Section({ children, className, id, background = "white" }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("section-padding", bgStyles[background], className)}
    >
      {children}
    </section>
  );
}
