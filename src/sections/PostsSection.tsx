import { DashboardCard } from '../components/DashboardCard';
import { SectionHeading } from '../components/SectionHeading';
import { posts } from '../data/posts';

export function PostsSection() {
  return (
    <section id="posts" className="scroll-mt-24 py-14">
      <div className="page-container">
        <SectionHeading
          eyebrow="POSTS"
          title="Posts"
          description="LinkedIn posts that highlight important milestones in my software engineering and AI journey."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {posts.map((post, index) => (
            <DashboardCard
              key={post.title}
              as="article"
              className="flex h-full flex-col gap-5"
              revealDelay={index * 90}
            >
              <div>
                <h3 className="text-xl font-semibold text-[var(--color-heading)]">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
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

              <div className="mt-auto">
                <a
                  href={post.postUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="action-button rounded-lg border px-5 py-3 text-sm font-semibold transition"
                >
                  View on LinkedIn
                </a>
              </div>
            </DashboardCard>
          ))}
        </div>
      </div>
    </section>
  );
}
