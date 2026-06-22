import { processSteps } from "@/data/process";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

export function Process() {
  return (
    <Section background="light">
      <Container>
        <SectionHeading
          eyebrow="How We Work"
          title="A clear process from start to finish"
          description="No mystery. No surprises. Just a straightforward process that keeps you in control at every stage."
        />

        <div className="relative">
          {/* Connecting line on desktop */}
          <div
            aria-hidden
            className="absolute top-8 left-0 hidden h-0.5 w-full bg-gradient-to-r from-transparent via-brand-100 to-transparent lg:block"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, idx) => (
              <div key={step.step} className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
                {/* Step number circle */}
                <div className="relative z-10 mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-brand-100 bg-white shadow-soft">
                  <span className="text-sm font-bold text-brand-600">{step.step}</span>
                </div>

                <h3 className="mb-2 text-sm font-semibold text-neutral-900">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
