'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import AwardSection from '@/components/AwardSection';
import { Award, Leaf, HeartHandshake, ShieldCheck, TrendingDown } from 'lucide-react';

export default function AchievementsPage() {
  const { lang, t } = useLanguage();

  const csrPrograms = [
    {
      title: { id: 'Water for Life & Pompanisasi', en: 'Water for Life & Flood Control' },
      date: 'Januari 2025',
      desc: { id: 'Penyediaan pompa polder & air bersih untuk wilayah terdampak banjir di Kudus dan Demak.', en: 'Provision of high-capacity polder pumps & clean water for flood relief in Kudus & Demak.' }
    },
    {
      title: { id: 'Peduli Bencana Internasional & Nasional', en: 'Disaster Relief Support' },
      date: 'April & Desember 2025',
      desc: { id: 'Bantuan bencana gempa Thailand bersama TNI serta bantuan bencana Aceh & Sumatera Utara.', en: 'Disaster relief for Thailand earthquake and flood relief for North Sumatra & Aceh.' }
    },
    {
      title: { id: 'Pura Cerdas & Pura Pintar', en: 'Pura Cerdas Education' },
      date: 'Sepanjang Tahun',
      desc: { id: 'Bantuan fasilitas sekolah, bimbingan belajar, dan pelatihan keterampilan untuk generasi muda.', en: 'Educational facilities support, free tutoring programs, and youth skills workshops.' }
    },
    {
      title: { id: 'Kesehatan Masyarakat & Ambulans', en: 'Healthcare & Ambulances' },
      date: 'November 2025',
      desc: { id: 'Penyerahan 2 unit ambulans medis lengkap untuk memperkuat layanan kesehatan warga Kudus.', en: 'Donation of two fully-equipped medical ambulances supporting community health services.' }
    },
  ];

  return (
    <div className="py-12 bg-slate-950 text-white space-y-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <span className="text-xs uppercase tracking-widest font-bold text-amber-400">
          {t('PRESTASI, SERTIFIKASI & TANGGUNG JAWAB SOSIAL', 'AWARDS, CERTIFICATIONS & SUSTAINABILITY')}
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-2 leading-tight">
          {t('Bukti Integritas, Rekor Paten & Nilai Tambah Bangsa', 'Proof of Trust, Patent Records & National Impact')}
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed">
          {t(
            'Dianugerahi Bintang Mahaputera Nararya oleh Presiden RI, memegang rekor paten terbanyak di Indonesia (80+ paten), 100+ sertifikat TKDN, hingga komitmen dekarbonisasi boiler ramah lingkungan.',
            'Conferred the Bintang Mahaputera Nararya by the President of Indonesia, holding the record for the most patents in Indonesia (80+ patents), 100+ TKDN certificates, and continuous boiler decarbonization.'
          )}
        </p>
      </div>

      {/* Main Awards & TKDN Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AwardSection />
      </div>

      {/* Environmental Decarbonization Metric */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10">
          <div className="flex items-center gap-2 mb-3">
            <Leaf className="w-5 h-5 text-emerald-400" />
            <span className="text-xs uppercase font-bold tracking-wider text-emerald-400">
              {t('KOMITMEN KEBERLANJUTAN LINGKUNGAN', 'SUSTAINABILITY & EMISSION REDUCTION')}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <h3 className="text-2xl font-black text-white">
                {t('Penurunan Emisi Karbon Boiler Sebesar 13.77% dalam Satu Tahun', '13.77% Boiler Carbon Emission Reduction in One Year')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t(
                  'Melalui unit Paper Mill, Pura Group berhasil menurunkan emisi karbon dioksida (CO2) operasional boiler dari 61.074,22 ton pada tahun 2023 menjadi 52.663,27 ton pada tahun 2024. Ini merupakan wujud nyata efisiensi energi terbarukan dan kepatuhan lingkungan PROPER Biru Kementerian Lingkungan Hidup dan Kehutanan.',
                  'Through its Paper Mill unit, Pura Group achieved a notable reduction in boiler CO2 emissions from 61,074.22 tons in 2023 down to 52,663.27 tons in 2024, demonstrating commitment to blue PROPER environmental standards.'
                )}
              </p>
            </div>

            <div className="lg:col-span-4 bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center">
              <div className="flex items-center justify-center gap-1.5 text-emerald-400 mb-1">
                <TrendingDown className="w-6 h-6" />
                <span className="text-4xl font-black font-mono">-13.77%</span>
              </div>
              <p className="text-xs font-bold text-white">{t('Reduksi Emisi CO2 Tahunan', 'Annual CO2 Emission Reduction')}</p>
              <p className="text-[10px] text-slate-400 mt-1">61.074 ton (2023) → 52.663 ton (2024)</p>
            </div>
          </div>
        </div>
      </div>

      {/* CSR 2025 Milestones */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest font-bold text-amber-400">
            {t('TANGGUNG JAWAB SOSIAL KORPORAT (CSR)', 'CORPORATE SOCIAL RESPONSIBILITY')}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            {t('Dampak Berkelanjutan untuk Masyarakat 2025', 'Sustainable Community Impact Initiatives 2025')}
          </h2>
          <p className="text-xs text-slate-400 mt-2">
            {t(
              'Program unggulan Pura Cerdas, Pura Pintar, Pura Terampil, Pura Peduli, dan Pura Ramah mendampingi kemajuan warga sekitar.',
              'Flagship programs Pura Cerdas, Pura Pintar, Pura Terampil, Pura Peduli, and Pura Ramah uplifting local communities.'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {csrPrograms.map((p, i) => (
            <div key={i} className="bg-slate-900/70 border border-slate-800 p-5 rounded-2xl space-y-2">
              <span className="text-[10px] font-bold text-amber-400 uppercase bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                {p.date}
              </span>
              <h4 className="text-xs font-bold text-white pt-1">{p.title[lang]}</h4>
              <p className="text-[11px] text-slate-300 leading-relaxed">{p.desc[lang]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
