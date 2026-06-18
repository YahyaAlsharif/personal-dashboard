export function BackToTop() {
  return (
    <div className="pb-12 pt-2">
      <div className="page-container flex justify-center border-t border-[var(--color-border)] pt-8">
        <a
          href="#top"
          className="rounded-lg border border-[var(--color-border)] bg-[var(--color-button)] px-5 py-3 text-sm font-semibold text-[var(--color-button-text)] transition hover:border-[var(--color-border-strong)] hover:bg-[var(--color-button-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
        >
          Back to Top
        </a>
      </div>
    </div>
  );
}
