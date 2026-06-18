export type Post = {
  title: string;
  description: string;
  embedUrl: string;
  postUrl: string;
  iframeTitle: string;
};

export const posts: Post[] = [
  {
    title: 'Graduation Project / ESAS',
    description:
      'A LinkedIn milestone post about ESAS, my graduation project focused on authentic, locally curated tourism experiences in Saudi Arabia.',
    embedUrl:
      'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7470469804227932160?collapsed=1',
    postUrl: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7470469804227932160',
    iframeTitle: 'LinkedIn post about Graduation Project and ESAS',
  },
  {
    title: 'KAUST Academy Stage 3 to Stage 4',
    description:
      'A LinkedIn milestone post about finishing KAUST Academy Stage 3 and being accepted into Stage 4 of the AI journey.',
    embedUrl:
      'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7439279422131589120?collapsed=1',
    postUrl: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7439279422131589120',
    iframeTitle: 'LinkedIn post about KAUST Academy Stage 3 and Stage 4',
  },
];
