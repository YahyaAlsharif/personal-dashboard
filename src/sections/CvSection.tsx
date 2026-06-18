import { useRef, useState } from 'react';

import { CvViewerModal } from '../components/CvViewerModal';
import { DashboardCard } from '../components/DashboardCard';
import { SectionHeading } from '../components/SectionHeading';
import { useLanguage } from '../context/useLanguage';
import { localizedContent } from '../data/content';

export function CvSection() {
  const [isCvViewerOpen, setIsCvViewerOpen] = useState(false);
  const viewCvButtonRef = useRef<HTMLButtonElement>(null);
  const { language, isArabic } = useLanguage();
  const { cv } = localizedContent[language];
  const textDirection = isArabic ? 'rtl' : 'ltr';
  const localizedClass = isArabic ? 'localized-text' : '';

  const closeCvViewer = () => {
    setIsCvViewerOpen(false);
    window.requestAnimationFrame(() => {
      viewCvButtonRef.current?.focus();
    });
  };

  return (
    <>
      <section id="cv" className="scroll-mt-24 py-14">
        <div className="page-container">
          <SectionHeading
            eyebrow={cv.eyebrow}
            title={cv.title}
            description={cv.description}
            isArabic={isArabic}
          />

          <DashboardCard
            as="div"
            className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
            revealDelay={100}
          >
            <div>
              <h3
                dir={textDirection}
                className={`text-xl font-semibold text-[var(--color-heading)] ${localizedClass}`}
              >
                {cv.cardTitle}
              </h3>
              <p
                dir={textDirection}
                className={`mt-3 max-w-2xl text-base leading-7 text-[var(--color-muted)] ${localizedClass}`}
              >
                {cv.cardText}
              </p>
            </div>
            <div
              className={`flex flex-wrap gap-3 ${isArabic ? 'localized-actions' : ''}`}
            >
              <button
                ref={viewCvButtonRef}
                type="button"
                onClick={() => setIsCvViewerOpen(true)}
                className="action-button rounded-lg border px-5 py-3 text-sm font-semibold transition"
              >
                <span dir={isArabic ? 'auto' : undefined} className="localized-inline">
                  {cv.viewButton}
                </span>
              </button>
              <a
                href={cv.href}
                download={cv.fileName}
                className="action-button rounded-lg border px-5 py-3 text-sm font-semibold transition"
              >
                <span dir={isArabic ? 'auto' : undefined} className="localized-inline">
                  {cv.downloadButton}
                </span>
              </a>
            </div>
          </DashboardCard>
        </div>
      </section>

      <CvViewerModal
        isOpen={isCvViewerOpen}
        title={cv.modalTitle}
        pdfHref={cv.href}
        fileName={cv.fileName}
        downloadLabel={cv.downloadButton}
        closeLabel={cv.closeButton}
        closeAriaLabel={cv.closeAriaLabel}
        isArabic={isArabic}
        onClose={closeCvViewer}
      />
    </>
  );
}
