import { useState } from 'react';

import { DashboardCard } from '../components/DashboardCard';
import { ExternalLink } from '../components/ExternalLink';
import { SectionHeading } from '../components/SectionHeading';
import { useLanguage } from '../context/useLanguage';
import { localizedContent } from '../data/content';

export function PostsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { language, isArabic } = useLanguage();
  const { posts, externalLinkLabel } = localizedContent[language];
  const currentPost = posts.items[currentIndex];
  const activePostId = 'active-post';

  const showPreviousPost = () => {
    setCurrentIndex((index) => (index - 1 + posts.items.length) % posts.items.length);
  };

  const showNextPost = () => {
    setCurrentIndex((index) => (index + 1) % posts.items.length);
  };

  return (
    <section id="posts" className="scroll-mt-36 py-14 xl:scroll-mt-24">
      <div className="page-container">
        <SectionHeading
          eyebrow={posts.eyebrow}
          title={posts.title}
          description={posts.description}
        />

        <div className="grid grid-cols-2 items-center gap-3 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:gap-4">
          <DashboardCard
            key={currentPost.postUrl}
            id={activePostId}
            as="article"
            className="col-span-2 flex min-w-0 flex-col gap-5 sm:col-span-1 sm:col-start-2 sm:row-start-1"
            revealDelay={90}
          >
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-heading)]">
                {currentPost.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                {currentPost.description}
              </p>
              <span
                aria-label={posts.positionLabel(currentIndex + 1, posts.items.length)}
                dir="ltr"
                className="mt-4 inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-chip)] px-3 py-1 text-xs font-semibold text-[var(--color-chip-text)]"
              >
                {currentIndex + 1} / {posts.items.length}
              </span>
            </div>

            <div className="overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-card-strong)]">
              <iframe
                src={currentPost.embedUrl}
                title={currentPost.iframeTitle}
                className="h-[28rem] w-full sm:h-[34rem] lg:h-[39.25rem]"
                allowFullScreen
                loading="lazy"
              />
            </div>

            <div className="mt-auto flex">
              <ExternalLink
                href={currentPost.postUrl}
                newTabLabel={externalLinkLabel}
                className="action-button rounded-lg border px-5 py-3 text-sm font-semibold transition"
              >
                <span dir="auto" className="localized-inline">
                  {posts.viewButton}
                </span>
              </ExternalLink>
            </div>
          </DashboardCard>

          <button
            type="button"
            aria-label={posts.previousButton}
            aria-controls={activePostId}
            title={posts.previousButton}
            onClick={showPreviousPost}
            className="action-button h-12 w-12 justify-self-end rounded-full border transition sm:col-start-1 sm:row-start-1"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 24 24"
              className={`h-5 w-5 ${isArabic ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <button
            type="button"
            aria-label={posts.nextButton}
            aria-controls={activePostId}
            title={posts.nextButton}
            onClick={showNextPost}
            className="action-button h-12 w-12 justify-self-start rounded-full border transition sm:col-start-3 sm:row-start-1"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 24 24"
              className={`h-5 w-5 ${isArabic ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
