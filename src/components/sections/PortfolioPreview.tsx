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
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-soft card-hover"
            >
              {/* Colour placeholder — swap for <Image> when real assets exist */}
              <div
                className="h-44 w-full flex items-center justify-center"
                style={{ backgroundColor: project.imagePlaceholderColor }}
                aria-hidden="true"
              >
                <span className="text-3xl opacity-60">
                  {getCategoryIcon(project.category)}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <Badge variant="neutral">{project.category}</Badge>
                </div>
                <h3 className="mb-1 text-base font-semibold text-neutral-900">
                  {project.title}
                </h3>
                <p className="mb-1 text-xs text-neutral-400">{project.client}</p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-500">
                  {project.shortDescription}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-neutral-100 bg-neutral-50 px-2 py-0.5 text-xs text-neutral-500"
                    >
                      {tag}
                    </span>
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
