import { useEffect, useState } from 'react';

import { ThemeToggle } from './components/ThemeToggle';
import { AboutSection } from './sections/AboutSection';
import { BackToTop } from './sections/BackToTop';
import { ContactSection } from './sections/ContactSection';
import { CvSection } from './sections/CvSection';
import { EducationSection } from './sections/EducationSection';
import { HeroSection } from './sections/HeroSection';
import { ProjectsSection } from './sections/ProjectsSection';

type Theme = 'light' | 'dark';

const getInitialTheme = (): Theme => {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

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
        <div className="page-container flex items-center justify-between gap-4 py-4">
          <a
            href="#top"
            className="text-sm font-semibold text-[var(--color-heading)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
          >
            Yahya Alsharif
          </a>
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>
      </header>

      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ProjectsSection />
        <CvSection />
        <ContactSection />
        <BackToTop />
      </main>
    </div>
  );
}

export default App;
