import { DashboardCard } from '../components/DashboardCard';
import { SectionHeading } from '../components/SectionHeading';
import { contact } from '../data/contact';

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 px-5 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Contact"
          description="For collaboration, opportunities, or a professional hello, LinkedIn and email are the best ways to reach me."
        />

        <div className="grid gap-5 md:grid-cols-2">
          <DashboardCard as="div">
            <h3 className="text-lg font-semibold text-[var(--color-heading)]">LinkedIn</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
              Connect with me professionally and follow my project updates.
            </p>
            <a
              href={contact.linkedin.url}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex rounded-lg bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            >
              Connect on LinkedIn
            </a>
          </DashboardCard>

          <DashboardCard as="div">
            <h3 className="text-lg font-semibold text-[var(--color-heading)]">Email</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
              Send a direct message about opportunities, collaboration, or questions.
            </p>
            <a
              href={`mailto:${contact.email.address}`}
              className="mt-5 inline-flex rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] px-5 py-3 text-sm font-semibold text-[var(--color-heading)] transition hover:border-[var(--color-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            >
              Send Email
            </a>
          </DashboardCard>
        </div>
      </div>
    </section>
  );
}
