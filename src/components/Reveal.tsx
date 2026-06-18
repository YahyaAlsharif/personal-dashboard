import {
  type CSSProperties,
  type ElementType,
  type HTMLAttributes,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';

type RevealProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  children: ReactNode;
  delay?: number;
};

type RevealStyle = CSSProperties & {
  '--reveal-delay'?: string;
};

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function Reveal({
  as: Component = 'div',
  children,
  className = '',
  delay = 0,
  style,
  ...props
}: RevealProps) {
  const elementRef = useRef<HTMLElement | null>(null);
  const [hasRevealed, setHasRevealed] = useState(prefersReducedMotion);

  useEffect(() => {
    const element = elementRef.current;

    if (!element || hasRevealed) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasRevealed(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.12,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [hasRevealed]);

  const revealStyle: RevealStyle = {
    ...style,
    '--reveal-delay': `${delay}ms`,
  };

  return (
    <Component
      ref={elementRef}
      className={`reveal ${hasRevealed ? 'reveal--visible' : ''} ${className}`.trim()}
      style={revealStyle}
      {...props}
    >
      {children}
    </Component>
  );
}
