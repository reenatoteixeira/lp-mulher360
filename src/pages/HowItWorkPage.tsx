import Stepper from '../components/Stepper/Stepper.tsx';

function HowItWorkPage() {
  return (
    <section id="como-funciona" className="bg-white">
      <div className="text-brown-800/70 container mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">
        <h2 className="text-4xl font-bold">Como Funciona</h2>

        <p className="mt-6 text-lg">
          Um processo cuidadoso e personalizado que respeita seu ritmo e promove transformações duradouras
        </p>

        <div className="mt-6 grid grid-cols-1 content-center sm:grid-cols-2 sm:gap-x-12 lg:grid-cols-4">
          <Stepper
            step="01"
            title="Primeiro Contato"
            description="Entre em contato via WhatsApp ou Instagram. Vamos conversar sobre suas necessidades e objetivos de forma acolhedora e sem julgamentos"
          />

          <Stepper
            step="02"
            title="Consulta Inicial"
            description="Avaliação completa que vai além do aspecto nutricional. Exploramos sua história alimentar, emocional e estilo de vida de forma integrada"
          />

          <Stepper
            step="03"
            title="Plano Personalizado"
            description="Desenvolvimento de um protocolo único para você, integrando aspectos nutricionais, comportamentais e de autocuidado"
          />

          <Stepper
            step="04"
            title="Acompanhamento"
            description="Sessões regulares de suporte e ajustes, com foco na transformação gradual e sustentável da sua relação com a alimentação"
          />
        </div>

        <div className="bg-brown-800/10 shadow-brown-950/20 border-brown-300/40 mt-12 rounded-2xl border p-6 shadow-lg">
          <h4 className="text-2xl font-bold">Abordagem Integrativa</h4>

          <p className="mt-4">
            Nossas consultas integram aspectos nutricionais e emocionais, trabalhando não apenas o que você come, mas
            também como você se relaciona com a comida. O foco está na transformação a longo prazo, não em dietas
            restritivas ou soluções temporárias
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorkPage;
