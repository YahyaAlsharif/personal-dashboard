import { useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

import { LanguageContext, type Language } from './language';

const getInitialLanguage = (): Language => {
  const savedLanguage = localStorage.getItem('language');

  return savedLanguage === 'ar' ? 'ar' : 'en';
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem('language', language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      isArabic: language === 'ar',
      setLanguage,
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
