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
      <section id="cv" className="scroll-mt-32 py-16 xl:scroll-mt-24">
        <div className="page-container">
          <SectionHeading title={cv.title} lede={cv.cardText} />

          <DashboardCard
            as="div"
            className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
            revealDelay={100}
          >
            <div>
              <p className="text-base leading-7 text-[var(--color-body)]">{cv.modalTitle}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {/* Small screens open the PDF directly; the in-page viewer needs room. */}
              <span className="contents sm:hidden">
                <ExternalLink
                  href={cv.href}
                  newTabLabel={externalLinkLabel}
                  className="action-button rounded-lg border px-5 py-3 text-sm font-semibold transition"
                >
                  <span dir="auto" className="localized-inline">
                    {cv.viewButton}
                  </span>
                </ExternalLink>
              </span>
              <span className="hidden sm:contents">
                <button
                  ref={viewCvButtonRef}
                  type="button"
                  onClick={() => setIsCvViewerOpen(true)}
                  className="action-button rounded-lg border px-5 py-3 text-sm font-semibold transition"
                >
                  <span dir="auto" className="localized-inline">
                    {cv.viewButton}
                  </span>
                </button>
              </span>
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
