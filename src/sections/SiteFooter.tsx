import { useLanguage } from '../context/useLanguage';
import { localizedContent } from '../data/content';

export function SiteFooter() {
  const { language } = useLanguage();
  const { backToTop, copyright } = localizedContent[language];

  return (
    <footer className="site-footer">
      <div className="page-container site-footer-inner">
        <p className="type-meta">{copyright(new Date().getFullYear())}</p>
        <a href="#top" className="btn btn-secondary">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M12 19V5" />
            <path d="m5 12 7-7 7 7" />
          </svg>
          <span dir="auto" className="localized-inline">
            {backToTop}
          </span>
        </a>
      </div>
    </footer>
  );
}
