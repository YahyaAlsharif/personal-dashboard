import { Reveal } from '../components/Reveal';
import { useLanguage } from '../context/useLanguage';
import { localizedContent } from '../data/content';

export function SkillsSection() {
  const { language } = useLanguage();
  const { skills } = localizedContent[language];

  return (
    <section className="section-band">
      <div className="page-container py-14">
        <Reveal
          as="h2"
          className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]"
        >
          {skills.title}
        </Reveal>
        <div className="mt-7 grid gap-x-8 gap-y-7 sm:grid-cols-2 xl:grid-cols-4">
          {skills.groups.map((group, index) => (
            <Reveal as="div" key={group.title} delay={index * 70}>
              <h3 className="text-sm font-semibold text-[var(--color-heading)]">{group.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                {group.skills.join(', ')}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
