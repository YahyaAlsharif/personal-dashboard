import { ExternalLink } from '../components/ExternalLink';
import { ProjectFigurePanel } from '../components/ProjectFigurePanel';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { useLanguage } from '../context/useLanguage';
import { localizedContent } from '../data/content';
import type { Project } from '../data/content';

type ProjectCardProps = {
  project: Project;
  roleLabel: string;
  externalLinkLabel: string;
  delay: number;
};

/**
 * Projects carrying visual evidence get a full-width card so the figure is
 * readable at its native scale; the prose splits into two columns above it.
 * Projects without a figure stay compact in a two-up grid.
 */
function ProjectCard({ project, roleLabel, externalLinkLabel, delay }: ProjectCardProps) {
  const isWide = Boolean(project.figure);

  return (
    <Reveal
      as="article"
      id={project.id}
      delay={delay}
      className={`project-card scroll-mt-32 xl:scroll-mt-24 ${isWide ? 'project-card--wide' : ''}`}
    >
      <header className="project-card-header">
        <div className="min-w-0">
          <h3 className="text-xl font-semibold text-[var(--color-heading)] sm:text-2xl">
            {project.name}
          </h3>
          <p dir="auto" className="localized-inline mt-1 text-sm text-[var(--color-muted)]">
            {project.status}
            {project.role ? ` · ${roleLabel}: ${project.role}` : ''}
          </p>
        </div>
        {project.brandMark ? (
          <img
            src={project.brandMark.src}
            alt={project.brandMark.alt}
            width="40"
            height="40"
            className="project-brand-mark"
          />
        ) : null}
      </header>

      <p className="prose-justify project-card-description text-base leading-7 text-[var(--color-muted)]">
        {project.description}
      </p>

      <ul className="project-card-points text-sm leading-7 text-[var(--color-muted)]">
        {project.points.map((point) => (
          <li key={point} className="flex gap-3">
            <span
              aria-hidden="true"
              className="mt-3 h-1 w-1 flex-none rounded-full bg-[var(--color-heading)]"
            />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {project.figure ? <ProjectFigurePanel figure={project.figure} /> : null}

      <div className="project-card-meta">
        <p className="text-xs text-[var(--color-muted)]">{project.tags.join(' · ')}</p>

        {project.links?.length ? (
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
            {project.links.map((link) =>
              link.external ? (
                <ExternalLink
                  key={link.href}
                  href={link.href}
                  newTabLabel={externalLinkLabel}
                  className="quiet-link"
                >
                  <span dir="auto" className="localized-inline">
                    {link.label}
                  </span>
                </ExternalLink>
              ) : (
                <a key={link.href} href={link.href} className="quiet-link">
                  <span dir="auto" className="localized-inline">
                    {link.label}
                  </span>
                </a>
              ),
            )}
          </div>
        ) : null}
      </div>
    </Reveal>
  );
}

export function ProjectsSection() {
  const { language } = useLanguage();
  const { projects, externalLinkLabel } = localizedContent[language];
  const withEvidence = projects.items.filter((project) => project.figure);
  const compact = projects.items.filter((project) => !project.figure);

  return (
    <section id="projects" className="section-band scroll-mt-32 py-16 xl:scroll-mt-24">
      <div className="page-container">
        <SectionHeading title={projects.title} lede={projects.lede} />

        <div className="project-list">
          {withEvidence.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              roleLabel={projects.roleLabel}
              externalLinkLabel={externalLinkLabel}
              delay={index * 90}
            />
          ))}
        </div>

        <div className="project-list project-list--split">
          {compact.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              roleLabel={projects.roleLabel}
              externalLinkLabel={externalLinkLabel}
              delay={index * 80}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
