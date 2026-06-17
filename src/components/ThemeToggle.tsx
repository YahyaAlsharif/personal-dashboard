type Theme = 'light' | 'dark';

type ThemeToggleProps = {
  theme: Theme;
  onToggle: () => void;
};

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      onClick={onToggle}
      className="inline-flex items-center gap-3 rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-3 py-2 text-sm font-medium text-[var(--color-heading)] shadow-sm transition hover:border-[var(--color-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
    >
      <span
        aria-hidden="true"
        className="grid h-6 w-6 place-items-center rounded-full bg-[var(--color-accent-soft)] text-xs text-[var(--color-accent-strong)]"
      >
        {isDark ? 'D' : 'L'}
      </span>
      <span>{isDark ? 'Dark' : 'Light'}</span>
    </button>
  );
}
