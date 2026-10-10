import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { ProductShowcase } from './components/ProductShowcase';
import { IncludedContent } from './components/IncludedContent';
import { CustomerReviews } from './components/CustomerReviews';
import { Offer } from './components/Offer';
import { Guarantee } from './components/Guarantee';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { AdminConfigBar } from './components/AdminConfigBar';
import { SITE_CONFIG } from './config/siteConfig';

export default function App() {
  const [showTestimonials, setShowTestimonials] = useState<boolean>(SITE_CONFIG.showTestimonials);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] font-sans antialiased overflow-x-hidden selection:bg-[#2563EB]/20 selection:text-[#1D4ED8]">
      {/* 1. TOP BAR DE URGENCIA */}
      <TopBar />

      <main className="flex-1 w-full">
        {/* 2. HERO AZUL */}
        <Hero />

        {/* 3. SECCIÓN DE BENEFICIOS (BLANCO) */}
        <Benefits />

        {/* 4. MIRA CÓMO QUEDA - CARRUSEL GALERÍA (#F8FAFC) */}
        <ProductShowcase />

        {/* 5. DENTRO DEL KIT - LISTA Y DEMO (BLANCO) */}
        <IncludedContent />

        {/* 7. OPINIONES DE COMPRADORES (5 ESTRELLAS) */}
        <CustomerReviews />

        {/* 8. GARANTÍA DE 7 DÍAS (COMPACTA) */}
        <Guarantee />

        {/* 9. PLANES DE CHECKOUT ($55 MXN Y $140 MXN) - ELIGE EL PLAN IDEAL PARA TI */}
        <Offer />

        {/* 12. DUDAS FRECUENTES (FAQ) (#F8FAFC) */}
        <FAQ />

        {/* 13. CTA FINAL (AZUL) */}
        <FinalCTA />
      </main>

      {/* 14. FOOTER OSCURO (#0F172A) */}
      <Footer />

      {/* Botón flotante discreto de ajustes de configuración */}
      <AdminConfigBar
        showTestimonialsState={showTestimonials}
        onToggleTestimonials={() => setShowTestimonials((prev) => !prev)}
      />
    </div>
  );
}
