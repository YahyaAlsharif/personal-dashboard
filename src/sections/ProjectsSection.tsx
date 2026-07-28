import { DashboardCard } from '../components/DashboardCard';
import { ExternalLink } from '../components/ExternalLink';
import { SectionHeading } from '../components/SectionHeading';
import { useLanguage } from '../context/useLanguage';
import { localizedContent } from '../data/content';

export function ProjectsSection() {
  const { language, isArabic } = useLanguage();
  const { projects, externalLinkLabel } = localizedContent[language];
  const featuredProjects = projects.items.filter((project) => project.featured);
  const supportingProjects = projects.items.filter((project) => !project.featured);
  const textDirection = isArabic ? 'rtl' : 'ltr';
  const localizedClass = isArabic ? 'localized-text' : '';

  return (
    <section id="projects" className="scroll-mt-36 py-14 xl:scroll-mt-24">
      <div className="page-container">
        <SectionHeading
          eyebrow={projects.eyebrow}
          title={projects.title}
          description={projects.description}
          isArabic={isArabic}
        />

        <div className="flex flex-col gap-5">
          {featuredProjects.map((project, index) => (
            <DashboardCard
              key={project.name}
              id={project.id}
              className="flex scroll-mt-40 flex-col xl:scroll-mt-28"
              revealDelay={index * 90}
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <div
                    className={`flex flex-wrap gap-2 ${isArabic ? 'localized-chip-list' : ''}`}
                  >
                    <span
                      dir="auto"
                      className="rounded-md bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--color-accent-strong)]"
                    >
                      {project.status}
                    </span>
                    {project.role ? (
                      <span
                        dir="auto"
                        className="rounded-md bg-[var(--color-chip)] px-3 py-1 text-xs font-semibold text-[var(--color-chip-text)]"
                      >
                        {projects.roleLabel}: {project.role}
                      </span>
                    ) : null}
                  </div>
                  <h3
                    dir={textDirection}
                    className={`mt-4 text-2xl font-semibold text-[var(--color-heading)] ${localizedClass}`}
                  >
                    {project.name}
                  </h3>
                </div>
              </div>
              <p
                dir={textDirection}
                className={`prose-justify mt-4 text-sm leading-6 text-[var(--color-muted)] ${localizedClass}`}
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
                dir={textDirection}
                className={`mt-5 space-y-3 text-sm leading-6 text-[var(--color-muted)] ${localizedClass}`}
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
              <div
                className={`mt-auto flex flex-wrap gap-2 pt-6 ${
                  isArabic ? 'localized-chip-list' : ''
                }`}
              >
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    dir="auto"
                    className={`rounded-md bg-[var(--color-chip)] px-2.5 py-1 text-xs font-medium text-[var(--color-chip-text)] ${localizedClass}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.links?.length ? (
                <div className={`flex flex-wrap gap-3 pt-5 ${isArabic ? 'localized-actions' : ''}`}>
                  {project.links.map((link) => (
                    <ExternalLink
                      key={link.href}
                      href={link.href}
                      newTabLabel={externalLinkLabel}
                      className="action-button rounded-lg border px-5 py-3 text-sm font-semibold transition"
                    >
                      <span dir={isArabic ? 'auto' : undefined} className="localized-inline">
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
                <div
                  className={`flex flex-wrap gap-2 ${isArabic ? 'localized-chip-list' : ''}`}
                >
                  <span
                    dir="auto"
                    className="rounded-md bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--color-accent-strong)]"
                  >
                    {project.status}
                  </span>
                  {project.role ? (
                    <span
                      dir="auto"
                      className="rounded-md bg-[var(--color-chip)] px-3 py-1 text-xs font-semibold text-[var(--color-chip-text)]"
                    >
                      {projects.roleLabel}: {project.role}
                    </span>
                  ) : null}
                </div>
                <h3
                  dir={textDirection}
                  className={`mt-5 text-xl font-semibold text-[var(--color-heading)] ${localizedClass}`}
                >
                  {project.name}
                </h3>
                <p
                  dir={textDirection}
                  className={`mt-4 text-sm leading-6 text-[var(--color-muted)] ${localizedClass}`}
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
                  dir={textDirection}
                  className={`mt-5 space-y-3 text-sm leading-6 text-[var(--color-muted)] ${localizedClass}`}
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
                <div
                  className={`mt-auto flex flex-wrap gap-2 pt-6 ${
                    isArabic ? 'localized-chip-list' : ''
                  }`}
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      dir="auto"
                      className={`rounded-md bg-[var(--color-chip)] px-2.5 py-1 text-xs font-medium text-[var(--color-chip-text)] ${localizedClass}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.links?.length ? (
                  <div className={`flex flex-wrap gap-3 pt-5 ${isArabic ? 'localized-actions' : ''}`}>
                    {project.links.map((link) => (
                      <ExternalLink
                        key={link.href}
                        href={link.href}
                        newTabLabel={externalLinkLabel}
                        className="action-button rounded-lg border px-5 py-3 text-sm font-semibold transition"
                      >
                        <span dir={isArabic ? 'auto' : undefined} className="localized-inline">
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
