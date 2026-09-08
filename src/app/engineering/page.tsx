'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { INARI_VALUES } from '@/data/companyData';
import {
  Wrench,
  Cpu,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Award,
  Settings,
  Sparkles,
  MessageSquare
} from 'lucide-react';

export default function EngineeringPage() {
  const { lang, t } = useLanguage();

  const handleWhatsApp = () => {
    const phone = '6281290260777';
    const text = encodeURIComponent(
      t(
        'Halo Bpk. Bennyto (Marketing Pura Engineering), kami ingin berkonsultasi mengenai proyek permesinan custom / pengadaan alsintan INARI untuk perusahaan kami.',
        'Hello Mr. Bennyto (Pura Engineering Marketing), we would like to consult regarding custom machinery projects / INARI agricultural machinery procurement.'
      )
    );
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  return (
    <div className="py-12 bg-slate-950 text-white space-y-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <span className="text-xs uppercase tracking-widest font-bold text-amber-400">
          {t('PURA GROUP • DIVISI REKAYASA & MANUFAKTUR', 'PURA GROUP • ENGINEERING & MANUFACTURING DIVISION')}
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-2 leading-tight">
          {t('Pura Engineering & Merek Dagang INARI', 'Pura Engineering & INARI Trademark')}
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed">
          {t(
            'Sejak 1974 menghadirkan rekayasa permesinan presisi tinggi, substitusi impor mesin industri, proyek Turnkey EPCC, dan ekosistem alat mesin pertanian terlengkap di Indonesia.',
            'Since 1974 pioneering high-precision engineering, industrial import substitution, Turnkey EPCC projects, and Indonesia\'s premier agricultural machinery ecosystem.'
          )}
        </p>
      </div>

      {/* History & Genesis: 1974 to 1990 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded border border-amber-400/20">
                {t('SEJARAH & EVOLUSI DIVISI', 'HISTORY & EVOLUTION')}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {t(
                  'Dari Pura Bengkel (1974) Menjadi Tulang Punggung Rekayasa Nasional',
                  'From Pura Bengkel (1974) to National Engineering Powerhouse'
                )}
              </h2>
              <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  <strong>• 1974:</strong> {t('Berdiri dengan nama "Pura Bengkel" sebagai unit supporting yang merawat dan memproduksi mesin-mesin pabrik untuk divisi lain di lingkungan Pura Group.', 'Founded as "Pura Bengkel" to maintain and fabricate production machinery for Pura Group divisions.')}
                </p>
                <p>
                  <strong>• 1989:</strong> {t('Pura Bengkel berganti nama menjadi "Pura Rekayasa" seiring perluasan kapabilitas rancang bangun mekanikal dan fabrikasi berat.', 'Pura Bengkel was renamed "Pura Rekayasa" reflecting expanding mechanical design and heavy fabrication capabilities.')}
                </p>
                <p>
                  <strong>• 1990:</strong> {t('Resmi menjadi unit usaha mandiri komersial dengan nama "Pura Engineering" di bawah Pura Group. Lingkup utama: Perencanaan (Engineering Design), Pembuatan (Manufacturing), dan Replace Imported Machinery (Substitusi Impor).', 'Became an independent commercial division named "Pura Engineering" in Pura Group. Core scope: Engineering Design, Manufacturing, and Replace Imported Machinery.')}
                </p>
                <p>
                  <strong>• {t('Proyek Turnkey:', 'Turnkey Projects:')}</strong> {t('Pura Engineering memberikan penawaran Turnkey Project menyeluruh mulai dari rekayasa proses, permesinan, perakitan mekanikal-elektrikal, hingga siap produksi penuh.', 'Pura Engineering delivers end-to-end Turnkey Projects from process design, custom fabrication, civil works, and commissioning to ready-to-run operation.')}
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold">
                <span className="bg-slate-950 px-3 py-1 rounded-lg border border-slate-800 text-emerald-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  SNI (Standar Nasional Indonesia)
                </span>
                <span className="bg-slate-950 px-3 py-1 rounded-lg border border-slate-800 text-amber-400 flex items-center gap-1.5">
                  <Wrench className="w-3.5 h-3.5" />
                  Kepresisian 1 Mikron
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-800 bg-slate-950">
              <Image
                src="/assets/facilities/cnc_precision_workshop.png"
                alt="Pura Engineering Precision Workshop"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-slate-950/90 backdrop-blur-md p-3 rounded-lg border border-slate-800 text-[11px] text-slate-300">
                {t('Workshop Permesinan CNC Presisi Tinggi Kudus', 'High-Precision CNC Machining Workshop in Kudus')}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trademark INARI Core Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-bold text-amber-400">
            {t('MERK DAGANG RESMI', 'REGISTERED TRADEMARK')}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            {t('Nilai Filosofi Merek INARI', 'INARI Brand Philosophy & Principles')}
          </h2>
          <p className="text-xs text-slate-400 mt-2">
            {t(
              'Setiap mesin pertanian dan rekayasa industri bertanda INARI dibangun berlandaskan lima pilar keunggulan:',
              'Every agricultural and industrial machine bearing the INARI trademark is built upon five pillars:'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {INARI_VALUES.map((val, idx) => (
            <div
              key={`${val.letter}-${idx}`}
              className="bg-slate-900/70 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between hover:border-amber-500/40 transition-all group"
            >
              <div>
                <span className="text-3xl font-black text-amber-400 font-mono group-hover:text-amber-300 transition-colors">
                  {val.letter}
                </span>
                <p className="text-xs uppercase font-extrabold text-white mt-1 tracking-wider">
                  {val.word}
                </p>
                <h4 className="text-xs font-bold text-amber-400/90 mt-2">
                  {val.title[lang]}
                </h4>
                <p className="text-[11px] text-slate-300 mt-2 leading-relaxed">
                  {val.desc[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* High-Precision Facilities: 1-Micron CNC, 6-Axis Robotics & Laser */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-xs uppercase font-bold tracking-widest text-amber-400">
              {t('FASILITAS FABRIKASI BERPRESI TINGGI', 'HIGH-PRECISION FABRICATION FACILITIES')}
            </span>
            <h3 className="text-2xl font-black text-white mt-1">
              {t('Mesin-Mesin CNC dengan Kepresisian Tinggi (1 Mikron)', 'High-Precision CNC Machining Center (1 Micron Accuracy)')}
            </h3>
            <p className="text-xs text-slate-400 mt-1 max-w-2xl">
              {t(
                'Dilengkapi deretan mesin CNC canggih untuk memproduksi komponen berstandar kepresisian hingga 0.001 mm:',
                'Equipped with advanced machine centers achieving tolerances up to 0.001 mm:'
              )}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center">
              <p className="text-xs font-bold text-white">CNC Bubut (Lathe)</p>
              <p className="text-[10px] text-slate-400 mt-0.5">{t('Pembubutan diameter presisi', 'Precision cylindrical turning')}</p>
            </div>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center">
              <p className="text-xs font-bold text-white">CNC Milling</p>
              <p className="text-[10px] text-slate-400 mt-0.5">{t('Pemotongan kontur kompleks', 'Complex contour milling')}</p>
            </div>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center">
              <p className="text-xs font-bold text-white">Planner Besar</p>
              <p className="text-[10px] text-slate-400 mt-0.5">{t('Perataan meja mesin raksasa', 'Giant bed surface planing')}</p>
            </div>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center">
              <p className="text-xs font-bold text-white">Bubut Besar</p>
              <p className="text-[10px] text-slate-400 mt-0.5">{t('Poros & silinder rol berat', 'Heavy shaft & cylinder lathe')}</p>
            </div>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center">
              <p className="text-xs font-bold text-white">Band Saw</p>
              <p className="text-[10px] text-slate-400 mt-0.5">{t('Pemotongan balok baja tebal', 'Heavy steel billet cutting')}</p>
            </div>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center">
              <p className="text-xs font-bold text-white">Roll Grinding</p>
              <p className="text-[10px] text-slate-400 mt-0.5">{t('Penggerindaan rol presisi rotogravure', 'Rotogravure roll grinding')}</p>
            </div>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center">
              <p className="text-xs font-bold text-white">Hobbing (Gear Machine)</p>
              <p className="text-[10px] text-slate-400 mt-0.5">{t('Pembuatan roda gigi transmisi', 'Transmission gear hobbing')}</p>
            </div>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center">
              <p className="text-xs font-bold text-white">Robot 6-Sumbu & Laser</p>
              <p className="text-[10px] text-slate-400 mt-0.5">{t('Pengelasan & pemotongan otomatis', 'Robotic welding & laser cut')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Dual Scope: Custom Plants vs Regular ALSINTAN */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-3xl space-y-4">
            <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded border border-amber-400/20">
              {t('KATEGORI 1: MESIN CUSTOM', 'CATEGORY 1: CUSTOM PLANTS')}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {t('Pabrik Pengolahan Khusus & Turnkey EPCC', 'Specialized Chemical & Processing Plants')}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {t(
                'Dirancang sesuai spesifikasi unik industri klien dengan skema Turnkey lengkap: BENSA (Bensin Sawit), PAMIGO (Pabrik Mini Minyak Goreng), Salt Washing Plant, Pengolahan Rumput Laut, Nitrogliserin, dan Pertashop SPBU Mini.',
                'Engineered to client specifications under complete Turnkey EPCC contracts: BENSA (Palm Biofuel), PAMIGO (Cooking Oil), Salt Washing, Seaweed Processing, Nitroglycerin, and Pertashop.'
              )}
            </p>
            <Link
              href="/products?cat=custom"
              className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:underline pt-2"
            >
              <span>{t('Lihat Produk Mesin Custom', 'View Custom Plants')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-3xl space-y-4">
            <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded border border-emerald-400/20">
              {t('KATEGORI 2: PRODUK REGULER', 'CATEGORY 2: REGULAR PRODUCTS')}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {t('Ekosistem ALSINTAN Pertanian Terpadu', 'Integrated Agricultural Machinery (ALSINTAN)')}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {t(
                'Lini alat dan mesin pertanian terpadu dari hulu ke hilir: traktor tangan & roda 4 ARBOS, crawler TRC101, pompa irigasi, transplanter, thresher, combine harvester RG118 & Multy-Guna, pengering vertical dryer hingga 30 ton, dan Rice Milling Unit (RMU) PREMIUM.',
                'Complete agro-machinery ecosystem: hand tractors, ARBOS 4WD, TRC101 crawlers, pumps, transplanters, threshers, combine harvesters, 30-ton vertical dryers, and RMU PREMIUM.'
              )}
            </p>
            <Link
              href="/products?cat=pre-harvest"
              className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:underline pt-2"
            >
              <span>{t('Lihat Lini Produk ALSINTAN', 'View ALSINTAN Catalog')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="text-lg font-bold text-white">
              {t('Siap Mendiskusikan Pengadaan Mesin atau Proyek Turnkey?', 'Ready to Discuss Machinery or Turnkey Projects?')}
            </h4>
            <p className="text-xs text-slate-400 mt-1">
              {t('Hubungi marketing kami untuk penawaran harga resmi dan spesifikasi teknis.', 'Contact our marketing for official quotations and engineering specifications.')}
            </p>
          </div>
          <button
            type="button"
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl text-xs transition-colors shadow-lg shadow-emerald-600/20"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{t('Hubungi Marketing WA', 'Chat Marketing on WA')}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
