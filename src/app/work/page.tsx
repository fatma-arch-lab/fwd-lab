import type { Metadata } from "next";
import { portfolioProjects } from "@/data/portfolio";
import { getCategoryIcon } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { PageHero } from "@/components/ui/PageHero";
import { InlineCTA } from "@/components/ui/InlineCTA";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Work",
  description:
    "FWD Lab portfolio — websites, web applications, business software, and automation projects delivered for clients in Oman and the Gulf.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Projects that made a difference."
        description="A selection of work done for real clients solving real problems. No filler — every project here had a measurable outcome."
      />

      <Section background="light">
        <Container>
          <SectionHeading
            eyebrow="Portfolio"
            title="Selected work"
            description="From enterprise applications to lean automation — built thoughtfully, delivered reliably."
            align="left"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioProjects.map((project) => (
              <article
                key={project.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-hover hover:border-ink-200"
              >
                {/* Placeholder — swap with <Image> when real assets are ready */}
                <div
                  className="flex h-48 w-full items-center justify-center"
                  style={{ backgroundColor: project.imagePlaceholderColor }}
                  aria-hidden="true"
                >
                  <span className="text-4xl opacity-40 transition-opacity group-hover:opacity-60">
                    {getCategoryIcon(project.category)}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <Badge variant="neutral">{project.category}</Badge>
                    {project.featured && <Badge variant="brand">Featured</Badge>}
                  </div>
                  <h2 className="mb-1 text-base font-semibold text-ink-900">{project.title}</h2>
                  <p className="mb-2 text-xs font-medium text-ink-400">{project.client}</p>
                  <p className="mt-1 flex-1 text-sm leading-relaxed text-ink-500">
                    {project.fullDescription ?? project.shortDescription}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <InlineCTA
        title="Have a project in mind?"
        description="We'd love to add it to this list. Tell us what you're trying to build."
        buttonLabel="Start a Conversation"
        buttonHref="/contact"
      />
    </>
  );
}
