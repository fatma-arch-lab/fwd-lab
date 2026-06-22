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
    "Explore FWD Lab's services: Website Development, Web Applications, Business Applications, Process Automation, Low-Code Solutions, IT Consulting, and Support.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything you need to build and run digital products."
        description="We offer a focused set of services designed to cover the full lifecycle of a digital product — from initial concept through ongoing maintenance."
      />

      <Section background="light">
        <Container>
          <div className="space-y-8">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24 rounded-2xl border border-neutral-100 bg-white p-8 shadow-soft transition-shadow duration-300 hover:shadow-card md:p-10"
              >
                <div className="grid gap-8 md:grid-cols-3">
                  {/* Icon, title, short description */}
                  <div className="md:col-span-1">
                    <div className="mb-4 flex items-start gap-4">
                      <span className="text-3xl" role="img" aria-label={service.title}>
                        {service.icon}
                      </span>
                      {service.tag && <Badge>{service.tag}</Badge>}
                    </div>
                    <h2 className="mb-3 text-xl font-bold text-neutral-900">{service.title}</h2>
                    <p className="text-sm leading-relaxed text-neutral-500">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Full description + feature list */}
                  <div className="md:col-span-2">
                    <p className="mb-6 text-base leading-relaxed text-neutral-600">
                      {service.fullDescription}
                    </p>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-neutral-600">
                          <svg
                            className="h-4 w-4 flex-shrink-0 text-brand-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
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
