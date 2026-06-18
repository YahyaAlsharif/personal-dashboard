import { useLanguage } from '../context/useLanguage';
import { localizedContent } from '../data/content';

export function BackToTop() {
  const { language } = useLanguage();
  const { backToTop } = localizedContent[language];

  return (
    <div className="pb-14 pt-6">
      <div className="page-container border-t border-[var(--color-border)] pt-9">
        <div className="flex justify-center">
          <a
            href="#top"
            className="action-button min-h-12 w-full rounded-lg border px-6 py-3 shadow-md shadow-black/10 transition sm:w-auto"
          >
            {backToTop}
          </a>
        </div>
      </div>
    </div>
  );
}
