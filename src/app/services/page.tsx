import type { Metadata } from "next";
import { services } from "@/data/services";
import { Badge } from "@/components/ui/Badge";
import { PageHero } from "@/components/ui/PageHero";
import { InlineCTA } from "@/components/ui/InlineCTA";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Services",
  description:
    "FWD Lab services: Website Development, Web Apps, Business Applications, Process Automation, Low-Code Solutions, IT Consulting, Digital Transformation, and Support.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything you need to build and run digital products."
        description="A focused set of services covering the full lifecycle of a digital product — from concept through ongoing maintenance."
      />

      <Section background="light">
        <Container>
          <div className="space-y-6">
            {services.map((service, idx) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24 group overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-soft transition-all duration-300 hover:shadow-card hover:border-ink-200"
              >
                <div className="grid gap-8 p-8 md:grid-cols-3 md:p-10">
                  {/* Left: icon + title */}
                  <div className="md:col-span-1">
                    <div className="mb-5 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-2xl">
                        <span role="img" aria-label={service.title}>{service.icon}</span>
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="mb-2 flex items-center gap-2 flex-wrap">
                      <h2 className="text-xl font-bold text-ink-950">{service.title}</h2>
                      {service.tag && <Badge variant="brand">{service.tag}</Badge>}
                    </div>
                    <p className="text-sm leading-relaxed text-ink-500">{service.shortDescription}</p>
                  </div>

                  {/* Right: full description + features */}
                  <div className="md:col-span-2">
                    <p className="mb-6 text-base leading-relaxed text-ink-600">
                      {service.fullDescription}
                    </p>
                    <ul className="grid gap-2.5 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2.5 text-sm text-ink-700">
                          <svg className="h-4 w-4 flex-shrink-0 text-brand-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <InlineCTA
        title="Not sure which service you need?"
        description="Get in touch and we'll help you figure out the right approach for your situation."
        buttonLabel="Talk to Us"
        buttonHref="/contact"
      />
    </>
  );
}
