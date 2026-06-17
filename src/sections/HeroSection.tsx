import { heroLinks, profile } from '../data/profile';

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-hero)]"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase text-[var(--color-accent)]">
            Personal Dashboard
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-[var(--color-heading)] sm:text-5xl lg:text-6xl">
            Hi, I am {profile.name}.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
            {profile.intro}
          </p>
          <p className="mt-4 text-base font-medium text-[var(--color-heading)]">
            {profile.title}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {heroLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className={
                  index === 0
                    ? 'rounded-lg bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--color-accent-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]'
                    : 'rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] px-5 py-3 text-sm font-semibold text-[var(--color-heading)] transition hover:border-[var(--color-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]'
                }
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm">
          <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] p-4 shadow-xl shadow-slate-950/10">
            <div className="grid aspect-square place-items-center rounded-lg bg-[var(--color-profile)] text-center">
              <div>
                <div className="mx-auto grid h-28 w-28 place-items-center rounded-full border border-white/40 bg-white/20 text-4xl font-semibold text-white shadow-lg">
                  YA
                </div>
                <p className="mt-6 text-xl font-semibold text-white">{profile.name}</p>
                <p className="mt-2 px-6 text-sm leading-6 text-white/85">{profile.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
