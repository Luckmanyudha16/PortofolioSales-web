'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { MapPin, Globe, CheckCircle2, TrendingUp } from 'lucide-react';

export default function PresenceSection() {
  const { lang, t } = useLanguage();

  const regions = [
    {
      name: { id: 'Pulau Jawa', en: 'Java Island' },
      desc: { id: 'Sentra padi Jawa Barat, Jawa Tengah, Jawa Timur: ribuan combine harvester, RMU, dan dryer aktif.', en: 'Core paddy regions in West, Central, East Java: thousands of harvesters, RMUs, and dryers.' },
      count: '2.000+'
    },
    {
      name: { id: 'Sumatera', en: 'Sumatra' },
      desc: { id: 'Sentra pangan & sawit: traktor 4WD, combine harvester rawa, dan pengering gabah komersial.', en: 'Food & palm oil hubs: 4WD tractors, wetland combine harvesters, and commercial grain dryers.' },
      count: '950+'
    },
    {
      name: { id: 'Sulawesi & Kalimantan', en: 'Sulawesi & Kalimantan' },
      desc: { id: 'Lumbung padi Sidrap, Pinrang, hingga food estate: traktor crawler TRC101 anti amblas dan RMU terpadu.', en: 'Sidrap, Pinrang, and food estates: anti-sinking TRC101 crawler tractors and integrated RMUs.' },
      count: '700+'
    },
    {
      name: { id: 'Bali, NTB, NTT & Papua', en: 'Eastern Indonesia' },
      desc: { id: 'Lombok, Sumbawa, Merauke: pompa irigasi berdaya tinggi, transplanter, dan bed dryer automixing.', en: 'Lombok, Sumbawa, Merauke: high-flow irrigation pumps, transplanters, and automixing bed dryers.' },
      count: '400+'
    },
  ];

  return (
    <div className="space-y-12">
      {/* Top Banner */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-bold text-emerald-400">
              <MapPin className="w-3.5 h-3.5" />
              <span>{t('PERSEBARAN RESMI DI SELURUH INDONESIA', 'NATIONWIDE DEPLOYMENT IN INDONESIA')}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
              {t(
                'Lebih dari 4.000 Alat dan Mesin Pertanian Tersebar di Seluruh Wilayah Indonesia.',
                'Over 4,000 Agricultural Machines Operating Across All Regions of Indonesia.'
              )}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {t(
                'Dari ujung barat Sumatera hingga Merauke di Papua, mesin-mesin pertanian INARI Pura Engineering aktif mendukung kelompok tani, koperasi, BUMN pangan, dan perkebunan swasta memperkuat ketahanan pangan nasional.',
                'From northern Sumatra to Merauke in Papua, INARI agricultural machinery actively powers farmer cooperatives, regional food centers, and plantations to achieve national food self-sufficiency.'
              )}
            </p>

            <div className="pt-2 grid grid-cols-2 gap-3">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <span className="text-2xl font-black text-amber-400">4.000+</span>
                <p className="text-xs font-bold text-white mt-0.5">{t('Unit Mesin Aktif', 'Active Farm Units')}</p>
                <p className="text-[10px] text-slate-400">{t('Traktor, Harvester, Dryer, RMU', 'Tractors, Harvesters, Dryers, RMU')}</p>
              </div>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <span className="text-2xl font-black text-amber-400">100+</span>
                <p className="text-xs font-bold text-white mt-0.5">{t('Negara Ekspor Pura Group', 'Export Countries')}</p>
                <p className="text-[10px] text-slate-400">{t('Jangkauan produk global', 'Global market presence')}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-xl">
              <Image
                src="/assets/company/indonesia_distribution_detailed.jpg"
                alt="Persebaran Alat dan Mesin Pertanian Pura Engineering"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-3 rounded-xl border border-slate-700 text-xs text-slate-200">
                <span className="font-bold text-amber-400">Pura Engineering: </span>
                {t(
                  'Dukungan suku cadang asli dan jaringan mekanik bergerak ke pelosok lahan pertanian.',
                  'Genuine spare parts supply and mobile service mechanics serving rural farm areas.'
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Regional Breakdown Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {regions.map((reg, idx) => (
          <div
            key={idx}
            className="bg-slate-900/70 border border-slate-800 p-5 rounded-2xl hover:border-slate-700 transition-all"
          >
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs font-bold uppercase text-amber-400 font-mono tracking-wider">
                {reg.name[lang]}
              </span>
              <span className="text-xs font-extrabold text-white bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                {reg.count}
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {reg.desc[lang]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
