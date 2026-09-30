import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';

export const TopBar: React.FC = () => {
  if (!SITE_CONFIG.showUrgencyBar) return null;

  return (
    <aside aria-label="Aviso de urgencia" className="bg-[#1D4ED8] text-white text-xs md:text-sm py-2.5 px-4 text-center font-medium border-b border-blue-600/40 relative z-30 shadow-xs">
      <div className="max-w-4xl mx-auto flex items-center justify-center gap-1.5 flex-wrap">
        <span>🟡 Oferta especial por tiempo limitado — termina hoy a las 23:59 ⏰</span>
      </div>
    </aside>
  );
};
