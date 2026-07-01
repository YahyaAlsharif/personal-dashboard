import { useEffect, useState } from 'react';

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
  const { language, setLanguage } = useLanguage();
  const content = localizedContent[language];
  const logoSrc = `${import.meta.env.BASE_URL}y-logo.svg`;

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen bg-[var(--color-page)] text-[var(--color-body)]">
      <header className="sticky top-0 z-20 border-b border-[var(--color-border)] bg-[var(--color-header)] backdrop-blur">
        <div className="page-container flex flex-wrap items-center justify-between gap-3 py-4">
          <a
            href="#top"
            aria-label="Yahya Alsharif home"
            className="site-logo-link focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
          >
            <img src={logoSrc} alt="" className="site-logo-image" />
          </a>
          <div className="flex flex-wrap items-center justify-end gap-3">
            <LanguageToggle language={language} onChange={setLanguage} />
            <ThemeToggle
              theme={theme}
              onToggle={toggleTheme}
              labels={content.header.theme}
            />
          </div>
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
