'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { ProductItem } from '@/data/products';
import { MessageSquare, ArrowRight, Check, Gauge } from 'lucide-react';

interface ProductCardProps {
  product: ProductItem;
  onSelect: (product: ProductItem) => void;
}

export default function ProductCard({ product, onSelect }: ProductCardProps) {
  const { lang, t } = useLanguage();

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    const phone = '6281290260777';
    const text = encodeURIComponent(
      t(
        `Halo Bpk. Benny Kristyanto (Marketing Pura Engineering), saya ingin meminta spesifikasi teknis dan penawaran resmi untuk produk: ${product.name.id}.`,
        `Hello Mr. Benny Kristyanto (Pura Engineering Marketing), I would like to request technical specifications and an official quotation for product: ${product.name.en}.`
      )
    );
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  const getCategoryName = (cat: string) => {
    switch (cat) {
      case 'custom':
        return t('Mesin Custom & Pabrik Turnkey', 'Custom Plants & Turnkey');
      case 'pre-harvest':
        return t('Alsintan Pra-Panen', 'Pre-Harvest Machinery');
      case 'harvest':
        return t('Alsintan Panen', 'Harvesting Machinery');
      case 'post-harvest':
        return t('Pasca-Panen & RMU', 'Post-Harvest & Dryers');
      case 'modular':
        return t('Unit Parsial Modular', 'Modular Standalone Units');
      default:
        return t('Permesinan Industri', 'Industrial Machinery');
    }
  };

  return (
    <div 
      onClick={() => onSelect(product)}
      className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all hover:shadow-xl flex flex-col justify-between cursor-pointer group"
    >
      <div>
        {/* Product Visual Container */}
        <div className="relative aspect-[16/10] w-full bg-slate-950 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name[lang]}
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />

          {/* Top Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
            <span className="bg-slate-950/85 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-amber-400 px-2.5 py-1 rounded border border-slate-800">
              {getCategoryName(product.category)}
            </span>
            {product.badge && (
              <span className="bg-amber-500 text-slate-950 text-[10px] font-extrabold uppercase tracking-wide px-2 py-0.5 rounded shadow-sm">
                {product.badge[lang]}
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
            {product.name[lang]}
          </h3>
          <p className="text-xs text-amber-400/90 font-medium mt-1">
            {product.tagline[lang]}
          </p>
          <p className="text-xs text-slate-300 mt-2.5 line-clamp-2 leading-relaxed">
            {product.description[lang]}
          </p>

          {/* Quick Specifications Grid */}
          <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-1.5">
            {product.specs.slice(0, 2).map((spec, i) => (
              <div key={i} className="flex items-center justify-between text-[11px]">
                <span className="text-slate-400">{spec.label[lang]}:</span>
                <span className="font-semibold text-slate-200 text-right truncate max-w-[60%]">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-5 pt-0 grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => onSelect(product)}
          className="w-full inline-flex items-center justify-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold py-2.5 rounded-lg border border-slate-700 transition-colors"
        >
          <Gauge className="w-3.5 h-3.5 text-amber-400" />
          <span>{t('Spesifikasi', 'View Specs')}</span>
        </button>
        <button
          type="button"
          onClick={handleWhatsApp}
          className="w-full inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-2.5 rounded-lg transition-colors shadow-sm"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>{t('Minta WA', 'RFQ via WA')}</span>
        </button>
      </div>
    </div>
  );
}
