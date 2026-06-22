import { whyPoints } from "@/data/whyChooseUs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

export function WhyChooseUs() {
  return (
    <Section background="light">
      <Container>
        <SectionHeading
          eyebrow="Why FWD Lab"
          title="A different kind of technology partner"
          description="We combine technical depth with clear thinking and honest communication — the way good work should be done."
          align="left"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyPoints.map((point, idx) => (
            <div
              key={point.title}
              className="group relative rounded-2xl border border-ink-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card hover:border-ink-200"
            >
              {/* Step number */}
              <span className="absolute right-6 top-6 text-4xl font-black text-ink-50 select-none transition-colors group-hover:text-brand-50">
                {String(idx + 1).padStart(2, "0")}
              </span>

              <div className="relative">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-2xl transition-colors group-hover:bg-brand-100">
                  {point.icon}
                </div>
                <h3 className="mb-2 text-base font-semibold text-ink-900">{point.title}</h3>
                <p className="text-sm leading-relaxed text-ink-500">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
