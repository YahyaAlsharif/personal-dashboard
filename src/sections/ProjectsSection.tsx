import { ExternalLink } from '../components/ExternalLink';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { useLanguage } from '../context/useLanguage';
import { localizedContent } from '../data/content';
import type { Project } from '../data/content';

type ProjectBlockProps = {
  project: Project;
  roleLabel: string;
  externalLinkLabel: string;
  delay: number;
};

function ProjectBlock({ project, roleLabel, externalLinkLabel, delay }: ProjectBlockProps) {
  return (
    <Reveal
      as="article"
      id={project.id}
      delay={delay}
      className="project-block scroll-mt-32 xl:scroll-mt-24"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-xl font-semibold text-[var(--color-heading)] sm:text-2xl">
          {project.name}
        </h3>
        <p dir="auto" className="localized-inline text-sm text-[var(--color-muted)]">
          {project.status}
          {project.role ? ` · ${roleLabel}: ${project.role}` : ''}
        </p>
      </div>

      <p className="prose-justify mt-4 max-w-3xl text-base leading-7 text-[var(--color-muted)]">
        {project.description}
      </p>

      {project.image ? (
        <figure className="mt-6 overflow-hidden rounded-xl border border-[var(--color-border)]">
          <img
            src={project.image.src}
            alt={project.image.alt}
            loading="lazy"
            width="1600"
            height="552"
            className="h-auto w-full object-cover"
          />
        </figure>
      ) : null}

      <ul className="mt-5 max-w-3xl space-y-3 text-sm leading-7 text-[var(--color-muted)]">
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

      <p className="mt-5 text-xs text-[var(--color-muted)]">{project.tags.join(' · ')}</p>

      {project.links?.length ? (
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
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
    </Reveal>
  );
}

export function ProjectsSection() {
  const { language } = useLanguage();
  const { projects, externalLinkLabel } = localizedContent[language];
  const featured = projects.items.filter((project) => project.featured);
  const supporting = projects.items.filter((project) => !project.featured);

  return (
    <section id="projects" className="section-band scroll-mt-32 py-16 xl:scroll-mt-24">
      <div className="page-container">
        <SectionHeading title={projects.title} lede={projects.lede} />

        <div className="project-list">
          {featured.map((project, index) => (
            <ProjectBlock
              key={project.name}
              project={project}
              roleLabel={projects.roleLabel}
              externalLinkLabel={externalLinkLabel}
              delay={index * 90}
            />
          ))}
        </div>

        <div className="project-list project-list--split">
          {supporting.map((project, index) => (
            <ProjectBlock
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
