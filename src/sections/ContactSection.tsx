import { ExternalLink } from '../components/ExternalLink';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { useLanguage } from '../context/useLanguage';
import { localizedContent } from '../data/content';

export function ContactSection() {
  const { language } = useLanguage();
  const { contact, externalLinkLabel } = localizedContent[language];

  return (
    <section id="contact" className="section">
      <div className="page-container contact-layout">
        <SectionHeading title={contact.title} lede={contact.lede} className="max-w-xl" />

        <div className="contact-rows">
          {contact.options.map((option, index) => {
            // Email is the direct line, so it carries the single primary action.
            const buttonClassName = `btn ${option.external ? 'btn-secondary' : 'btn-primary'}`;
            const label = (
              <span dir="auto" className="localized-inline">
                {option.buttonText}
              </span>
            );

            return (
              <Reveal as="div" key={option.title} delay={index * 60} className="contact-row">
                <div className="min-w-0">
                  <h3 dir="auto" className="localized-inline type-title !text-[1.0625rem]">
                    {option.title}
                  </h3>
                  <p className="mt-1 type-meta">{option.description}</p>
                </div>
                <div>
                  {option.external ? (
                    <ExternalLink
                      href={option.href}
                      newTabLabel={externalLinkLabel}
                      className={buttonClassName}
                    >
                      {label}
                    </ExternalLink>
                  ) : (
                    <a href={option.href} className={buttonClassName}>
                      {label}
                    </a>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
