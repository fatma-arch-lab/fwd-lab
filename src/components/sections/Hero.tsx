import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

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
    <div className="relative min-h-[90vh] overflow-hidden bg-hero-gradient flex items-center">
      {/* Grid pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow orbs */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/3 h-[600px] w-[600px] rounded-full bg-brand-600/20 blur-[120px]" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-brand-500/10 blur-[100px]" />

      <Container size="lg">
        <div className="relative py-32 md:py-40">
          {/* Eyebrow */}
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400" aria-hidden="true" />
            <span className="text-sm font-medium text-ink-300">{eyebrow}</span>
          </div>

          {/* Headline */}
          <h1 className="mb-7 max-w-4xl text-[2.8rem] font-bold leading-[1.08] tracking-[-0.03em] text-white sm:text-[3.5rem] md:text-[4.25rem]">
            <HighlightedHeadline headline={headline} highlight={headlineHighlight} />
          </h1>

          {/* Subheadline */}
          <p className="mb-10 max-w-xl text-lg leading-relaxed text-ink-300 sm:text-xl">
            {subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href={primaryCta.href} size="lg">
              {primaryCta.label}
              <ArrowIcon />
            </Button>
            <Button href={secondaryCta.href} size="lg" variant="dark">
              {secondaryCta.label}
            </Button>
          </div>

          {/* Trust strip */}
          <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3">
            {trustItems.map((item) => (
              <span key={item} className="flex items-center gap-2 text-sm text-ink-400">
                <CheckIcon />
                {item}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="h-4 w-4 text-brand-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}
