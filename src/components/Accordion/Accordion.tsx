import type { AccordionProps } from './Accordion.types';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { clsx } from 'clsx';

function Accordion({ title, children, defaultOpen = false }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-brown-300/40 rounded-xl border transition-all duration-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`hover:bg-brown-800/3 flex w-full items-center justify-between gap-4 px-4 py-4 font-medium transition-all hover:cursor-pointer md:text-lg ${isOpen ? 'bg-brown-800/3' : 'bg-transparent'}`}
        aria-expanded={isOpen}
      >
        <p className="w-full text-left">{title}</p>
        <ChevronDown
          className={clsx('size-4 shrink-0 transition-transform duration-200 md:size-6', isOpen && 'rotate-180')}
        />
      </button>
      <div
        className={clsx('overflow-hidden text-sm transition-all md:text-base', isOpen ? 'max-h-fit p-4' : 'max-h-0')}
      >
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Accordion;
