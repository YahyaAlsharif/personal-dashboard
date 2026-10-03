import { useRef } from 'react';

import type { Certificate } from '../data/content';
import { useDialog } from './useDialog';

type CertificateViewerModalProps = {
  certificate: Certificate | null;
  closeLabel: string;
  closeAriaLabel: string;
  onClose: () => void;
};

/** A larger, view-only preview of one certificate. */
export function CertificateViewerModal({
  certificate,
  closeLabel,
  closeAriaLabel,
  onClose,
}: CertificateViewerModalProps) {
  const dialogRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const isOpen = Boolean(certificate?.image);

  useDialog(isOpen, onClose, dialogRef, closeButtonRef);

  if (!certificate?.image) {
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
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="certificate-viewer-title"
        className="flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-card-strong)] shadow-2xl shadow-black/30"
      >
        <header className="flex items-start justify-between gap-4 border-b border-[var(--color-border)] bg-[var(--color-card)] px-4 py-4 sm:px-5">
          <div className="min-w-0">
            <h2
              id="certificate-viewer-title"
              className="text-base font-semibold text-[var(--color-heading)] sm:text-lg"
            >
              {certificate.title}
            </h2>
            <p className="mt-1 text-sm text-[var(--color-muted)]">
              {certificate.issuer}
              {certificate.date ? ` · ${certificate.date}` : ''}
            </p>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            aria-label={closeAriaLabel}
            onClick={onClose}
            className="inline-flex min-h-11 flex-none items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-button)] px-4 text-sm font-semibold leading-none text-[var(--color-button-text)] transition hover:border-[var(--color-border-strong)] hover:bg-[var(--color-button-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
          >
            <span dir="auto" className="localized-inline">
              {closeLabel}
            </span>
          </button>
        </header>

        <div className="flex min-h-0 flex-1 items-center justify-center bg-[var(--color-accent-soft)] p-2 sm:p-4">
          <img
            src={certificate.image.src}
            alt={certificate.image.alt}
            width={certificate.image.width}
            height={certificate.image.height}
            className="certificate-viewer-image"
          />
        </div>
      </section>
    </div>
  );
}
