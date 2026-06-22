import type { Metadata } from "next";
import { portfolioProjects } from "@/data/portfolio";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore FWD Lab's portfolio — websites, web applications, business software, and automation projects delivered for clients in Oman and the Gulf.",
};

// All unique categories for the filter (static page — no JS filter needed for SEO)
const categories = ["All", ...Array.from(new Set(portfolioProjects.map((p) => p.category)))];

export default function WorkPage() {
  return (
    <>
      {/* Page hero */}
      <div className="bg-white pt-28 pb-16 md:pt-36 md:pb-20 border-b border-neutral-100">
        <Container size="md">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-600">
              Our Work
            </p>
            <h1 className="mb-6 text-4xl font-bold text-neutral-900 md:text-5xl">
              Projects that made a difference.
            </h1>
            <p className="text-lg leading-relaxed text-neutral-500">
              A selection of the work we&apos;ve done for clients. Every project here solved a
              real business problem — no portfolio fluff.
            </p>
          </div>
        </Container>
      </div>

      {/* Projects grid */}
      <Section background="light">
        <Container>
          <SectionHeading
            eyebrow="Portfolio"
            title="Selected work"
            description="From enterprise applications to lean automation — built thoughtfully, delivered reliably."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioProjects.map((project) => (
              <article
                key={project.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-soft card-hover"
              >
                {/* Colour placeholder — replace with real <Image> when assets are ready */}
                <div
                  className="h-48 w-full flex items-center justify-center"
                  style={{ backgroundColor: project.imagePlaceholderColor }}
                >
                  <span className="text-4xl opacity-50" aria-hidden>
                    {project.category === "Business Application" ? "🏢" :
                     project.category === "Web Application" ? "⚙️" :
                     project.category === "Business Process Automation" ? "🤖" :
                     project.category === "Website Development" ? "🌐" :
                     project.category === "Low-Code Solution" ? "⚡" : "📊"}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-2 flex-wrap">
                    <Badge variant="neutral">{project.category}</Badge>
                    {project.featured && <Badge variant="brand">Featured</Badge>}
                  </div>

                  <h2 className="mb-1 text-base font-semibold text-neutral-900">
                    {project.title}
                  </h2>
                  <p className="mb-2 text-xs text-neutral-400">{project.client}</p>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-500 flex-1">
                    {project.fullDescription ?? project.shortDescription}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-neutral-50 border border-neutral-100 px-2 py-0.5 text-xs text-neutral-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="white">
        <Container size="md">
          <div className="rounded-3xl bg-brand-50 border border-brand-100 px-8 py-12 text-center">
            <h2 className="mb-3 text-2xl font-bold text-neutral-900">
              Have a project in mind?
            </h2>
            <p className="mb-8 text-neutral-500">
              We&apos;d love to add it to this list. Tell us what you&apos;re trying to build.
            </p>
            <Button href="/contact" size="lg">
              Start a Conversation
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
