'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { OFFICES_DATA, MARKETING_CONTACT } from '@/data/companyData';
import {
  Building2,
  Phone,
  MapPin,
  MessageSquare,
  Send,
  ExternalLink,
  CheckCircle2,
  Mail,
  UserCheck
} from 'lucide-react';

export default function ContactSection() {
  const { lang, t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    division: 'engineering',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const divisionNames: Record<string, string> = {
      engineering: 'Pura Engineering / ALSINTAN',
      custom: 'Pabrik Mesin Custom (BENSA / PAMIGO / Salt Washing)',
      security: 'Security Printing / Total Security System',
      materials: 'Paper Mill & Innovative Materials',
      smart: 'Smart Technology & Biometrik',
      general: 'Konsultasi Penjualan & Kemitraan',
    };

    const divisionText = divisionNames[formData.division] || formData.division;
    const text = encodeURIComponent(
      `*PERMINTAAN PENAWARAN - PURA GROUP & ENGINEERING*\nKepada: Marketing (Bpk. Bennyto)\n\nNama: ${formData.name}\nPerusahaan: ${formData.company}\nNo. WhatsApp / HP: ${formData.phone}\nEmail: ${formData.email}\nDivisi / Kebutuhan: ${divisionText}\n\nPesan / Spesifikasi:\n${formData.message}`
    );

    setTimeout(() => {
      window.open(`https://wa.me/${MARKETING_CONTACT.phones[0].raw}?text=${text}`, '_blank');
    }, 600);
  };

  return (
    <div className="space-y-16">
      {/* Featured Sales & Marketing Profile Card */}
      <div className="bg-gradient-to-br from-amber-500/15 via-slate-900 to-slate-950 border-2 border-amber-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 px-3.5 py-1.5 rounded-full text-xs font-bold text-amber-400">
              <UserCheck className="w-4 h-4" />
              <span>{t('KONTAK RESMI SALES & MARKETING', 'OFFICIAL SALES & MARKETING DESK')}</span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                {MARKETING_CONTACT.name}
              </h3>
              <p className="text-sm font-semibold text-amber-400 mt-1">
                {MARKETING_CONTACT.title[lang]}
              </p>
              <p className="text-xs text-slate-300 mt-0.5">
                {MARKETING_CONTACT.department[lang]}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
              {t(
                'Selamat datang. Saya siap melayani konsultasi teknis, pengadaan alsintan pertanian INARI, tender mesin industri, proyek pabrik turnkey (BENSA, PAMIGO, Salt Washing), serta kebutuhan cetak sekuriti dan kemasan Pura Group.',
                'Welcome. I am at your service for technical consultations, INARI agricultural machinery procurement, industrial tenders, turnkey processing plants (BENSA, PAMIGO, Salt Washing), and security printing solutions.'
              )}
            </p>

            {/* Direct Contact Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-1">
                <span className="text-[11px] text-slate-400 font-medium flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  {t('Layanan WhatsApp & Telepon', 'WhatsApp & Direct Desk')}
                </span>
                <p className="text-xs font-bold text-white">
                  Marketing: Bennyto
                </p>
                <p className="text-[11px] text-slate-400">
                  {t('Konsultasi teknis & surat penawaran', 'Technical advisory & official quotation')}
                </p>
              </div>

              <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-1">
                <span className="text-[11px] text-slate-400 font-medium flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  {t('Email Resmi Marketing', 'Official Marketing Email')}
                </span>
                <div className="font-mono text-xs font-bold text-white truncate">
                  <a href={`mailto:${MARKETING_CONTACT.email}`} className="hover:text-amber-400 transition-colors">
                    {MARKETING_CONTACT.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-3">
            <a
              href={`https://wa.me/${MARKETING_CONTACT.phones[0].raw}?text=Halo%20Bpk.%20Benny%20Kristyanto,%20saya%20ingin%20berkonsultasi%20mengenai%20produk%20dan%20permesinan%20Pura%20Group.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-6 rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-emerald-600/30 transition-all hover:scale-[1.02]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t('Chat WhatsApp Marketing', 'Chat WhatsApp Marketing')}</span>
            </a>
            <a
              href={`mailto:${MARKETING_CONTACT.email}?subject=Permintaan%20Informasi%20dan%20Penawaran%20Pura%20Group`}
              className="w-full inline-flex items-center justify-center gap-2.5 bg-slate-950 hover:bg-slate-900 text-amber-400 font-bold py-3.5 px-6 rounded-xl text-xs uppercase tracking-wider border border-amber-500/30 transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>{t('Kirim Email ke benny@kudus.puragroup.com', 'Email to benny@kudus.puragroup.com')}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Corporate Location Cards */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs uppercase tracking-widest font-bold text-amber-400">
            {t('JARINGAN LOKASI KANTOR PERWAKILAN', 'REGIONAL OFFICE NETWORK')}
          </p>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            {t('Kudus, Jakarta & Surabaya', 'Kudus, Jakarta & Surabaya')}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            {t(
              'Seluruh komunikasi tender dan kunjungan resmi dapat dikoordinasikan langsung melalui Marketing Bennyto.',
              'All commercial tenders and official plant delegations are coordinated directly via Marketing Bennyto.'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {OFFICES_DATA.map((office, idx) => (
            <div
              key={idx}
              className={`bg-slate-900/80 border ${idx === 0 ? 'border-amber-500/40 bg-slate-900' : 'border-slate-800'
                } rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all shadow-lg group`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-base font-extrabold text-white group-hover:text-amber-400 transition-colors">
                    {office.city}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-950 text-amber-400 px-2 py-0.5 rounded border border-slate-800">
                    {office.badge[lang]}
                  </span>
                </div>

                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  {office.type[lang]}
                </p>

                <div className="space-y-2.5 text-xs text-slate-300">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{office.address}</span>
                  </div>
                  <div className="flex items-center gap-2 pt-1 border-t border-slate-800/80">
                    <UserCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold text-slate-200">{office.contactPerson}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex gap-2">
                <a
                  href={`https://wa.me/${MARKETING_CONTACT.phones[0].raw}?text=Halo%20Bpk.%20Benny%20Kristyanto,%20saya%20ingin%20berkonsultasi%20terkait%20wilayah%20${office.city}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-2.5 rounded-lg transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>{t('Hubungi WA', 'Contact WA')}</span>
                </a>
                <a
                  href={office.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 bg-slate-950 hover:bg-slate-800 text-amber-400 text-xs font-semibold py-2.5 rounded-lg border border-slate-800 transition-colors"
                >
                  <span>{t('Peta Lokasi', 'Map Location')}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive B2B Tender Inquiry Form */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form Context */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded border border-emerald-400/20">
                {t('LAYANAN PRIORITAS B2B & PEMERINTAH', 'B2B & GOVERNMENT PRIORITY DESK')}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                {t(
                  'Formulir Permintaan Penawaran Resmi & Konsultasi Teknis',
                  'Official Quotation Request & Technical Consultation'
                )}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                {t(
                  'Sampaikan rincian kebutuhan permesinan, proyek turnkey, spesifikasi tender, atau kemitraan industri. Formulir ini terhubung langsung ke kontak Marketing Bennyto.',
                  'Submit your machinery specifications, turnkey project requirements, or tender inquiries. This form routes directly to Marketing Bennyto.'
                )}
              </p>
            </div>

            <div className="space-y-4 bg-slate-950 p-6 rounded-2xl border-2 border-amber-500/60 text-xs shadow-xl">
              <div className="space-y-1">
                <p className="font-extrabold text-white text-base">Marketing</p>
                <p className="font-bold text-amber-400 text-sm tracking-wide font-mono">
                  Bennyto 0812 9026 0777 / 0877 8826 0777
                </p>
                <p className="text-slate-200 font-mono text-xs pt-0.5">
                  Email : <a href="mailto:benny@kudus.puragroup.com" className="text-amber-400 hover:underline">benny@kudus.puragroup.com</a>
                </p>
              </div>

              <p className="text-slate-400 text-[11px] leading-relaxed border-t border-slate-800 pt-3">
                {t(
                  'Silakan sampaikan permohonan spesifikasi tender, survei teknis, atau permintaan penawaran resmi. Pesan langsung ditangani oleh Marketing Bennyto.',
                  'Submit your tender specifications, technical site reviews, or quotation requests. Messages are handled directly by Marketing Bennyto.'
                )}
              </p>

              <div className="pt-1 flex flex-col gap-2">
                <a
                  href={`https://wa.me/${MARKETING_CONTACT.phones[0].raw}?text=${encodeURIComponent('Halo Bpk. Bennyto (Marketing Pura Group), saya ingin berkonsultasi mengenai kebutuhan permesinan dan meminta penawaran resmi.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl transition-all shadow-md shadow-emerald-600/20"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t('Hubungi via WhatsApp', 'Chat via WhatsApp')}</span>
                </a>
                <a
                  href="mailto:benny@kudus.puragroup.com?subject=Permintaan%20Penawaran%20Resmi%20Pura%20Group%20-%20Marketing%20Bennyto"
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-amber-400 font-bold py-2.5 rounded-xl border border-slate-800 hover:border-amber-500/30 transition-all text-xs"
                >
                  <Mail className="w-4 h-4" />
                  <span>{t('Kirim via Email', 'Send via Email')}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form Fields */}
          <div className="lg:col-span-7 bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800">
            {submitted ? (
              <div className="text-center py-10 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-white">
                  {t('Permintaan Penawaran Berhasil Disiapkan!', 'Quotation Request Prepared Successfully!')}
                </h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                  {t(
                    'Pesan Anda telah diteruskan langsung ke WhatsApp Marketing Bpk. Bennyto. Jika jendela chat belum terbuka otomatis, silakan klik tombol di bawah.',
                    'Your inquiry has been routed directly to Marketing Mr. Bennyto on WhatsApp. If the chat window did not launch automatically, click the button below.'
                  )}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                  <a
                    href={`https://wa.me/${MARKETING_CONTACT.phones[0].raw}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{t('Buka Chat WhatsApp Sekarang', 'Open WhatsApp Chat Now')}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg"
                  >
                    {t('Kirim Pesan Lain', 'Send Another Message')}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      {t('Nama Lengkap *', 'Full Name *')}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t('Contoh: Ir. Budi Santoso', 'e.g. John Doe')}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      {t('Perusahaan / Instansi / Dinas *', 'Company / Institution *')}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder={t('Contoh: PT Agro Nusantara', 'e.g. Acme Corp')}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      {t('Nomor WhatsApp / HP *', 'WhatsApp / Phone Number *')}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0812-xxxx-xxxx"
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      {t('Alamat Email *', 'Email Address *')}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="budi@perusahaan.com"
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    {t('Divisi / Kategori Kebutuhan *', 'Division / Product Category *')}
                  </label>
                  <select
                    value={formData.division}
                    onChange={(e) => setFormData({ ...formData, division: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    <option value="engineering">{t('Pura Engineering — Alsintan (Traktor, Harvester, Dryer, RMU)', 'Pura Engineering — Agricultural Machinery')}</option>
                    <option value="custom">{t('Pura Engineering — Mesin Custom / Turnkey (BENSA, PAMIGO, Salt)', 'Pura Engineering — Custom Plants (BENSA, PAMIGO, Salt)')}</option>
                    <option value="security">{t('Security Printing — Kertas Uang, Paspor, Dokumen Berharga', 'Security Printing — Banknotes, Passports, High Security')}</option>
                    <option value="materials">{t('Innovative Materials — Paper Mill, Foil Metallizing, Tinta', 'Innovative Materials — Paper Mill, Foil, Specialty Inks')}</option>
                    <option value="smart">{t('Smart Technology — Kartu Pintar, Biometrik, RFID & IoT', 'Smart Technology — Smart Cards, Biometrics, RFID')}</option>
                    <option value="general">{t('Pertanyaan Umum / Kemitraan Bisnis', 'General Corporate Inquiry / Partnership')}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    {t('Uraian Kebutuhan & Spesifikasi Proyek *', 'Project Requirements & Specifications *')}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t(
                      'Jelaskan tipe mesin yang diinginkan, kapasitas target, lokasi penempatan, atau jadwal tender...',
                      'Describe the required machine model, target capacity, site location, or tender timeline...'
                    )}
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>

                <div className="text-[11px] text-slate-400 bg-slate-900/60 p-3 rounded-lg border border-slate-800/80">
                  {t(
                    'Formulir ini terhubung langsung ke kontak Marketing Bennyto (WhatsApp & Email resmi).',
                    'This inquiry form connects directly to Marketing Bennyto (Official WhatsApp & Email).'
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-lg shadow-amber-500/20 transition-all active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>{t('KIRIM PERMINTAAN PENAWARAN', 'SUBMIT QUOTATION REQUEST')}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
