import ButtonLink from '../components/ButtonLink/ButtonLink';
import { Instagram, MessageCircle, Mouse } from 'lucide-react';
import { useEffect, useState } from 'react';

function HeroPage() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <section className="relative h-screen bg-[url(/src/assets/images/hero-bg.jpg)] bg-cover bg-center">
      <div className="absolute inset-0 z-0 bg-black/80" />

      <div className="relative z-10 container mx-auto flex h-full max-w-7xl flex-col items-center justify-center gap-4 px-6 text-center">
        <h1 className="text-3xl leading-tight text-stone-50 sm:text-4xl md:text-5xl lg:text-6xl">
          Revitalize seu corpo e mente através do <br />
          <strong className="text-brown-200">cuidado nutricional integrativo</strong>
        </h1>

        <h2 className="max-w-5xl text-lg text-stone-50 sm:text-xl md:text-2xl lg:text-3xl">
          Transforme sua relação com a alimentação e consigo mesma através de uma abordagem holística que une nutrição,
          terapia e autocuidado.
        </h2>

        <div className="mt-4 flex w-full max-w-sm flex-col items-center gap-4 sm:max-w-2xl sm:flex-row md:gap-8">
          <div className="w-full transition-all duration-200 hover:scale-105">
            <ButtonLink
              href="https://api.whatsapp.com/message/R247WLXD7UZID1"
              label="Agendar Consulta"
              fullWidth={true}
              icon={MessageCircle}
              size={screenWidth > 768 ? 'lg' : 'md'}
              pill={true}
            />
          </div>

          <div className="w-full transition-all duration-200 hover:scale-105">
            <ButtonLink
              href="https://www.instagram.com/mulher360_/"
              label="Siga no Instagram"
              fullWidth={true}
              style="secondary"
              icon={Instagram}
              size={screenWidth > 768 ? 'lg' : 'md'}
              pill={true}
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 -mt-14 flex w-full animate-bounce justify-center text-white">
        <Mouse size="36" aria-hidden="true" />
      </div>
    </section>
  );
}

export default HeroPage;
