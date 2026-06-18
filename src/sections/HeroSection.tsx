import profilePicture from '../assets/profile/profile-picture-optimized.jpg';
import { Reveal } from '../components/Reveal';
import { heroLinks, profile } from '../data/profile';

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-hero)]"
    >
      <div className="page-container grid gap-8 py-14 sm:py-16 lg:grid-cols-[minmax(0,1.08fr)_minmax(18rem,0.56fr)] lg:items-center">
        <div>
          <Reveal as="p" className="text-sm font-semibold uppercase text-[var(--color-accent)]">
            Personal Dashboard
          </Reveal>
          <Reveal
            as="h1"
            delay={80}
            className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-[var(--color-heading)] sm:text-5xl lg:text-6xl"
          >
            Hi, I'm {profile.name}.
          </Reveal>
          <Reveal
            as="p"
            delay={140}
            className="mt-4 max-w-2xl text-lg leading-8 text-[var(--color-muted)]"
          >
            {profile.intro}
          </Reveal>
          <Reveal
            as="p"
            delay={180}
            className="mt-3 text-base font-medium text-[var(--color-heading)]"
          >
            {profile.title}
          </Reveal>

          <Reveal as="div" delay={220} className="mt-6 flex flex-wrap gap-3">
            {heroLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="action-button rounded-lg border px-5 py-3 text-sm font-semibold shadow-sm shadow-black/5 transition"
              >
                {link.label}
              </a>
            ))}
          </Reveal>
        </div>

        <Reveal
          as="div"
          delay={180}
          className="w-full max-w-xs sm:max-w-sm lg:ml-auto lg:max-w-[21rem]"
        >
          <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] p-3 shadow-xl shadow-black/10">
            <div className="overflow-hidden rounded-lg bg-[var(--color-profile)]">
              <img
                src={profilePicture}
                alt="Yahya Alsharif"
                className="aspect-square w-full object-cover object-center"
              />
              <div className="px-5 py-4 text-center">
                <p className="text-xl font-semibold text-[var(--color-heading)]">
                  {profile.name}
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                  {profile.location}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
