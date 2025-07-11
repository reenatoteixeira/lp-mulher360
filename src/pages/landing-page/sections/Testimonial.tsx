import TestimonialsSwiper from '../../../components/TestimonialSwiper/TestimonialSwiper';
import ButtonLink from '../../../components/ButtonLink/ButtonLink';
import { MessageCircle } from 'lucide-react';

function Testimonial() {
  return (
    <section id="depoimentos">
      <div className="text-brown-800/70 container mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">
        <h2 className="text-4xl font-bold">Histórias de Transformação</h2>

        <p className="mt-6 text-lg">
          Conheça algumas das mulheres que transformaram suas vidas através do cuidado nutricional integrativo
        </p>

        <TestimonialsSwiper />

        <p className="mt-12 text-center text-base">Você também pode ser a próxima história de sucesso</p>

        <div className={'mt-6 w-fit transition-all duration-200 hover:scale-105'}>
          <ButtonLink
            href="https://wa.me/5512988942652"
            label="Agendar Consulta"
            fullWidth={true}
            icon={MessageCircle}
            size={'lg'}
            pill={true}
          />
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
