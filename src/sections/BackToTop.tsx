export function BackToTop() {
  return (
    <div className="px-5 pb-12 pt-2 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl justify-center border-t border-[var(--color-border)] pt-8">
        <a
          href="#top"
          className="rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] px-5 py-3 text-sm font-semibold text-[var(--color-heading)] transition hover:border-[var(--color-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
        >
          Back to Top
        </a>
      </div>
    </div>
  );
}
