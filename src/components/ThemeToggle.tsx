type Theme = 'light' | 'dark';

type ThemeToggleProps = {
  theme: Theme;
  onToggle: () => void;
  labels: {
    light: string;
    dark: string;
    switchToLight: string;
    switchToDark: string;
  };
};

export function ThemeToggle({ theme, onToggle, labels }: ThemeToggleProps) {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      aria-label={isDark ? labels.switchToLight : labels.switchToDark}
      onClick={onToggle}
      className="inline-flex items-center gap-3 rounded-full border border-[var(--color-border)] bg-[var(--color-button)] px-3 py-2 text-sm font-medium text-[var(--color-button-text)] shadow-sm transition hover:border-[var(--color-border-strong)] hover:bg-[var(--color-button-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
    >
      <span
        aria-hidden="true"
        className="relative grid h-6 w-6 place-items-center overflow-hidden rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent-strong)]"
      >
        <svg
          viewBox="0 0 24 24"
          className={`absolute h-4 w-4 transition duration-[600ms] ease-out motion-reduce:transform-none motion-reduce:transition-none ${
            isDark ? 'translate-y-3 scale-75 opacity-0' : 'translate-y-0 scale-100 opacity-100'
          }`}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
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
          viewBox="0 0 24 24"
          className={`absolute h-4 w-4 transition duration-[600ms] ease-out motion-reduce:transform-none motion-reduce:transition-none ${
            isDark ? 'translate-y-0 scale-100 opacity-100' : '-translate-y-3 scale-75 opacity-0'
          }`}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path d="M20.99 13.12A8 8 0 1 1 10.88 3.01 6.5 6.5 0 0 0 20.99 13.12Z" />
        </svg>
      </span>
      <span>{isDark ? labels.dark : labels.light}</span>
    </button>
  );
}
