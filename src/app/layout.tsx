import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppInquiry from "@/components/WhatsAppInquiry";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pura-group-bennyto.onrender.com"),

  title: {
    default: "BENNYTO | Marketing Pura Group",
    template: "%s | BENNYTO Pura Group",
  },

  description:
    "Portal resmi Marketing BENNYTO untuk menghubungkan kebutuhan industri dan instansi dengan kapabilitas manufaktur Pura Group Kudus, meliputi alat dan mesin pertanian, engineering, security printing, security paper, hologram, dan solusi industri.",

  keywords: [
    "BENNYTO",
    "Bennyto Pura Group",
    "Marketing Pura Group",
    "Pura Group",
    "Pura Group Kudus",
    "Pura Engineering",
    "PT Pura Barutama",

    // Agriculture & Alsintan
    "alat pertanian",
    "mesin pertanian",
    "alat dan mesin pertanian",
    "alsintan",
    "alsintan Indonesia",
    "mesin pertanian Indonesia",
    "Combine Harvester",
    "Vertical Dryer",
    "Rice Milling Unit",
    "INARI",

    // Engineering & Manufacturing
    "engineering Indonesia",
    "industrial engineering",
    "manufacturing Indonesia",
    "custom machine",
    "mesin industri",
    "mesin industri custom",
    "BENSA",
    "PAMIGO",
    "Salt Washing Plant",

    // Security Printing
    "security printing",
    "security printing Indonesia",
    "security paper",
    "security paper Indonesia",
    "kertas pengaman",
    "cetak berpengaman",
    "percetakan berpengaman",
    "hologram",
    "security hologram",

    // General
    "industrial solutions Indonesia",
    "solusi industri",
    "Kudus",
    "TKDN",
    "Penawaran Mesin",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "BENNYTO | Marketing Pura Group",
    description:
      "Solusi industri dan manufaktur Pura Group meliputi alat pertanian, engineering, security printing, security paper, hologram, packaging, dan berbagai solusi industri.",
    type: "website",
    locale: "id_ID",
    url: "https://pura-group-bennyto.onrender.com",
    siteName: "BENNYTO",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BENNYTO | Marketing Pura Group",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}>
      <body className="bg-slate-950 text-slate-100 min-h-screen flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
        <LanguageProvider>
          <Navbar />
          <main className="flex-grow pt-[72px] sm:pt-[92px]">
            {children}
          </main>
          <Footer />
          <WhatsAppInquiry />
        </LanguageProvider>
      </body>
    </html>
  );
}
