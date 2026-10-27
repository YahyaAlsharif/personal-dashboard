import { useLayoutEffect, useState } from 'react';

import { SiteHeader } from './components/SiteHeader';
import { withViewTransition } from './components/withViewTransition';
import type { Language } from './context/language';
import { LanguageProvider } from './context/LanguageContext';
import { readStorage, writeStorage } from './context/storage';
import { useLanguage } from './context/useLanguage';
import { localizedContent } from './data/content';
import { ContactSection } from './sections/ContactSection';
import { CvSection } from './sections/CvSection';
import { EducationSection } from './sections/EducationSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { IntroSection } from './sections/IntroSection';
import { PostsSection } from './sections/PostsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { SiteFooter } from './sections/SiteFooter';
import { SkillsSection } from './sections/SkillsSection';

type Theme = 'light' | 'dark';

/** Matches --color-page so the browser chrome blends with the page. */
const themeColors: Record<Theme, string> = {
  light: '#ffffff',
  dark: '#0a0a0a',
};

/** Light is the default presentation; a saved choice always wins. */
const getInitialTheme = (): Theme => {
  const savedTheme = readStorage('theme');

  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme;
  }

  return 'light';
};

function Dashboard() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const { language, setLanguage } = useLanguage();
  const content = localizedContent[language];

  // A layout effect, so the new theme is in place before a view transition
  // captures the page.
  useLayoutEffect(() => {
    const root = document.documentElement;

    // Every colour switches at once instead of buttons and cards easing on
    // their own timers; the forced style read commits the change untransitioned.
    root.classList.add('theme-switching');
    root.dataset.theme = theme;
    window.getComputedStyle(root).getPropertyValue('color');
    root.classList.remove('theme-switching');

    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', themeColors[theme]);
    writeStorage('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    withViewTransition(() => {
      setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
    });
  };

  const changeLanguage = (nextLanguage: Language) => {
    if (nextLanguage !== language) {
      withViewTransition(() => setLanguage(nextLanguage));
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-page)] text-[var(--color-body)]">
      <a href="#main" className="skip-link">
        {content.header.skipToContent}
      </a>

      <SiteHeader
        header={content.header}
        language={language}
        onLanguageChange={changeLanguage}
        theme={theme}
        onThemeToggle={toggleTheme}
      />

      <main id="main" tabIndex={-1}>
        <IntroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <CvSection />
        <PostsSection />
        <ContactSection />
      </main>

      <SiteFooter />
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
