import type { NavLinksProps } from './NavLinks.types';
import type { NavLinkItem } from '../../types/NavLinkItem';

function NavLinks({ links }: NavLinksProps) {
  return (
    <>
      {links.map((link: NavLinkItem) => {
        return (
          <a
            key={link.href}
            href={link.href}
            className="text-brown-500 hover:text-brown-300 transition-colors duration-150"
          >
            {link.label}
          </a>
        );
      })}
    </>
  );
}

export default NavLinks;
