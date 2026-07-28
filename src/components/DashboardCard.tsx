import type { HTMLAttributes, ReactNode } from 'react';

import { Reveal } from './Reveal';

type DashboardCardProps = HTMLAttributes<HTMLElement> & {
  as?: 'article' | 'div';
  children: ReactNode;
  revealDelay?: number;
};

export function DashboardCard({
  as: Component = 'article',
  children,
  className = '',
  revealDelay = 0,
  ...props
}: DashboardCardProps) {
  return (
    <Reveal
      as={Component}
      delay={revealDelay}
      className={`dashboard-card rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-[var(--shadow-card)] ${className}`}
      {...props}
    >
      {children}
    </Reveal>
  );
}
