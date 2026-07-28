import { useEffect, useState } from 'react';

import profilePicture from '../assets/profile/profile-picture-optimized.jpg';
import { ExternalLink } from '../components/ExternalLink';
import { Reveal } from '../components/Reveal';
import { useLanguage } from '../context/useLanguage';
import { localizedContent } from '../data/content';

const shouldRenderHeroVideo = () =>
  window.matchMedia('(min-width: 768px)').matches &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function HeroSection() {
  const [renderVideo, setRenderVideo] = useState(shouldRenderHeroVideo);
  const { language } = useLanguage();
  const { hero, externalLinkLabel } = localizedContent[language];
  const heroVideoSrc = `${import.meta.env.BASE_URL}hero/makkah-clock-tower.mp4`;
  const heroPosterSrc = `${import.meta.env.BASE_URL}hero/makkah-clock-tower-poster.jpg`;

  useEffect(() => {
    const viewportQuery = window.matchMedia('(min-width: 768px)');
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
    <section
      id="top"
      className="hero-section relative isolate min-h-[calc(100vh-7.5rem)] overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-page)] xl:min-h-[calc(100vh-4.75rem)]"
    >
      {renderVideo ? (
        <video
          aria-hidden="true"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={heroPosterSrc}
          className="hero-background-video absolute inset-0 -z-30 h-full w-full object-cover"
        >
          <source src={heroVideoSrc} type="video/mp4" />
        </video>
      ) : (
        <img
          aria-hidden="true"
          src={heroPosterSrc}
          alt=""
          width="1280"
          height="720"
          className="hero-background-video absolute inset-0 -z-30 h-full w-full object-cover"
        />
      )}
      <div
        aria-hidden="true"
        className="hero-video-overlay absolute inset-0 -z-20"
      />
      <div
        aria-hidden="true"
        className="hero-bottom-fade absolute inset-x-0 bottom-0 -z-10 h-1/3"
      />

      <div className="page-container grid min-h-[calc(100vh-7.5rem)] gap-10 py-16 sm:py-20 lg:grid-cols-[minmax(0,1.08fr)_minmax(18rem,0.56fr)] lg:items-center xl:min-h-[calc(100vh-4.75rem)]">
        <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-[var(--shadow-card)] sm:p-8">
          <Reveal as="p" className="text-sm font-semibold uppercase text-[var(--color-accent)]">
            {hero.eyebrow}
          </Reveal>
          <Reveal
            as="h1"
            delay={80}
            className="me-auto mt-5 max-w-4xl text-4xl font-semibold leading-tight text-[var(--color-heading)] sm:text-5xl lg:text-6xl"
          >
            {hero.title}
          </Reveal>
          <Reveal
            as="p"
            delay={140}
            className="me-auto mt-5 max-w-3xl text-lg font-semibold leading-8 text-[var(--color-heading)] sm:text-xl"
          >
            {hero.proof}
          </Reveal>
          <Reveal
            as="p"
            delay={180}
            className="prose-justify me-auto mt-4 max-w-2xl text-base leading-7 text-[var(--color-muted)] sm:text-lg"
          >
            {hero.intro}
          </Reveal>

          <Reveal
            as="div"
            delay={220}
            className="mt-6 flex flex-wrap gap-3"
          >
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
        </div>

        <Reveal
          as="div"
          delay={180}
          className="w-full max-w-xs sm:max-w-sm lg:ms-auto lg:max-w-[21rem]"
        >
          <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] p-3 shadow-[var(--shadow-card)]">
            <div className="overflow-hidden rounded-lg bg-[var(--color-card-strong)]">
              <img
                src={profilePicture}
                alt={hero.profileAlt}
                className="aspect-square w-full object-cover object-center"
              />
              <div className="px-5 py-4 text-center">
                <p
                  className="text-xl font-semibold text-[var(--color-heading)]"
                >
                  {hero.profileName}
                </p>
                <p
                  className="mt-2 text-sm leading-6 text-[var(--color-muted)]"
                >
                  {hero.profileLocation}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
