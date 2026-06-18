import { Reveal } from './Reveal';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  isArabic?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  isArabic = false,
}: SectionHeadingProps) {
  const textDirection = isArabic ? 'rtl' : 'ltr';
  const localizedClass = isArabic ? 'localized-text' : '';

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
        dir={textDirection}
        className={`mt-3 text-3xl font-semibold tracking-normal text-[var(--color-heading)] sm:text-4xl ${localizedClass}`}
      >
        {title}
      </Reveal>
      {description ? (
        <Reveal
          as="p"
          delay={140}
          dir={textDirection}
          className={`mt-4 max-w-6xl text-base leading-7 text-[var(--color-muted)] sm:text-lg ${localizedClass}`}
        >
          {description}
        </Reveal>
      ) : null}
    </div>
  );
}
