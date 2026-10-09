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
