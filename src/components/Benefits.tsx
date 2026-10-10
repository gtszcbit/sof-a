import React from 'react';

interface BenefitItem {
  icon: string;
  title: string;
  description: string;
  tagColor: string;
}

const benefitsData: BenefitItem[] = [
  {
    icon: '📖',
    title: '100 diseños de Dios',
    description: 'Una colección con versículos, oraciones y mensajes de esperanza para diferentes momentos.',
    tagColor: 'bg-blue-50 text-blue-700 border-blue-200',
  },
  {
    icon: '🖨️',
    title: 'Listos para imprimir',
    description: 'Recibe el material en PDF y prepara tus marcapáginas desde casa de forma sencilla.',
    tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
  {
    icon: '🎁',
    title: 'Perfectos para regalar',
    description: 'Ideales para compartir en la iglesia, grupos de oración, reuniones, familias y momentos especiales.',
    tagColor: 'bg-amber-50 text-amber-700 border-amber-200',
  },
];

export const Benefits: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-20 border-b border-slate-100">
      <div className="max-w-[650px] mx-auto px-5 sm:px-6 text-center">
        {/* Etiqueta azul clara */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-[#1D4ED8] border border-blue-200/60 mb-3.5">
          <span>✦ CONTENIDO DIGITAL</span>
        </div>

        {/* H2 */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4 text-balance">
          Un pequeño detalle que puede llevar un gran mensaje
        </h2>

        {/* Descripción */}
        <p className="text-sm sm:text-base text-[#64748B] leading-relaxed mb-10 text-balance">
          Todo lo que necesitas para imprimir, compartir y regalar mensajes de fe de una manera sencilla y especial.
        </p>

        {/* 3 CARDS */}
        <div className="flex flex-col gap-4.5 sm:gap-5 text-left">
          {benefitsData.map((item, index) => (
            <div
              key={index}
              className="bg-[#F8FAFC] border border-slate-200/90 rounded-[18px] p-5 sm:p-6 shadow-xs hover:border-blue-300 hover:shadow-md transition-all duration-200 flex items-start gap-4"
            >
              {/* Contenedor del ícono */}
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-center text-2xl shrink-0">
                {item.icon}
              </div>

              {/* Contenido */}
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-bold text-[#0F172A] mb-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
