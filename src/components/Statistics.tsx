'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { STATS_DATA } from '@/data/companyData';

export default function Statistics() {
  const { lang, t } = useLanguage();

  return (
    <section className="bg-slate-900 border-y border-slate-800/80 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-widest font-bold text-amber-400">
            {t('SKALA INDUSTRIAL & JEJAK PENCAPAIAN', 'INDUSTRIAL SCALE & TRACK RECORD')}
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
            {t(
              'Fakta & Angka Terverifikasi Pura Group',
              'Verified Key Figures & Corporate Milestones'
            )}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {STATS_DATA.map((stat, idx) => (
            <div
              key={idx}
              className="bg-slate-950/70 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-all hover:shadow-lg group"
            >
              <div className="flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-amber-400 group-hover:text-amber-300 transition-colors tracking-tight">
                  {stat.value}
                </span>
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-white mt-2 leading-snug">
                {stat.label[lang]}
              </h3>
              <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                {stat.subtext[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
