import aboutPicture from '../assets/images/about-picture.svg';

function AboutPage() {
  return (
    <section id="sobre">
      <div className="container mx-auto flex max-w-7xl flex-col items-center px-6 py-24 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
        <img
          src={aboutPicture}
          alt="Foto da nutricionista Luciana Teixeira"
          className="shadow-brown-950/40 w-full max-w-md rounded-2xl shadow-xl lg:order-2 lg:w-1/2 lg:max-w-2xl"
        />

        <div className="mt-12 flex flex-col gap-6">
          <h2 className="text-brown-800/80 text-4xl font-bold">Sobre a Nutricionista</h2>

          <div className="text-brown-800/80 flex flex-col gap-6 text-justify text-lg">
            <p>
              Sou a Dra. Luciana Teixeira, nutricionista com foco no cuidado integral da mulher. Minha abordagem une
              ciência, empatia e propósito, considerando corpo, mente e espírito como um todo. Sou pós-graduanda em
              Neurociência e também estudante de Educação Física e Fonoaudiologia.
            </p>

            <p>
              Idealizei o projeto Mulher 360 para ajudar mulheres a restaurarem a autoestima, reconectarem-se com sua
              essência e desenvolverem uma relação mais consciente com a alimentação.
            </p>

            <p>
              Acredito que autoconhecimento, nutrição e equilíbrio emocional são a base para uma vida plena. Seja
              bem-vinda ao seu processo de transformação.
            </p>
          </div>

          <div className="shadow-brown-950/20 border-brown-300/40 rounded-2xl border bg-white p-4 shadow-xl">
            <h3 className="text-brown-800/80 font-bold">Especialidades:</h3>

            <ul className="text-brown-800/80 mt-4 list-disc space-y-2 pl-4">
              <li>Nutrição Integrativa</li>
              <li>Saúde da Mulher</li>
              <li>Neuronutrição</li>
              <li>Saúde Emocional</li>
              <li>Mindful Eating</li>
              <li>Autoestima</li>
              <li>Imagem Corporal</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
