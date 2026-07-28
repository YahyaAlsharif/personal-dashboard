import type { AnchorHTMLAttributes, ReactNode } from 'react';

type ExternalLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'target'> & {
  children: ReactNode;
  newTabLabel: string;
};

export function ExternalLink({
  children,
  newTabLabel,
  rel = 'noreferrer',
  ...props
}: ExternalLinkProps) {
  return (
    <a target="_blank" rel={rel} {...props}>
      {children}
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 24 24"
        className="h-4 w-4 flex-none"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M14 5h5v5" />
        <path d="M10 14 19 5" />
        <path d="M19 13v6H5V5h6" />
      </svg>
      <span className="sr-only"> {newTabLabel}</span>
    </a>
  );
}
