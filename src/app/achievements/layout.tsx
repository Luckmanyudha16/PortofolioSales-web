import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Prestasi, Paten, TKDN & CSR | BENNYTO Pura Group",
    description:
        "Prestasi dan kontribusi Pura Group meliputi penghargaan Bintang Mahaputera Nararya, 80+ paten, 100+ sertifikat TKDN, pengurangan emisi boiler 13,77%, serta program CSR dan pemberdayaan masyarakat.",
    keywords: [
        "prestasi Pura Group",
        "penghargaan Pura Group",
        "Pura Group awards",
        "Pura Group Kudus",
        "Pura Group Indonesia",

        "Bintang Mahaputera Nararya",
        "paten Pura Group",
        "paten Indonesia",
        "80+ paten",
        "sertifikat TKDN",
        "TKDN Pura Group",
        "100+ sertifikat TKDN",
        "produk TKDN Indonesia",

        "sustainability Pura Group",
        "sustainability Indonesia",
        "dekarbonisasi",
        "pengurangan emisi karbon",
        "emisi boiler",
        "carbon emission reduction",
        "Paper Mill",
        "PROPER Biru",

        "CSR Pura Group",
        "Corporate Social Responsibility",
        "Pura Cerdas",
        "Pura Pintar",
        "Pura Terampil",
        "Pura Peduli",
        "Pura Ramah",
        "program CSR Kudus",
        "pemberdayaan masyarakat",
        "bantuan sosial",
    ],
    openGraph: {
        title: "Prestasi, Paten, TKDN & CSR | BENNYTO Pura Group",
        description:
            "Bukti integritas dan kontribusi Pura Group melalui penghargaan, inovasi paten, sertifikasi TKDN, keberlanjutan lingkungan, serta program CSR.",
        type: "website",
        locale: "id_ID",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function AchievementsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}