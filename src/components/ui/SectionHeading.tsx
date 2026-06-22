import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?:   string;
  title:      string;
  description?: string;
  align?:     "left" | "center";
  className?: string;
  /** Render the title with gradient on a dark background */
  light?:     boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align     = "center",
  className,
  light     = false,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={cn(isCenter ? "text-center" : "text-left", "mb-14 md:mb-20", className)}>
      {eyebrow && (
        <span className={cn(
          "eyebrow mb-4 block",
          light ? "text-brand-300" : "text-brand-600"
        )}>
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-h2 md:text-[3rem] font-bold leading-[1.1] tracking-tight",
          light ? "text-white" : "text-ink-950",
          isCenter && "mx-auto max-w-3xl"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed",
            light ? "text-ink-300" : "text-ink-500",
            isCenter ? "mx-auto max-w-2xl" : "max-w-2xl"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
