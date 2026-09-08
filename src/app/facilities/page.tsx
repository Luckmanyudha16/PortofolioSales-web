'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import FacilityGallery from '@/components/FacilityGallery';
import { ShieldCheck, Plane, Truck, Building2, Flame, HeartPulse, ShieldAlert } from 'lucide-react';

export default function FacilitiesPage() {
  const { lang, t } = useLanguage();

  const fleetDetails = [
    { type: 'Three-Way Heavy-Duty Trucks', count: '76', desc: { id: 'Truk angkutan berat multi-arah untuk kontainer dan mesin besar', en: 'Heavy multi-direction unloading trucks for heavy machinery' } },
    { type: 'Heavy-Duty Wing Box Trucks', count: '29', desc: { id: 'Truk boks sayap hidrolik pemuatan cepat kemasan dan palet', en: 'Hydraulic wing-box trucks for rapid palletized loading' } },
    { type: 'Light-Duty Box Trucks', count: '61', desc: { id: 'Armada distribusi cepat untuk pengiriman regional presisi waktu', en: 'Rapid urban and regional fast-distribution fleet' } },
    { type: 'Heavy-Duty Box Trucks', count: '10', desc: { id: 'Boks tertutup berkeamanan tinggi untuk dokumen dan sekuriti', en: 'High-security sealed box trucks for valuable cargo' } },
    { type: 'Flatbed Heavy Trucks', count: '6', desc: { id: 'Truk bak datar khusus mengangkut alsintan traktor dan harvester', en: 'Heavy flatbed trucks dedicated for harvester & tractor transit' } },
  ];

  const stations = [
    { name: 'Pos 1', loc: 'Materials Innovations Flexible Packaging (Area 2)' },
    { name: 'Pos 2', loc: 'Stasiun Utama Offset (Area 3)' },
    { name: 'Pos 3', loc: 'Gudang Terpadu Kencing (Area 4)' },
    { name: 'Pos 4', loc: 'Kawasan Terban (Area 5)' },
    { name: 'Pos 5', loc: 'Kawasan Seika Ink (Area 6)' },
  ];

  return (
    <div className="py-12 bg-slate-950 text-white space-y-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <span className="text-xs uppercase tracking-widest font-bold text-amber-400">
          {t('KAWASAN INDUSTRI 100 HEKTAR KUDUS', 'KUDUS 100-HECTARE INDUSTRIAL COMPLEX')}
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-2 leading-tight">
          {t('Fasilitas Manufaktur, Armada & Infrastruktur VIP', 'Manufacturing Facilities, Aviation & Fleets')}
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed">
          {t(
            'Kawasan industri terpusat seluas lebih dari 100 hektar di Kudus, Jawa Tengah, menaungi 30 unit produksi terpadu, workshop presisi 1 mikron, armada udara eksekutif, 182 truk logistik, serta akomodasi guest house bintang 5.',
            'A centralized 100-hectare industrial complex in Kudus, Central Java, housing 30 integrated production units, 1-micron precision workshops, corporate aviation, 182 logistics trucks, and 5-star hospitality.'
          )}
        </p>
      </div>

      {/* Main Interactive Facility Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FacilityGallery />
      </div>

      {/* Aviation Fleet Deep-Dive */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10">
          <div className="flex items-center gap-2 mb-3">
            <Plane className="w-5 h-5 text-amber-400" />
            <span className="text-xs uppercase font-bold tracking-wider text-amber-400">
              {t('UNIT PENERBANGAN KORPORAT (AVIATION UNIT)', 'CORPORATE AVIATION FLEET')}
            </span>
          </div>
          <h3 className="text-2xl font-black text-white">
            {t('Mobilitas Cepat Klien VIP & Evakuasi Medis Darurat', 'VIP Partner Flight Missions & Emergency Medical Air Evacuation')}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-3xl">
            {t(
              'Pura Group mengoperasikan armada pesawat jet eksekutif dan helikopter untuk mendukung mobilitas mitra bisnis internasional, inspeksi pabrik, misi darurat, serta evakuasi medis (medevac):',
              'Pura Group operates an executive corporate aviation fleet supporting international partner delegations, urgent aerial missions, and medical air evacuations:'
            )}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
              <span className="text-[10px] uppercase font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">Executive Jet</span>
              <h4 className="text-base font-bold text-white">Embraer Phenom 300</h4>
              <p className="text-xs text-slate-300">
                {t('Kapasitas 6 penumpang eksekutif untuk penerbangan antar kota dan antar negara berkecepatan tinggi.', '6 executive passenger capacity for high-speed domestic and regional international travel.')}
              </p>
            </div>
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
              <span className="text-[10px] uppercase font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">Helicopter</span>
              <h4 className="text-base font-bold text-white">Bell 407</h4>
              <p className="text-xs text-slate-300">
                {t('Kapasitas 5 penumpang untuk inspeksi kawasan industri, mobilitas cepat, dan evakuasi medis.', '5 passenger capacity for industrial site inspection, rapid transit, and medical air transport.')}
              </p>
            </div>
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
              <span className="text-[10px] uppercase font-bold text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded">Light Helicopter</span>
              <h4 className="text-base font-bold text-white">Robinson R66</h4>
              <p className="text-xs text-slate-300">
                {t('Kapasitas 4 penumpang turbin bertenaga tinggi untuk survei lokasi dan dokumentasi aerial.', '4 passenger turbine-powered helicopter for aerial site surveying and rapid point-to-point transit.')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Logistics Fleet Breakdown */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-amber-400 flex items-center gap-2">
                <Truck className="w-4 h-4" />
                <span>{t('ARMADA LOGISTIK MANDIRI (182 UNIT)', 'DEDICATED LOGISTICS FLEET (182 UNITS)')}</span>
              </span>
              <h3 className="text-2xl font-black text-white mt-1">
                {t('Jaminan Kecepatan Pengiriman & Pelacakan GPS Real-Time', 'On-Time Delivery Guarantee with Real-Time GPS Tracking')}
              </h3>
            </div>
            <div className="text-right">
              <span className="text-3xl font-black text-amber-400 font-mono">182</span>
              <p className="text-[11px] text-slate-400 uppercase font-semibold">{t('Total Unit Truk', 'Total Fleet Units')}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {fleetDetails.map((f, i) => (
              <div key={i} className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-black text-amber-400 font-mono">{f.count} Unit</span>
                  <span className="text-[10px] text-slate-400 font-bold uppercase">{t('Armada', 'Fleet')}</span>
                </div>
                <p className="text-xs font-bold text-white mt-1">{f.type}</p>
                <p className="text-[11px] text-slate-400 mt-1 leading-snug">{f.desc[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Emergency & Safety Infrastructure: 8 Fire Trucks across 5 Stations */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-3xl space-y-4">
            <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase">
              <Flame className="w-4 h-4" />
              <span>{t('KESIAPSIAGAAN KEBAKARAN 24/7', 'FIRE SAFETY INFRASTRUCTURE')}</span>
            </div>
            <h3 className="text-xl font-extrabold text-white">
              {t('8 Truk Pemadam di 5 Stasiun Strategis Kudus', '8 Fire Trucks Across 5 Strategic Kudus Stations')}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {t(
                'Pura Group memiliki korps pemadam kebakaran mandiri dengan 8 unit armada pemadam bertekanan tinggi yang disiagakan di lima pos untuk melindungi seluruh kawasan 100 hektar serta membantu masyarakat sekitar Kudus:',
                'Pura Group maintains an internal firefighting corps with 8 specialized fire trucks stationed across five strategic hubs protecting the 100-hectare facilities and neighboring Kudus communities:'
              )}
            </p>
            <div className="space-y-1.5 pt-2 text-xs text-slate-300">
              {stations.map((st, i) => (
                <div key={i} className="flex items-center gap-2 bg-slate-950 px-3 py-2 rounded-lg border border-slate-800">
                  <span className="font-bold text-amber-400">{st.name}:</span>
                  <span className="text-slate-300">{st.loc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-3xl space-y-4">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase">
              <HeartPulse className="w-4 h-4" />
              <span>{t('KESEHATAN & KEAMANAN INDUSTRI', 'HEALTH, SECURITY & WAREHOUSING')}</span>
            </div>
            <h3 className="text-xl font-extrabold text-white">
              {t('Klinik Medis 24 Jam, 350+ Satpam & 25+ Gudang', '24/7 Health Clinic, 350+ Guards & 25+ Warehouses')}
            </h3>
            <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
              <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                <p className="font-bold text-white">{t('Klinik Kesehatan Terpadu 24 Jam', 'On-Site 24/7 Medical Clinic')}</p>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  {t('Dilengkapi dokter jaga dan tenaga medis untuk menjamin kesehatan 15.000 karyawan dan penanganan tanggap darurat.', 'Staffed by medical doctors and nurses ensuring round-the-clock wellness for 15,000 employees.')}
                </p>
              </div>
              <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                <p className="font-bold text-white">{t('Pengamanan Ketat & 24/7 CCTV', '350+ Certified Security & 24/7 CCTV')}</p>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  {t('Lebih dari 350 personel keamanan terlatih mengawasi perimeter pabrik berstandar sekuriti negara.', 'Over 350 certified security staff monitoring plant perimeters to national security standards.')}
                </p>
              </div>
              <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                <p className="font-bold text-white">{t('25+ Gudang Penyimpanan Berat', '25+ Reinforced Industrial Warehouses')}</p>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  {t('Menyimpan bahan baku strategis, suku cadang mesin, dan produk jadi dalam kondisi terkontrol.', 'Accommodates raw materials, machinery spareparts, and finished goods under strict climate control.')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
