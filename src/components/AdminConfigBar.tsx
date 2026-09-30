import React, { useState } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { Sliders, Eye, EyeOff, Check, Copy } from 'lucide-react';

interface AdminConfigBarProps {
  showTestimonialsState: boolean;
  onToggleTestimonials: () => void;
}

export const AdminConfigBar: React.FC<AdminConfigBarProps> = ({
  showTestimonialsState,
  onToggleTestimonials,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyConfigSnippet = () => {
    navigator.clipboard.writeText(JSON.stringify(SITE_CONFIG, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <aside aria-label="Panel de configuración rápida" className="fixed bottom-4 right-4 z-40">
      {isOpen ? (
        <div className="bg-slate-900/95 backdrop-blur-md border border-slate-700 text-white rounded-2xl p-4 shadow-2xl w-80 text-xs animate-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800">
            <div className="flex items-center gap-1.5 font-bold text-slate-200">
              <Sliders className="w-4 h-4 text-blue-400" />
              <span>Configuración del Sitio</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white px-1.5 py-0.5 rounded text-sm cursor-pointer"
            >
              ✕
            </button>
          </div>

          <div className="space-y-3 mb-3">
            <div className="flex items-center justify-between bg-slate-800/80 p-2 rounded-lg">
              <div>
                <span className="font-semibold block text-slate-200">Prueba Social</span>
                <span className="text-[10px] text-slate-400">
                  {showTestimonialsState ? 'Visible actualmente' : 'Oculta (por defecto)'}
                </span>
              </div>
              <button
                type="button"
                onClick={onToggleTestimonials}
                className={`px-2.5 py-1 rounded text-[11px] font-bold flex items-center gap-1 transition-colors cursor-pointer ${
                  showTestimonialsState
                    ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                    : 'bg-slate-700 hover:bg-slate-600 text-slate-300'
                }`}
              >
                {showTestimonialsState ? (
                  <>
                    <Eye className="w-3 h-3" /> ON
                  </>
                ) : (
                  <>
                    <EyeOff className="w-3 h-3" /> OFF
                  </>
                )}
              </button>
            </div>

            <div className="bg-slate-800/50 p-2 rounded-lg text-[11px] space-y-1">
              <div className="text-slate-400 font-mono text-[10px]">VARIABLES CLAVE:</div>
              <div className="flex justify-between">
                <span className="text-slate-400">Precio:</span>
                <span className="font-mono text-emerald-400 font-bold">{SITE_CONFIG.price}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Checkout:</span>
                <span className="font-mono text-blue-400 truncate max-w-[120px]">
                  {SITE_CONFIG.checkoutUrl}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Archivo:</span>
                <span className="text-slate-300">src/config/siteConfig.ts</span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={copyConfigSnippet}
            className="w-full py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg flex items-center justify-center gap-1 text-[11px] font-medium transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" /> ¡Copiado!
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" /> Copiar variables JSON
              </>
            )}
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="bg-slate-900/90 hover:bg-slate-900 text-white p-2.5 rounded-full shadow-lg border border-slate-700 text-xs flex items-center gap-1.5 cursor-pointer opacity-80 hover:opacity-100 transition-all hover:scale-105"
          title="Ver variables de configuración"
        >
          <Sliders className="w-4 h-4 text-blue-400" />
          <span className="hidden sm:inline font-semibold pr-1 text-[11px]">Ajustes</span>
        </button>
      )}
    </aside>
  );
};
