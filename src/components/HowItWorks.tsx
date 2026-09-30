import React from 'react';

interface Step {
  number: number;
  title: string;
  description: string;
  badgeColor: string;
  iconBg: string;
}

const stepsData: Step[] = [
  {
    number: 1,
    title: 'Descarga',
    description:
      'Después de realizar tu compra, recibe el material digital y prepáralo para imprimir.',
    badgeColor: 'bg-[#1D4ED8] text-white',
    iconBg: 'border-blue-200',
  },
  {
    number: 2,
    title: 'Imprime',
    description:
      'Selecciona tus diseños favoritos e imprímelos en casa o en una imprenta.',
    badgeColor: 'bg-[#E11D48] text-white',
    iconBg: 'border-rose-200',
  },
  {
    number: 3,
    title: 'Regala y comparte',
    description:
      'Coloca un mensaje de fe dentro de una Biblia, regálalo a alguien especial o compártelo en tu iglesia.',
    badgeColor: 'bg-[#22C55E] text-white',
    iconBg: 'border-emerald-200',
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-20 border-b border-slate-100">
      <div className="max-w-[650px] mx-auto px-5 sm:px-6 text-center">
        {/* Etiqueta */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-[#1D4ED8] border border-blue-200/60 mb-3.5">
          <span>🛠️ PASO A PASO</span>
        </div>

        {/* H2 */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4 text-balance">
          Recibe, imprime y comparte
        </h2>

        {/* Descripción */}
        <p className="text-sm sm:text-base text-[#64748B] leading-relaxed mb-12 text-balance">
          En pocos minutos puedes preparar tus marcapáginas y comenzar a compartir mensajes de fe.
        </p>

        {/* TIMELINE VERTICAL */}
        <div className="relative flex flex-col gap-6 text-left">
          {/* Línea vertical conectora */}
          <div className="absolute left-[23px] sm:left-[27px] top-6 bottom-6 w-0.5 bg-slate-200 -z-0" />

          {stepsData.map((step, index) => (
            <div key={index} className="relative z-10 flex items-start gap-4 sm:gap-5">
              {/* Círculo Numerado */}
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full ${step.badgeColor} flex items-center justify-center font-extrabold text-lg sm:text-xl shrink-0 shadow-md ring-4 ring-white`}
              >
                {step.number}
              </div>

              {/* Card con borde punteado/dashed */}
              <div className="flex-1 bg-[#F8FAFC] border-2 border-dashed border-slate-300 rounded-[18px] p-5 sm:p-6 hover:border-slate-400 transition-colors">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Paso 0{step.number}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#0F172A] mb-1.5">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
