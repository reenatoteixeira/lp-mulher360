import type { NavLinkItem } from '../../types/NavLinkItem.ts';

export interface NavMenuProps {
  isOpen?: boolean;
  navLinks: NavLinkItem[];
}
