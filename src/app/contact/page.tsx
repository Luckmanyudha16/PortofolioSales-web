'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import ContactSection from '@/components/ContactSection';
import { Phone, Mail, Building2, ShieldCheck } from 'lucide-react';

export default function ContactPage() {
  const { lang, t } = useLanguage();

  return (
    <div className="py-12 bg-slate-950 text-white space-y-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <span className="text-xs uppercase tracking-widest font-bold text-amber-400">
          {t('LAYANAN PORTAL MARKETING • BENNYTO', 'OFFICIAL PORTAL MARKETING DESK • BENNYTO')}
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-2 leading-tight">
          {t('Konsultasi Teknis & Permintaan Penawaran Resmi', 'Technical Consultation & Official Quotations')}
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed">
          {t(
            'Portal Marketing Bennyto. Siap melayani kebutuhan pengadaan alsintan pertanian INARI, mesin industri custom, proyek turnkey pabrik (BENSA, PAMIGO, Salt Washing), serta solusi sekuriti dan kemasan Pura Group.',
            'Portal Marketing Bennyto. Assisting your procurement needs for INARI agricultural machinery, custom turnkey plants (BENSA, PAMIGO, Salt Washing), and Pura Group security packaging.'
          )}
        </p>
      </div>

      {/* Main Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactSection />
      </div>
    </div>
  );
}
