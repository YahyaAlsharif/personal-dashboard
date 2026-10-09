import { useState } from 'react';

import { CvViewerModal } from '../components/CvViewerModal';
import { ExternalLink } from '../components/ExternalLink';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { useLanguage } from '../context/useLanguage';
import { localizedContent } from '../data/content';

export function CvSection() {
  const [isCvViewerOpen, setIsCvViewerOpen] = useState(false);
  const { language } = useLanguage();
  const { cv, externalLinkLabel } = localizedContent[language];

  const closeCvViewer = () => setIsCvViewerOpen(false);
  const viewLabel = (
    <span dir="auto" className="localized-inline">
      {cv.viewButton}
    </span>
  );

  return (
    <>
      <section id="cv" className="section !pt-0">
        <div className="page-container">
          <Reveal as="div" className="cv-panel">
            <SectionHeading title={cv.title} lede={cv.cardText} className="max-w-2xl" />
            <div className="flex flex-wrap gap-3">
              {/* Small screens open the PDF directly; the in-page viewer needs room. */}
              <span className="contents sm:hidden">
                <ExternalLink
                  href={cv.href}
                  newTabLabel={externalLinkLabel}
                  className="btn btn-primary"
                >
                  {viewLabel}
                </ExternalLink>
              </span>
              <span className="hidden sm:contents">
                <button
                  type="button"
                  aria-haspopup="dialog"
                  onClick={() => setIsCvViewerOpen(true)}
                  className="btn btn-primary"
                >
                  {viewLabel}
                </button>
              </span>
              <a href={cv.href} download={cv.fileName} className="btn btn-secondary">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M12 4v11" />
                  <path d="m7 10 5 5 5-5" />
                  <path d="M5 20h14" />
                </svg>
                <span dir="auto" className="localized-inline">
                  {cv.downloadButton}
                </span>
              </a>
            </div>
          </Reveal>
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
