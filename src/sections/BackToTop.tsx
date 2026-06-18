import { Reveal } from '../components/Reveal';

export function BackToTop() {
  return (
    <div className="pb-14 pt-4">
      <div className="page-container border-t border-[var(--color-border)] pt-8">
        <Reveal as="div" className="flex justify-center">
          <a
            href="#top"
            className="action-button mx-auto inline-flex min-h-11 items-center justify-center rounded-lg border px-5 text-sm font-semibold shadow-sm shadow-black/5 transition"
          >
            Back to Top
          </a>
        </Reveal>
      </div>
    </div>
  );
}
