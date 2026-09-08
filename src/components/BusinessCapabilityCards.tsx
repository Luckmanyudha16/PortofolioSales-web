'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { CORE_SOLUTIONS } from '@/data/companyData';
import { 
  Wrench, 
  Layers, 
  ShieldCheck, 
  FileText, 
  Cpu, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function BusinessCapabilityCards() {
  const { lang, t } = useLanguage();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-amber-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-amber-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-amber-400" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-amber-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-amber-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest font-bold text-amber-400">
              {t('LIMA PILAR SOLUSI BISNIS', 'FIVE CORE BUSINESS SOLUTIONS')}
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-2">
              {t(
                'Ekosistem Manufaktur & Rekayasa Terpadu',
                'Integrated Manufacturing & Engineering Ecosystem'
              )}
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            {t(
              '30 unit produksi terpadu dalam satu kawasan 100 hektar di Kudus menghadirkan rantai pasok hulu ke hilir yang efisien, aman, dan berstandar internasional.',
              '30 integrated production units in a centralized 100-hectare complex in Kudus deliver an efficient, secure, and world-class supply chain.'
            )}
          </p>
        </div>

        {/* 5 Core Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_SOLUTIONS.map((solution, idx) => (
            <div
              key={solution.id}
              className={`rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-all group ${
                idx === 0 ? 'md:col-span-2 lg:col-span-1 border-amber-500/30' : ''
              }`}
            >
              <div>
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
                  <Image
                    src={solution.image}
                    alt={solution.title[lang]}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md p-2 rounded-lg border border-slate-700">
                    {getIcon(solution.icon)}
                  </div>
                  <div className="absolute bottom-3 right-4 bg-slate-950/90 text-amber-400 text-[11px] font-bold px-2.5 py-1 rounded border border-slate-800">
                    {solution.stats}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                    {solution.title[lang]}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">
                    {solution.summary[lang]}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={solution.link}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors group/btn"
                >
                  <span>{t('Pelajari Kapabilitas', 'Explore Capabilities')}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Integrated Services Banner */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-widest font-extrabold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded border border-amber-400/20">
              {t('ONE PARTNER, INFINITE POSSIBILITIES', 'ONE PARTNER, INFINITE POSSIBILITIES')}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white mt-2">
              {t(
                '10 Layanan Terpadu: Dari Desain Kemasan Hingga Permesinan Siap Pakai',
                '10 Integrated Services: From Packaging Design to Turnkey Machinery'
              )}
            </h3>
            <p className="text-xs text-slate-300 mt-1 max-w-2xl">
              {t(
                'Sistem keamanan cetak single-workflow, konversi plastik & kertas, formulasi tinta Seika, bahan baku tembakau HTL, hingga permesinan pertanian terpadu di bawah satu atap terpercaya.',
                'Single-workflow security printing, paper & plastic converting, Seika ink formulation, HTL tobacco supply, and agro-machinery under one roof.'
              )}
            </p>
          </div>
          <Link
            href="/capabilities"
            className="shrink-0 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold px-5 py-3 rounded-xl border border-slate-700 transition-colors"
          >
            {t('Lihat Seluruh Layanan', 'View All Services')}
          </Link>
        </div>
      </div>
    </section>
  );
}
