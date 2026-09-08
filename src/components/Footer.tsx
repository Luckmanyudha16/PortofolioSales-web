'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { ShieldCheck, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const { lang, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1: Brand & Legacy */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-amber-500 p-0.5 shadow-md">
                <div className="w-full h-full bg-slate-950 rounded-[6px] flex items-center justify-center">
                  <span className="text-amber-400 font-black text-lg">P</span>
                </div>
              </div>
              <div>
                <span className="font-extrabold text-lg text-white tracking-tight">PURA GROUP</span>
                <p className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                  {t('DIVISI REKAYASA & INARI', 'ENGINEERING DIVISION & INARI')}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              {t(
                'Didirikan sejak 1908 di Kudus, Jawa Tengah. Konglomerasi industri terpadu dengan 30 divisi produksi di kawasan 100 hektar. Melayani lebih dari 22.000 klien di 100+ negara.',
                'Founded in 1908 in Kudus, Central Java. An integrated industrial powerhouse with 30 production units across a 100-hectare complex, serving 22,000+ clients across 100+ countries.'
              )}
            </p>

            <div className="pt-2 text-[11px] text-slate-400 space-y-1">
              <p className="font-semibold text-white">
                {t('Penerima Bintang Mahaputera Nararya (2021)', 'Bintang Mahaputera Nararya Recipient (2021)')}
              </p>
              <p>{t('Pemegang Rekor HKI 80+ Paten Terdaftar Nasional', 'National Record Holder with 80+ Registered Patents')}</p>
            </div>
          </div>

          {/* Col 2: Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <p className="font-bold text-white uppercase tracking-wider text-xs">
              {t('Navigasi', 'Navigation')}
            </p>
            <ul className="space-y-2 text-xs">
              <li><Link href="/about" className="hover:text-amber-400 transition-colors">{t('Tentang & Pendiri', 'About & Founder')}</Link></li>
              <li><Link href="/capabilities" className="hover:text-amber-400 transition-colors">{t('5 Pilar Solusi Bisnis', '5 Core Solutions')}</Link></li>
              <li><Link href="/engineering" className="hover:text-amber-400 transition-colors">{t('Pura Engineering & INARI', 'Engineering & INARI')}</Link></li>
              <li><Link href="/products" className="hover:text-amber-400 transition-colors">{t('Katalog Produk & Alsintan', 'Products & Machinery')}</Link></li>
              <li><Link href="/facilities" className="hover:text-amber-400 transition-colors">{t('Fasilitas 100 Hektar', '100-Ha Facilities')}</Link></li>
              <li><Link href="/achievements" className="hover:text-amber-400 transition-colors">{t('Penghargaan & TKDN', 'Awards & TKDN')}</Link></li>
              <li><Link href="/presence" className="hover:text-amber-400 transition-colors">{t('Jangkauan Pasar', 'Our Presence')}</Link></li>
              <li><Link href="/contact" className="hover:text-amber-400 transition-colors">{t('Hubungi Kami', 'Contact Us')}</Link></li>
            </ul>
          </div>

          {/* Col 3: Product Highlights */}
          <div className="lg:col-span-3 space-y-3">
            <p className="font-bold text-white uppercase tracking-wider text-xs">
              {t('Lini Unggulan Rekayasa', 'Flagship Machinery')}
            </p>
            <ul className="space-y-2 text-xs">
              <li><Link href="/products" className="hover:text-amber-400 transition-colors">BENSA (Bensin Sawit / Biofuel)</Link></li>
              <li><Link href="/products" className="hover:text-amber-400 transition-colors">PAMIGO (Pabrik Mini Minyak Goreng)</Link></li>
              <li><Link href="/products" className="hover:text-amber-400 transition-colors">Salt Washing Plant (Pencucian Garam)</Link></li>
              <li><Link href="/products" className="hover:text-amber-400 transition-colors">Combine Harvester Padi INARI RG118</Link></li>
              <li><Link href="/products" className="hover:text-amber-400 transition-colors">Vertical Dryer 30 Ton (Motor 18 kW)</Link></li>
              <li><Link href="/products" className="hover:text-amber-400 transition-colors">Rice Milling Unit (RMU) PREMIUM</Link></li>
              <li><Link href="/products" className="hover:text-amber-400 transition-colors">Traktor Roda Crawler INARI TRC101</Link></li>
            </ul>
          </div>

          {/* Col 4: Sales Marketing Contact & Offices */}
          <div className="lg:col-span-3 space-y-3">
            <p className="font-bold text-white uppercase tracking-wider text-xs">
              {t('Kontak Sales Marketing', 'Sales Marketing Desk')}
            </p>
            <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 space-y-1.5 mb-3">
              <p className="text-xs font-bold text-white">
                Marketing
              </p>
              <p className="text-xs font-mono font-bold text-amber-400">
                Bennyto 0812 9026 0777 / 0877 8826 0777
              </p>
              <p className="text-[11px] font-mono text-slate-300">
                Email : <a href="mailto:benny@kudus.puragroup.com" className="text-amber-400 hover:underline">benny@kudus.puragroup.com</a>
              </p>
            </div>
            <div className="space-y-1.5 text-[11px] text-slate-400">
              <p><span className="text-slate-200 font-semibold">Head Office (HO) :</span> Jl. AKBP. Agil Kusumadya 203, Kudus 59346</p>
              <p><span className="text-slate-200 font-semibold">Marketing :</span> Graha Pura, Jl. Pancoran Indah I No. 52, Jaksel 12780</p>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div className="text-slate-400 text-center sm:text-left">
            © {new Date().getFullYear()} PURA GROUP INDONESIA. {t('Hak cipta dilindungi undang-undang.', 'All rights reserved.')}
            <span className="block sm:inline sm:ml-2 text-slate-400">
              Standar SNI • ISO 9001/14001/45001/50001 • BOTASUPAL • TKDN
            </span>
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white px-3 py-1.5 rounded-lg border border-slate-800 transition-colors"
          >
            <span>{t('Kembali ke Atas', 'Back to Top')}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
