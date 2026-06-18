import { Reveal } from '../components/Reveal';

export function BackToTop() {
  return (
    <div className="pb-14 pt-4">
      <div className="page-container border-t border-[var(--color-border)] pt-8">
        <Reveal as="div" className="flex justify-center">
          <a
            href="#top"
            className="mx-auto inline-flex min-h-11 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-button)] px-5 text-sm font-semibold text-[var(--color-button-text)] shadow-sm shadow-black/5 transition hover:border-[var(--color-border-strong)] hover:bg-[var(--color-button-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
          >
            Back to Top
          </a>
        </Reveal>
      </div>
    </div>
  );
}
