import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  /** Show a bottom border — used on pages where the next section is coloured */
  border?: boolean;
}

/**
 * Reusable top-of-page banner used on About, Services, Work, and Contact.
 * All text comes from the page's own data or is passed as props.
 */
export function PageHero({ eyebrow, title, description, border = true }: PageHeroProps) {
  return (
    <div
      className={cn(
        "bg-white pt-28 pb-16 md:pt-36 md:pb-20",
        border && "border-b border-neutral-100"
      )}
    >
      <Container size="md">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-600">
            {eyebrow}
          </p>
          <h1 className="mb-6 text-4xl font-bold text-neutral-900 md:text-5xl">
            {title}
          </h1>
          <p className="text-lg leading-relaxed text-neutral-500">
            {description}
          </p>
        </div>
      </Container>
    </div>
  );
}
