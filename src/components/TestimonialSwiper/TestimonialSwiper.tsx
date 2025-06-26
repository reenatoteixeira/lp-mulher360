import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// @ts-expect-error Swiper styles
import 'swiper/css';
// @ts-expect-error Swiper modules styles
import 'swiper/css/autoplay';
import { testimonials } from '../../data/testimonial.ts';
import TestimonialCard from '../TestimonialCard/TestimonialCard.tsx';

function TestimonialsSwiper() {
  return (
    <div className="mt-12 w-full">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000 }}
        loop
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((t, idx) => (
          <SwiperSlide key={idx}>
            <TestimonialCard content={t.content} name={t.name} age={t.age} avatar={t.avatar} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TestimonialsSwiper;
