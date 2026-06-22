import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

/**
 * Splits the headline around the configured highlight phrase and wraps
 * the highlight in a gradient span. Falls back to plain text if the
 * highlight is not found in the headline string.
 */
function HighlightedHeadline({ headline, highlight }: { headline: string; highlight: string }) {
  const idx = headline.indexOf(highlight);
  if (idx === -1) return <>{headline}</>;

  return (
    <>
      {headline.slice(0, idx)}
      <span className="gradient-text">{highlight}</span>
      {headline.slice(idx + highlight.length)}
    </>
  );
}

export function Hero() {
  const { eyebrow, headline, headlineHighlight, subheadline, primaryCta, secondaryCta, trustItems } =
    siteConfig.hero;

  return (
    <div className="relative overflow-hidden bg-white pt-24 pb-20 md:pt-32 md:pb-28">
      {/* Decorative background blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-brand-100/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -left-16 h-[400px] w-[400px] rounded-full bg-brand-50/60 blur-3xl"
      />

      <Container size="lg">
        <div className="relative mx-auto max-w-3xl text-center">
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true" />
            {eyebrow}
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-5xl md:text-6xl">
            <HighlightedHeadline headline={headline} highlight={headlineHighlight} />
          </h1>

          {/* Subheadline */}
          <p className="mb-10 text-lg leading-relaxed text-neutral-500 sm:text-xl">
            {subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href={primaryCta.href} size="lg">
              {primaryCta.label}
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
            <Button href={secondaryCta.href} variant="secondary" size="lg">
              {secondaryCta.label}
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-neutral-400">
            {trustItems.map((item) => (
              <span key={item} className="flex items-center gap-2">
                <svg className="h-4 w-4 text-brand-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
