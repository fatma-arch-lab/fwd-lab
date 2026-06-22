import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

export function CTA() {
  return (
    <div className="bg-neutral-950 py-24">
      <Container size="md">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 px-8 py-16 text-center shadow-xl md:px-16">
          {/* Decorative blobs */}
          <div aria-hidden className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute -bottom-8 -left-8 h-48 w-48 rounded-full bg-white/5 blur-2xl" />

          <div className="relative">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-200">
              Ready to start?
            </p>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Let&apos;s build something great together.
            </h2>
            <p className="mb-10 text-base leading-relaxed text-brand-100 md:text-lg">
              Tell us about your project and we&apos;ll get back to you within one business day.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                href="/contact"
                size="lg"
                className="bg-white text-brand-700 hover:bg-brand-50 hover:text-brand-800 shadow-md"
              >
                Start a Project
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-sm font-medium text-brand-100 hover:text-white underline underline-offset-4 transition-colors"
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
