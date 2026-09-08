'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import {
  ShieldCheck,
  ArrowRight,
  MessageSquare,
  Award,
  Cpu,
  Wrench,
  CheckCircle2
} from 'lucide-react';

export default function Hero() {
  const { t } = useLanguage();

  const handleWhatsApp = () => {
    const phone = '6281290260777';
    const text = encodeURIComponent(
      t(
        'Halo Bpk. Bennyto (Marketing Pura Group), saya ingin berkonsultasi mengenai solusi permesinan dan manufaktur industri untuk perusahaan kami.',
        'Hello Mr. Bennyto (Pura Group Marketing), I would like to inquire about industrial machinery and manufacturing solutions for our enterprise.'
      )
    );
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-slate-950 text-white">
      {/* Industrial Geometric Grid & Visual Background */}
      <div className="absolute inset-0 z-0 opacity-25">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Corporate Brand Narrative & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Sales Marketing & National Honor Badges */}
            <div className="inline-flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 bg-slate-900/90 border border-slate-700/80 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-200 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>SALES MARKETING: BENNYTO</span>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/30 px-3 py-1.5 rounded-full text-xs font-semibold text-amber-400">
                <Award className="w-3.5 h-3.5" />
                <span>Bintang Mahaputera Nararya (2021)</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.12] text-white">
              {t(
                'Kekuatan Industri Terpadu & Rekayasa Presisi untuk Kemandirian Bangsa.',
                'Integrated Industrial Powerhouse & Precision Engineering for Global Progress.'
              )}
            </h1>

            {/* Sub-headline establishing Bennyto's sales portal */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              {t(
                'Selamat datang di portal resmi Sales Marketing Bennyto. Menghubungkan kebutuhan industri dan instansi Anda langsung dengan kapabilitas manufaktur 100 hektar Pura Group Kudus — mulai dari pabrik turnkey (BENSA, PAMIGO, Salt Washing), 4.000+ alsintan pertanian modern INARI, hingga cetak sekuriti berstandar dunia.',
                'Welcome to the official portal of Sales Marketing Bennyto. Connecting your enterprise and agency directly with Pura Group\'s 100-hectare manufacturing complex in Kudus — delivering turnkey processing plants (BENSA, PAMIGO, Salt Washing), 4,000+ INARI agricultural machines, and world-class security solutions.'
              )}
            </p>

            {/* Credibility Key Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t('Toleransi Permesinan CNC 1 Mikron', '1-Micron CNC Machining Tolerance')}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t('4.000+ Alsintan Tersebar di Seluruh Indonesia', '4,000+ Farm Machines Across Indonesia')}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t('Turnkey EPCC Proyek Rekayasa Lengkap', 'Turnkey EPCC End-to-End Plant Delivery')}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t('Sertifikasi Resmi SNI • ISO • BOTASUPAL • TKDN', 'Certified SNI • ISO • BOTASUPAL • TKDN')}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm tracking-wide px-7 py-3.5 rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all"
              >
                <span>{t('Jelajahi Produk & Mesin', 'Explore Products & Machinery')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                type="button"
                onClick={handleWhatsApp}
                className="inline-flex items-center justify-center gap-2.5 bg-slate-900/90 hover:bg-slate-800 text-slate-100 font-semibold text-sm tracking-wide px-6 py-3.5 rounded-xl border border-slate-700 transition-all hover:border-slate-500"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>{t('Konsultasi Cepat WhatsApp', 'Inquire via WhatsApp')}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Showcase & Technical Badges */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 shadow-2xl group">
              {/* Product / Facility Image Showcase */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                <Image
                  src="/assets/products/custom_plants_showcase.png"
                  alt="Pura Engineering Industrial Showcase"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-md border border-slate-700 text-[11px] font-bold text-amber-400">
                  PURA ENGINEERING • INARI
                </div>
              </div>

              {/* Information Overlay Strip */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div>
                    <h3 className="font-bold text-white text-base">
                      {t('Solusi Rekayasa Terpadu', 'Turnkey Engineering Solutions')}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {t('Pabrik Bensa, PAMIGO, Salt Washing & Alsintan', 'Bensa Biofuel, PAMIGO, Salt Washing & Agro Machines')}
                    </p>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                    SNI Certified
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="bg-slate-950/70 p-2.5 rounded-lg border border-slate-800/80">
                    <p className="text-amber-400 font-extrabold text-sm sm:text-base">1 µm</p>
                    <p className="text-[10px] text-slate-400 font-medium uppercase mt-0.5">{t('Presisi CNC', 'CNC Precision')}</p>
                  </div>
                  <div className="bg-slate-950/70 p-2.5 rounded-lg border border-slate-800/80">
                    <p className="text-amber-400 font-extrabold text-sm sm:text-base">4.000+</p>
                    <p className="text-[10px] text-slate-400 font-medium uppercase mt-0.5">{t('Alsintan', 'Farm Units')}</p>
                  </div>
                  <div className="bg-slate-950/70 p-2.5 rounded-lg border border-slate-800/80">
                    <p className="text-amber-400 font-extrabold text-sm sm:text-base">80+</p>
                    <p className="text-[10px] text-slate-400 font-medium uppercase mt-0.5">{t('Paten HKI', 'Patents')}</p>
                  </div>
                </div>

                <Link
                  href="/engineering"
                  className="w-full flex items-center justify-between text-xs font-semibold text-slate-300 hover:text-amber-400 pt-1 group/link"
                >
                  <span>{t('Pelajari Divisi Rekayasa & Sejarah 1974', 'Explore Engineering Division & 1974 Legacy')}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
