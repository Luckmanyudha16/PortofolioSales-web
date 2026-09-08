'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { AWARDS_DATA, CERTIFICATIONS_DATA } from '@/data/companyData';
import { Award, ShieldCheck, CheckCircle2, ChevronRight, Star } from 'lucide-react';

export default function AwardSection() {
  const { lang, t } = useLanguage();

  return (
    <div className="space-y-16">
      {/* Featured Award: Bintang Mahaputera Nararya */}
      <div className="bg-gradient-to-br from-amber-950/40 via-slate-900 to-slate-950 border-2 border-amber-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 px-3.5 py-1.5 rounded-full text-xs font-bold text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>{t('TANDA KEHORMATAN TERTINGGI REPUBLIK INDONESIA', 'HIGHEST CIVILIAN HONOR OF INDONESIA')}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Bintang Mahaputera Nararya (2021)
            </h3>

            <p className="text-xs sm:text-sm font-semibold text-amber-400">
              {t(
                'Dianugerahkan oleh Presiden Republik Indonesia, Joko Widodo, kepada Dr. (H.C.) Jacobus Busono pada 12 Agustus 2021.',
                'Conferred by the President of Indonesia, Joko Widodo, upon Dr. (H.C.) Jacobus Busono on August 12, 2021.'
              )}
            </p>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
              {t(
                'Penghargaan sipil tertinggi kenegaraan ini mengakui kepeloporan dan dedikasi seumur hidup Jacobus Busono dalam memajukan kemandirian teknologi nasional, khususnya dalam memproduksi kertas uang rupiah, cetak sekuriti anti-pemalsuan, kartu pintar, dan mesin rekayasa industri yang mengantarkan Pura Group meraih lebih dari 80 paten terdaftar.',
                'This prestigious civilian medal celebrates Jacobus Busono\'s transformative leadership in currency banknote paper, anti-counterfeiting security printing, smart card systems, and domestic engineering, enabling Pura Group to secure 80+ patents and advance Indonesia\'s technological self-reliance.'
              )}
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>{t('Kemandirian Kertas Uang Rupiah', 'Banknote Paper Self-Reliance')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>{t('80+ Paten Terdaftar Nasional', '80+ Registered Patents')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>{t('Substitusi Impor Teknologi Strategis', 'Import Substitution of Critical Tech')}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="relative aspect-square w-64 rounded-2xl overflow-hidden border border-amber-500/30 bg-slate-950 p-2 shadow-xl">
              <Image
                src="/assets/awards/awards_wall.png"
                alt="Bintang Mahaputera Nararya & Awards Wall"
                fill
                className="object-cover object-center rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Industrial & Engineering Honors */}
      <div>
        <h4 className="text-lg sm:text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Award className="w-5 h-5 text-amber-400" />
          <span>{t('Penghargaan Rekayasa, Ekspor & Inovasi Industri', 'Engineering, Export & Innovation Accolades')}</span>
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {AWARDS_DATA.slice(1).map((award, i) => (
            <div
              key={i}
              className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-sm font-black text-amber-400 font-mono">
                    {award.year}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-950 text-slate-300 px-2 py-0.5 rounded border border-slate-800">
                    {award.badge}
                  </span>
                </div>

                <h5 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                  {award.title[lang]}
                </h5>
                <p className="text-xs font-medium text-slate-400 mt-1">
                  {award.giver[lang]}
                </p>
                <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                  {award.desc[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TKDN & Official Certifications Dashboard */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <p className="text-xs uppercase tracking-widest font-bold text-amber-400">
              {t('SERTIFIKASI & KOMITMEN KANDUNGAN LOKAL', 'CERTIFICATIONS & LOCAL CONTENT')}
            </p>
            <h4 className="text-xl font-extrabold text-white mt-1">
              {t('Dashboard TKDN & Standar Mutu Internasional', 'TKDN Dashboard & International Standards')}
            </h4>
          </div>
          <span className="text-xs text-slate-400 max-w-sm">
            {t(
              'Lebih dari 100 sertifikat TKDN resmi dikeluarkan oleh Kementerian Perindustrian RI untuk entitas Pura Group.',
              'Over 100 official TKDN certificates issued by the Ministry of Industry for Pura Group entities.'
            )}
          </span>
        </div>

        {/* TKDN Score Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-slate-950 p-5 rounded-xl border border-slate-800">
            <span className="text-3xl font-black text-amber-400">44.37%</span>
            <p className="text-xs font-bold text-white mt-1">PT Pura Barutama</p>
            <p className="text-[11px] text-slate-400 mt-0.5">87 {t('Sertifikat TKDN Kertas Uang Pecahan Kecil', 'Certificates for Small Denomination Banknote Paper')}</p>
          </div>
          <div className="bg-slate-950 p-5 rounded-xl border border-slate-800">
            <span className="text-3xl font-black text-amber-400">44.37%</span>
            <p className="text-xs font-bold text-white mt-1">PT Pura Agro Mandiri</p>
            <p className="text-[11px] text-slate-400 mt-0.5">13 {t('Sertifikat TKDN Kertas Uang Pecahan Sedang', 'Certificates for Medium Denomination Banknote Paper')}</p>
          </div>
          <div className="bg-slate-950 p-5 rounded-xl border border-slate-800">
            <span className="text-3xl font-black text-amber-400">22.61%</span>
            <p className="text-xs font-bold text-white mt-1">PT Pura Nusapersada</p>
            <p className="text-[11px] text-slate-400 mt-0.5">{t('Sertifikasi Kertas Uang Pecahan Besar', 'Certification for Large Denomination Banknote Paper')}</p>
          </div>
        </div>

        {/* Certifications Badges List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
          {CERTIFICATIONS_DATA.map((cert, idx) => (
            <div key={idx} className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-white">{cert.name}</p>
                <p className="text-[10px] text-amber-400/90 font-medium">{cert.full}</p>
                <p className="text-[11px] text-slate-300 mt-1 leading-snug">{cert.desc[lang]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
