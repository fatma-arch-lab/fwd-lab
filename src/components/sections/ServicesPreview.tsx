import Link from "next/link";
import { services } from "@/data/services";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

// Show only 6 services on homepage
const previewServices = services.slice(0, 6);

export function ServicesPreview() {
  return (
    <Section background="light">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Services built for real business needs"
          description="From websites to full business applications, we deliver practical digital solutions — not over-engineered ones."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {previewServices.map((service) => (
            <Link key={service.id} href={`/services#${service.id}`} className="group block focus:outline-none">
              <Card className="h-full group-hover:-translate-y-1 group-hover:shadow-hover group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-brand-500 transition-all duration-300">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <span className="text-3xl" role="img" aria-label={service.title}>
                    {service.icon}
                  </span>
                  {service.tag && <Badge>{service.tag}</Badge>}
                </div>
                <h3 className="mb-2 text-base font-semibold text-neutral-900">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-500">
                  {service.shortDescription}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-brand-600 group-hover:gap-2 transition-all">
                  Learn more
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/services" variant="secondary" size="lg">
            View All Services
          </Button>
        </div>
      </Container>
    </Section>
  );
}
