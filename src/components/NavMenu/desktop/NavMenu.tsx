import type { NavMenuProps } from '../NavMenu.types.ts';
import NavLinks from '../../NavLinks/NavLinks.tsx';

function NavMenu({ navLinks }: NavMenuProps) {
  return (
    <nav className="hidden items-center gap-6 md:flex">
      <div className="flex items-center gap-4">
        <NavLinks links={navLinks} />
      </div>
    </nav>
  );
}

export default NavMenu;
