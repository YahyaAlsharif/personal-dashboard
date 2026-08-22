import { ExternalLink } from '../components/ExternalLink';
import { ProjectFigurePanel } from '../components/ProjectFigurePanel';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { useLanguage } from '../context/useLanguage';
import { localizedContent } from '../data/content';

export function ExperienceSection() {
  const { language } = useLanguage();
  const { experience, externalLinkLabel } = localizedContent[language];

  return (
    <section id="experience" className="scroll-mt-32 py-16 xl:scroll-mt-24">
      <div className="page-container">
        <SectionHeading title={experience.title} lede={experience.lede} />

        <div className="timeline">
          {experience.items.map((item, index) => (
            <Reveal as="article" key={item.role} delay={index * 90} className="timeline-item">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-xl font-semibold text-[var(--color-heading)] sm:text-2xl">
                  {item.role}
                  <span className="text-[var(--color-muted)]">, {item.organization}</span>
                </h3>
                <p dir="auto" className="localized-inline text-sm font-medium text-[var(--color-muted)]">
                  {item.period}
                </p>
              </div>

              {item.focus ? (
                <p className="mt-2 text-base text-[var(--color-body)]">{item.focus}</p>
              ) : null}
              {item.location ? (
                <p className="mt-1 text-sm text-[var(--color-muted)]">{item.location}</p>
              ) : null}

              <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-3 h-1 w-1 flex-none rounded-full bg-[var(--color-heading)]"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {item.evidence ? (
                <div className="experience-evidence">
                  <ProjectFigurePanel figure={item.evidence} />
                </div>
              ) : null}

              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
                <p className="text-xs text-[var(--color-muted)]">{item.tags.join(' · ')}</p>
              </div>

              {item.links?.length ? (
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                  {item.links.map((link) =>
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
          ))}
        </div>
      </div>
    </section>
  );
}
