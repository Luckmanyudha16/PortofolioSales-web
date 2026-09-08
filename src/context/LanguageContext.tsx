'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '@/data/products';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (idStr: string, enStr: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('id');

  useEffect(() => {
    const saved = localStorage.getItem('pura_lang') as Language;
    if (saved === 'id' || saved === 'en') {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('pura_lang', newLang);
  };

  const t = (idStr: string, enStr: string) => {
    return lang === 'id' ? idStr : enStr;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
