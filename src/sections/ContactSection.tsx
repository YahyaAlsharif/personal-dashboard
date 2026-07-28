import { DashboardCard } from '../components/DashboardCard';
import { ExternalLink } from '../components/ExternalLink';
import { SectionHeading } from '../components/SectionHeading';
import { useLanguage } from '../context/useLanguage';
import { localizedContent } from '../data/content';

export function ContactSection() {
  const { language } = useLanguage();
  const { contact, externalLinkLabel } = localizedContent[language];

  return (
    <section id="contact" className="scroll-mt-36 py-14 xl:scroll-mt-24">
      <div className="page-container">
        <SectionHeading
          eyebrow={contact.eyebrow}
          title={contact.title}
          description={contact.description}
        />

        <div className="grid gap-5 md:grid-cols-3">
          {contact.options.map((option, index) => (
            <DashboardCard
              key={option.title}
              as="div"
              className="flex h-full flex-col"
              revealDelay={(index % 3) * 90}
            >
              <h3
                dir="auto"
                className="localized-inline text-lg font-semibold text-[var(--color-heading)]"
              >
                {option.title}
              </h3>
              <p
                className="mt-3 text-sm leading-6 text-[var(--color-muted)]"
              >
                {option.description}
              </p>
              <div className="mt-auto flex pt-5">
                {option.external ? (
                  <ExternalLink
                    href={option.href}
                    newTabLabel={externalLinkLabel}
                    className="action-button inline-flex rounded-lg border px-5 py-3 text-sm font-semibold transition"
                  >
                    <span dir="auto" className="localized-inline">
                      {option.buttonText}
                    </span>
                  </ExternalLink>
                ) : (
                  <a
                    href={option.href}
                    className="action-button inline-flex rounded-lg border px-5 py-3 text-sm font-semibold transition"
                  >
                  <span dir="auto" className="localized-inline">
                    {option.buttonText}
                  </span>
                  </a>
                )}
              </div>
            </DashboardCard>
          ))}
        </div>
      </div>
    </section>
  );
}
