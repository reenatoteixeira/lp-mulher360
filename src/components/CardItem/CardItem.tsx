import type { CardItemProps } from './CardItem.types';

function CardItem({ title, description }: CardItemProps) {
  return (
    <div className="mt-12 flex w-full flex-col items-center justify-center gap-3">
      <div className="bg-brown-800/40 flex size-15 items-center justify-center rounded-full">
        <div className="bg-brown-50/40 flex size-8 items-center justify-center rounded-full"></div>
      </div>

      <h3 className="text-xl font-bold">{title}</h3>

      <p>{description}</p>
    </div>
  );
}

export default CardItem;
