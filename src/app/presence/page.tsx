'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import PresenceSection from '@/components/PresenceSection';
import { MapPin, Globe, Award, CheckCircle2 } from 'lucide-react';

export default function PresencePage() {
  const { lang, t } = useLanguage();

  return (
    <div className="py-12 bg-slate-950 text-white space-y-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <span className="text-xs uppercase tracking-widest font-bold text-amber-400">
          {t('JANGKAUAN DISTRIBUSI & JEJAK PASAR GLOBAL', 'NATIONWIDE DISTRIBUTION & GLOBAL REACH')}
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-2 leading-tight">
          {t('Kehadiran Nyata di Nusantara & Pasar Dunia', 'Powering Indonesia & Serving 100+ Nations')}
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed">
          {t(
            'Lebih dari 4.000 alat dan mesin pertanian INARI aktif di sentra-sentra produksi pangan seluruh Indonesia, didukung ekspor teknologi bernilai tinggi ke lebih dari 100 negara di 5 benua.',
            'Over 4,000 INARI agricultural machines actively empower food production across the Indonesian archipelago, complemented by high-technology exports to over 100 countries across 5 continents.'
          )}
        </p>
      </div>

      {/* Main Presence Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PresenceSection />
      </div>

      {/* Global Reach Highlight */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-10">
          <div className="flex items-center gap-2 mb-3">
            <Globe className="w-5 h-5 text-amber-400" />
            <span className="text-xs uppercase font-bold tracking-wider text-amber-400">
              {t('JEJAK EKSPOR GLOBAL (100+ NEGARA)', 'GLOBAL EXPORT FOOTPRINT (100+ COUNTRIES)')}
            </span>
          </div>

          <h3 className="text-2xl font-black text-white">
            {t('Dipercaya Lebih dari 22.000 Mitra Bisnis di Seluruh Dunia', 'Trusted by Over 22,000 Global Business Partners')}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-6">
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800">
              <span className="text-3xl font-black text-amber-400 font-mono">100+</span>
              <p className="text-xs font-bold text-white mt-1">{t('Negara Tujuan Ekspor', 'Export Countries')}</p>
              <p className="text-[11px] text-slate-400 mt-1">{t('Mencakup Asia, Afrika, Eropa, dan Amerika', 'Spanning Asia, Africa, Europe, and the Americas')}</p>
            </div>
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800">
              <span className="text-3xl font-black text-amber-400 font-mono">$25M</span>
              <p className="text-xs font-bold text-white mt-1">{t('Omzet Ekspor Smart Tech', 'Smart Tech Export Turnover')}</p>
              <p className="text-[11px] text-slate-400 mt-1">{t('Ekspor kartu pintar ke 15 negara tujuan', 'Exporting smart cards across 15 nations')}</p>
            </div>
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800">
              <span className="text-3xl font-black text-amber-400 font-mono">2005 & 2007</span>
              <p className="text-xs font-bold text-white mt-1">Primaniyarta Awards</p>
              <p className="text-[11px] text-slate-400 mt-1">{t('Eksportir Berkinerja Terbaik Kementerian Perdagangan RI', 'Best Performing Exporter Ministry of Trade RI')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
