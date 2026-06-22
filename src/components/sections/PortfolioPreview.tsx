import { featuredProjects } from "@/data/portfolio";
import { getCategoryIcon } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

export function PortfolioPreview() {
  return (
    <Section background="white">
      <Container>
        <SectionHeading
          eyebrow="Our Work"
          title="Projects we're proud of"
          description="A selection of work that shows how we solve real problems with practical digital solutions."
          align="left"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-hover hover:border-ink-200"
            >
              {/* Colour card — swap with <Image> when real assets are ready */}
              <div
                className="flex h-44 w-full items-center justify-center"
                style={{ backgroundColor: project.imagePlaceholderColor }}
                aria-hidden="true"
              >
                <span className="text-4xl opacity-40 transition-opacity duration-300 group-hover:opacity-60">
                  {getCategoryIcon(project.category)}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <Badge variant="neutral">{project.category}</Badge>
                </div>
                <h3 className="mb-1 text-base font-semibold text-ink-900">{project.title}</h3>
                <p className="mb-2 text-xs font-medium text-ink-400">{project.client}</p>
                <p className="mt-1 flex-1 text-sm leading-relaxed text-ink-500">
                  {project.shortDescription}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/work" variant="secondary" size="lg">
            View All Projects
          </Button>
        </div>
      </Container>
    </Section>
  );
}
