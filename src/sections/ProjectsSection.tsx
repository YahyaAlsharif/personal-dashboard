import { LinkRow } from '../components/LinkRow';
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
 * Projects with visual evidence use a wide card: the summary sits beside the
 * detailed points and the figure spans the full width underneath, where charts
 * stay readable. Projects without a figure stay compact in a two-up row.
 */
function ProjectCard({ project, roleLabel, externalLinkLabel, delay }: ProjectCardProps) {
  const isWide = Boolean(project.figure);
  const classNames = [
    'project-card',
    isWide ? 'project-card--wide' : '',
    project.featured ? 'project-card--featured' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Reveal as="article" id={project.id} delay={delay} className={classNames}>
      <header className="project-card-header">
        {project.brandMark ? (
          <img
            src={project.brandMark.src}
            alt={project.brandMark.alt}
            width="40"
            height="40"
            className="project-brand-mark"
          />
        ) : null}
        <div className="min-w-0">
          <h3 className="project-card-title type-title">{project.name}</h3>
          <p dir="auto" className="localized-inline project-card-meta type-meta">
            {project.status}
            {project.role ? ` · ${roleLabel}: ${project.role}` : ''}
          </p>
        </div>
      </header>

      <div className="project-card-body">
        <div className="project-card-summary">
          <p className="project-card-description type-lead">{project.description}</p>
          {isWide ? (
            <ProjectCardLinks project={project} externalLinkLabel={externalLinkLabel} />
          ) : null}
        </div>

        <ul className="point-list type-prose">
          {project.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        {isWide ? null : (
          <ProjectCardLinks project={project} externalLinkLabel={externalLinkLabel} />
        )}
      </div>

      {project.figure ? <ProjectFigurePanel figure={project.figure} /> : null}
    </Reveal>
  );
}

type ProjectCardLinksProps = {
  project: Project;
  externalLinkLabel: string;
};

function ProjectCardLinks({ project, externalLinkLabel }: ProjectCardLinksProps) {
  return (
    <div className="grid gap-3.5">
      <ul className="inline-list type-meta">
        {project.tags.map((tag) => (
          <li key={tag}>
            <bdi>{tag}</bdi>
          </li>
        ))}
      </ul>
      {project.links?.length ? (
        <LinkRow links={project.links} newTabLabel={externalLinkLabel} />
      ) : null}
    </div>
  );
}

export function ProjectsSection() {
  const { language } = useLanguage();
  const { projects, externalLinkLabel } = localizedContent[language];
  const withEvidence = projects.items.filter((project) => project.figure);
  const compact = projects.items.filter((project) => !project.figure);

  return (
    <section id="projects" className="section section-band">
      <div className="page-container">
        <SectionHeading title={projects.title} lede={projects.lede} />

        <div className="project-stack">
          {withEvidence.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              roleLabel={projects.roleLabel}
              externalLinkLabel={externalLinkLabel}
              delay={index * 60}
            />
          ))}

          <div className="project-pair">
            {compact.map((project, index) => (
              <ProjectCard
                key={project.name}
                project={project}
                roleLabel={projects.roleLabel}
                externalLinkLabel={externalLinkLabel}
                delay={index * 60}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
