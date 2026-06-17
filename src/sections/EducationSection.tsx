import { DashboardCard } from '../components/DashboardCard';
import { SectionHeading } from '../components/SectionHeading';
import { certificates, education } from '../data/education';

export function EducationSection() {
  return (
    <section id="education" className="scroll-mt-24 px-5 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Education"
          title="Education & AI Journey"
          description="Academic software engineering foundations alongside a focused KAUST Academy artificial intelligence path."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {education.map((item) => (
            <DashboardCard key={item.title}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-[var(--color-heading)]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[var(--color-accent)]">
                    {item.organization}
                  </p>
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
              <p className="mt-5 text-base leading-7 text-[var(--color-muted)]">
                {item.description}
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-[var(--color-muted)]">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--color-accent)]"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </DashboardCard>
          ))}
        </div>

        <DashboardCard as="div" className="mt-5">
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
