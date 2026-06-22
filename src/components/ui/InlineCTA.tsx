import { Button } from "@/components/ui/Button";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

interface InlineCTAProps {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
}

/**
 * A soft-blue inline call-to-action box used at the bottom of
 * the About, Services, and Work pages.
 */
export function InlineCTA({ title, description, buttonLabel, buttonHref }: InlineCTAProps) {
  return (
    <Section background="white">
      <Container size="md">
        <div className="rounded-3xl bg-brand-50 border border-brand-100 px-8 py-12 text-center">
          <h2 className="mb-3 text-2xl font-bold text-neutral-900">{title}</h2>
          <p className="mb-8 text-neutral-500">{description}</p>
          <Button href={buttonHref} size="lg">
            {buttonLabel}
          </Button>
        </div>
      </Container>
    </Section>
  );
}
