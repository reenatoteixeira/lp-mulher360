import type { NavLinksProps, NavLinkItem } from './NavLinks.types.ts';

function NavLinks({ links }: NavLinksProps) {
  return (
    <>
      {links.map((link: NavLinkItem) => {
        return (
          <a
            key={link.href}
            href={link.href}
            className="text-brown-500 hover:text-brown-300 focus:ring-brown-300 transition-colors duration-150 focus:ring-2 focus:outline-none"
          >
            {link.label}
          </a>
        );
      })}
    </>
  );
}

export default NavLinks;
