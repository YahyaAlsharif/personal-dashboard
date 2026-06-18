import { DashboardCard } from '../components/DashboardCard';
import { SectionHeading } from '../components/SectionHeading';
import { projects } from '../data/projects';

export function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured);
  const supportingProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="scroll-mt-24 py-14">
      <div className="page-container">
        <SectionHeading
          eyebrow="Projects"
          title="Projects"
          description="Selected work that shows software engineering practice, AI direction, and public portfolio development."
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
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-md bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--color-accent-strong)]">
                      {project.status}
                    </span>
                    {project.role ? (
                      <span className="rounded-md bg-[var(--color-chip)] px-3 py-1 text-xs font-semibold text-[var(--color-chip-text)]">
                        Role: {project.role}
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-[var(--color-heading)]">
                    {project.name}
                  </h3>
                </div>
                {project.logoSrc ? (
                  <div className="grid h-24 w-24 flex-none place-items-center rounded-lg border border-[var(--color-border)] bg-white p-3 shadow-sm shadow-black/5 sm:h-28 sm:w-28">
                    <img
                      src={project.logoSrc}
                      alt={project.logoAlt}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-6 text-[var(--color-muted)]">
                {project.description}
              </p>
              {project.details?.map((detail) => (
                <p key={detail} className="mt-4 text-sm leading-6 text-[var(--color-muted)]">
                  {detail}
                </p>
              ))}
              <ul className="mt-5 space-y-3 text-sm leading-6 text-[var(--color-muted)]">
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
                    className="rounded-md bg-[var(--color-chip)] px-2.5 py-1 text-xs font-medium text-[var(--color-chip-text)]"
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
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-md bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--color-accent-strong)]">
                    {project.status}
                  </span>
                  {project.role ? (
                    <span className="rounded-md bg-[var(--color-chip)] px-3 py-1 text-xs font-semibold text-[var(--color-chip-text)]">
                      Role: {project.role}
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-[var(--color-heading)]">
                  {project.name}
                </h3>
                <p className="mt-4 text-sm leading-6 text-[var(--color-muted)]">
                  {project.description}
                </p>
                {project.details?.map((detail) => (
                  <p key={detail} className="mt-4 text-sm leading-6 text-[var(--color-muted)]">
                    {detail}
                  </p>
                ))}
                <ul className="mt-5 space-y-3 text-sm leading-6 text-[var(--color-muted)]">
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
                      className="rounded-md bg-[var(--color-chip)] px-2.5 py-1 text-xs font-medium text-[var(--color-chip-text)]"
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
