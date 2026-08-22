import type { ProjectFigure } from '../data/content';

type ProjectFigurePanelProps = {
  figure: ProjectFigure;
};

/**
 * Evidence figures come straight from the public project repositories, so they
 * carry their own light background. The plate keeps them legible in both
 * themes without recolouring the chart itself.
 */
export function ProjectFigurePanel({ figure }: ProjectFigurePanelProps) {
  return (
    <figure className="evidence-figure">
      <div className="evidence-plate">
        <img src={figure.src} alt={figure.alt} loading="lazy" className="evidence-image" />
      </div>
      <figcaption className="evidence-caption">{figure.caption}</figcaption>
    </figure>
  );
}
