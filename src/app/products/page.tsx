'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import ProductGrid from '@/components/ProductGrid';
import { ShieldCheck, Wrench, Sparkles, MessageSquare } from 'lucide-react';

export default function ProductsPage() {
  const { lang, t } = useLanguage();

  return (
    <div className="py-12 bg-slate-950 text-white space-y-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <span className="text-xs uppercase tracking-widest font-bold text-amber-400">
          {t('KATALOG RESMI PURA ENGINEERING • INARI', 'OFFICIAL PURA ENGINEERING & INARI CATALOG')}
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-2 leading-tight">
          {t('Mesin Rekayasa Industri & Ekosistem ALSINTAN', 'Industrial Machinery & ALSINTAN Ecosystem')}
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed">
          {t(
            'Seluruh produk dirancang dan difabrikasi mandiri dengan toleransi kepresisian hingga 1 mikron dan berstandar SNI. Pilih kategori atau gunakan kolom pencarian untuk melihat spesifikasi teknis lengkap serta meminta penawaran resmi via WhatsApp.',
            'Engineered and manufactured in-house with tolerances up to 1 micron and SNI certification. Select a category or search below to inspect technical specifications and request official quotations on WhatsApp.'
          )}
        </p>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-300">
          <span className="inline-flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-full border border-slate-800">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            SNI (Standar Nasional Indonesia)
          </span>
          <span className="inline-flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-full border border-slate-800">
            <Wrench className="w-3.5 h-3.5 text-amber-400" />
            Toleransi 1 Mikron (0.001 mm)
          </span>
          <span className="inline-flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-full border border-slate-800">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            Jaminan Suku Cadang Asli
          </span>
        </div>
      </div>

      {/* Interactive Catalog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductGrid initialCategory="all" />
      </div>

      {/* Floating Assistance Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white">
              {t('Memerlukan Spesifikasi Mesin Custom Non-Standar?', 'Need Custom Non-Standard Machinery Specs?')}
            </h4>
            <p className="text-xs text-slate-400">
              {t(
                'Tim litbang dan perekayasa Pura Engineering siap merancang mesin custom sesuai kebutuhan proses produksi Anda.',
                'Our engineering R&D team can design custom machinery tailored to your unique production processes.'
              )}
            </p>
          </div>
          <a
            href="https://wa.me/6281290260777?text=Halo%20Bpk.%20Bennyto%20(Marketing%20Pura%20Engineering),%20saya%20ingin%20berkonsultasi%20mengenai%20kebutuhan%20mesin%20custom%20non-standar."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-xs transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{t('Konsultasi Mesin Custom WA', 'Consult Custom Machine')}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
