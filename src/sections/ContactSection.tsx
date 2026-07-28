import { DashboardCard } from '../components/DashboardCard';
import { ExternalLink } from '../components/ExternalLink';
import { SectionHeading } from '../components/SectionHeading';
import { useLanguage } from '../context/useLanguage';
import { localizedContent } from '../data/content';

export function ContactSection() {
  const { language, isArabic } = useLanguage();
  const { contact, externalLinkLabel } = localizedContent[language];
  const textDirection = isArabic ? 'rtl' : 'ltr';
  const localizedClass = isArabic ? 'localized-text' : '';

  return (
    <section id="contact" className="scroll-mt-36 py-14 xl:scroll-mt-24">
      <div className="page-container">
        <SectionHeading
          eyebrow={contact.eyebrow}
          title={contact.title}
          description={contact.description}
          isArabic={isArabic}
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
                className={`text-lg font-semibold text-[var(--color-heading)] ${localizedClass}`}
              >
                {option.title}
              </h3>
              <p
                dir={textDirection}
                className={`mt-3 text-sm leading-6 text-[var(--color-muted)] ${localizedClass}`}
              >
                {option.description}
              </p>
              <div
                className={`mt-auto flex pt-5 ${isArabic ? 'localized-actions' : ''}`}
              >
                {option.external ? (
                  <ExternalLink
                    href={option.href}
                    newTabLabel={externalLinkLabel}
                    className="action-button inline-flex rounded-lg border px-5 py-3 text-sm font-semibold transition"
                  >
                    <span dir={isArabic ? 'auto' : undefined} className="localized-inline">
                      {option.buttonText}
                    </span>
                  </ExternalLink>
                ) : (
                  <a
                    href={option.href}
                    className="action-button inline-flex rounded-lg border px-5 py-3 text-sm font-semibold transition"
                  >
                  <span dir={isArabic ? 'auto' : undefined} className="localized-inline">
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
