'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { lang, setLang } = useLanguage();

  return (
    <div className={`inline-flex items-center bg-slate-900/80 border border-slate-700/60 rounded-full p-0.5 text-xs font-medium backdrop-blur-sm ${className}`}>
      <div className="flex items-center pl-2 pr-1 text-slate-400">
        <Globe className="w-3.5 h-3.5" />
      </div>
      <button
        type="button"
        onClick={() => setLang('id')}
        className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
          lang === 'id'
            ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
            : 'text-slate-300 hover:text-white'
        }`}
        aria-label="Bahasa Indonesia"
      >
        ID
      </button>
      <button
        type="button"
        onClick={() => setLang('en')}
        className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
          lang === 'en'
            ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
            : 'text-slate-300 hover:text-white'
        }`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
