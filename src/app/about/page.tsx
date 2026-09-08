'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { FOUNDER_DATA } from '@/data/companyData';
import Timeline from '@/components/Timeline';
import { Award, Compass, Heart, Lightbulb, Users, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  const { lang, t } = useLanguage();

  const values = [
    {
      icon: <Compass className="w-6 h-6 text-amber-400" />,
      title: { id: 'Kebijaksanaan (Wisdom)', en: 'Wisdom' },
      desc: {
        id: 'Di Pura Group, kebijaksanaan bukan sekadar pengetahuan, melainkan penerapannya dengan pemahaman mendalam tentang potensi manusia. Ini mendorong perusahaan berinvestasi pada talenta berkarakter positif.',
        en: 'At Pura Group, wisdom is not just about knowledge, but applying it with a deep understanding of human potential. It drives the company to invest in people fueled by positive character.',
      }
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-amber-400" />,
      title: { id: 'Imajinasi (Imagination)', en: 'Imagination' },
      desc: {
        id: 'Komitmen Pura Group pada daya imajinasi memungkinkannya memelopori solusi terobosan, mulai dari menggantikan material impor (substitusi impor) hingga merancang teknologi terbarukan ramah lingkungan.',
        en: 'Pura Group\'s commitment to imagination has enabled it to pioneer groundbreaking solutions, from replacing imported materials to engineering sustainable green technologies.',
      }
    },
    {
      icon: <Users className="w-6 h-6 text-amber-400" />,
      title: { id: 'Integrasi (Integration)', en: 'Integration' },
      desc: {
        id: 'Pemimpin di Pura Group didorong menghargai ide dari setiap tim dan menciptakan lingkungan kerja yang saling mendukung. Semangat kolaboratif ini menyatukan 30 divisi menjadi satu kekuatan terpadu.',
        en: 'Leaders at Pura Group are encouraged to value the ideas of their teams and build a supportive environment. This collaborative spirit unites 30 integrated divisions into one synchronized powerhouse.',
      }
    },
  ];

  return (
    <div className="py-12 bg-slate-950 text-white space-y-20">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <span className="text-xs uppercase tracking-widest font-bold text-amber-400">
          {t('TENTANG PURA GROUP & WARISAN KEPEMIMPINAN', 'ABOUT PURA GROUP & LEADERSHIP HERITAGE')}
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-2 leading-tight">
          {t('Lebih dari Satu Abad Berinovasi untuk Industri Dunia', 'Over a Century of Innovation Serving Global Industry')}
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed">
          {t(
            'Sejak berdiri pada tahun 1908 di Kudus, Jawa Tengah, Pura Group telah tumbuh dari percetakan letterpress sederhana menjadi salah satu konglomerasi manufaktur dan rekayasa terintegrasi terbesar di Asia Tenggara.',
            'Since its inception in 1908 in Kudus, Central Java, Pura Group has grown from a modest letterpress printing shop into one of Southeast Asia\'s largest integrated manufacturing and engineering conglomerates.'
          )}
        </p>
      </div>

      {/* Founder Legacy Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 relative aspect-[4/5] rounded-2xl overflow-hidden border border-slate-800 bg-slate-950">
              <Image
                src="/assets/company/founder_jacobus_busono.png"
                alt="Dr. (H.C.) Jacobus Busono"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-700 text-xs">
                <p className="font-bold text-white">Dr. (H.C.) Jacobus Busono</p>
                <p className="text-amber-400 font-medium text-[11px]">{FOUNDER_DATA.honor[lang]}</p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full text-xs font-bold text-amber-400">
                <Award className="w-3.5 h-3.5" />
                <span>Bintang Mahaputera Nararya (2021)</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {FOUNDER_DATA.name}
              </h2>

              <blockquote className="border-l-2 border-amber-500 pl-4 text-sm sm:text-base italic text-amber-300 font-medium">
                &ldquo;{FOUNDER_DATA.quote[lang]}&rdquo;
              </blockquote>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t(
                  'Atas kontribusi luar biasa terhadap industri dan inovasi teknologi nasional, Dr. (H.C.) Jacobus Busono dianugerahi Bintang Mahaputera Nararya oleh Presiden Joko Widodo pada 12 Agustus 2021. Penghargaan sipil bergengsi ini mengakui kepemimpinannya dalam mempelopori kemandirian kertas uang rupiah, cetak sekuriti anti-pemalsuan, kartu pintar, dan mesin rekayasa lokal berstandar internasional.',
                  'In recognition of exceptional contributions to national industry and technological innovation, Dr. (H.C.) Jacobus Busono was awarded the Bintang Mahaputera Nararya by President Joko Widodo on August 12, 2021. This prestigious honor acknowledges his leadership in currency paper, security printing, smart card systems, and domestic engineering.'
                )}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {FOUNDER_DATA.philosophy.map((p, i) => (
                  <div key={i} className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <p className="text-xs font-bold text-white mb-1">{p.title[lang]}</p>
                    <p className="text-[11px] text-slate-400 leading-relaxed">{p.desc[lang]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-3xl space-y-4">
            <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded border border-amber-400/20">
              {t('VISI KORPORAT', 'OUR VISION')}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {t(
                'Menjadi Produsen Terpadu Terpercaya & Pemimpin Pasar Global',
                'A Trusted, Integrated Manufacturer & Global Market Leader'
              )}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {t(
                'Kami bertekad menjadi produsen terintegrasi yang tepercaya dan dikenal atas solusi inovatif kami, serta menjadi pemimpin pasar global untuk setiap kompetensi yang kami miliki.',
                'We aim to be a trusted, integrated manufacturer known for our innovative solutions, and be the market leader globally for each of our competencies.'
              )}
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-3xl space-y-4">
            <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded border border-emerald-400/20">
              {t('MISI KORPORAT', 'OUR MISSION')}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {t('Tiga Pilar Penggerak Kemajuan', 'Three Strategic Growth Pillars')}
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-bold flex items-center justify-center shrink-0 text-xs">1</span>
                <span><strong>{t('Inovasi Berkelanjutan (Continuous Innovation):', 'Continuous Innovation:')}</strong> {t('Riset tanpa henti menghasilkan produk baru dan paten teknologi unggulan.', 'Ceaseless R&D inventing new machines and high-value patents.')}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-bold flex items-center justify-center shrink-0 text-xs">2</span>
                <span><strong>{t('Memperkuat Integrasi (Powering Integration):', 'Powering Integration:')}</strong> {t('Menyinergikan 30 unit produksi untuk efisiensi rantai pasok mandiri.', 'Synchronizing 30 production units for self-reliant efficiency.')}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-bold flex items-center justify-center shrink-0 text-xs">3</span>
                <span><strong>{t('Ekspansi Pasar Internasional (Global Expansion):', 'Global Expansion:')}</strong> {t('Memperluas kemitraan dan ekspor teknologi ke lebih dari 100 negara.', 'Expanding technological exports and trade across 100+ countries.')}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs uppercase tracking-widest font-bold text-amber-400">
            {t('NILAI-NILAI UTAMA KORPORAT', 'CORE VALUES')}
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            {t('Kebijaksanaan, Imajinasi & Integrasi', 'Wisdom, Imagination & Integration')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <div key={i} className="bg-slate-900/70 border border-slate-800 p-6 rounded-2xl space-y-3">
              <div className="p-2.5 rounded-xl bg-slate-950 inline-block border border-slate-800">
                {v.icon}
              </div>
              <h4 className="text-base font-bold text-white">{v.title[lang]}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">{v.desc[lang]}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline Section: Path of Progress */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-widest font-bold text-amber-400">
            {t('REKAM JEJAK SEJARAH 1908 - 2026', 'PATH OF PROGRESS (1908 - 2026)')}
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            {t('Jejak Langkah Transformasi Perusahaan', 'Milestones of Industrial Evolution')}
          </h2>
        </div>

        <Timeline />
      </div>

      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <div className="bg-gradient-to-r from-slate-900 to-slate-850 p-8 rounded-3xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="text-lg font-bold text-white">
              {t('Ingin Mengetahui Lebih Lanjut Mengenai Divisi Rekayasa?', 'Discover Our Dedicated Engineering Division')}
            </h4>
            <p className="text-xs text-slate-400 mt-1">
              {t('Pelajari sejarah Pura Bengkel (1974), merek INARI, dan toleransi CNC 1 mikron.', 'Explore Pura Bengkel (1974), the INARI trademark, and 1-micron CNC capabilities.')}
            </p>
          </div>
          <Link
            href="/engineering"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-xs transition-colors"
          >
            <span>{t('Kunjungi Divisi Rekayasa', 'Explore Pura Engineering')}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
