import { useRef, useState } from 'react';

import { CvViewerModal } from '../components/CvViewerModal';
import { DashboardCard } from '../components/DashboardCard';
import { ExternalLink } from '../components/ExternalLink';
import { SectionHeading } from '../components/SectionHeading';
import { useLanguage } from '../context/useLanguage';
import { localizedContent } from '../data/content';

export function CvSection() {
  const [isCvViewerOpen, setIsCvViewerOpen] = useState(false);
  const viewCvButtonRef = useRef<HTMLButtonElement>(null);
  const { language } = useLanguage();
  const { cv, externalLinkLabel } = localizedContent[language];

  const closeCvViewer = () => {
    setIsCvViewerOpen(false);
    window.requestAnimationFrame(() => {
      viewCvButtonRef.current?.focus();
    });
  };

  return (
    <>
      <section id="cv" className="scroll-mt-36 py-14 xl:scroll-mt-24">
        <div className="page-container">
          <SectionHeading
            eyebrow={cv.eyebrow}
            title={cv.title}
            description={cv.description}
          />

          <DashboardCard
            as="div"
            className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
            revealDelay={100}
          >
            <div>
              <h3
                className="text-xl font-semibold text-[var(--color-heading)]"
              >
                {cv.cardTitle}
              </h3>
              <p
                className="mt-3 max-w-2xl text-base leading-7 text-[var(--color-muted)]"
              >
                {cv.cardText}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ExternalLink
                href={cv.href}
                newTabLabel={externalLinkLabel}
                className="action-button rounded-lg border px-5 py-3 text-sm font-semibold transition sm:hidden"
              >
                <span dir="auto" className="localized-inline">
                  {cv.viewButton}
                </span>
              </ExternalLink>
              <button
                ref={viewCvButtonRef}
                type="button"
                onClick={() => setIsCvViewerOpen(true)}
                className="action-button hidden rounded-lg border px-5 py-3 text-sm font-semibold transition sm:inline-flex"
              >
                <span dir="auto" className="localized-inline">
                  {cv.viewButton}
                </span>
              </button>
              <a
                href={cv.href}
                download={cv.fileName}
                className="action-button rounded-lg border px-5 py-3 text-sm font-semibold transition"
              >
                <span dir="auto" className="localized-inline">
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
        onClose={closeCvViewer}
      />
    </>
  );
}
