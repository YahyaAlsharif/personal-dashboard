import { useEffect, useRef } from 'react';

type CvViewerModalProps = {
  isOpen: boolean;
  title: string;
  pdfHref: string;
  fileName: string;
  downloadLabel: string;
  closeLabel: string;
  closeAriaLabel: string;
  isArabic: boolean;
  onClose: () => void;
};

export function CvViewerModal({
  isOpen,
  title,
  pdfHref,
  fileName,
  downloadLabel,
  closeLabel,
  closeAriaLabel,
  isArabic,
  onClose,
}: CvViewerModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const textDirection = isArabic ? 'rtl' : 'ltr';
  const localizedClass = isArabic ? 'localized-text' : '';

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-3 sm:p-6"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="cv-viewer-title"
        className="flex h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-card-strong)] shadow-2xl shadow-black/30 sm:h-[90vh]"
      >
        <header className="flex flex-col gap-4 border-b border-[var(--color-border)] bg-[var(--color-card)] px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <div className="min-w-0">
            <h2
              id="cv-viewer-title"
              dir={textDirection}
              className={`text-base font-semibold text-[var(--color-heading)] sm:text-lg ${localizedClass}`}
            >
              {title}
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={pdfHref}
              download={fileName}
              className="action-button inline-flex min-h-11 items-center justify-center rounded-lg border px-4 text-sm font-semibold leading-none transition"
            >
              <span dir={isArabic ? 'auto' : undefined} className="localized-inline">
                {downloadLabel}
              </span>
            </a>
            <button
              ref={closeButtonRef}
              type="button"
              aria-label={closeAriaLabel}
              onClick={onClose}
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-button)] px-4 text-sm font-semibold leading-none text-[var(--color-button-text)] transition hover:border-[var(--color-border-strong)] hover:bg-[var(--color-button-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            >
              <span dir={isArabic ? 'auto' : undefined} className="localized-inline">
                {closeLabel}
              </span>
            </button>
          </div>
        </header>

        <div className="min-h-0 flex-1 bg-[var(--color-accent-soft)] p-2 sm:p-4">
          <iframe
            src={pdfHref}
            title={title}
            className="h-full w-full rounded-md border border-[var(--color-border)] bg-white"
          />
        </div>
      </section>
    </div>
  );
}
