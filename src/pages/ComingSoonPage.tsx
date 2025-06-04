import comingSoon from '../assets/images/coming-soon.gif';
import { Instagram, Phone } from 'lucide-react';

function ComingSoonPage() {
  return (
    <main className="container mx-auto flex h-screen max-w-7xl flex-col items-center justify-center px-4 text-center md:px-6 lg:px-8">
      <img src={comingSoon} alt="GIF animado mostrando a frase 'Coming Soon'" className="-mb-20 w-full max-w-xl" />

      <h1 className="text-brown-500 mb-4 text-2xl font-bold sm:text-3xl md:text-4xl">
        Estamos&nbsp;quase&nbsp;prontos!
      </h1>

      <p className="max-w-3xl text-lg text-stone-500">
        Em breve, você poderá conhecer mais sobre mim, minha metodologia de atendimento e como dar os primeiros passos
        para iniciar seu acompanhamento nutricional.
      </p>

      <p className="mt-16 text-base text-stone-400">
        Enquanto isso, você pode acompanhar as novidades e dicas de nutrição nas redes sociais ou entrar em contato:
      </p>

      <div className="mt-4 flex w-full max-w-md items-center justify-around gap-4">
        <a
          href="https://www.instagram.com/mulher360_/"
          className="text-brown-500 hover:text-brown-300 flex items-center gap-1 transition-all duration-150"
        >
          <Instagram size="20" /> Instagram
        </a>
        <a
          href="https://api.whatsapp.com/message/R247WLXD7UZID1"
          className="text-brown-500 hover:text-brown-300 flex items-center gap-1 transition-all"
        >
          <Phone size="20" /> WhatsApp
        </a>
      </div>
    </main>
  );
}

export default ComingSoonPage;
