import { createContext } from 'react';

export type Language = 'en' | 'ar';

export type LanguageContextValue = {
  language: Language;
  isArabic: boolean;
  setLanguage: (language: Language) => void;
};

export const LanguageContext = createContext<LanguageContextValue | null>(null);
