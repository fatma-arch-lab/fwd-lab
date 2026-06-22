import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow:     string;
  title:       string;
  description: string;
  border?:     boolean;
}

export function PageHero({ eyebrow, title, description, border = true }: PageHeroProps) {
  return (
    <div className={cn(
      "bg-white pt-28 pb-16 md:pt-36 md:pb-20",
      border && "border-b border-ink-100"
    )}>
      <Container size="md">
        <div className="max-w-2xl">
          <span className="eyebrow mb-5 block">{eyebrow}</span>
          <h1 className="mb-5 text-h1 font-bold text-ink-950 leading-[1.1]">
            {title}
          </h1>
          <p className="text-lg leading-relaxed text-ink-500">
            {description}
          </p>
        </div>
      </Container>
    </div>
  );
}
