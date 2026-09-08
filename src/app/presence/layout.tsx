import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Jangkauan Global & Distribusi | BENNYTO Pura Group",
    description:
        "Kehadiran Pura Group di Indonesia dan pasar global dengan 4.000+ mesin pertanian INARI, ekspor teknologi ke 100+ negara, serta jaringan lebih dari 22.000 mitra bisnis di berbagai negara.",
    keywords: [
        "Pura Group",
        "Pura Group Indonesia",
        "Pura Group Kudus",
        "global presence Pura Group",
        "Pura Group global",
        "jangkauan Pura Group",
        "distribusi Pura Group",
        "distribusi Indonesia",
        "ekspor Pura Group",
        "ekspor Indonesia",
        "export Indonesia",
        "global export",

        "INARI",
        "mesin pertanian INARI",
        "alsintan",
        "alat pertanian",
        "mesin pertanian",
        "4.000 mesin pertanian",
        "alsintan Indonesia",

        "100+ negara",
        "ekspor ke 100 negara",
        "global market",
        "international market",
        "teknologi Indonesia",
        "ekspor teknologi",

        "22.000 mitra bisnis",
        "business partners",
        "global business partners",

        "Smart Tech",
        "smart card",
        "smart card Indonesia",
        "Primaniyarta Awards",
        "eksportir Indonesia",
    ],
    openGraph: {
        title: "Jangkauan Global & Distribusi | BENNYTO Pura Group",
        description:
            "Jaringan distribusi dan ekspor Pura Group dengan 4.000+ mesin INARI di Indonesia, ekspor ke 100+ negara, dan lebih dari 22.000 mitra bisnis global.",
        type: "website",
        locale: "id_ID",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function PresenceLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}