export function BackToTop() {
  return (
    <div className="pb-14 pt-6">
      <div className="page-container border-t border-[var(--color-border)] pt-9">
        <div className="flex justify-center">
          <a
            href="#top"
            className="action-button min-h-12 w-full rounded-lg border px-6 py-3 shadow-md shadow-black/10 transition sm:w-auto"
          >
            Back to Top
          </a>
        </div>
      </div>
    </div>
  );
}
