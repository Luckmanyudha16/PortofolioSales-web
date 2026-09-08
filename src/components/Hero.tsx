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

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className="space-y-6">
          {/* Sales Marketing & National Honor Badges */}
          <div className="flex flex-wrap items-center justify-start gap-2.5">
            <div className="inline-flex items-center gap-2 bg-slate-900/90 border border-slate-700/80 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>MARKETING: BENNYTO</span>
            </div>

          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-white max-w-4xl mx-auto">
            {t(
              'Kekuatan Industri Terpadu & Rekayasa Presisi untuk Kemandirian Bangsa.',
              'Integrated Industrial Powerhouse & Precision Engineering for Global Progress.'
            )}
          </h1>

          {/* Sub-headline establishing Bennyto's sales portal */}
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            {t(
              'Selamat datang di portal Marketing Bennyto. Menghubungkan kebutuhan industri dan instansi Anda langsung dengan kapabilitas manufaktur 100 hektar Pura Group Kudus.',
              'Welcome to the official portal of arketing Bennyto. Connecting your enterprise and agency directly with Pura Group\'s 100-hectare manufacturing complex in Kudus.'
            )}
          </p>

          {/* Credibility Key Bullets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-3 max-w-4xl mx-auto text-left">
            <div className="flex items-center gap-2.5 text-xs text-slate-300 bg-slate-900/70 p-3 rounded-xl border border-slate-800/90 shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{t('Toleransi Presisi CNC 1 Mikron', '1-Micron CNC Precision')}</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-300 bg-slate-900/70 p-3 rounded-xl border border-slate-800/90 shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{t('4.000+ Alsintan Se-Indonesia', '4,000+ Farm Machines Across Indonesia')}</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-300 bg-slate-900/70 p-3 rounded-xl border border-slate-800/90 shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{t('Turnkey EPCC Proyek Rekayasa', 'Turnkey EPCC Engineering Projects')}</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-300 bg-slate-900/70 p-3 rounded-xl border border-slate-800/90 shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{t('Resmi SNI • ISO • BOTASUPAL • TKDN', 'Certified SNI • ISO • BOTASUPAL • TKDN')}</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm tracking-wide px-7 py-3.5 rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all"
            >
              <span>{t('Jelajahi Produk & Mesin', 'Explore Products & Machinery')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              type="button"
              onClick={handleWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-slate-900/90 hover:bg-slate-800 text-slate-100 font-semibold text-sm tracking-wide px-6 py-3.5 rounded-xl border border-slate-700 transition-all hover:border-slate-500"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>{t('Konsultasi Cepat WhatsApp', 'Inquire via WhatsApp')}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
