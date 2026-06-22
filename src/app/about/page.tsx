import type { Metadata } from "next";
import { aboutContent, companyValues } from "@/data/about";
import { whyPoints } from "@/data/whyChooseUs";
import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { InlineCTA } from "@/components/ui/InlineCTA";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about FWD Lab — a small, modern IT consultancy based in Muscat, Oman, helping businesses design, build, and automate digital solutions.",
};

export default function AboutPage() {
  const { hero, whatWeDo, whoWeWorkWith } = aboutContent;

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        border={false}
      />

      {/* What we do / Who we work with */}
      <Section background="light">
        <Container size="md">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-start">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-neutral-900">{whatWeDo.title}</h2>
              {whatWeDo.paragraphs.map((p, i) => (
                <p key={i} className="mb-4 text-base leading-relaxed text-neutral-600 last:mb-0">
                  {p}
                </p>
              ))}
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-bold text-neutral-900">{whoWeWorkWith.title}</h2>
              {whoWeWorkWith.paragraphs.map((p, i) => (
                <p key={i} className="mb-4 text-base leading-relaxed text-neutral-600 last:mb-0">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Company values */}
      <Section background="white">
        <Container>
          <SectionHeading
            eyebrow="Our Values"
            title="How we think about our work"
            description="These principles shape every decision we make — from how we scope a project to how we write code."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {companyValues.map((value) => (
              <Card key={value.title}>
                <h3 className="mb-2 text-sm font-semibold text-neutral-900">{value.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-500">{value.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why FWD Lab */}
      <Section background="light">
        <Container>
          <SectionHeading eyebrow="Why FWD Lab" title="What makes us different" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyPoints.map((point) => (
              <div
                key={point.title}
                className="flex gap-4 rounded-2xl border border-neutral-100 bg-white p-6 shadow-soft"
              >
                <div className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-xl">
                  {point.icon}
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-neutral-900">{point.title}</h3>
                  <p className="text-sm leading-relaxed text-neutral-500">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <InlineCTA
        title="Want to work with us?"
        description="Tell us about your project and we'll get back to you within one business day."
        buttonLabel="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}
