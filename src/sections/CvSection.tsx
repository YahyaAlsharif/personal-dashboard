import { DashboardCard } from '../components/DashboardCard';
import { SectionHeading } from '../components/SectionHeading';
import { cv } from '../data/contact';

export function CvSection() {
  return (
    <section id="cv" className="scroll-mt-24 py-14">
      <div className="page-container">
        <SectionHeading
          eyebrow="CV"
          title="CV"
          description="A direct link to the full profile, education, certificates, projects, and skills."
        />

        <DashboardCard as="div" className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-semibold text-[var(--color-heading)]">
              Yahya Alsharif Software Engineer CV
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
              className="rounded-lg border border-[var(--color-border)] bg-[var(--color-button)] px-5 py-3 text-sm font-semibold text-[var(--color-button-text)] transition hover:border-[var(--color-border-strong)] hover:bg-[var(--color-button-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            >
              View CV
            </a>
            <a
              href={cv.href}
              download={cv.fileName}
              className="rounded-lg border border-[var(--color-border)] bg-[var(--color-button)] px-5 py-3 text-sm font-semibold text-[var(--color-button-text)] transition hover:border-[var(--color-border-strong)] hover:bg-[var(--color-button-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            >
              Download CV
            </a>
          </div>
        </DashboardCard>
      </div>
    </section>
  );
}
