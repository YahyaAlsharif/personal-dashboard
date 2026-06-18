import { DashboardCard } from '../components/DashboardCard';
import { SectionHeading } from '../components/SectionHeading';
import { certificates, education } from '../data/education';

export function EducationSection() {
  return (
    <section id="education" className="scroll-mt-24 py-14">
      <div className="page-container">
        <SectionHeading
          eyebrow="Education"
          title="Education"
          description="My software engineering education alongside a focused KAUST Academy artificial intelligence journey."
        />

        <div className="flex w-full flex-col gap-5">
          {education.map((item, index) => (
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
                    <h3 className="text-xl font-semibold text-[var(--color-heading)]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-[var(--color-muted)]">
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
              <p className="prose-justify mt-5 text-base leading-7 text-[var(--color-muted)]">
                {item.description}
              </p>
              {item.details?.map((detail) => (
                <p
                  key={detail}
                  className="prose-justify mt-4 text-base leading-7 text-[var(--color-muted)]"
                >
                  {detail}
                </p>
              ))}
              <ul className="mt-5 space-y-3 text-sm leading-6 text-[var(--color-muted)]">
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
          <h3 className="text-lg font-semibold text-[var(--color-heading)]">
            Certificates & Training
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {certificates.map((certificate) => (
              <span
                key={certificate}
                className="rounded-md bg-[var(--color-chip)] px-3 py-2 text-sm font-medium text-[var(--color-chip-text)]"
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
