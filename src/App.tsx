import { useEffect, useRef, useState } from 'react';

import { LanguageToggle } from './components/LanguageToggle';
import { ThemeToggle } from './components/ThemeToggle';
import { LanguageProvider } from './context/LanguageContext';
import { useLanguage } from './context/useLanguage';
import { localizedContent } from './data/content';
import { AboutSection } from './sections/AboutSection';
import { BackToTop } from './sections/BackToTop';
import { ContactSection } from './sections/ContactSection';
import { CvSection } from './sections/CvSection';
import { EducationSection } from './sections/EducationSection';
import { HeroSection } from './sections/HeroSection';
import { PostsSection } from './sections/PostsSection';
import { ProjectsSection } from './sections/ProjectsSection';

type Theme = 'light' | 'dark';

const getInitialTheme = (): Theme => {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

function Dashboard() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const { language, setLanguage } = useLanguage();
  const content = localizedContent[language];
  const logoSrc = `${import.meta.env.BASE_URL}y-logo.svg`;

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        window.requestAnimationFrame(() => menuToggleRef.current?.focus());
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen bg-[var(--color-page)] text-[var(--color-body)]">
      <header className="sticky top-0 z-20 border-b border-[var(--color-border)] bg-[var(--color-header)] backdrop-blur">
        <div className="page-container relative py-3">
          <div className="grid grid-cols-[auto_auto] items-center justify-between gap-3 sm:grid-cols-[auto_1fr_auto] xl:gap-5">
            <a
              href="#top"
              aria-label={content.header.homeLabel}
              className="site-logo-link focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            >
              <img src={logoSrc} alt="" className="site-logo-image" />
            </a>

            <nav
              aria-label={content.header.navigationLabel}
              className="hidden min-w-0 flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-semibold text-[var(--color-body)] sm:col-span-3 sm:row-start-2 sm:flex xl:col-span-1 xl:col-start-2 xl:row-start-1"
            >
              {content.header.nav.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-sm py-1 transition hover:text-[var(--color-heading)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                >
                  <span dir={language === 'ar' ? 'auto' : undefined} className="localized-inline">
                    {link.label}
                  </span>
                </a>
              ))}
            </nav>

            <button
              ref={menuToggleRef}
              type="button"
              aria-expanded={isMenuOpen}
              aria-controls="header-mobile-nav"
              aria-label={isMenuOpen ? content.header.menu.close : content.header.menu.open}
              onClick={() => setIsMenuOpen((current) => !current)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-button)] text-[var(--color-button-text)] transition hover:border-[var(--color-border-strong)] hover:bg-[var(--color-button-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] sm:hidden"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
              >
                {isMenuOpen ? (
                  <>
                    <path d="m6 6 12 12" />
                    <path d="M18 6 6 18" />
                  </>
                ) : (
                  <>
                    <path d="M4 7h16" />
                    <path d="M4 12h16" />
                    <path d="M4 17h16" />
                  </>
                )}
              </svg>
            </button>

            <div className="col-span-2 flex flex-wrap items-center justify-between gap-3 sm:col-span-1 sm:col-start-3 sm:row-start-1 sm:justify-end">
              <LanguageToggle
                language={language}
                onChange={(nextLanguage) => {
                  setIsMenuOpen(false);
                  setLanguage(nextLanguage);
                }}
              />
              <ThemeToggle
                theme={theme}
                onToggle={toggleTheme}
                labels={content.header.theme}
              />
            </div>
          </div>

          <nav
            id="header-mobile-nav"
            aria-label={content.header.navigationLabel}
            className={`absolute inset-x-5 top-full gap-1 rounded-lg border border-[var(--color-border)] bg-[var(--color-card-strong)] p-2 shadow-[var(--shadow-card)] sm:hidden ${
              isMenuOpen ? 'grid' : 'hidden'
            }`}
          >
            {content.header.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-md px-4 py-3 text-sm font-semibold text-[var(--color-body)] transition hover:bg-[var(--color-button-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
              >
                <span dir={language === 'ar' ? 'auto' : undefined} className="localized-inline">
                  {link.label}
                </span>
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main key={language} className="language-content">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ProjectsSection />
        <CvSection />
        <PostsSection />
        <ContactSection />
        <BackToTop />
      </main>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Dashboard />
    </LanguageProvider>
  );
}

export default App;
