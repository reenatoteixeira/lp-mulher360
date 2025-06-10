import { useState } from 'react';
import logo from '../../assets/images/logo.svg';
import { Menu, X } from 'lucide-react';
import NavMenuDesktop from '../NavMenu/desktop/NavMenu';
import NavMenuMobile from '../NavMenu/mobile/NavMenu';
import { MAIN_NAV_LINKS } from '../../constants/navLinks.ts';

function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className={`fixed top-0 z-20 w-full bg-white/90 shadow-sm backdrop-blur-sm`}>
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between py-3">
          <a href="#">
            <img src={logo} alt="Logo Mulher360" className="size-12" />
          </a>

          <div className="flex items-center justify-center md:hidden">
            <button
              onClick={() => setNavOpen(!navOpen)}
              className="text-brown-500 hover:text-brown-300 rounded-md transition-all hover:cursor-pointer"
              aria-label="Menu"
            >
              {navOpen ? <X size="30" /> : <Menu size="30" />}
            </button>
          </div>

          <NavMenuDesktop navLinks={MAIN_NAV_LINKS} />
        </div>

        <NavMenuMobile isOpen={navOpen} navLinks={MAIN_NAV_LINKS} />
      </div>
    </header>
  );
}

export default Header;
