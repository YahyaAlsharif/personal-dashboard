import { Reveal } from './Reveal';

type SectionHeadingProps = {
  title: string;
  lede?: string;
};

export function SectionHeading({ title, lede }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <Reveal
        as="h2"
        className="text-3xl font-semibold tracking-tight text-[var(--color-heading)] sm:text-4xl"
      >
        {title}
      </Reveal>
      {lede ? (
        <Reveal
          as="p"
          delay={90}
          className="mt-3 max-w-2xl text-base leading-7 text-[var(--color-muted)]"
        >
          {lede}
        </Reveal>
      ) : null}
    </div>
  );
}
