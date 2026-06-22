import { whyPoints } from "@/data/whyChooseUs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

export function WhyChooseUs() {
  return (
    <Section background="white">
      <Container>
        <SectionHeading
          eyebrow="Why FWD Lab"
          title="A different kind of technology partner"
          description="We combine technical depth with clear thinking and honest communication — the way good work should be done."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyPoints.map((point) => (
            <div
              key={point.title}
              className="group flex gap-4 rounded-2xl p-6 transition-colors duration-200 hover:bg-neutral-50"
            >
              <div className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-xl">
                {point.icon}
              </div>
              <div>
                <h3 className="mb-1.5 text-sm font-semibold text-neutral-900">
                  {point.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-500">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
