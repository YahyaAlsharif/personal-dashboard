import { DashboardCard } from '../components/DashboardCard';
import { SectionHeading } from '../components/SectionHeading';
import { useLanguage } from '../context/useLanguage';
import { localizedContent } from '../data/content';

export function EducationSection() {
  const { language, isArabic } = useLanguage();
  const { education } = localizedContent[language];
  const textDirection = isArabic ? 'rtl' : 'ltr';
  const localizedClass = isArabic ? 'localized-text' : '';

  return (
    <section id="education" className="scroll-mt-24 py-14">
      <div className="page-container">
        <SectionHeading
          eyebrow={education.eyebrow}
          title={education.title}
          description={education.description}
          isArabic={isArabic}
        />

        <div className="flex w-full flex-col gap-5">
          {education.items.map((item, index) => (
            <DashboardCard key={item.title} revealDelay={index * 90}>
              <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="grid h-20 w-20 flex-none place-items-center rounded-lg border border-[var(--color-border)] bg-white p-2.5 shadow-sm shadow-black/5 sm:h-24 sm:w-24">
                    <img
                      src={item.logoSrc}
                      alt={item.logoAlt}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3
                      dir={textDirection}
                      className={`text-xl font-semibold text-[var(--color-heading)] ${localizedClass}`}
                    >
                      {item.title}
                    </h3>
                    <p
                      dir={textDirection}
                      className={`mt-1 text-sm font-medium text-[var(--color-muted)] ${localizedClass}`}
                    >
                      {item.organization}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 sm:justify-end">
                  <span className="rounded-md bg-[var(--color-chip)] px-3 py-1 text-xs font-semibold text-[var(--color-chip-text)]">
                    {item.period}
                  </span>
                  {item.status ? (
                    <span className="rounded-md bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--color-accent-strong)]">
                      {item.status}
                    </span>
                  ) : null}
                </div>
              </div>
              <p
                dir={textDirection}
                className={`prose-justify mt-5 text-base leading-7 text-[var(--color-muted)] ${localizedClass}`}
              >
                {item.description}
              </p>
              {item.details?.map((detail) => (
                <p
                  key={detail}
                  dir={textDirection}
                  className={`prose-justify mt-4 text-base leading-7 text-[var(--color-muted)] ${localizedClass}`}
                >
                  {detail}
                </p>
              ))}
              <ul
                dir={textDirection}
                className={`mt-5 space-y-3 text-sm leading-6 text-[var(--color-muted)] ${localizedClass}`}
              >
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--color-heading)]"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </DashboardCard>
          ))}
        </div>

        <DashboardCard as="div" className="mt-5" revealDelay={120}>
          <h3
            dir={textDirection}
            className={`text-lg font-semibold text-[var(--color-heading)] ${localizedClass}`}
          >
            {education.certificatesTitle}
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {education.certificates.map((certificate) => (
              <span
                key={certificate}
                dir={textDirection}
                className={`rounded-md bg-[var(--color-chip)] px-3 py-2 text-sm font-medium text-[var(--color-chip-text)] ${localizedClass}`}
              >
                {certificate}
              </span>
            ))}
          </div>
        </DashboardCard>
      </div>
    </section>
  );
}
