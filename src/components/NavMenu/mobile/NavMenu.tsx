import type { NavMenuProps } from '../NavMenu.types';
import NavLinks from '../../NavLinks/NavLinks';

function NavMenu({ isOpen, navLinks }: NavMenuProps) {
  return (
    <nav
      className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} md:hidden`}
    >
      <hr className="border-brown-500 border" />

      <div className="flex flex-col gap-4 px-1 py-4">
        <NavLinks links={navLinks} />
      </div>
    </nav>
  );
}

export default NavMenu;
