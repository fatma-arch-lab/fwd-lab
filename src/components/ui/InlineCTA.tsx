import { Button } from "@/components/ui/Button";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

interface InlineCTAProps {
  title:       string;
  description: string;
  buttonLabel: string;
  buttonHref:  string;
}

export function InlineCTA({ title, description, buttonLabel, buttonHref }: InlineCTAProps) {
  return (
    <Section background="white">
      <Container size="md">
        <div className="rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 to-ink-50 px-8 py-14 text-center md:px-16">
          <h2 className="mb-3 text-2xl font-bold text-ink-950 md:text-3xl">{title}</h2>
          <p className="mx-auto mb-8 max-w-md text-ink-500">{description}</p>
          <Button href={buttonHref} size="lg">{buttonLabel}</Button>
        </div>
      </Container>
    </Section>
  );
}
