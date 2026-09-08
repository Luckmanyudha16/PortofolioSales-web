'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { MARKETING_CONTACT } from '@/data/companyData';
import { MessageSquare, X, ChevronRight, Wrench, Factory, Shield, UserCheck, Phone } from 'lucide-react';

export default function WhatsAppInquiry() {
  const { lang, t } = useLanguage();
  const [open, setOpen] = useState(false);

  const phone = MARKETING_CONTACT.phones[0].raw; // 6281290260777

  const channels = [
    {
      id: 'alsintan',
      title: { id: 'Alat & Mesin Pertanian (ALSINTAN)', en: 'Agricultural Machinery (ALSINTAN)' },
      sub: { id: 'Traktor, Combine Harvester, Dryer, RMU', en: 'Tractors, Harvesters, Grain Dryers, RMU' },
      icon: <Wrench className="w-4 h-4 text-amber-400" />,
      msg: {
        id: 'Halo Bpk. Bennyto (Marketing Pura Engineering), saya ingin berkonsultasi mengenai spesifikasi dan penawaran harga alat & mesin pertanian (ALSINTAN).',
        en: 'Hello Mr. Bennyto (Pura Engineering Marketing), I would like to consult regarding specifications and quotations for agricultural machinery (ALSINTAN).',
      }
    },
    {
      id: 'custom',
      title: { id: 'Pabrik Mesin Custom & Turnkey', en: 'Custom Plants & Turnkey EPCC' },
      sub: { id: 'BENSA Biofuel, PAMIGO, Salt Washing', en: 'BENSA Biofuel, PAMIGO Oil, Salt Washing' },
      icon: <Factory className="w-4 h-4 text-amber-400" />,
      msg: {
        id: 'Halo Bpk. Bennyto, saya ingin berdiskusi mengenai kebutuhan proyek pabrik turnkey / permesinan custom (BENSA/PAMIGO/Salt Washing).',
        en: 'Hello Mr. Bennyto, I would like to discuss custom machinery / turnkey plants (BENSA/PAMIGO/Salt Washing).',
      }
    },
    {
      id: 'security',
      title: { id: 'Cetak Sekuriti & Kemasan Industri', en: 'Security Printing & Packaging' },
      sub: { id: 'Kertas Uang, Paspor, Hologram, Karton', en: 'Banknotes, Passports, Holograms, Cartons' },
      icon: <Shield className="w-4 h-4 text-amber-400" />,
      msg: {
        id: 'Halo Bpk. Bennyto, kami ingin berkonsultasi mengenai solusi cetak sekuriti dan kemasan industri Pura Group.',
        en: 'Hello Mr. Bennyto, we would like to consult on security printing and industrial packaging solutions from Pura Group.',
      }
    },
    {
      id: 'general',
      title: { id: 'Konsultasi Penjualan & Kunjungan', en: 'Sales Inquiry & Plant Delegation' },
      sub: { id: 'Kunjungan Kudus HQ, Kemitraan Bisnis', en: 'Kudus HQ Visits, B2B Commercial Partnership' },
      icon: <UserCheck className="w-4 h-4 text-amber-400" />,
      msg: {
        id: 'Halo Bpk. Bennyto, kami ingin menjadwalkan konsultasi kemitraan / kunjungan delegasi ke kawasan industri Kudus.',
        en: 'Hello Mr. Bennyto, we would like to schedule a business consultation / plant visit to Kudus HQ.',
      }
    },
  ];

  const handleRoute = (msg: { id: string; en: string }) => {
    const text = encodeURIComponent(msg[lang]);
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
    setOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Popover Menu */}
      {open && (
        <div className="mb-3 w-80 sm:w-96 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-4 text-white animate-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <p className="text-xs font-bold uppercase tracking-wider text-slate-200">
                  MARKETING: BENNYTO
                </p>
              </div>
              <p className="text-[10px] text-amber-400 font-mono mt-0.5">
                benny@kudus.puragroup.com
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
              aria-label="Tutup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] text-slate-300 py-2.5 leading-relaxed">
            {t(
              'Silakan pilih topik konsultasi untuk terhubung langsung ke WhatsApp Bennyto (Marketing Pura Group):',
              'Select an inquiry topic to connect directly with Bennyto on WhatsApp (Pura Group Marketing):'
            )}
          </p>

          <div className="space-y-1.5">
            {channels.map((ch) => (
              <button
                key={ch.id}
                type="button"
                onClick={() => handleRoute(ch.msg)}
                className="w-full flex items-center justify-between p-2.5 rounded-xl bg-slate-950 hover:bg-slate-800/90 border border-slate-800 hover:border-slate-700 transition-all text-left group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-amber-500/40">
                    {ch.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white group-hover:text-amber-400 transition-colors">
                      {ch.title[lang]}
                    </p>
                    <p className="text-[10px] text-slate-400">
                      {ch.sub[lang]}
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
              </button>
            ))}
          </div>

          <div className="mt-3 pt-2 text-[10px] text-slate-400 flex items-center justify-between border-t border-slate-800">
            <span>Email: benny@kudus.puragroup.com</span>
            <span className="text-emerald-400 font-semibold">{t('Online', 'Online')}</span>
          </div>
        </div>
      )}

      {/* Floating Action Trigger Button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-3 rounded-full shadow-2xl shadow-emerald-600/30 transition-all hover:scale-105 active:scale-95"
        aria-label="WhatsApp Marketing Bennyto"
      >
        <MessageSquare className="w-5 h-5" />
        <span className="text-xs font-extrabold tracking-wide hidden sm:inline">
          {open ? t('Tutup', 'Close') : t('Chat Marketing Bennyto', 'Chat Marketing Bennyto')}
        </span>
      </button>
    </div>
  );
}
