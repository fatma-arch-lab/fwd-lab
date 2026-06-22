import { Hero } from "@/components/sections/Hero";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Process } from "@/components/sections/Process";
import { PortfolioPreview } from "@/components/sections/PortfolioPreview";
import { CTA } from "@/components/sections/CTA";
import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* About blurb */}
      <div className="bg-white py-16 md:py-20 border-b border-neutral-100">
        <Container size="md">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-600 mb-4">
              About FWD Lab
            </p>
            <p className="text-xl leading-relaxed text-neutral-700 md:text-2xl">
              We&apos;re a small, focused team of designers and engineers based in{" "}
              <strong className="text-neutral-900">Muscat, Oman</strong> — helping
              businesses at every stage build and run their digital products.
            </p>
            <p className="mt-4 text-base leading-relaxed text-neutral-500">
              {siteConfig.description}
            </p>
          </div>
        </Container>
      </div>

      <ServicesPreview />
      <WhyChooseUs />
      <Process />
      <PortfolioPreview />
      <CTA />
    </>
  );
}
