import type { StepperProps } from './Stepper.types';

function Stepper({ step, title, description }: StepperProps) {
  return (
    <div className="mt-12 flex w-full flex-col items-center justify-center gap-3">
      <div className="bg-brown-800/40 flex size-20 items-center justify-center rounded-full text-center text-2xl font-bold text-white">
        {step}
      </div>

      <h3 className="text-xl font-bold">{title}</h3>

      <p>{description}</p>
    </div>
  );
}

export default Stepper;
