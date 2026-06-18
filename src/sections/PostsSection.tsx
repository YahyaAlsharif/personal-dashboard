import { DashboardCard } from '../components/DashboardCard';
import { SectionHeading } from '../components/SectionHeading';
import { useLanguage } from '../context/useLanguage';
import { localizedContent } from '../data/content';

export function PostsSection() {
  const { language, isArabic } = useLanguage();
  const { posts } = localizedContent[language];
  const textDirection = isArabic ? 'rtl' : 'ltr';
  const localizedClass = isArabic ? 'localized-text' : '';

  return (
    <section id="posts" className="scroll-mt-24 py-14">
      <div className="page-container">
        <SectionHeading
          eyebrow={posts.eyebrow}
          title={posts.title}
          description={posts.description}
          isArabic={isArabic}
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {posts.items.map((post, index) => (
            <DashboardCard
              key={post.title}
              as="article"
              className="flex h-full flex-col gap-5"
              revealDelay={index * 90}
            >
              <div>
                <h3
                  dir={textDirection}
                  className={`text-xl font-semibold text-[var(--color-heading)] ${localizedClass}`}
                >
                  {post.title}
                </h3>
                <p
                  dir={textDirection}
                  className={`mt-3 text-sm leading-6 text-[var(--color-muted)] ${localizedClass}`}
                >
                  {post.description}
                </p>
              </div>

              <div className="overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-card-strong)]">
                <iframe
                  src={post.embedUrl}
                  title={post.iframeTitle}
                  className="h-[39.25rem] w-full"
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              <div className={`mt-auto flex ${isArabic ? 'localized-actions' : ''}`}>
                <a
                  href={post.postUrl}
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
          ))}
        </div>
      </div>
    </section>
  );
}
