import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

export function CTA() {
  return (
    <div className="bg-white py-8 pb-24">
      <Container size="lg">
        <div className="relative overflow-hidden rounded-3xl bg-hero-gradient px-8 py-20 shadow-2xl md:px-16">
          {/* Grid pattern */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
          {/* Glow */}
          <div aria-hidden="true" className="pointer-events-none absolute -top-20 right-0 h-80 w-80 rounded-full bg-brand-600/25 blur-[80px]" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-10 left-10 h-60 w-60 rounded-full bg-brand-500/15 blur-[60px]" />

          <div className="relative text-center">
            <span className="eyebrow mb-4 block text-brand-400">Ready to start?</span>
            <h2 className="mb-5 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Let&apos;s build something<br className="hidden sm:block" /> great together.
            </h2>
            <p className="mx-auto mb-10 max-w-lg text-base leading-relaxed text-ink-300 md:text-lg">
              Tell us about your project and we&apos;ll get back to you within one business day.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button href="/contact" size="lg" className="bg-white text-brand-700 hover:bg-brand-50 shadow-lg">
                Start a Project
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-sm font-medium text-ink-300 hover:text-white underline underline-offset-4 transition-colors"
              >
                Or email us directly
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
