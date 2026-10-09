import { LinkRow } from '../components/LinkRow';
import { ProjectFigurePanel } from '../components/ProjectFigurePanel';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { useLanguage } from '../context/useLanguage';
import { localizedContent } from '../data/content';

export function ExperienceSection() {
  const { language } = useLanguage();
  const { experience, externalLinkLabel } = localizedContent[language];

  return (
    <section id="experience" className="section">
      <div className="page-container">
        <SectionHeading title={experience.title} lede={experience.lede} />

        <div>
          {experience.items.map((item, index) => (
            <Reveal as="article" key={item.role} delay={index * 60} className="entry">
              <div className="entry-meta">
                {item.brandMark ? (
                  <img
                    src={item.brandMark.src}
                    alt={item.brandMark.alt}
                    width="48"
                    height="48"
                    loading="lazy"
                    className="entry-logo"
                  />
                ) : null}
                <div>
                  <p dir="auto" className="localized-inline entry-period type-mono">
                    {item.period}
                  </p>
                  {item.location ? <p className="type-meta">{item.location}</p> : null}
                </div>
              </div>

              <div className="min-w-0">
                <div className="entry-text">
                  <h3 className="type-title">{item.role}</h3>
                  <p className="entry-organization">{item.organization}</p>
                  {item.focus ? <p className="entry-focus type-prose">{item.focus}</p> : null}

                  <ul className="entry-points point-list type-prose">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>

                {item.evidence ? <ProjectFigurePanel figure={item.evidence} /> : null}

                <div className="entry-footer">
                  <ul className="inline-list type-meta">
                    {item.tags.map((tag) => (
                      <li key={tag}>
                        <bdi>{tag}</bdi>
                      </li>
                    ))}
                  </ul>
                  {item.links?.length ? (
                    <LinkRow links={item.links} newTabLabel={externalLinkLabel} />
                  ) : null}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
