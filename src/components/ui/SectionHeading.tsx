import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div className={cn(isCenter ? "text-center" : "text-left", "mb-12 md:mb-16", className)}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-600">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-lg text-neutral-500 leading-relaxed",
            isCenter ? "mx-auto max-w-2xl" : "max-w-2xl"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
