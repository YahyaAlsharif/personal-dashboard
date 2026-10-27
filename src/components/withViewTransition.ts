import { flushSync } from 'react-dom';

/**
 * Runs a whole-page change (theme, language) as one short crossfade where the
 * browser supports view transitions. Otherwise, or when the visitor prefers
 * reduced motion, the change applies instantly.
 */
export function withViewTransition(update: () => void) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (typeof document.startViewTransition !== 'function' || prefersReducedMotion) {
    update();
    return;
  }

  document.startViewTransition(() => flushSync(update));
}
