import type { LocalizedLink } from '../data/content';
import { ExternalLink } from './ExternalLink';

type LinkRowProps = {
  links: LocalizedLink[];
  newTabLabel: string;
};

/** A row of quiet text links; external ones open in a new tab. */
export function LinkRow({ links, newTabLabel }: LinkRowProps) {
  return (
    <div className="link-row">
      {links.map((link) => {
        const label = (
          <span dir="auto" className="localized-inline">
            {link.label}
          </span>
        );

        return link.external ? (
          <ExternalLink key={link.href} href={link.href} newTabLabel={newTabLabel} className="quiet-link">
            {label}
          </ExternalLink>
        ) : (
          <a key={link.href} href={link.href} className="quiet-link">
            {label}
          </a>
        );
      })}
    </div>
  );
}
