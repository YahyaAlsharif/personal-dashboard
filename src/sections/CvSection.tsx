import { DashboardCard } from '../components/DashboardCard';
import { SectionHeading } from '../components/SectionHeading';
import { cv } from '../data/contact';

export function CvSection() {
  return (
    <section id="cv" className="scroll-mt-24 px-5 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="CV"
          title="CV"
          description="A direct link to the full profile, education, certificates, projects, and skills."
        />

        <DashboardCard as="div" className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-semibold text-[var(--color-heading)]">
              Yahya Al-Sharif Software Engineer CV
            </h3>
            <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--color-muted)]">
              Want the full version of my background, education, certificates, projects, and
              skills? You can view or download my CV here.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={cv.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            >
              View CV
            </a>
            <a
              href={cv.href}
              download={cv.fileName}
              className="rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] px-5 py-3 text-sm font-semibold text-[var(--color-heading)] transition hover:border-[var(--color-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            >
              Download CV
            </a>
          </div>
        </DashboardCard>
      </div>
    </section>
  );
}
