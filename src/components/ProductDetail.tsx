'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { ProductItem } from '@/data/products';
import {
  X,
  MessageSquare,
  CheckCircle2,
  ShieldCheck,
  Building2,
  Wrench,
  Download
} from 'lucide-react';

interface ProductDetailProps {
  product: ProductItem | null;
  onClose: () => void;
}

export default function ProductDetail({ product, onClose }: ProductDetailProps) {
  const { lang, t } = useLanguage();

  if (!product) return null;

  const handleWhatsApp = () => {
    const phone = '6281290260777';
    const text = encodeURIComponent(
      t(
        `Halo Bpk. Bennyto (Marketing Pura Engineering), kami ingin meminta penawaran harga resmi dan spesifikasi teknis lengkap untuk produk: ${product.name.id}. Mohon informasi ketersediaan unit, jadwal pengiriman, dan layanan purnajual. Terima kasih.`,
        `Hello Mr. Bennyto (Pura Engineering Marketing), we would like to request an official quotation and full technical data sheet for: ${product.name.en}. Please share unit availability, delivery schedule, and after-sales support details. Thank you.`
      )
    );
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-slate-900 border border-slate-700 w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden text-white flex flex-col max-h-[90vh]"
      >
        {/* Header Strip */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/70">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
              {t('LEMBAR SPESIFIKASI TEKNIS • PURA ENGINEERING', 'TECHNICAL SPECIFICATION SHEET • PURA ENGINEERING')}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Top Hero Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-6 relative aspect-[16/10] rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
              <Image
                src={product.image}
                alt={product.name[lang]}
                fill
                className="object-cover object-center"
              />
              {product.badge && (
                <div className="absolute top-3 left-3 bg-amber-500 text-slate-950 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded shadow">
                  {product.badge[lang]}
                </div>
              )}
            </div>

            <div className="md:col-span-6 space-y-3">
              <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                {product.name[lang]}
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-amber-400">
                {product.tagline[lang]}
              </p>
              <p className="text-xs text-slate-300 leading-relaxed">
                {product.description[lang]}
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-slate-400">
                <span className="inline-flex items-center gap-1 bg-slate-950 px-2.5 py-1 rounded border border-slate-800">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  SNI Certified
                </span>
                <span className="inline-flex items-center gap-1 bg-slate-950 px-2.5 py-1 rounded border border-slate-800">
                  <Wrench className="w-3 h-3 text-amber-400" />
                  Toleransi 1 µm
                </span>
              </div>
            </div>
          </div>

          {/* Specifications Table */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 flex items-center gap-1.5">
              <span>{t('Spesifikasi Teknis Resmi (Berdasarkan Dokumen Terverifikasi)', 'Official Technical Specifications (Verified Data)')}</span>
            </h4>
            <div className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
              <table className="w-full text-xs text-left border-collapse">
                <tbody>
                  {product.specs.map((spec, i) => (
                    <tr key={i} className="border-b border-slate-800/80 last:border-b-0 hover:bg-slate-900/40">
                      <td className="py-3 px-4 text-slate-400 font-medium w-1/3 border-r border-slate-800/80">
                        {spec.label[lang]}
                      </td>
                      <td className="py-3 px-4 font-semibold text-slate-100">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Features & Advantages */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400">
              {t('Keunggulan & Fitur Rekayasa', 'Key Engineering Advantages')}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {product.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2 bg-slate-950/60 p-3 rounded-lg border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-200 leading-snug">{feat[lang]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="p-4 sm:p-6 border-t border-slate-800 bg-slate-950 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-[11px] text-slate-400 text-center sm:text-left">
            {t('Dukungan suku cadang terjamin & teknisi bersertifikat di seluruh Indonesia.', 'Guaranteed spareparts availability & certified field technicians nationwide.')}
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold border border-slate-700 transition-colors"
            >
              {t('Tutup', 'Close')}
            </button>
            <button
              type="button"
              onClick={handleWhatsApp}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-lg shadow-emerald-600/20 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t('Minta Penawaran via WhatsApp', 'Request RFQ on WhatsApp')}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
