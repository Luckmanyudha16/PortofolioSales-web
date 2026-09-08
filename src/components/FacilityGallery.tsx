'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { FACILITIES_DATA } from '@/data/companyData';
import { Plane, Truck, Wrench, Shield, Home, Sparkles, ChevronRight, X } from 'lucide-react';

export default function FacilityGallery() {
  const { lang, t } = useLanguage();
  const [activeFacility, setActiveFacility] = useState(FACILITIES_DATA[0]);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const getIcon = (id: string) => {
    switch (id) {
      case 'cnc':
      case 'robotics-laser':
        return <Wrench className="w-4 h-4 text-amber-400" />;
      case 'aviation':
        return <Plane className="w-4 h-4 text-amber-400" />;
      case 'logistics':
        return <Truck className="w-4 h-4 text-amber-400" />;
      case 'hospitality':
        return <Home className="w-4 h-4 text-amber-400" />;
      case 'safety':
        return <Shield className="w-4 h-4 text-amber-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-amber-400" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Interactive Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 bg-slate-900/60 p-2 rounded-2xl border border-slate-800">
        {FACILITIES_DATA.map((facility) => {
          const isActive = activeFacility.id === facility.id;
          return (
            <button
              key={facility.id}
              type="button"
              onClick={() => setActiveFacility(facility)}
              className={`flex items-center justify-center gap-2 p-3 rounded-xl text-xs font-semibold transition-all ${
                isActive
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              {getIcon(facility.id)}
              <span className="truncate">{facility.badge}</span>
            </button>
          );
        })}
      </div>

      {/* Active Facility Focus Card */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
          {/* Visual Container */}
          <div 
            onClick={() => setLightboxImage(activeFacility.image)}
            className="lg:col-span-7 relative aspect-[16/10] bg-slate-950 cursor-pointer group overflow-hidden"
          >
            <Image
              src={activeFacility.image}
              alt={activeFacility.title[lang]}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-4 left-4 bg-slate-950/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 text-xs font-mono text-amber-400">
              {activeFacility.stat}
            </div>
            <div className="absolute top-4 right-4 bg-slate-900/80 text-[11px] text-slate-300 px-2.5 py-1 rounded-md border border-slate-700 group-hover:bg-slate-900 transition-colors">
              {t('Klik untuk Memperbesar', 'Click to Expand')}
            </div>
          </div>

          {/* Description & Technical Breakdown */}
          <div className="lg:col-span-5 p-6 sm:p-8 space-y-4">
            <span className="text-[10px] uppercase font-black tracking-widest text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded border border-amber-400/20">
              {activeFacility.badge}
            </span>

            <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
              {activeFacility.title[lang]}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {activeFacility.desc[lang]}
            </p>

            <div className="pt-4 border-t border-slate-800">
              <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-2">
                <p className="text-xs font-bold text-white flex items-center gap-2">
                  <Shield className="w-4 h-4 text-amber-400" />
                  <span>{t('Kawasan Terpadu Kudus 100 Hektar', 'Kudus 100-Hectare Centralized Hub')}</span>
                </p>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {t(
                    'Semua fasilitas terintegrasi dalam radius dekat, memangkas biaya logistik internal dan memastikan pengawasan kualitas serta keamanan maksimal 24/7.',
                    'All facilities are co-located in close proximity, eliminating internal logistics friction and guaranteeing maximum quality control and 24/7 security.'
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of All Facilities for quick overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
        {FACILITIES_DATA.slice(0, 3).map((f) => (
          <div 
            key={f.id}
            onClick={() => setActiveFacility(f)}
            className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 transition-all cursor-pointer group"
          >
            <p className="text-xs font-bold text-white group-hover:text-amber-400 transition-colors">
              {f.title[lang]}
            </p>
            <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
              {f.desc[lang]}
            </p>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
        >
          <div className="relative max-w-5xl w-full max-h-[85vh] aspect-[16/10]">
            <Image
              src={lightboxImage}
              alt="Facility View"
              fill
              className="object-contain"
            />
          </div>
          <button 
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-slate-900 border border-slate-700 text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
}
