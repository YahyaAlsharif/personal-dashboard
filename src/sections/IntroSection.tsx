import { useEffect, useState } from 'react';

import { ExternalLink } from '../components/ExternalLink';
import { Reveal } from '../components/Reveal';
import { useLanguage } from '../context/useLanguage';
import { localizedContent, portraitSrc } from '../data/content';

const shouldRenderHeroVideo = () =>
  window.matchMedia('(min-width: 1024px)').matches &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Hero and About share one grid. The portrait is a fixed part of the hero row:
 * it does not follow the page or travel into About.
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
            className="intro-identity mt-6 max-w-2xl text-lg font-semibold leading-8 text-[var(--color-heading)] sm:text-xl"
          >
            <span dir="auto" className="localized-inline">
              {hero.proof}
            </span>
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

        <Reveal as="div" delay={180} className="intro-portrait">
          <figure className="profile-frame">
            <img
              src={portraitSrc}
              alt={hero.profileAlt}
              width="900"
              height="1200"
              className="profile-frame-image"
            />
            <figcaption className="profile-frame-caption">
              <span className="profile-frame-name">{hero.profileName}</span>
              <span dir="auto" className="localized-inline profile-frame-location">
                {hero.profileLocation}
              </span>
            </figcaption>
          </figure>
        </Reveal>

        <section id="about" className="intro-about scroll-mt-32 xl:scroll-mt-24">
          <Reveal
            as="h2"
            className="text-3xl font-semibold tracking-tight text-[var(--color-heading)] sm:text-4xl"
          >
            {about.title}
          </Reveal>
          <div className="intro-about-columns mt-6">
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
