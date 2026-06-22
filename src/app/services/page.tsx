import type { Metadata } from "next";
import { services } from "@/data/services";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore FWD Lab's services: Website Development, Web Applications, Business Applications, Process Automation, Low-Code Solutions, IT Consulting, and Support.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <div className="bg-white pt-28 pb-16 md:pt-36 md:pb-20 border-b border-neutral-100">
        <Container size="md">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-600">
              Services
            </p>
            <h1 className="mb-6 text-4xl font-bold text-neutral-900 md:text-5xl">
              Everything you need to build and run digital products.
            </h1>
            <p className="text-lg leading-relaxed text-neutral-500">
              We offer a focused set of services designed to cover the full lifecycle of a
              digital product — from initial concept through ongoing maintenance.
            </p>
          </div>
        </Container>
      </div>

      {/* Services list */}
      <Section background="light">
        <Container>
          <div className="space-y-8">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24 group rounded-2xl bg-white border border-neutral-100 shadow-soft p-8 md:p-10 transition-shadow duration-300 hover:shadow-card"
              >
                <div className="grid gap-8 md:grid-cols-3">
                  {/* Left: icon + title + badge */}
                  <div className="md:col-span-1">
                    <div className="flex items-start gap-4 mb-4">
                      <span className="text-3xl" role="img" aria-label={service.title}>
                        {service.icon}
                      </span>
                      {service.tag && <Badge>{service.tag}</Badge>}
                    </div>
                    <h2 className="text-xl font-bold text-neutral-900 mb-3">
                      {service.title}
                    </h2>
                    <p className="text-sm leading-relaxed text-neutral-500">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Right: full description + features */}
                  <div className="md:col-span-2">
                    <p className="mb-6 text-base leading-relaxed text-neutral-600">
                      {service.fullDescription}
                    </p>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-neutral-600">
                          <svg className="h-4 w-4 flex-shrink-0 text-brand-500" fill="currentColor" viewBox="0 0 20 20">
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

      {/* CTA */}
      <Section background="white">
        <Container size="md">
          <div className="rounded-3xl bg-brand-50 border border-brand-100 px-8 py-12 text-center">
            <h2 className="mb-3 text-2xl font-bold text-neutral-900">
              Not sure which service you need?
            </h2>
            <p className="mb-8 text-neutral-500">
              Get in touch and we&apos;ll help you figure out the right approach for your situation.
            </p>
            <Button href="/contact" size="lg">
              Talk to Us
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
