import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqList: FAQItem[] = [
  {
    question: '¿Cómo recibiré los 100 Marcapáginas Cristianos?',
    answer: 'Después de completar tu compra recibirás las instrucciones de acceso al material digital.',
  },
  {
    question: '¿El material viene en PDF?',
    answer: 'Sí. El material está preparado en formato digital para facilitar su descarga e impresión.',
  },
  {
    question: '¿Puedo imprimir los marcapáginas?',
    answer: 'Sí. Puedes imprimirlos utilizando una impresora doméstica o llevar el archivo a una imprenta.',
  },
  {
    question: '¿Puedo utilizarlos en mi iglesia?',
    answer:
      'Sí, el material está pensado para que puedas compartir los marcapáginas en diferentes momentos y actividades cristianas, de acuerdo con las condiciones de uso de la oferta.',
  },
  {
    question: '¿Puedo regalarlos a familiares y amigos?',
    answer: 'Sí. Puedes utilizarlos como pequeños regalos o mensajes de esperanza.',
  },
  {
    question: '¿Necesito una impresora especial?',
    answer: 'No necesariamente. Puedes utilizar una impresora convencional compatible con el tipo de papel que elijas.',
  },
  {
    question: '¿Cuándo recibiré el material?',
    answer: 'Las instrucciones de acceso se mostrarán después de completar la compra.',
  },
  {
    question: '¿Cómo funciona la garantía?',
    answer: 'Consulta las condiciones de garantía indicadas en la oferta.',
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Primera abierta por defecto para descubrimiento rápido

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F8FAFC] py-16 md:py-24 border-b border-slate-200/80">
      <div className="max-w-[650px] mx-auto px-5 sm:px-6">
        {/* Encabezado */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-[#1D4ED8] border border-blue-200/60 mb-3.5">
            <span>❓ DUDAS FRECUENTES</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4 text-balance">
            Preguntas frecuentes
          </h2>

          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed text-balance">
            Resuelve las principales dudas antes de realizar tu compra.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3.5">
          {faqList.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-4.5 sm:p-5 flex items-center justify-between gap-4 cursor-pointer select-none transition-colors hover:bg-slate-50/70"
                >
                  <span className="font-bold text-sm sm:text-base text-slate-800 pr-2">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-blue-600 text-white rotate-180'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4.5 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
