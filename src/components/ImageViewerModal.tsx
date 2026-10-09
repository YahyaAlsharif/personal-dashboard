import { useRef } from 'react';
import { createPortal } from 'react-dom';

import { useDialog } from './useDialog';

export type ViewerImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type ImageViewerModalProps = {
  image: ViewerImage | null;
  title: string;
  subtitle?: string;
  closeLabel: string;
  closeAriaLabel: string;
  onClose: () => void;
};

/** A larger, view-only preview of one image: certificates and evidence figures. */
export function ImageViewerModal({
  image,
  title,
  subtitle,
  closeLabel,
  closeAriaLabel,
  onClose,
}: ImageViewerModalProps) {
  const dialogRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useDialog(Boolean(image), onClose, dialogRef, closeButtonRef);

  if (!image) {
    return null;
  }

  // Portalled so a transformed ancestor (the reveal animation) cannot trap the overlay.
  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overscroll-contain bg-black/70 p-3 sm:p-6"
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
        aria-labelledby="image-viewer-title"
        className="flex max-h-[92vh] w-full max-w-[min(100%,110rem)] flex-col overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-card-strong)] shadow-2xl shadow-black/30 sm:w-auto"
      >
        <header className="flex items-start justify-between gap-4 border-b border-[var(--color-border)] bg-[var(--color-card)] px-4 py-3 sm:px-5">
          <div className="min-w-0">
            <h2 id="image-viewer-title" className="text-base font-semibold text-[var(--color-heading)] sm:text-lg">
              {title}
            </h2>
            {subtitle ? <p className="mt-1 type-meta">{subtitle}</p> : null}
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            aria-label={closeAriaLabel}
            onClick={onClose}
            className="btn btn-secondary flex-none"
          >
            <span dir="auto" className="localized-inline">
              {closeLabel}
            </span>
          </button>
        </header>

        <div className="flex min-h-0 flex-1 items-center justify-center overflow-auto bg-[var(--color-ink-soft)] p-2 sm:p-4">
          <img
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="image-viewer-image"
          />
        </div>
      </section>
    </div>,
    document.body,
  );
}
