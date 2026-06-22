import { Hero }             from "@/components/sections/Hero";
import { ServicesPreview }  from "@/components/sections/ServicesPreview";
import { WhyChooseUs }      from "@/components/sections/WhyChooseUs";
import { Process }          from "@/components/sections/Process";
import { PortfolioPreview } from "@/components/sections/PortfolioPreview";
import { CTA }              from "@/components/sections/CTA";
import { Container }        from "@/components/layout/Container";
import { siteConfig }       from "@/data/site";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* About intro strip */}
      <div className="border-b border-ink-100 bg-white py-16 md:py-20">
        <Container size="md">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow mb-5 block">About FWD Lab</span>
            <p className="text-2xl font-semibold leading-snug tracking-tight text-ink-900 md:text-3xl">
              A small, focused team helping businesses in{" "}
              <span className="text-brand-600">Muscat, Oman</span> build and run their digital products.
            </p>
            <p className="mt-5 text-base leading-relaxed text-ink-500">
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
