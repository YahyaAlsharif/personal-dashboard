import { Reveal } from './Reveal';

type SectionHeadingProps = {
  title: string;
  lede?: string;
  className?: string;
};

export function SectionHeading({ title, lede, className = 'section-heading' }: SectionHeadingProps) {
  return (
    <div className={className}>
      <Reveal as="h2" className="type-section">
        {title}
      </Reveal>
      {lede ? (
        <Reveal as="p" delay={90} className="section-lede type-lead">
          {lede}
        </Reveal>
      ) : null}
    </div>
  );
}
