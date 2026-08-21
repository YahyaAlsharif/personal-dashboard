import { useEffect, useRef, useState } from 'react';

type SiteLogoProps = {
  label: string;
};

/** Ring draw, Y flash, then a slow cool down. Matches the entrance keyframes. */
const ENTRANCE_MS = 4400;

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * The ring and the Y behave like two neon light sources.
 * On load the ring lights around the circle, the Y flashes once and then dims slowly.
 * Pointer or keyboard focus lights the ring only; activating the logo also lights the Y.
 */
export function SiteLogo({ label }: SiteLogoProps) {
  const [isEntering, setIsEntering] = useState(() => !prefersReducedMotion());
  const [ringLit, setRingLit] = useState(false);
  const [yLit, setYLit] = useState(false);
  const isPointerInsideRef = useRef(false);

  useEffect(() => {
    if (!isEntering) {
      return undefined;
    }

    const timer = window.setTimeout(() => setIsEntering(false), ENTRANCE_MS);
    return () => window.clearTimeout(timer);
  }, [isEntering]);

  const engage = () => {
    setIsEntering(false);
    setRingLit(true);
  };

  const release = () => {
    setRingLit(false);
    setYLit(false);
  };

  const activate = () => {
    setIsEntering(false);
    setYLit(true);
  };

  const classNames = [
    'site-logo',
    isEntering ? 'is-entering' : '',
    ringLit ? 'is-ring-lit' : '',
    yLit ? 'is-y-lit' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <a
      href="#top"
      aria-label={label}
      className={classNames}
      onPointerEnter={() => {
        isPointerInsideRef.current = true;
        engage();
      }}
      onPointerLeave={() => {
        isPointerInsideRef.current = false;
        release();
      }}
      onFocus={engage}
      onBlur={() => {
        // Following the "#top" link blurs the anchor; keep the light on
        // while the pointer is still resting over the logo.
        if (!isPointerInsideRef.current) {
          release();
        }
      }}
      onClick={activate}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          activate();
        }
      }}
    >
      <svg viewBox="0 0 96 96" aria-hidden="true" focusable="false" className="site-logo-svg">
        <circle className="site-logo-ring-base" cx="48" cy="48" r="42" pathLength={1} />
        <circle className="site-logo-ring" cx="48" cy="48" r="42" pathLength={1} />
        <path className="site-logo-y" d="M30 32 L48 52 L66 32 M48 52 L48 68" pathLength={1} />
      </svg>
    </a>
  );
}
