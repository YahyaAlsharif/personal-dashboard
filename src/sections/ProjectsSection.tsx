import { DashboardCard } from '../components/DashboardCard';
import { SectionHeading } from '../components/SectionHeading';
import { projects } from '../data/projects';

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 py-14">
      <div className="page-container">
        <SectionHeading
          eyebrow="Projects"
          title="Projects"
          description="Selected work that shows software engineering practice, AI direction, and public portfolio development."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <DashboardCard
              key={project.name}
              id={project.id}
              className="flex h-full scroll-mt-28 flex-col"
              revealDelay={(index % 3) * 90}
            >
              <div className="flex flex-wrap gap-2">
                <span className="rounded-md bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--color-accent-strong)]">
                  {project.status}
                </span>
                {project.role ? (
                  <span className="rounded-md bg-[var(--color-chip)] px-3 py-1 text-xs font-semibold text-[var(--color-chip-text)]">
                    {project.role}
                  </span>
                ) : null}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-[var(--color-heading)]">
                {project.name}
              </h3>
              <p className="mt-4 text-sm leading-6 text-[var(--color-muted)]">
                {project.description}
              </p>
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
    </section>
  );
}
