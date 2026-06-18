import { DashboardCard } from '../components/DashboardCard';
import { SectionHeading } from '../components/SectionHeading';
import { contactOptions } from '../data/contact';

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 py-14">
      <div className="page-container">
        <SectionHeading
          eyebrow="Contact"
          title="Contact"
          description="For collaboration, opportunities, or a professional hello, LinkedIn, email, and GitHub are the best ways to reach me."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {contactOptions.map((option, index) => (
            <DashboardCard
              key={option.title}
              as="div"
              className="flex h-full flex-col"
              revealDelay={(index % 3) * 90}
            >
              <h3 className="text-lg font-semibold text-[var(--color-heading)]">
                {option.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                {option.description}
              </p>
              <div className="mt-auto pt-5">
                <a
                  href={option.href}
                  target={option.external ? '_blank' : undefined}
                  rel={option.external ? 'noreferrer' : undefined}
                  className="action-button inline-flex rounded-lg border px-5 py-3 text-sm font-semibold transition"
                >
                  {option.buttonText}
                </a>
              </div>
            </DashboardCard>
          ))}
        </div>
      </div>
    </section>
  );
}
