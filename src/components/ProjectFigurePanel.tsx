import type { ProjectFigure } from '../data/content';

type ProjectFigurePanelProps = {
  figure: ProjectFigure;
};

/**
 * Evidence figures come straight from the public project repositories, so they
 * carry their own light background. The plate keeps them legible in both
 * themes without recolouring the chart itself. Photos scale down with the
 * card instead of panning like a wide chart.
 */
export function ProjectFigurePanel({ figure }: ProjectFigurePanelProps) {
  return (
    <figure className="evidence-figure">
      <div className="evidence-plate">
        <img
          src={figure.src}
          alt={figure.alt}
          loading="lazy"
          className={`evidence-image ${figure.isPhoto ? 'evidence-image--photo' : ''}`}
        />
      </div>
      <figcaption className="evidence-caption">{figure.caption}</figcaption>
    </figure>
  );
}
