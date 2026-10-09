import { useEffect, useState } from 'react';

/**
 * Reports which page section currently sits in the middle of the viewport.
 * `watchKey` re-attaches the observer when the sections are re-rendered
 * (the page remounts on a language switch).
 */
export function useActiveSection(sectionIds: string[], watchKey: string) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const idsKey = sectionIds.join(',');

  useEffect(() => {
    const ids = idsKey.split(',');
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      // A thin band just above the middle of the viewport.
      { rootMargin: '-42% 0px -55% 0px' },
    );

    elements.forEach((element) => observer.observe(element));

    // The last section can be too short to reach the band, so the bottom of
    // the page always selects it.
    const lastId = ids.at(-1) ?? null;
    const handleScroll = () => {
      const scrolledToEnd =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;

      if (scrolledToEnd) {
        setActiveId(lastId);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [idsKey, watchKey]);

  return activeId;
}
