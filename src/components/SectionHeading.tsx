import { Reveal } from './Reveal';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-8 max-w-6xl">
      {eyebrow ? (
        <Reveal
          as="p"
          className="text-sm font-semibold uppercase text-[var(--color-accent)]"
        >
          {eyebrow}
        </Reveal>
      ) : null}
      <Reveal
        as="h2"
        delay={80}
        className="mt-3 text-3xl font-semibold tracking-normal text-[var(--color-heading)] sm:text-4xl"
      >
        {title}
      </Reveal>
      {description ? (
        <Reveal
          as="p"
          delay={140}
          className="mt-4 max-w-6xl text-base leading-7 text-[var(--color-muted)] sm:text-lg"
        >
          {description}
        </Reveal>
      ) : null}
    </div>
  );
}
