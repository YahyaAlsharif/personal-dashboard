import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { useLanguage } from '../context/useLanguage';
import { localizedContent } from '../data/content';

export function EducationSection() {
  const { language } = useLanguage();
  const { education } = localizedContent[language];

  return (
    <section id="education" className="scroll-mt-32 py-16 xl:scroll-mt-24">
      <div className="page-container">
        <SectionHeading title={education.title} />

        <div className="timeline">
          {education.items.map((item, index) => (
            <Reveal as="article" key={item.title} delay={index * 90} className="timeline-item">
              <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                <div className="flex min-w-0 items-center gap-4">
                  <img
                    src={item.logoSrc}
                    alt={item.logoAlt}
                    className="h-14 w-14 flex-none rounded-lg bg-white object-contain p-1.5 ring-1 ring-[var(--color-border)]"
                  />
                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold text-[var(--color-heading)]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--color-muted)]">{item.organization}</p>
                  </div>
                </div>
                <div className="text-sm text-[var(--color-muted)] sm:text-end">
                  <p dir="auto" className="localized-inline">
                    {item.period}
                  </p>
                  {item.status ? (
                    <p dir="auto" className="localized-inline font-medium text-[var(--color-body)]">
                      {item.status}
                    </p>
                  ) : null}
                </div>
              </div>

              <p className="prose-justify mt-5 max-w-3xl text-base leading-7 text-[var(--color-muted)]">
                {item.description}
              </p>

              <ul className="mt-4 max-w-3xl space-y-3 text-sm leading-7 text-[var(--color-muted)]">
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
            </Reveal>
          ))}
        </div>

        <Reveal as="div" delay={120} className="mt-10 border-t border-[var(--color-border)] pt-7">
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]">
            {education.certificatesTitle}
          </h3>
          <ul className="mt-4 grid gap-2 text-sm leading-6 text-[var(--color-muted)] sm:grid-cols-2">
            {education.certificates.map((certificate) => (
              <li key={certificate} dir="auto" className="localized-inline">
                {certificate}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
