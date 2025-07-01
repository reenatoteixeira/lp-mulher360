import type { TestimonialCardTypes } from './TestimonialCard.types.ts';

function TestimonialCard({ content, name, age, avatar }: TestimonialCardTypes) {
  return (
    <div className="border-brown-300/40 flex w-full flex-col justify-between gap-2 rounded-2xl border bg-white p-6 shadow-lg md:max-w-lg">
      <p className="line-clamp-16 h-95 overflow-hidden">{content}</p>

      <div>
        <hr className="border-brown-500/30 mb-4" />

        <div className="flex items-center gap-2">
          <img src={avatar} alt="Testimonial" className="size-12 rounded-full" />

          <div>
            <h4 className="text-lg font-bold">{name}</h4>
            <p className="text-brown-700/50 -mt-2 text-sm">{age} anos</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
