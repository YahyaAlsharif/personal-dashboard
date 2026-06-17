import type { HTMLAttributes, ReactNode } from 'react';

type DashboardCardProps = HTMLAttributes<HTMLElement> & {
  as?: 'article' | 'div';
  children: ReactNode;
};

export function DashboardCard({
  as: Component = 'article',
  children,
  className = '',
  ...props
}: DashboardCardProps) {
  return (
    <Component
      className={`rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-sm shadow-slate-950/5 backdrop-blur ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
