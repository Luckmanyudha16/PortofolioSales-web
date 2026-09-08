'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { TIMELINE_DATA } from '@/data/companyData';
import { Calendar, ChevronRight } from 'lucide-react';

export default function Timeline() {
  const { lang, t } = useLanguage();

  return (
    <div className="relative">
      {/* Central Line */}
      <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-slate-800 -translate-x-1/2" />

      <div className="space-y-8 md:space-y-12 relative">
        {TIMELINE_DATA.map((item, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div
              key={item.year}
              className={`flex flex-col md:flex-row items-center ${
                isEven ? 'md:flex-row-reverse' : ''
              } gap-6 md:gap-12`}
            >
              {/* Content Card */}
              <div className="w-full md:w-1/2">
                <div className="bg-slate-900/80 border border-slate-800 hover:border-slate-700 p-6 rounded-2xl shadow-lg transition-all group">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xl sm:text-2xl font-black text-amber-400 font-mono tracking-tight">
                      {item.year}
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-wider bg-slate-950 text-slate-300 px-2.5 py-1 rounded border border-slate-800">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                    {item.title[lang]}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">
                    {item.description[lang]}
                  </p>
                </div>
              </div>

              {/* Central Node Badge */}
              <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-slate-950 border-2 border-amber-500 shadow-md shadow-amber-500/20 z-10 shrink-0">
                <span className="w-3 h-3 rounded-full bg-amber-400" />
              </div>

              {/* Empty Space for opposing side in desktop layout */}
              <div className="hidden md:block md:w-1/2" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
