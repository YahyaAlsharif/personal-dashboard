import { useEffect, useRef, useState } from 'react';

import { ExternalLink } from '../components/ExternalLink';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { useLanguage } from '../context/useLanguage';
import { localizedContent } from '../data/content';

/** LinkedIn embeds can be blocked by privacy settings or extensions; stop waiting after this. */
const EMBED_TIMEOUT_MS = 12000;

type EmbedState = {
  url: string;
  status: 'loaded' | 'failed';
};

const padIndex = (value: number) => String(value).padStart(2, '0');

export function PostsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [embedState, setEmbedState] = useState<EmbedState | null>(null);
  const [isNearViewport, setIsNearViewport] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { language, isArabic } = useLanguage();
  const { posts, externalLinkLabel } = localizedContent[language];
  const currentPost = posts.items[currentIndex];
  const activePostId = 'active-post';
  const embedStatus = embedState?.url === currentPost.embedUrl ? embedState.status : 'loading';

  // Only load the third-party embed once the section is close to view.
  useEffect(() => {
    const section = sectionRef.current;

    if (!section || isNearViewport) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNearViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin: '600px 0px' },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [isNearViewport]);

  useEffect(() => {
    if (!isNearViewport || embedStatus !== 'loading') {
      return undefined;
    }

    const url = currentPost.embedUrl;
    const timer = window.setTimeout(() => setEmbedState({ url, status: 'failed' }), EMBED_TIMEOUT_MS);
    return () => window.clearTimeout(timer);
  }, [isNearViewport, embedStatus, currentPost.embedUrl]);

  const showPreviousPost = () => {
    setCurrentIndex((index) => (index - 1 + posts.items.length) % posts.items.length);
  };

  const showNextPost = () => {
    setCurrentIndex((index) => (index + 1) % posts.items.length);
  };

  const arrowClassName = `h-[1.125rem] w-[1.125rem] ${isArabic ? 'rotate-180' : ''}`;

  return (
    <section ref={sectionRef} id="posts" className="section section-band">
      <div className="page-container milestones">
        <div className="min-w-0">
          <SectionHeading title={posts.title} />

          <ol aria-label={posts.indexLabel} className="milestone-index">
            {posts.items.map((post, index) => {
              const isCurrent = index === currentIndex;

              return (
                <li key={post.postUrl}>
                  <button
                    type="button"
                    aria-current={isCurrent ? 'true' : undefined}
                    aria-controls={activePostId}
                    onClick={() => setCurrentIndex(index)}
                    className="milestone-option"
                  >
                    <span dir="ltr" className="milestone-option-index type-mono">
                      {padIndex(index + 1)}
                    </span>
                    <span className="min-w-0">
                      <span className="milestone-option-title block">{post.title}</span>
                      {isCurrent ? (
                        <span className="milestone-option-description block">{post.description}</span>
                      ) : null}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        <Reveal as="article" id={activePostId} delay={90} className="min-w-0">
          <div className="milestone-summary mb-5">
            <h3 className="type-title">{currentPost.title}</h3>
            <p className="mt-2 type-prose">{currentPost.description}</p>
          </div>

          <div className="milestone-controls mb-4">
            <button
              type="button"
              aria-label={posts.previousButton}
              aria-controls={activePostId}
              title={posts.previousButton}
              onClick={showPreviousPost}
              className="icon-button"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                viewBox="0 0 24 24"
                className={arrowClassName}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <span
              aria-label={posts.positionLabel(currentIndex + 1, posts.items.length)}
              dir="ltr"
              className="milestone-counter type-mono"
            >
              {padIndex(currentIndex + 1)} / {padIndex(posts.items.length)}
            </span>
            <button
              type="button"
              aria-label={posts.nextButton}
              aria-controls={activePostId}
              title={posts.nextButton}
              onClick={showNextPost}
              className="icon-button"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                viewBox="0 0 24 24"
                className={arrowClassName}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
            <ExternalLink
              href={currentPost.postUrl}
              newTabLabel={externalLinkLabel}
              className="quiet-link ms-auto"
            >
              <span dir="auto" className="localized-inline">
                {posts.viewButton}
              </span>
            </ExternalLink>
          </div>

          <div className={`embed-frame ${embedStatus === 'loaded' ? 'embed-frame--loaded' : ''}`}>
            {embedStatus === 'loaded' ? null : (
              // A post-shaped skeleton, so the wait never looks like an empty box.
              <div
                className={`embed-placeholder ${embedStatus === 'failed' ? 'embed-placeholder--failed' : ''}`}
              >
                <div aria-hidden="true" className="embed-skeleton-header">
                  <span className="embed-skeleton-avatar" />
                  <span className="grid flex-1 gap-2">
                    <span className="embed-skeleton-line w-2/5" />
                    <span className="embed-skeleton-line w-3/5" />
                  </span>
                </div>
                <div aria-hidden="true" className="grid gap-2">
                  <span className="embed-skeleton-line" />
                  <span className="embed-skeleton-line w-4/5" />
                </div>
                <div className="embed-skeleton-media">
                  <p aria-live="polite" className="type-meta max-w-xs">
                    {embedStatus === 'failed' ? posts.unavailable : posts.loading}
                  </p>
                  <ExternalLink
                    href={currentPost.postUrl}
                    newTabLabel={externalLinkLabel}
                    className="quiet-link"
                  >
                    <span dir="auto" className="localized-inline">
                      {posts.viewButton}
                    </span>
                  </ExternalLink>
                </div>
              </div>
            )}
            {isNearViewport ? (
              <iframe
                key={currentPost.embedUrl}
                src={currentPost.embedUrl}
                title={currentPost.iframeTitle}
                onLoad={() => setEmbedState({ url: currentPost.embedUrl, status: 'loaded' })}
                allowFullScreen
              />
            ) : (
              <div className="h-[32rem] sm:h-[36rem] lg:h-[38rem]" />
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
