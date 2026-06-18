import type { Language } from '../context/language';

type LanguageToggleProps = {
  language: Language;
  onChange: (language: Language) => void;
};

export function LanguageToggle({ language, onChange }: LanguageToggleProps) {
  const isArabic = language === 'ar';

  return (
    <div
      className="relative grid h-11 grid-cols-2 rounded-full border border-[var(--color-border)] bg-[var(--color-button)] p-1 text-sm font-semibold text-[var(--color-button-text)] shadow-sm"
      role="group"
      aria-label="Language"
    >
      <span
        aria-hidden="true"
        className={`absolute left-1 top-1 h-[calc(100%-0.5rem)] w-[calc(50%-0.25rem)] rounded-full bg-[var(--color-accent)] transition-transform duration-300 ease-out motion-reduce:transition-none ${
          isArabic ? 'translate-x-full' : 'translate-x-0'
        }`}
      />
      <button
        type="button"
        aria-pressed={!isArabic}
        onClick={() => onChange('en')}
        className={`relative z-10 rounded-full px-3 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] motion-reduce:transition-none ${
          isArabic ? 'text-[var(--color-button-text)]' : 'text-[var(--color-page)]'
        }`}
      >
        English
      </button>
      <button
        type="button"
        aria-pressed={isArabic}
        onClick={() => onChange('ar')}
        className={`relative z-10 rounded-full px-3 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] motion-reduce:transition-none ${
          isArabic ? 'text-[var(--color-page)]' : 'text-[var(--color-button-text)]'
        }`}
      >
        العربية
      </button>
    </div>
  );
}
