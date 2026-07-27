import { useState } from 'react';

import { DashboardCard } from '../components/DashboardCard';
import { SectionHeading } from '../components/SectionHeading';
import { useLanguage } from '../context/useLanguage';
import { localizedContent } from '../data/content';

export function PostsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { language, isArabic } = useLanguage();
  const { posts } = localizedContent[language];
  const textDirection = isArabic ? 'rtl' : 'ltr';
  const localizedClass = isArabic ? 'localized-text' : '';
  const currentPost = posts.items[currentIndex];

  const showPreviousPost = () => {
    setCurrentIndex((index) => (index - 1 + posts.items.length) % posts.items.length);
  };

  const showNextPost = () => {
    setCurrentIndex((index) => (index + 1) % posts.items.length);
  };

  return (
    <section id="posts" className="scroll-mt-24 py-14">
      <div className="page-container">
        <SectionHeading
          eyebrow={posts.eyebrow}
          title={posts.title}
          description={posts.description}
          isArabic={isArabic}
        />

        <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 sm:gap-4">
          <button
            type="button"
            aria-label={posts.previousButton}
            title={posts.previousButton}
            onClick={showPreviousPost}
            className="action-button h-12 w-12 flex-none rounded-full border text-2xl transition"
          >
            <span aria-hidden="true">‹</span>
          </button>

          <DashboardCard
            key={currentPost.postUrl}
            as="article"
            className="flex min-w-0 flex-col gap-5"
            revealDelay={90}
          >
            <div>
              <h3
                dir={textDirection}
                className={`text-xl font-semibold text-[var(--color-heading)] ${localizedClass}`}
              >
                {currentPost.title}
              </h3>
              <p
                dir={textDirection}
                className={`mt-3 text-sm leading-6 text-[var(--color-muted)] ${localizedClass}`}
              >
                {currentPost.description}
              </p>
            </div>

            <div className="overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-card-strong)]">
              <iframe
                src={currentPost.embedUrl}
                title={currentPost.iframeTitle}
                className="h-[39.25rem] w-full"
                allowFullScreen
                loading="lazy"
              />
            </div>

            <div className={`mt-auto flex ${isArabic ? 'localized-actions' : ''}`}>
              <a
                href={currentPost.postUrl}
                target="_blank"
                rel="noreferrer"
                className="action-button rounded-lg border px-5 py-3 text-sm font-semibold transition"
              >
                <span dir={isArabic ? 'auto' : undefined} className="localized-inline">
                  {posts.viewButton}
                </span>
              </a>
            </div>
          </DashboardCard>

          <button
            type="button"
            aria-label={posts.nextButton}
            title={posts.nextButton}
            onClick={showNextPost}
            className="action-button h-12 w-12 flex-none rounded-full border text-2xl transition"
          >
            <span aria-hidden="true">›</span>
          </button>
        </div>
      </div>
    </section>
  );
}
