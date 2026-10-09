type Theme = 'light' | 'dark';

type ThemeToggleProps = {
  theme: Theme;
  onToggle: () => void;
  labels: {
    switchToLight: string;
    switchToDark: string;
  };
};

export function ThemeToggle({ theme, onToggle, labels }: ThemeToggleProps) {
  const isDark = theme === 'dark';
  const label = isDark ? labels.switchToLight : labels.switchToDark;

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onToggle}
      className="icon-button relative overflow-hidden"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className={`absolute h-[1.125rem] w-[1.125rem] transition duration-[600ms] ease-out motion-reduce:transform-none motion-reduce:transition-none ${
          isDark ? 'translate-y-3 scale-75 opacity-0' : 'translate-y-0 scale-100 opacity-100'
        }`}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </svg>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className={`absolute h-[1.125rem] w-[1.125rem] transition duration-[600ms] ease-out motion-reduce:transform-none motion-reduce:transition-none ${
          isDark ? 'translate-y-0 scale-100 opacity-100' : '-translate-y-3 scale-75 opacity-0'
        }`}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      >
        <path d="M20.99 13.12A8 8 0 1 1 10.88 3.01 6.5 6.5 0 0 0 20.99 13.12Z" />
      </svg>
    </button>
  );
}
