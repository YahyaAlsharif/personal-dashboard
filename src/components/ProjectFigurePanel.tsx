import { useState } from 'react';

import { useLanguage } from '../context/useLanguage';
import { localizedContent } from '../data/content';
import type { ProjectFigure } from '../data/content';
import { ImageViewerModal } from './ImageViewerModal';

type ProjectFigurePanelProps = {
  figure: ProjectFigure;
};

/**
 * Evidence figures come straight from the public project repositories, so they
 * carry their own light background. The plate keeps charts legible in both
 * themes without recolouring them; photos sit unframed. Every figure can be
 * opened at full size.
 */
export function ProjectFigurePanel({ figure }: ProjectFigurePanelProps) {
  const [isEnlarged, setIsEnlarged] = useState(false);
  const { language } = useLanguage();
  const { figureViewer } = localizedContent[language];

  return (
    <figure className={`evidence-figure ${figure.isPhoto ? 'evidence-figure--photo' : ''}`}>
      <div className="evidence-frame">
        <img
          src={figure.src}
          alt={figure.alt}
          width={figure.width}
          height={figure.height}
          loading="lazy"
          className="evidence-image"
        />
      </div>
      <figcaption className="evidence-caption">
        <span className="evidence-caption-text type-meta">{figure.caption}</span>
        <button
          type="button"
          aria-haspopup="dialog"
          onClick={() => setIsEnlarged(true)}
          className="evidence-zoom"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-3.5 w-3.5"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M15 3h6v6" />
            <path d="M9 21H3v-6" />
            <path d="m21 3-7 7" />
            <path d="m3 21 7-7" />
          </svg>
          <span dir="auto" className="localized-inline">
            {figureViewer.open}
          </span>
        </button>
      </figcaption>

      <ImageViewerModal
        image={isEnlarged ? figure : null}
        title={figure.caption}
        closeLabel={figureViewer.closeButton}
        closeAriaLabel={figureViewer.closeAriaLabel}
        onClose={() => setIsEnlarged(false)}
      />
    </figure>
  );
}
