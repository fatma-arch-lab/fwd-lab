import Link from "next/link";
import { services } from "@/data/services";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

const previewServices = services.slice(0, 6);

export function ServicesPreview() {
  return (
    <Section background="white">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Services built for real business needs"
          description="From websites to full business applications, we deliver practical digital solutions — not over-engineered ones."
          align="left"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {previewServices.map((service) => (
            <Link
              key={service.id}
              href={`/services#${service.id}`}
              className="group block focus:outline-none"
            >
              <div className="relative h-full overflow-hidden rounded-2xl border border-ink-100 bg-white p-7 shadow-soft transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-hover group-hover:border-brand-100 group-focus-visible:ring-2 group-focus-visible:ring-brand-500 group-focus-visible:ring-offset-2">
                {/* Top accent bar */}
                <div className="absolute inset-x-0 top-0 h-0.5 bg-brand-gradient opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />

                <div className="mb-5 flex items-start justify-between gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-2xl">
                    {service.icon}
                  </div>
                  {service.tag && <Badge variant="brand">{service.tag}</Badge>}
                </div>

                <h3 className="mb-2 text-base font-semibold text-ink-900">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-500">
                  {service.shortDescription}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 transition-all duration-200 group-hover:gap-2.5">
                  Learn more
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-ink-100 pt-8">
          <p className="text-sm text-ink-500">
            {services.length} services available for your business
          </p>
          <Button href="/services" variant="secondary" size="md">
            View All Services
          </Button>
        </div>
      </Container>
    </Section>
  );
}
