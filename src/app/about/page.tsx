import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { whyPoints } from "@/data/whyChooseUs";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about FWD Lab — a small, modern IT consultancy based in Muscat, Oman, helping businesses design, build, and automate digital solutions.",
};

const values = [
  {
    title: "Clarity over complexity",
    description:
      "We favour simple, maintainable solutions over clever ones. Good technology should make life easier, not harder.",
  },
  {
    title: "Honest communication",
    description:
      "We say what we think, flag risks early, and tell you when something won't work — even if it's not what you want to hear.",
  },
  {
    title: "Craft and quality",
    description:
      "We take pride in writing clean code and designing intuitive interfaces. Work we're proud to put our name on.",
  },
  {
    title: "Results, not output",
    description:
      "We measure success by the impact our work has on your business — not the number of features delivered.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-white pt-28 pb-16 md:pt-36 md:pb-20">
        <Container size="md">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-600">
              About Us
            </p>
            <h1 className="mb-6 text-4xl font-bold text-neutral-900 md:text-5xl">
              We help businesses move forward with technology.
            </h1>
            <p className="text-lg leading-relaxed text-neutral-500">
              FWD Lab is a boutique digital consultancy based in Muscat, Oman. We work with
              businesses across sectors to design, build, and automate their digital products
              and processes — with a focus on outcomes that actually matter.
            </p>
          </div>
        </Container>
      </div>

      {/* Story */}
      <Section background="light">
        <Container size="md">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-start">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-neutral-900">
                What we do
              </h2>
              <p className="mb-4 text-base leading-relaxed text-neutral-600">
                We build websites, web applications, business software, and automated
                workflows. We also help organisations navigate technology decisions — from
                choosing the right tools to planning a digital transformation.
              </p>
              <p className="text-base leading-relaxed text-neutral-600">
                Our strength is in combining clear thinking with strong technical
                execution. We don&apos;t just write code — we help you understand your
                options, plan properly, and build the right thing.
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-bold text-neutral-900">
                Who we work with
              </h2>
              <p className="mb-4 text-base leading-relaxed text-neutral-600">
                We work best with growing businesses and established organisations that
                need a reliable technical partner — not just a vendor. Our clients range
                from SMEs launching their first digital product to larger organisations
                streamlining internal operations.
              </p>
              <p className="text-base leading-relaxed text-neutral-600">
                We&apos;re based in Oman and serve clients across the Gulf and beyond.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section background="white">
        <Container>
          <SectionHeading
            eyebrow="Our Values"
            title="How we think about our work"
            description="These principles shape every decision we make — from how we scope a project to how we write code."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <Card key={v.title}>
                <h3 className="mb-2 text-sm font-semibold text-neutral-900">{v.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-500">{v.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why us points */}
      <Section background="light">
        <Container>
          <SectionHeading
            eyebrow="Why FWD Lab"
            title="What makes us different"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyPoints.map((point) => (
              <div key={point.title} className="flex gap-4 rounded-2xl p-6 bg-white border border-neutral-100 shadow-soft">
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

      {/* CTA */}
      <Section background="white">
        <Container size="md">
          <div className="rounded-3xl bg-brand-50 border border-brand-100 px-8 py-12 text-center">
            <h2 className="mb-3 text-2xl font-bold text-neutral-900">
              Want to work with us?
            </h2>
            <p className="mb-8 text-neutral-500">
              Tell us about your project and we&apos;ll get back to you within one business day.
            </p>
            <Button href="/contact" size="lg">
              Get in Touch
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
