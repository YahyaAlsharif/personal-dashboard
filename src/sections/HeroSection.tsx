import profilePicture from '../assets/profile/profile-picture-optimized.jpg';
import { Reveal } from '../components/Reveal';
import { useLanguage } from '../context/useLanguage';
import { localizedContent } from '../data/content';

export function HeroSection() {
  const { language, isArabic } = useLanguage();
  const { hero } = localizedContent[language];
  const textDirection = isArabic ? 'rtl' : 'ltr';
  const localizedClass = isArabic ? 'localized-text' : '';
  const heroCopyClass = isArabic ? 'localized-hero-copy' : '';
  const heroVideoSrc = `${import.meta.env.BASE_URL}hero/makkah-clock-tower.mp4`;

  return (
    <section
      id="top"
      className="relative isolate min-h-[calc(100vh-4.75rem)] overflow-hidden border-b border-white/10 bg-[#030506]"
    >
      <video
        aria-hidden="true"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="hero-background-video absolute inset-0 -z-30 h-full w-full object-cover"
      >
        <source src={heroVideoSrc} type="video/mp4" />
      </video>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_22%,rgba(184,223,225,0.2),transparent_28%),linear-gradient(90deg,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.68)_44%,rgba(0,0,0,0.4)_72%,rgba(0,0,0,0.76)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-[#030506] to-transparent"
      />

      <div className="page-container grid min-h-[calc(100vh-4.75rem)] gap-10 py-16 sm:py-20 lg:grid-cols-[minmax(0,1.08fr)_minmax(18rem,0.56fr)] lg:items-center">
        <div className={heroCopyClass}>
          <Reveal as="p" className="text-sm font-semibold uppercase text-[#b8dfe1]">
            {hero.eyebrow}
          </Reveal>
          <Reveal
            as="h1"
            delay={80}
            dir={textDirection}
            className={`mt-5 text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl ${isArabic ? 'w-full max-w-none' : 'max-w-4xl'} ${localizedClass}`}
          >
            {hero.title}
          </Reveal>
          <Reveal
            as="p"
            delay={140}
            dir={textDirection}
            className={`mt-5 text-lg leading-8 text-white/78 sm:text-xl ${isArabic ? 'w-full max-w-none' : 'max-w-2xl'} ${localizedClass}`}
          >
            {hero.intro}
          </Reveal>
          <Reveal
            as="p"
            delay={180}
            dir={textDirection}
            className={`mt-4 text-base font-medium text-white/92 ${localizedClass}`}
          >
            {hero.role}
          </Reveal>

          <Reveal
            as="div"
            delay={220}
            className={`mt-6 flex flex-wrap gap-3 ${isArabic ? 'localized-actions' : ''}`}
          >
            {hero.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="action-button rounded-lg border px-5 py-3 text-sm font-semibold shadow-lg shadow-black/20 transition"
              >
                <span dir={isArabic ? 'auto' : undefined} className="localized-inline">
                  {link.label}
                </span>
              </a>
            ))}
          </Reveal>
        </div>

        <Reveal
          as="div"
          delay={180}
          className="w-full max-w-xs sm:max-w-sm lg:ml-auto lg:max-w-[21rem]"
        >
          <div className="rounded-lg border border-white/18 bg-white/10 p-3 shadow-2xl shadow-black/40 backdrop-blur-md">
            <div className="overflow-hidden rounded-lg bg-black/30">
              <img
                src={profilePicture}
                alt={hero.profileAlt}
                className="aspect-square w-full object-cover object-center"
              />
              <div className="px-5 py-4 text-center">
                <p
                  dir={textDirection}
                  className={`text-xl font-semibold text-white ${localizedClass}`}
                >
                  {hero.profileName}
                </p>
                <p
                  dir={textDirection}
                  className={`mt-2 text-sm leading-6 text-white/72 ${localizedClass}`}
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
