import { DashboardCard } from '../components/DashboardCard';
import { SectionHeading } from '../components/SectionHeading';
import { useLanguage } from '../context/useLanguage';
import { localizedContent } from '../data/content';

export function ProjectsSection() {
  const { language, isArabic } = useLanguage();
  const { projects } = localizedContent[language];
  const featuredProjects = projects.items.filter((project) => project.featured);
  const supportingProjects = projects.items.filter((project) => !project.featured);
  const textDirection = isArabic ? 'rtl' : 'ltr';
  const localizedClass = isArabic ? 'localized-text' : '';

  return (
    <section id="projects" className="scroll-mt-24 py-14">
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
              className="flex scroll-mt-28 flex-col"
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
              {project.details?.map((detail) => (
                <p
                  key={detail}
                  dir={textDirection}
                  className={`prose-justify mt-4 text-sm leading-6 text-[var(--color-muted)] ${localizedClass}`}
                >
                  {detail}
                </p>
              ))}
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
            </DashboardCard>
          ))}

          <div className="grid gap-5 lg:grid-cols-2">
            {supportingProjects.map((project, index) => (
              <DashboardCard
                key={project.name}
                id={project.id}
                className="flex h-full scroll-mt-28 flex-col"
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
                {project.details?.map((detail) => (
                  <p
                    key={detail}
                    dir={textDirection}
                    className={`mt-4 text-sm leading-6 text-[var(--color-muted)] ${localizedClass}`}
                  >
                    {detail}
                  </p>
                ))}
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
              </DashboardCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
