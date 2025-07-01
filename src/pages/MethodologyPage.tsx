import CardItem from '../components/CardItem/CardItem.tsx';

function MethodologyPage() {
  return (
    <section id="como-funciona" className="bg-white">
      <div className="text-brown-800/70 container mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">
        <h2 className="text-4xl font-bold">Nossa Metodologia</h2>

        <p className="mt-6 text-lg">
          Uma abordagem única que combina ciência nutricional com cuidado emocional para resultados duradouros
        </p>

        <div className="my-6 flex flex-col items-start md:flex-row md:gap-10">
          <CardItem
            title="Nutrição Comportamental"
            description="Trabalhamos os aspectos psicológicos da alimentação, identificando padrões e criando novos hábitos saudáveis de forma gradual e sustentável"
          />

          <CardItem
            title="Suporte à Alimentação Emocional"
            description="Desenvolvemos estratégias para lidar com gatilhos emocionais, ansiedade e compulsões, promovendo uma relação equilibrada com a comida"
          />

          <CardItem
            title="Rotinas de Autocuidado"
            description="Criamos práticas personalizadas de autocuidado que vão além da alimentação, incluindo mindfulness, sono e bem-estar emocional"
          />
        </div>

        <div className="bg-brown-600/60 shadow-brown-950/20 border-brown-200/40 mt-12 rounded-2xl border p-6 shadow-lg">
          <h4 className="text-2xl font-bold text-white">Transformação, não&nbsp;restrição</h4>

          <p className="mt-4 text-lg text-white/80">
            Acreditamos que a verdadeira mudança acontece quando você desenvolve uma relação amorosa e consciente com
            seu corpo e sua alimentação. Nosso foco está na transformação a longo prazo, não em dietas restritivas ou
            promessas de resultados rápidos.
          </p>
        </div>
      </div>
    </section>
  );
}

export default MethodologyPage;
