import { DashboardCard } from '../components/DashboardCard';
import { ExternalLink } from '../components/ExternalLink';
import { SectionHeading } from '../components/SectionHeading';
import { useLanguage } from '../context/useLanguage';
import { localizedContent } from '../data/content';

export function ProjectsSection() {
  const { language } = useLanguage();
  const { projects, externalLinkLabel } = localizedContent[language];
  const featuredProjects = projects.items.filter((project) => project.featured);
  const supportingProjects = projects.items.filter((project) => !project.featured);

  return (
    <section id="projects" className="scroll-mt-36 py-14 xl:scroll-mt-24">
      <div className="page-container">
        <SectionHeading
          eyebrow={projects.eyebrow}
          title={projects.title}
          description={projects.description}
        />

        <div className="flex flex-col gap-5">
          {featuredProjects.map((project, index) => (
            <DashboardCard
              key={project.name}
              id={project.id}
              className="flex scroll-mt-40 flex-col xl:scroll-mt-28"
              revealDelay={index * 90}
            >
              <div className="flex w-full max-w-4xl self-center flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <div className="flex flex-wrap gap-2">
                    <span
                      dir="auto"
                      className="localized-inline rounded-md bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--color-accent-strong)]"
                    >
                      {project.status}
                    </span>
                    {project.role ? (
                      <span
                        dir="auto"
                        className="localized-inline rounded-md bg-[var(--color-chip)] px-3 py-1 text-xs font-semibold text-[var(--color-chip-text)]"
                      >
                        {projects.roleLabel}: {project.role}
                      </span>
                    ) : null}
                  </div>
                  <h3
                    className="mt-4 text-2xl font-semibold text-[var(--color-heading)]"
                  >
                    {project.name}
                  </h3>
                </div>
              </div>
              <p
                className="prose-justify mt-4 w-full max-w-4xl self-center text-sm leading-6 text-[var(--color-muted)]"
              >
                {project.description}
              </p>
              {project.image ? (
                <figure className="mt-6 overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-card-strong)] p-2 shadow-sm">
                  <img
                    src={project.image.src}
                    alt={project.image.alt}
                    loading="lazy"
                    width="1600"
                    height="552"
                    className="h-auto w-full rounded-md object-cover"
                  />
                </figure>
              ) : null}
              <ul
                className="mt-5 w-full max-w-4xl self-center space-y-3 text-sm leading-6 text-[var(--color-muted)]"
              >
                {project.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--color-heading)]"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex w-full max-w-4xl self-center flex-wrap gap-2 pt-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    dir="auto"
                    className="localized-inline rounded-md bg-[var(--color-chip)] px-2.5 py-1 text-xs font-medium text-[var(--color-chip-text)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.links?.length ? (
                <div className="flex w-full max-w-4xl self-center flex-wrap gap-3 pt-5">
                  {project.links.map((link) => (
                    <ExternalLink
                      key={link.href}
                      href={link.href}
                      newTabLabel={externalLinkLabel}
                      className="action-button rounded-lg border px-5 py-3 text-sm font-semibold transition"
                    >
                      <span dir="auto" className="localized-inline">
                        {link.label}
                      </span>
                    </ExternalLink>
                  ))}
                </div>
              ) : null}
            </DashboardCard>
          ))}

          <div className="grid gap-5 lg:grid-cols-2">
            {supportingProjects.map((project, index) => (
              <DashboardCard
                key={project.name}
                id={project.id}
                className="flex h-full scroll-mt-40 flex-col xl:scroll-mt-28"
                revealDelay={index * 90}
              >
                <div className="flex flex-wrap gap-2">
                  <span
                    dir="auto"
                    className="localized-inline rounded-md bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--color-accent-strong)]"
                  >
                    {project.status}
                  </span>
                  {project.role ? (
                    <span
                      dir="auto"
                      className="localized-inline rounded-md bg-[var(--color-chip)] px-3 py-1 text-xs font-semibold text-[var(--color-chip-text)]"
                    >
                      {projects.roleLabel}: {project.role}
                    </span>
                  ) : null}
                </div>
                <h3
                  className="mt-5 text-xl font-semibold text-[var(--color-heading)]"
                >
                  {project.name}
                </h3>
                <p
                  className="mt-4 text-sm leading-6 text-[var(--color-muted)]"
                >
                  {project.description}
                </p>
                {project.image ? (
                  <figure className="mt-6 overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-card-strong)] p-2 shadow-sm">
                    <img
                      src={project.image.src}
                      alt={project.image.alt}
                      loading="lazy"
                      width="1600"
                      height="552"
                      className="h-auto w-full rounded-md object-cover"
                    />
                  </figure>
                ) : null}
                <ul
                  className="mt-5 space-y-3 text-sm leading-6 text-[var(--color-muted)]"
                >
                  {project.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--color-heading)]"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      dir="auto"
                      className="localized-inline rounded-md bg-[var(--color-chip)] px-2.5 py-1 text-xs font-medium text-[var(--color-chip-text)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.links?.length ? (
                  <div className="flex flex-wrap gap-3 pt-5">
                    {project.links.map((link) => (
                      <ExternalLink
                        key={link.href}
                        href={link.href}
                        newTabLabel={externalLinkLabel}
                        className="action-button rounded-lg border px-5 py-3 text-sm font-semibold transition"
                      >
                        <span dir="auto" className="localized-inline">
                          {link.label}
                        </span>
                      </ExternalLink>
                    ))}
                  </div>
                ) : null}
              </DashboardCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
