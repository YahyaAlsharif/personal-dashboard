import { useEffect, useState } from 'react';

import { SiteHeader } from './components/SiteHeader';
import { LanguageProvider } from './context/LanguageContext';
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
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme;
  }

  return 'light';
};

function Dashboard() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const { language, setLanguage } = useLanguage();
  const content = localizedContent[language];

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', themeColors[theme]);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen bg-[var(--color-page)] text-[var(--color-body)]">
      <SiteHeader
        header={content.header}
        language={language}
        onLanguageChange={setLanguage}
        theme={theme}
        onThemeToggle={toggleTheme}
      />

      <main key={language} className="language-content">
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
