import { processSteps } from "@/data/process";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

export function Process() {
  return (
    <Section background="dark">
      <Container>
        <SectionHeading
          eyebrow="How We Work"
          title="A clear process from start to finish"
          description="No mystery. No surprises. A straightforward process that keeps you in control at every stage."
          light
          align="left"
        />

        <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Connecting line */}
          <div
            aria-hidden="true"
            className="absolute top-7 left-0 hidden h-px w-full lg:block"
            style={{ background: "linear-gradient(90deg, transparent, rgba(0,71,245,0.3) 20%, rgba(0,71,245,0.3) 80%, transparent)" }}
          />

          {processSteps.map((step) => (
            <div key={step.step} className="relative flex flex-col">
              {/* Number circle */}
              <div className="relative z-10 mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-brand-700/50 bg-ink-900 shadow-[0_0_0_4px_rgba(0,71,245,0.08)]">
                <span className="text-sm font-bold text-brand-400">{step.step}</span>
              </div>

              <h3 className="mb-2 text-sm font-semibold text-white">{step.title}</h3>
              <p className="text-sm leading-relaxed text-ink-400">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
