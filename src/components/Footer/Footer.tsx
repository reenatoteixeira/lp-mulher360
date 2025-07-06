import logo from '../../assets/images/logo.svg';
import { MAIN_NAV_LINKS } from '../../constants/navLinks.ts';

function Footer() {
  const actualYear = new Date().getFullYear();

  return (
    <footer className="bg-brown-800/80 py-12">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-center gap-6 text-center text-white/80 sm:items-start sm:text-left md:justify-between lg:flex-row lg:items-center">
          <div className="size-30 rounded-full bg-white/80 p-3">
            <a href="#" className="">
              <img src={logo} alt="Logo Mulher360" />
            </a>
          </div>

          <div>
            <h2 className="text-xl font-bold">Links Rápidos</h2>
            <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:gap-6">
              {MAIN_NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/80 transition-colors duration-150 hover:text-white/30"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold">Contatos</h2>
            <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:gap-6">
              <a
                href="https://wa.me/5512988942652"
                className="text-white/80 transition-colors duration-150 hover:text-white/30"
              >
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/mulher360_/"
                className="text-white/80 transition-colors duration-150 hover:text-white/30"
              >
                Instagram
              </a>
              <a
                href="mailto:draluteixeira@gmail.com"
                className="text-white/80 transition-colors duration-150 hover:text-white/30"
              >
                E-mail
              </a>
            </div>
          </div>
        </div>

        <hr className="my-6 border border-white/20" />

        <div className="text-white/30">
          <p className="mt-4 text-center text-base">
            © {actualYear} Clínica Mulher360 - Terapia Nutricional Integrativa. Todos os direitos reservados.
          </p>
          <p className="mt-2 text-center text-sm">CRN-3 89313/P | Dra. Luciana Teixeira - Nutricionista</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
