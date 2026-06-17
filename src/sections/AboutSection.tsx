import { DashboardCard } from '../components/DashboardCard';
import { SectionHeading } from '../components/SectionHeading';
import { profile } from '../data/profile';
import { skillGroups } from '../data/skills';

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 px-5 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="About Me"
          description="A short view of the interests and working style behind the projects."
        />

        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <DashboardCard>
            <div className="space-y-5 text-base leading-8 text-[var(--color-muted)]">
              {profile.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </DashboardCard>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {profile.highlights.map((highlight) => (
              <DashboardCard key={highlight} as="div" className="p-5">
                <p className="text-sm font-semibold text-[var(--color-heading)]">{highlight}</p>
              </DashboardCard>
            ))}
          </div>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {skillGroups.map((group) => (
            <DashboardCard key={group.title} as="div" className="p-5">
              <h3 className="text-sm font-semibold text-[var(--color-heading)]">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-[var(--color-chip)] px-3 py-1 text-xs font-medium text-[var(--color-chip-text)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </DashboardCard>
          ))}
        </div>
      </div>
    </section>
  );
}
