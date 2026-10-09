import { useState } from 'react';

import { ImageViewerModal } from '../components/ImageViewerModal';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { useLanguage } from '../context/useLanguage';
import { localizedContent } from '../data/content';
import type { Certificate } from '../data/content';

export function EducationSection() {
  const [activeCertificate, setActiveCertificate] = useState<Certificate | null>(null);
  const { language } = useLanguage();
  const { education } = localizedContent[language];

  return (
    <>
      <section id="education" className="section">
        <div className="page-container">
          <SectionHeading title={education.title} />

          <div>
            {education.items.map((item, index) => (
              <Reveal as="article" key={item.title} delay={index * 60} className="entry">
                <div className="entry-meta">
                  <img
                    src={item.logoSrc}
                    alt={item.logoAlt}
                    width="48"
                    height="48"
                    loading="lazy"
                    className="entry-logo"
                  />
                  <div>
                    <p dir="auto" className="localized-inline entry-period type-mono">
                      {item.period}
                    </p>
                    {item.status ? (
                      <p dir="auto" className="localized-inline type-meta">
                        {item.status}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className="entry-text">
                  <h3 className="type-title">{item.title}</h3>
                  <p className="entry-organization">{item.organization}</p>
                  <p className="entry-focus type-prose">{item.description}</p>
                  <ul className="entry-points point-list type-prose">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal as="div" delay={120} className="mt-12 lg:mt-14">
            <h3 className="type-title">
              {education.certificatesTitle}
            </h3>
            <ul className="certificate-list mt-5">
              {education.certificates.map((certificate) => {
                const details = (
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold leading-6 text-[var(--color-heading)]">
                      {certificate.title}
                    </span>
                    <span className="block text-xs leading-5 text-[var(--color-muted)]">
                      {certificate.issuer}
                      {certificate.date ? ` · ${certificate.date}` : ''}
                    </span>
                    {certificate.note ? (
                      <span className="block text-xs leading-5 text-[var(--color-muted)]">
                        {certificate.note}
                      </span>
                    ) : null}
                    {certificate.image ? (
                      <span className="certificate-card-action">
                        {education.certificatePreview.open}
                      </span>
                    ) : null}
                  </span>
                );

                return (
                  <li key={certificate.title}>
                    {certificate.image ? (
                      <button
                        type="button"
                        aria-haspopup="dialog"
                        onClick={() => setActiveCertificate(certificate)}
                        className="certificate-card certificate-card--interactive"
                      >
                        <span className="certificate-thumb">
                          <img
                            src={certificate.image.thumbnailSrc}
                            alt=""
                            loading="lazy"
                            decoding="async"
                          />
                        </span>
                        {details}
                      </button>
                    ) : (
                      <div className="certificate-card">
                        <span aria-hidden="true" className="certificate-thumb certificate-thumb--empty">
                          <svg
                            viewBox="0 0 24 24"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.6"
                          >
                            <circle cx="12" cy="9" r="5" />
                            <path d="m9 13.5-1.5 7L12 18l4.5 2.5-1.5-7" />
                          </svg>
                        </span>
                        {details}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </section>

      <ImageViewerModal
        image={activeCertificate?.image ?? null}
        title={activeCertificate?.title ?? ''}
        subtitle={
          activeCertificate
            ? [activeCertificate.issuer, activeCertificate.date].filter(Boolean).join(' · ')
            : undefined
        }
        closeLabel={education.certificatePreview.closeButton}
        closeAriaLabel={education.certificatePreview.closeAriaLabel}
        onClose={() => setActiveCertificate(null)}
      />
    </>
  );
}
