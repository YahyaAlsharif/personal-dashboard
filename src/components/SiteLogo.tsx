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
      <svg viewBox="0 0 120 120" aria-hidden="true" focusable="false" className="site-logo-svg">
        {/* The ring is only a light source, so it stays invisible until an interaction lights it. */}
        <circle className="site-logo-ring" cx="60" cy="60" r="50" pathLength={1} />
        {/* The same Y as public/y-logo.svg, tinted so it stays readable in both themes. */}
        <text
          className="site-logo-y"
          x="60"
          y="82"
          fontFamily="Inter, Arial, Helvetica, sans-serif"
          fontSize="62"
          fontWeight="900"
          letterSpacing="0"
          textAnchor="middle"
        >
          Y
        </text>
      </svg>
    </a>
  );
}
