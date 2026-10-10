import React from 'react';
import { X, Flame, ShieldCheck } from 'lucide-react';
import { CHECKOUT_URL, BASIC_CHECKOUT_URL, DOWNSELL_CHECKOUT_URL } from '../config/siteConfig';

interface OrderBumpModalProps {
  isOpen: boolean;
  onClose: () => void;
  vipPrice?: string;
  vipOldPrice?: string;
  basicPrice?: string;
}

export const OrderBumpModal: React.FC<OrderBumpModalProps> = ({
  isOpen,
  onClose,
  vipPrice = '70 MXN',
  vipOldPrice = '140 MXN',
  basicPrice = '55 MXN',
}) => {
  if (!isOpen) return null;

  const displayVipPrice = vipPrice.replace('MXN', '').replace('$', '').trim();
  const displayBasicPrice = basicPrice.replace('MXN', '').replace('$', '').trim();
  const displayOldPrice = vipOldPrice.replace('MXN', '').replace('$', '').trim();

  const handleAcceptOffer = () => {
    const url =
      DOWNSELL_CHECKOUT_URL && DOWNSELL_CHECKOUT_URL !== '[DOWNSELL_CHECKOUT_URL]'
        ? DOWNSELL_CHECKOUT_URL
        : 'https://xpag.global/pay/vfOCVyLE';
    window.location.href = url;
  };

  const handleDeclineOffer = () => {
    onClose();
    const basicUrl =
      BASIC_CHECKOUT_URL && BASIC_CHECKOUT_URL !== '[CHECKOUT_URL_BASIC]'
        ? BASIC_CHECKOUT_URL
        : 'https://xpag.global/pay/zkaVu3we';
    window.location.href = basicUrl;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[500px] bg-white rounded-[28px] p-6 sm:p-8 shadow-2xl border-4 border-amber-400 text-center animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón Cerrar */}
        <button
          onClick={onClose}
          aria-label="Cerrar modal"
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-100 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Badge superior OPORTUNIDAD ÚNICA */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-300 mb-4 shadow-xs">
          <span>⚠️ OPORTUNIDAD ÚNICA</span>
        </div>

        {/* Título Principal */}
        <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] leading-tight mb-3 text-balance">
          ¡Espera! ¿Qué tal llevarte TODO con bonos y descuento?
        </h3>

        {/* Descripción explicativa */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 text-balance">
          Elegiste la versión simple de <span className="font-bold text-slate-900">${displayBasicPrice} MXN</span>. Pero solo por ahora, puedes conseguir el <span className="font-bold text-slate-900">Plan VIP Premium</span> (con los 5 bonos de apoyo + actualizaciones + soporte) por solo:
        </p>

        {/* Caja de Precio Promocional Destacada */}
        <div
          onClick={handleAcceptOffer}
          className="bg-emerald-50/80 border-2 border-emerald-400 hover:border-emerald-500 rounded-2xl p-4 sm:p-5 mb-5 text-center shadow-xs hover:shadow-md transition cursor-pointer group"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleAcceptOffer()}
        >
          <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-1">
            De <span className="line-through font-bold text-slate-500">${displayOldPrice} MXN</span> por solo
          </p>
          <div className="flex items-baseline justify-center gap-1.5 my-1 transition transform group-hover:scale-105">
            <span className="text-2xl sm:text-3xl font-black text-emerald-600">$</span>
            <span className="text-4xl sm:text-5xl font-black text-emerald-600 tracking-tight">
              {displayVipPrice}
            </span>
            <span className="text-xl sm:text-2xl font-extrabold text-emerald-600">MXN</span>
          </div>
          <p className="text-xs sm:text-sm font-extrabold text-emerald-700 tracking-wide">
            ¡Ahorra en grande al instante!
          </p>
        </div>

        {/* Botón Grande Verde */}
        <button
          onClick={handleAcceptOffer}
          className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white font-black text-base sm:text-lg py-4 px-6 rounded-2xl shadow-lg shadow-emerald-500/30 transition transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 mb-3.5 cursor-pointer"
        >
          <Flame className="w-5 h-5 text-amber-200 fill-amber-200 shrink-0" />
          <span>Sí, la quiero por ${displayVipPrice} MXN</span>
        </button>

        {/* Opción de continuar con el plan básico */}
        <button
          onClick={handleDeclineOffer}
          className="w-full py-2.5 px-4 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 text-xs sm:text-sm font-medium transition cursor-pointer text-center block"
        >
          No, gracias. Quiero continuar con el plan de ${displayBasicPrice} MXN →
        </button>

        <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-slate-400 font-medium">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
          <span>Garantía de 7 días · Entrega digital inmediata</span>
        </div>
      </div>
    </div>
  );
};
