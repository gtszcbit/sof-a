import React, { useState } from 'react';
import { CHECKOUT_URL } from '../config/siteConfig';
import { ArrowRight, ShoppingBag, CheckCircle2, X } from 'lucide-react';

interface CheckoutButtonProps {
  children?: React.ReactNode;
  variant?: 'green' | 'blue';
  className?: string;
  showIcon?: boolean;
  scrollToId?: string;
}

export const CheckoutButton: React.FC<CheckoutButtonProps> = ({
  children = 'Quiero mis 100 Marcapáginas',
  variant = 'green',
  className = '',
  showIcon = true,
  scrollToId,
}) => {
  const [showNotice, setShowNotice] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    // Si tiene target de desplazamiento o es "Quiero mis 100 Marcapáginas"
    const targetId =
      scrollToId ||
      (typeof children === 'string' && children.toLowerCase().includes('quiero mis 100')
        ? 'oferta'
        : undefined);

    if (targetId) {
      e.preventDefault();
      const element = document.getElementById(targetId.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }

    // Si CHECKOUT_URL es un enlace real válido (http:// o https://)
    const isRealUrl =
      CHECKOUT_URL &&
      (CHECKOUT_URL.startsWith('http://') || CHECKOUT_URL.startsWith('https://'));

    if (isRealUrl) {
      window.open(CHECKOUT_URL, '_blank', 'noopener,noreferrer');
      return;
    }

    // Si aún es el placeholder "[CHECKOUT_URL]" o "PEGAR_..."
    e.preventDefault();
    setShowNotice(true);
  };

  const baseStyle =
    'relative inline-flex items-center justify-center gap-2.5 font-bold rounded-[14px] text-base md:text-lg transition-all duration-200 cursor-pointer active:scale-[0.98] select-none text-center';

  const colorStyles = {
    green:
      'bg-[#22C55E] hover:bg-[#16a34a] text-white shadow-[0_8px_20px_rgba(34,197,94,0.28)] hover:shadow-[0_12px_24px_rgba(34,197,94,0.38)] hover:-translate-y-0.5',
    blue:
      'bg-[#1D4ED8] hover:bg-[#1e40af] text-white shadow-[0_8px_20px_rgba(29,78,216,0.28)] hover:shadow-[0_12px_24px_rgba(29,78,216,0.38)] hover:-translate-y-0.5',
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className={`${baseStyle} ${colorStyles[variant]} py-4 px-6 md:px-8 w-full ${className}`}
      >
        <span className="inline-flex items-center justify-center gap-2.5 mx-auto text-center">
          <ShoppingBag className="w-5 h-5 shrink-0 opacity-90" />
          <span className="text-center">{children}</span>
          {showIcon && <ArrowRight className="w-5 h-5 shrink-0 stroke-[2.5]" />}
        </span>
      </button>

      {/* Modal / Notificación explicativa cuando aún es placeholder */}
      {showNotice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 relative">
            <button
              onClick={() => setShowNotice(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1 rounded-lg"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base">Botón de Checkout Conectado</h4>
                <p className="text-xs text-slate-500 font-mono">Variable: CHECKOUT_URL</p>
              </div>
            </div>

            <p className="text-sm text-slate-600 mb-4 leading-relaxed">
              Todos los botones de la página están listos y vinculados a la variable{' '}
              <code className="bg-slate-100 text-blue-700 font-mono px-1.5 py-0.5 rounded text-xs">
                CHECKOUT_URL
              </code>
              .
            </p>

            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs text-slate-600 mb-5 font-mono">
              <div className="text-slate-400 mb-1">// Valor actual configurado:</div>
              <div className="text-blue-600 font-bold break-all">"{CHECKOUT_URL}"</div>
            </div>

            <p className="text-xs text-slate-500 mb-5">
              💡 Para que dirija a tu pasarela de pago (Hotmart, Stripe, Mercado Pago, etc.), solo abre{' '}
              <strong className="text-slate-700">src/config/siteConfig.ts</strong> y pega tu URL en{' '}
              <code className="text-blue-600">checkoutUrl</code>.
            </p>

            <button
              onClick={() => setShowNotice(false)}
              className="w-full py-3 bg-[#1D4ED8] hover:bg-[#1e40af] text-white font-semibold rounded-xl text-sm transition-colors"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </>
  );
};
