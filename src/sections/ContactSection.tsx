import { DashboardCard } from '../components/DashboardCard';
import { SectionHeading } from '../components/SectionHeading';
import { useLanguage } from '../context/useLanguage';
import { localizedContent } from '../data/content';

export function ContactSection() {
  const { language, isArabic } = useLanguage();
  const { contact } = localizedContent[language];
  const textDirection = isArabic ? 'rtl' : 'ltr';
  const localizedClass = isArabic ? 'localized-text' : '';

  return (
    <section id="contact" className="scroll-mt-24 py-14">
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
                dir={textDirection}
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
