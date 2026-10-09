import { useEffect, useRef, useState } from 'react';

import type { Language } from '../context/language';
import type { DashboardContent } from '../data/content';
import { LanguageToggle } from './LanguageToggle';
import { SiteLogo } from './SiteLogo';
import { ThemeToggle } from './ThemeToggle';
import { useActiveSection } from './useActiveSection';

type Theme = 'light' | 'dark';

type SiteHeaderProps = {
  header: DashboardContent['header'];
  language: Language;
  onLanguageChange: (language: Language) => void;
  theme: Theme;
  onThemeToggle: () => void;
};

/** Every section the page scrolls through, in order; only some appear in the nav. */
const trackedSections = ['top', 'about', 'experience', 'projects', 'education', 'cv', 'posts', 'contact'];

export function SiteHeader({
  header,
  language,
  onLanguageChange,
  theme,
  onThemeToggle,
}: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const activeSection = useActiveSection(trackedSections, language);

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

  const isActive = (href: string) => href === `#${activeSection}`;

  return (
    <header className="site-header">
      <div className="page-container site-header-inner">
        <SiteLogo label={header.homeLabel} />

        <nav aria-label={header.navigationLabel} className="site-nav">
          {header.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? 'true' : undefined}
              className="site-nav-link"
            >
              <span dir="auto" className="localized-inline">
                {link.label}
              </span>
            </a>
          ))}
        </nav>

        <div className="site-header-actions">
          <LanguageToggle
            language={language}
            onChange={(nextLanguage) => {
              setIsMenuOpen(false);
              onLanguageChange(nextLanguage);
            }}
          />
          <ThemeToggle theme={theme} onToggle={onThemeToggle} labels={header.theme} />
          <button
            ref={menuToggleRef}
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="header-mobile-nav"
            aria-label={isMenuOpen ? header.menu.close : header.menu.open}
            onClick={() => setIsMenuOpen((current) => !current)}
            className="icon-button menu-toggle"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.8"
            >
              {isMenuOpen ? (
                <>
                  <path d="m6 6 12 12" />
                  <path d="M18 6 6 18" />
                </>
              ) : (
                <>
                  <path d="M4 8h16" />
                  <path d="M4 16h16" />
                </>
              )}
            </svg>
          </button>
        </div>

        <nav
          id="header-mobile-nav"
          aria-label={header.navigationLabel}
          className="mobile-nav"
          hidden={!isMenuOpen}
        >
          {header.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? 'true' : undefined}
              onClick={() => setIsMenuOpen(false)}
              className="mobile-nav-link"
            >
              <span dir="auto" className="localized-inline">
                {link.label}
              </span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
