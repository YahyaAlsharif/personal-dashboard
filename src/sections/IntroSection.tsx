import { useEffect, useState } from 'react';

import { ExternalLink } from '../components/ExternalLink';
import { Reveal } from '../components/Reveal';
import { useLanguage } from '../context/useLanguage';
import { localizedContent, portraitSrc } from '../data/content';

const shouldRenderHeroVideo = () =>
  window.matchMedia('(min-width: 1024px)').matches &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Hero and About share one grid so the portrait can travel with the copy
 * and come to rest where the About section ends.
 */
export function IntroSection() {
  const [renderVideo, setRenderVideo] = useState(shouldRenderHeroVideo);
  const { language } = useLanguage();
  const { hero, about, externalLinkLabel } = localizedContent[language];
  const heroVideoSrc = `${import.meta.env.BASE_URL}hero/makkah-clock-tower.mp4`;
  const heroPosterSrc = `${import.meta.env.BASE_URL}hero/makkah-clock-tower-poster.jpg`;

  useEffect(() => {
    const viewportQuery = window.matchMedia('(min-width: 1024px)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateVideoState = () => {
      setRenderVideo(viewportQuery.matches && !motionQuery.matches);
    };

    viewportQuery.addEventListener('change', updateVideoState);
    motionQuery.addEventListener('change', updateVideoState);

    return () => {
      viewportQuery.removeEventListener('change', updateVideoState);
      motionQuery.removeEventListener('change', updateVideoState);
    };
  }, []);

  return (
    <div className="intro-shell">
      <div aria-hidden="true" className="intro-backdrop">
        {renderVideo ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={heroPosterSrc}
            className="intro-backdrop-media"
          >
            <source src={heroVideoSrc} type="video/mp4" />
          </video>
        ) : (
          <img
            src={heroPosterSrc}
            alt=""
            width="1280"
            height="720"
            className="intro-backdrop-media"
          />
        )}
        <span className="intro-backdrop-veil" />
      </div>

      <div className="page-container intro-grid">
        <section id="top" className="intro-hero">
          <Reveal
            as="h1"
            className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-[var(--color-heading)] sm:text-5xl lg:text-6xl"
          >
            {hero.title}
          </Reveal>
          <Reveal
            as="p"
            delay={90}
            className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-heading)] sm:text-xl"
          >
            {hero.proof}
          </Reveal>
          <Reveal
            as="p"
            delay={150}
            className="mt-4 max-w-2xl text-base leading-7 text-[var(--color-muted)]"
          >
            {hero.intro}
          </Reveal>
          <Reveal as="div" delay={210} className="mt-8 flex flex-wrap gap-3">
            {hero.links.map((link, index) => {
              const className = `rounded-lg border px-5 py-3 text-sm font-semibold transition ${
                index === 0 ? 'hero-primary-button' : 'hero-secondary-button'
              }`;
              const label = (
                <span dir="auto" className="localized-inline">
                  {link.label}
                </span>
              );

              return link.external ? (
                <ExternalLink
                  key={link.href}
                  href={link.href}
                  newTabLabel={externalLinkLabel}
                  className={className}
                >
                  {label}
                </ExternalLink>
              ) : (
                <a key={link.href} href={link.href} className={className}>
                  {label}
                </a>
              );
            })}
          </Reveal>
        </section>

        <div className="intro-portrait">
          <img
            src={portraitSrc}
            alt={hero.profileAlt}
            width="880"
            height="1111"
            className="intro-portrait-image"
          />
        </div>

        <section id="about" className="intro-about scroll-mt-32 xl:scroll-mt-24">
          <Reveal
            as="h2"
            className="text-3xl font-semibold tracking-tight text-[var(--color-heading)] sm:text-4xl"
          >
            {about.title}
          </Reveal>
          <div className="mt-6 max-w-2xl space-y-5 text-base leading-8 text-[var(--color-muted)] sm:text-lg">
            {about.paragraphs.map((paragraph, index) => (
              <Reveal as="p" key={paragraph} delay={index * 90} className="prose-justify">
                {paragraph}
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
