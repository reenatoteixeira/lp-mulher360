import TestimonialsSwiper from '../components/TestimonialSwiper/TestimonialSwiper.tsx';

function TestimonialPage() {
  return (
    <section id="como-funciona">
      <div className="text-brown-800/70 container mx-auto flex max-w-7xl flex-col items-center px-6 py-24">
        <h2 className="text-4xl font-bold">Histórias de Transformação</h2>

        <p className="mt-6 text-lg">
          Conheça algumas das mulheres que transformaram suas vidas através do cuidado nutricional integrativo
        </p>

        <TestimonialsSwiper />
      </div>
    </section>
  );
}

export default TestimonialPage;
