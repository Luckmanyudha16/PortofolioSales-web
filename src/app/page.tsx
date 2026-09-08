'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import Hero from '@/components/Hero';
import Statistics from '@/components/Statistics';
import BusinessCapabilityCards from '@/components/BusinessCapabilityCards';
import ProductGrid from '@/components/ProductGrid';
import FacilityGallery from '@/components/FacilityGallery';
import AwardSection from '@/components/AwardSection';
import PresenceSection from '@/components/PresenceSection';
import ContactSection from '@/components/ContactSection';
import { ArrowRight, Sparkles, CheckCircle2, ChevronRight, Award, Wrench } from 'lucide-react';

export default function HomePage() {
  const { lang, t } = useLanguage();

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Key Verified Statistics */}
      <Statistics />

      {/* 3. Company Introduction & Heritage Hook */}
      <section className="py-20 bg-slate-950 text-white border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative aspect-[16/11] rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
              <Image
                src="/assets/company/founder_jacobus_busono.png"
                alt="Dr. (H.C.) Jacobus Busono - Founder Pura Group"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-700">
                <p className="text-xs font-bold text-white">Dr. (H.C.) Jacobus Busono</p>
                <p className="text-[11px] text-amber-400">
                  {t('Penerima Bintang Mahaputera Nararya (2021)', 'Bintang Mahaputera Nararya Recipient (2021)')}
                </p>
                <p className="text-[11px] text-slate-300 italic mt-1">
                  &ldquo;{t(
                    'Seratus langkah dengan seratus orang jauh lebih agung daripada seratus langkah yang ditempuh sendirian.',
                    'A hundred steps with a hundred people is far greater than a hundred steps taken alone.'
                  )}&rdquo;
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                  {t('WARISAN & FILOSOFI KEPEMIMPINAN', 'LEGACY & LEADERSHIP PHILOSOPHY')}
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-2 leading-tight">
                  {t(
                    'Think Big, Start Small: Menjadi Kekuatan Industri Terintegrasi Asia',
                    'Think Big, Start Small: Becoming Asia\'s Integrated Industrial Powerhouse'
                  )}
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t(
                  'Bermula dari usaha percetakan sederhana pada tahun 1908 di Kudus, Pura Group di bawah kepemimpinan Dr. (H.C.) Jacobus Busono bertransformasi menjadi konglomerasi industri berteknologi tinggi dengan lebih dari 15.000 karyawan. Berlandaskan nilai Servant Leadership dan inovasi mandiri tiada henti, Pura Group konsisten menghadirkan produk pengganti impor dan memperkuat ketahanan nasional.',
                  'Beginning as a modest printing shop in 1908 in Kudus, Pura Group under Dr. (H.C.) Jacobus Busono evolved into a high-technology industrial conglomerate employing over 15,000 professionals. Rooted in Servant Leadership and ceaseless homegrown innovation, Pura Group consistently replaces imported goods and bolsters national resilience.'
                )}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                  <p className="text-xs font-bold text-white mb-1">
                    {t('Pura Engineering (1974)', 'Pura Engineering (1974)')}
                  </p>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {t(
                      'Bermula dari Pura Bengkel 1974 untuk membuat mesin pabrik sendiri, berkembang menjadi divisi mandiri 1990 penghasil alsintan nasional.',
                      'Originated in 1974 as Pura Bengkel to fabricate in-house machinery, evolving into an independent division producing national farm machinery.'
                    )}
                  </p>
                </div>
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                  <p className="text-xs font-bold text-white mb-1">
                    {t('80+ Paten Terdaftar', '80+ Registered Patents')}
                  </p>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {t(
                      'Meraih penghargaan Menteri Hukum & HAM untuk jumlah paten terbanyak di Indonesia dari sains bahan hingga permesinan.',
                      'Awarded by Minister of Law & Human Rights for the most patents in Indonesia across material sciences and machinery.'
                    )}
                  </p>
                </div>
              </div>

              <div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <span>{t('Baca Kisah Lengkap Perjalanan & Sejarah', 'Read the Complete Heritage & Timeline')}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Five Core Business Solutions */}
      <BusinessCapabilityCards />

      {/* 5. Featured Products & Machine Showcase */}
      <section className="py-20 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest font-bold text-amber-400">
                {t('KATALOG MESIN REKAYASA & ALSINTAN', 'ENGINEERING MACHINERY & ALSINTAN')}
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-1">
                {t('Solusi Permesinan Handal Siap Pakai', 'Ready-to-Deploy Industrial Machinery')}
              </h2>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
            >
              <span>{t('Lihat Seluruh Katalog Produk', 'View Full Product Catalog')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <ProductGrid initialCategory="all" />
        </div>
      </section>

      {/* 6. Precision Facilities Snapshot */}
      <section className="py-20 bg-slate-950 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs uppercase tracking-widest font-bold text-amber-400">
              {t('FASILITAS KELAS DUNIA 100 HEKTAR', '100-HECTARE WORLD-CLASS FACILITIES')}
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-1">
              {t('Infrastruktur Manufaktur, Armada & Presisi', 'Precision Manufacturing, Fleets & Infrastructure')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              {t(
                'Permesinan CNC kepresisian 1 mikron, lengan robot 6-sumbu, armada jet & helikopter eksekutif, 182 armada truk, hingga guest house bintang 5 terpadu di Kudus.',
                '1-micron CNC precision, 6-axis robotic arms, executive jet & helicopter fleet, 182 trucks, and 5-star VIP hospitality co-located in Kudus.'
              )}
            </p>
          </div>

          <FacilityGallery />
        </div>
      </section>

      {/* 7. Credibility: Awards, Bintang Mahaputera, Certifications & TKDN */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs uppercase tracking-widest font-bold text-amber-400">
              {t('REKAM JEJAK KEPERCAYAAN & PRESTASI', 'VERIFIED CREDIBILITY & ACHIEVEMENTS')}
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-1">
              {t('Tanda Kehormatan Negara & Sertifikasi Mutu', 'National State Honors & Certified Quality')}
            </h2>
          </div>

          <AwardSection />
        </div>
      </section>

      {/* 8. Geographic Presence: 4,000+ Units Across Indonesia */}
      <section className="py-20 bg-slate-950 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PresenceSection />
        </div>
      </section>

      {/* 9. Conversion & Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactSection />
        </div>
      </section>
    </div>
  );
}
