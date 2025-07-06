import ButtonLink from '../../../components/ButtonLink/ButtonLink.tsx';
import { MessageCircle } from 'lucide-react';
import Accordion from '../../../components/Accordion/Accordion.tsx';
import { faqs } from '../../../data/faq.ts';

function FAQ() {
  return (
    <section id="faq">
      <div className="text-brown-800/70 container mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">
        <h2 className="text-4xl font-bold">Perguntas Frequentes</h2>

        <p className="mt-6 text-lg">Esclarecemos as dúvidas mais comuns sobre o nosso atendimento</p>

        <div className="border-brown-300/40 mt-12 flex w-full flex-col gap-2 rounded-2xl border bg-white p-6 shadow-lg">
          {faqs.map((faq, index) => (
            <Accordion key={index} title={faq.question}>
              <p>{faq.answer}</p>
            </Accordion>
          ))}
        </div>

        <p className="mt-12 text-center text-base">Ainda tem dúvidas? Estamos&nbsp;aqui&nbsp;para&nbsp;ajudar!</p>

        <div className={'mt-6 w-fit transition-all duration-200 hover:scale-105'}>
          <ButtonLink
            href="https://api.whatsapp.com/message/R247WLXD7UZID1"
            label="Fale conosco"
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

export default FAQ;
