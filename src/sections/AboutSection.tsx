import { Fragment } from 'react';

import cnnCourseImage from '../assets/learning/cnn-course.png';
import { DashboardCard } from '../components/DashboardCard';
import { Reveal } from '../components/Reveal';
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

        <div className="w-full space-y-5 text-base leading-8 text-[var(--color-muted)] sm:text-lg">
          {aboutIntro.paragraphs.map((paragraph, index) => (
            <Reveal as="p" key={paragraph} delay={index * 80} className="prose-justify">
              {paragraph}
            </Reveal>
          ))}
        </div>

        <Reveal as="div" delay={140} className="mt-7 flex flex-wrap gap-3">
          {aboutJumpLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="action-button rounded-lg border px-4 py-2.5 text-sm font-semibold transition"
            >
              {link.label}
            </a>
          ))}
        </Reveal>

        <div
          id={softwareEngineeringStory.id}
          className="mt-14 scroll-mt-28 border-t border-[var(--color-border)] pt-10"
        >
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(17rem,0.28fr)]">
            <div>
              <Reveal
                as="h3"
                className="text-2xl font-semibold text-[var(--color-heading)] sm:text-3xl"
              >
                {softwareEngineeringStory.title}
              </Reveal>
              <div className="mt-6 max-w-4xl space-y-5 text-base leading-8 text-[var(--color-muted)]">
                {softwareEngineeringStory.paragraphs.map((paragraph, index) => (
                  <Reveal as="p" key={paragraph} delay={index * 70} className="prose-justify">
                    {paragraph}
                  </Reveal>
                ))}
              </div>
            </div>

            <aside className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {softwareEngineeringStory.sidebars.map((sidebar, index) => (
                <DashboardCard
                  key={sidebar.title}
                  as="div"
                  className="p-5"
                  revealDelay={index * 80}
                >
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
                          className="action-button rounded-md border px-3 py-1.5 text-xs font-semibold transition"
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
              <Reveal
                as="h3"
                className="text-2xl font-semibold text-[var(--color-heading)] sm:text-3xl"
              >
                {artificialIntelligenceStory.title}
              </Reveal>
              <div className="mt-6 max-w-4xl space-y-5 text-base leading-8 text-[var(--color-muted)]">
                {artificialIntelligenceStory.paragraphs.map((paragraph, index) => (
                  <Fragment key={paragraph}>
                    <Reveal as="p" delay={index * 70} className="prose-justify">
                      {paragraph}
                    </Reveal>
                    {index === 4 ? (
                      <Reveal
                        as="figure"
                        delay={80}
                        className="rounded-lg border border-[var(--color-border)] bg-[var(--color-card-strong)] p-3 shadow-sm shadow-black/5"
                      >
                        <img
                          src={cnnCourseImage}
                          alt={artificialIntelligenceStory.courseImage.alt}
                          className="w-full rounded-md border border-[var(--color-border)] object-contain"
                        />
                        <figcaption className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                          {artificialIntelligenceStory.courseImage.caption}
                        </figcaption>
                      </Reveal>
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
          <Reveal as="h3" className="text-lg font-semibold text-[var(--color-heading)]">
            Skills & Tools
          </Reveal>
          <Reveal
            as="p"
            delay={80}
            className="mt-2 max-w-3xl text-sm leading-6 text-[var(--color-muted)]"
          >
            A compact view of the tools, foundations, and practices that support my work.
          </Reveal>
          <div className="mt-5 grid gap-y-6 md:grid-cols-2 md:gap-x-4 xl:grid-cols-5">
            {skillGroups.map((group, index) => (
              <Reveal
                as="div"
                key={group.title}
                delay={(index % 5) * 70}
                className={[
                  'pl-0',
                  index % 2 === 1 ? 'md:border-l md:border-[var(--color-border)] md:pl-4' : '',
                  index > 0 ? 'xl:border-l xl:border-[var(--color-border)] xl:pl-4' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                <h3 className="text-sm font-semibold text-[var(--color-heading)]">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-chip rounded-md bg-[var(--color-chip)] px-3 py-1 text-xs font-medium leading-snug text-[var(--color-chip-text)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
