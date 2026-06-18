import { Fragment } from 'react';

import cnnCourseImage from '../assets/learning/cnn-course.png';
import { DashboardCard } from '../components/DashboardCard';
import { SectionHeading } from '../components/SectionHeading';
import {
  aboutIntro,
  aboutJumpLinks,
  artificialIntelligenceStory,
  softwareEngineeringStory,
} from '../data/about';
import { skillGroups } from '../data/skills';

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 py-16">
      <div className="page-container">
        <SectionHeading
          eyebrow="About"
          title="About Me"
          description={aboutIntro.subtitle}
        />

        <div className="max-w-4xl space-y-5 text-base leading-8 text-[var(--color-muted)] sm:text-lg">
          {aboutIntro.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          {aboutJumpLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg border border-[var(--color-border)] bg-[var(--color-button)] px-4 py-2.5 text-sm font-semibold text-[var(--color-button-text)] transition hover:border-[var(--color-border-strong)] hover:bg-[var(--color-button-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div
          id={softwareEngineeringStory.id}
          className="mt-14 scroll-mt-28 border-t border-[var(--color-border)] pt-10"
        >
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(17rem,0.28fr)]">
            <div>
              <h3 className="text-2xl font-semibold text-[var(--color-heading)] sm:text-3xl">
                {softwareEngineeringStory.title}
              </h3>
              <div className="mt-6 max-w-4xl space-y-5 text-base leading-8 text-[var(--color-muted)]">
                {softwareEngineeringStory.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <aside className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {softwareEngineeringStory.sidebars.map((sidebar) => (
                <DashboardCard key={sidebar.title} as="div" className="p-5">
                  <h4 className="text-sm font-semibold uppercase text-[var(--color-muted)]">
                    {sidebar.title}
                  </h4>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {sidebar.items.map((item) => (
                      sidebar.href ? (
                        <a
                          key={item}
                          href={sidebar.href}
                          aria-label={`View ${item} in the projects section`}
                          className="rounded-md border border-[var(--color-border)] bg-[var(--color-button)] px-3 py-1.5 text-xs font-semibold text-[var(--color-button-text)] transition hover:border-[var(--color-border-strong)] hover:bg-[var(--color-button-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                        >
                          {item}
                        </a>
                      ) : (
                        <span
                          key={item}
                          className="rounded-md bg-[var(--color-chip)] px-3 py-1.5 text-xs font-medium text-[var(--color-chip-text)]"
                        >
                          {item}
                        </span>
                      )
                    ))}
                  </div>
                </DashboardCard>
              ))}
            </aside>
          </div>
        </div>

        <div
          id={artificialIntelligenceStory.id}
          className="mt-14 scroll-mt-28 border-t border-[var(--color-border)] pt-10"
        >
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(17rem,0.28fr)]">
            <div>
              <h3 className="text-2xl font-semibold text-[var(--color-heading)] sm:text-3xl">
                {artificialIntelligenceStory.title}
              </h3>
              <div className="mt-6 max-w-4xl space-y-5 text-base leading-8 text-[var(--color-muted)]">
                {artificialIntelligenceStory.paragraphs.map((paragraph, index) => (
                  <Fragment key={paragraph}>
                    <p>{paragraph}</p>
                    {index === 4 ? (
                      <figure className="rounded-lg border border-[var(--color-border)] bg-[var(--color-card-strong)] p-3 shadow-sm shadow-black/5">
                        <img
                          src={cnnCourseImage}
                          alt={artificialIntelligenceStory.courseImage.alt}
                          className="w-full rounded-md border border-[var(--color-border)] object-contain"
                        />
                        <figcaption className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                          {artificialIntelligenceStory.courseImage.caption}
                        </figcaption>
                      </figure>
                    ) : null}
                  </Fragment>
                ))}
              </div>
            </div>

            <aside>
              <DashboardCard as="div" className="p-5">
                <h4 className="text-sm font-semibold uppercase text-[var(--color-muted)]">
                  Highlights
                </h4>
                <div className="mt-4 flex flex-wrap gap-2">
                  {artificialIntelligenceStory.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-md bg-[var(--color-chip)] px-3 py-1.5 text-xs font-medium text-[var(--color-chip-text)]"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </DashboardCard>

            </aside>
          </div>
        </div>

        <div className="mt-14 border-t border-[var(--color-border)] pt-8">
          <h3 className="text-lg font-semibold text-[var(--color-heading)]">
            Selected Skills & Tools
          </h3>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-[var(--color-muted)]">
            A compact view of the tools and foundations that support the story above.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {skillGroups.map((group) => (
              <div key={group.title} className="border-l border-[var(--color-border)] pl-4">
                <h3 className="text-sm font-semibold text-[var(--color-heading)]">
                  {group.title}
                </h3>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
