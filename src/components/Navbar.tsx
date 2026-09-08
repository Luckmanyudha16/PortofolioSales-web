'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";
import logoPura from "../Logopura.png";
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import {
  Menu,
  X,
  Phone,
  ChevronRight,
  ShieldCheck,
  Wrench,
  Building2,
  PackageCheck,
  Award,
  MapPin
} from 'lucide-react';

export default function Navbar() {
  const { lang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer on path change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: t('Beranda', 'Home') },
    { href: '/about', label: t('Tentang Kami', 'About Us') },
    { href: '/capabilities', label: t('Solusi Bisnis', 'Capabilities') },
    { href: '/engineering', label: t('Pura Engineering', 'Engineering') },
    { href: '/products', label: t('Katalog Produk', 'Products') },
    { href: '/facilities', label: t('Fasilitas', 'Facilities') },
    { href: '/achievements', label: t('Prestasi & TKDN', 'Awards & TKDN') },
    { href: '/presence', label: t('Jangkauan Pasar', 'Our Presence') },
    { href: '/contact', label: t('Kontak', 'Contact') },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
      ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800/80 shadow-2xl py-3'
      : 'bg-gradient-to-b from-slate-950/90 via-slate-950/60 to-transparent py-4'
      }`}>
      {/* Top Utility Bar on Desktop */}
      <div className="hidden lg:block border-b border-slate-800/40 pb-2 mb-3">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5 text-slate-300 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
              {t('108 Tahun Beroperasi (Sejak 1908) • Penerima Bintang Mahaputera Nararya', '108 Years of Industry (Est. 1908) • Bintang Mahaputera Nararya Recipient')}
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400 font-medium">
              {t('Portal Resmi Sales Marketing: Bennyto • Pura Group', 'Official Sales Marketing Portal: Bennyto • Pura Group')}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-amber-400/90 font-medium">
              {t('Standar Mutu: SNI • ISO • BOTASUPAL • TKDN 44.37%', 'Certified Standards: SNI • ISO • BOTASUPAL • TKDN 44.37%')}
            </span>
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Lockup */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 p-0.5 shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/30 transition-all">
            <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center overflow-hidden p-1">
              <Image
                src={logoPura}
                alt="Pura Group"
                width={36}
                height={36}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white group-hover:text-amber-400 transition-colors">
                BENNYTO
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest bg-amber-500/20 text-amber-400 px-1.5 py-0.5 rounded border border-amber-500/30">
                MARKETING
              </span>
            </div>
            <span className="text-[10px] tracking-wider text-slate-400 font-medium uppercase">
              {t('Sales Marketing Resmi Pura Group', 'Official Sales Marketing Pura Group')}
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-md text-xs font-medium tracking-wide transition-colors ${isActive
                  ? 'text-amber-400 bg-slate-800/80 font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-850/50'
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Header Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="xl:hidden">
            <LanguageSwitcher />
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-lg shadow-md shadow-amber-500/20 hover:shadow-amber-500/30 transition-all active:scale-95"
          >
            <span>{t('Minta Penawaran', 'Request RFQ')}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger & Language */}
        <div className="flex sm:hidden items-center gap-2">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Tablet Hamburger toggle for screens between md and xl */}
        <div className="hidden sm:flex xl:hidden items-center">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Drawer */}
      {isOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[68px] sm:top-[76px] bottom-0 bg-slate-950/98 border-b border-slate-800 backdrop-blur-xl z-40 overflow-y-auto px-6 py-8 flex flex-col justify-between">
          <div className="space-y-4">
            <p className="text-[11px] uppercase tracking-widest font-bold text-slate-500 pb-2 border-b border-slate-800/60">
              {t('Menu Navigasi Perusahaan', 'Corporate Navigation')}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between p-3 rounded-lg text-sm font-medium transition-all ${isActive
                      ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                      : 'text-slate-200 hover:bg-slate-900 hover:text-white border border-transparent'
                      }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800/80 space-y-4">
            <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-800">
              <p className="text-xs font-semibold text-white mb-0.5">
                {t('Kontak Sales Marketing Resmi', 'Official Sales Marketing Desk')}
              </p>
              <p className="text-xs text-amber-400 font-bold mb-0.5">
                Bennyto
              </p>
              <p className="text-xs text-slate-300 font-mono mb-3 truncate">
                benny@kudus.puragroup.com
              </p>
              <div className="flex gap-2">
                <a
                  href="https://wa.me/6281290260777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white py-2.5 rounded-lg text-xs font-bold"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{t('Chat WhatsApp', 'Chat WhatsApp')}</span>
                </a>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 py-2.5 rounded-lg text-xs font-bold"
                >
                  <span>{t('Minta Penawaran', 'Request RFQ')}</span>
                </Link>
              </div>
            </div>

            <div className="text-[11px] text-slate-500 text-center">
              Pura Group Indonesia • Total 30 Integrated Production Units
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
