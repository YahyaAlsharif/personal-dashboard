import { useEffect, useRef, useState } from 'react';

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
  const [isVideoPaused, setIsVideoPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { language } = useLanguage();
  const { hero, about, externalLinkLabel } = localizedContent[language];
  const heroVideoSrc = `${import.meta.env.BASE_URL}hero/makkah-clock-tower.mp4`;
  const heroPosterSrc = `${import.meta.env.BASE_URL}hero/makkah-clock-tower-poster.jpg`;
  const internalLinks = hero.links.filter((link) => !link.external);
  const externalLinks = hero.links.filter((link) => link.external);

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

  const toggleVideo = () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (video.paused) {
      // Playback can be refused (for example by power-saving modes); the
      // button simply stays on "play".
      video.play().catch(() => undefined);
    } else {
      video.pause();
    }
  };

  return (
    <div className="intro-shell">
      <div aria-hidden="true" className="intro-backdrop">
        {renderVideo ? (
          <video
            ref={videoRef}
            onPlay={() => setIsVideoPaused(false)}
            onPause={() => setIsVideoPaused(true)}
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
          <Reveal as="h1" className="type-display">
            {hero.title}
          </Reveal>
          <Reveal as="p" delay={90} className="hero-role">
            <span dir="auto" className="localized-inline">
              {hero.proof}
            </span>
          </Reveal>
          <Reveal as="p" delay={150} className="hero-intro type-lead">
            {hero.intro}
          </Reveal>
          <Reveal as="div" delay={210} className="hero-actions">
            {/* In-page destinations are buttons; profiles elsewhere stay quiet links. */}
            <div className="hero-buttons">
              {internalLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`btn ${index === 0 ? 'btn-primary' : 'btn-secondary'}`}
                >
                  <span dir="auto" className="localized-inline">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
            <div className="hero-links">
              {externalLinks.map((link) => (
                <ExternalLink
                  key={link.href}
                  href={link.href}
                  newTabLabel={externalLinkLabel}
                  className="quiet-link"
                >
                  <span dir="auto" className="localized-inline">
                    {link.label}
                  </span>
                </ExternalLink>
              ))}
            </div>
          </Reveal>
        </section>

        <Reveal as="div" delay={180} className="intro-portrait">
          <figure className="profile-frame">
            <img
              src={portraitSrc}
              alt={hero.profileAlt}
              width="800"
              height="1000"
              fetchPriority="high"
              className="profile-frame-image"
            />
            <figcaption className="profile-frame-caption type-meta">
              <span dir="auto" className="localized-inline">
                {hero.profileLocation}
              </span>
            </figcaption>
          </figure>

          {/* The looping backdrop runs longer than five seconds, so it can be paused (WCAG 2.2.2). */}
          {renderVideo ? (
            <button
              type="button"
              aria-label={isVideoPaused ? hero.video.play : hero.video.pause}
              title={isVideoPaused ? hero.video.play : hero.video.pause}
              onClick={toggleVideo}
              className="icon-button hero-video-toggle"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="currentColor"
              >
                {isVideoPaused ? (
                  <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z" />
                ) : (
                  <>
                    <rect x="6.5" y="5" width="4" height="14" rx="1" />
                    <rect x="13.5" y="5" width="4" height="14" rx="1" />
                  </>
                )}
              </svg>
            </button>
          ) : null}
        </Reveal>

        <section id="about" className="intro-about">
          <Reveal as="h2" className="type-section">
            {about.title}
          </Reveal>
          <div className="intro-about-columns">
            {about.paragraphs.map((paragraph, index) => (
              <Reveal as="p" key={paragraph} delay={index * 90} className="type-lead">
                {paragraph}
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
