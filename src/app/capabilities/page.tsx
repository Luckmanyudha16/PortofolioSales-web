'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { CORE_SOLUTIONS } from '@/data/companyData';
import { 
  ShieldCheck, 
  Layers, 
  Wrench, 
  FileText, 
  Cpu, 
  CheckCircle2, 
  ArrowRight,
  Package,
  Boxes
} from 'lucide-react';

export default function CapabilitiesPage() {
  const { lang, t } = useLanguage();

  const services = [
    { num: '01', title: { id: 'Single Workflow Security Printing', en: 'Single Workflow Security Printing' }, desc: { id: 'Proses terintegrasi dan terlacak penuh dari pemilihan bahan hingga distribusi dokumen sekuriti berstandar BOTASUPAL.', en: 'Integrated and traceable workflow from material sourcing to final distribution under BOTASUPAL security standards.' } },
    { num: '02', title: { id: 'Sistem Anti-Pemalsuan (Anti-Counterfeiting)', en: 'Anti-Counterfeiting Systems' }, desc: { id: 'Fitur sekuriti canggih: cetak tak kasat mata multi-warna, tinta reaktif, dan benang pengaman mikroskopis.', en: 'Advanced security elements: multi-color invisible printing, reactive chemical inks, and security threads.' } },
    { num: '03', title: { id: 'Pakar Hologram (Hologram Expert)', en: 'Hologram Expert Service' }, desc: { id: 'Desain dan mastering hologram 2D/3D serta DOVID resolusi tinggi untuk paspor dan perlindungan merek premium.', en: '2D/3D holographic mastering and DOVID optical variable security for passports and luxury brand protection.' } },
    { num: '04', title: { id: 'Konversi Plastik (Plastic Converting)', en: 'Plastic Converting' }, desc: { id: 'Hot stamping foil, cold stamping foil, film transfer, film cetak in-mould, dan solar window film tahan panas.', en: 'Hot stamping foil, cold foil, transfer films, in-mould labels, and high-rejection solar window films.' } },
    { num: '05', title: { id: 'Desain Kemasan (Packaging Designing)', en: 'Packaging Designing' }, desc: { id: 'Pengembangan konsep, pembuatan sampel purwarupa, hingga pengujian struktural kemasan sebelum produksi massal.', en: 'End-to-end prototyping, 3D structural sampling, and barrier testing before commercial mass production.' } },
    { num: '06', title: { id: 'Konversi Kertas & Plastik Terpadu', en: 'Paper & Plastic Printing Converting' }, desc: { id: 'Replikasi material sampel klien dan pemrosesan mandiri secara efisien di bawah satu atap produksi.', en: 'Material replication, custom lamination, and precision converting manufactured entirely in-house.' } },
    { num: '07', title: { id: 'Ekosistem Percetakan Terintegrasi', en: 'Integrated Printing Ecosystem' }, desc: { id: 'Kolaborasi lintas unit (Smart Tech untuk kode unik, Offset untuk cetak kemasan karton higienis).', en: 'Cross-unit synergy combining Smart Tech unique codes with Offset hygienic food/pharma packaging.' } },
    { num: '08', title: { id: 'Pasokan Industri Tembakau & Rokok', en: 'Tobacco Cigarette Industry Supply' }, desc: { id: 'Kertas rokok, tipping paper, dan Homogenized Tobacco Leaf (HTL) — produsen HTL pertama di luar Amerika Serikat.', en: 'Cigarette paper, tipping paper, and Homogenized Tobacco Leaf (HTL) — the first HTL producer outside the USA.' } },
    { num: '09', title: { id: 'Konversi Kertas Berkelanjutan', en: 'Paper Converting & Circular Economy' }, desc: { id: 'Mengolah sisa dan limbah kertas kemasan menjadi produk kertas baru bernilai tinggi untuk mengurangi jejak karbon.', en: 'Repurposing internal paper residues into molded fiber packaging, cutting carbon emissions by 13.77%.' } },
    { num: '10', title: { id: 'Solusi Pertanian & Alsintan Terpadu', en: 'Agriculture & Farm Solutions' }, desc: { id: 'Permesinan pra-panen, pemanen padi INARI, pengering gabah, hingga penggilingan padi terintegrasi (RMU).', en: 'Pre-harvest implements, INARI combine harvesters, automated grain dryers, and complete rice milling plants.' } },
  ];

  return (
    <div className="py-12 bg-slate-950 text-white space-y-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <span className="text-xs uppercase tracking-widest font-bold text-amber-400">
          {t('KAPABILITAS BISNIS & SOLUSI INDUSTRI', 'BUSINESS CAPABILITIES & INDUSTRIAL SOLUTIONS')}
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-2 leading-tight">
          {t('5 Solusi Inti & 10 Layanan Terpadu', '5 Core Solutions & 10 Integrated Services')}
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed">
          {t(
            'Dengan 30 divisi produksi yang berlokasi berdampingan di kawasan industri Kudus 100 hektar, Pura Group menghadirkan solusi manufaktur menyeluruh dari rekayasa mesin presisi hingga percetakan sekuriti tertinggi.',
            'With 30 co-located production units within a 100-hectare industrial complex in Kudus, Pura Group delivers comprehensive capabilities spanning precision engineering, specialty materials, and high security.'
          )}
        </p>
      </div>

      {/* 5 Core Solutions Deep Dive */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {CORE_SOLUTIONS.map((sol, index) => {
          const isReverse = index % 2 !== 0;
          return (
            <div
              key={sol.id}
              className={`bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden shadow-xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                isReverse ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 ${isReverse ? 'lg:order-2' : ''}`}>
                <Image
                  src={sol.image}
                  alt={sol.title[lang]}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 bg-slate-950/90 px-3 py-1 rounded-lg border border-slate-700 text-xs font-mono text-amber-400">
                  {sol.stats}
                </div>
              </div>

              <div className={`lg:col-span-6 space-y-4 ${isReverse ? 'lg:order-1' : ''}`}>
                <span className="text-[10px] uppercase tracking-widest font-black text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded border border-amber-400/20">
                  {t(`Pilar Solusi 0${index + 1}`, `Core Solution Pillar 0${index + 1}`)}
                </span>
                <h3 className="text-2xl font-bold text-white leading-snug">
                  {sol.title[lang]}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {sol.summary[lang]}
                </p>

                <div className="pt-2">
                  <Link
                    href={sol.link}
                    className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    <span>{t('Jelajahi Rincian Produk Terkait', 'Explore Detailed Associated Products')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 10 Integrated Services Ecosystem ("One Partner, Infinite Possibilities") */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-bold text-emerald-400">
            {t('ONE PARTNER, INFINITE POSSIBILITIES', 'ONE PARTNER, INFINITE POSSIBILITIES')}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            {t('10 Layanan Terpadu Ekosistem Pura Group', '10 Integrated Ecosystem Services')}
          </h2>
          <p className="text-xs text-slate-400 mt-2">
            {t(
              'Alur kerja tunggal tanpa perantara dari pengadaan bahan baku, riset formulasi, desain, hingga permesinan dan distribusi.',
              'A unified workflow eliminating intermediaries from raw materials and formulation to engineering machinery.'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((srv) => (
            <div
              key={srv.num}
              className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl flex items-start gap-4 hover:border-slate-700 transition-all"
            >
              <span className="text-xl font-black text-amber-400 font-mono shrink-0">
                {srv.num}
              </span>
              <div>
                <h4 className="text-sm font-bold text-white">{srv.title[lang]}</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">{srv.desc[lang]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
