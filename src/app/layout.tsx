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
  title: " BENNYTO | Sales Marketing Pura Group",
  description: "Portal resmi Sales Marketing BENNYTO untuk solusi rekayasa mesin industri custom (BENSA, PAMIGO, Salt Washing), 4.000+ alsintan modern INARI, serta kemasan sekuriti terpadu Pura Group Kudus.",
  keywords: [
    " BENNYTO", "Bennyto", "Sales Marketing Pura Group", "Pura Engineering", "INARI", "PT Pura Barutama", "Alsintan",
    "Combine Harvester", "Vertical Dryer", "Rice Milling Unit", "BENSA", "PAMIGO", "Salt Washing Plant",
    "Kudus", "Security Printing", "Paper Mill", "TKDN", "Penawaran Mesin"
  ],
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
