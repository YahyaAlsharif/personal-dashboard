import { Reveal } from '../components/Reveal';

export function BackToTop() {
  return (
    <div className="pb-14 pt-6">
      <div className="page-container border-t border-[var(--color-border)] pt-9">
        <Reveal as="div" className="flex justify-center">
          <a
            href="#top"
            className="action-button mx-auto inline-flex min-h-12 w-full items-center justify-center rounded-lg border px-6 py-3 text-sm font-semibold shadow-md shadow-black/10 ring-1 ring-[var(--color-action-button)] transition sm:w-auto"
          >
            Back to Top
          </a>
        </Reveal>
      </div>
    </div>
  );
}
