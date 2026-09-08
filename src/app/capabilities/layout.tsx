import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Kapabilitas Bisnis & Solusi Industri | BENNYTO Pura Group",
    description:
        "Kapabilitas bisnis dan solusi industri Pura Group meliputi security printing, anti-counterfeiting, hologram, packaging, paper & plastic converting, industri tembakau, circular economy, serta solusi pertanian dan ALSINTAN.",
    keywords: [
        "kapabilitas Pura Group",
        "business capabilities",
        "solusi industri",
        "industrial solutions",
        "Pura Group",
        "Pura Group Kudus",
        "manufacturing Indonesia",

        "security printing",
        "security printing Indonesia",
        "security printing Pura Group",
        "anti-counterfeiting",
        "anti pemalsuan",
        "security paper",
        "security hologram",
        "hologram Indonesia",
        "DOVID",
        "security thread",
        "tinta sekuriti",

        "plastic converting",
        "paper converting",
        "paper and plastic converting",
        "packaging design",
        "industrial packaging",
        "film transfer",
        "hot stamping foil",
        "cold foil",

        "tobacco industry supply",
        "cigarette paper",
        "tipping paper",
        "Homogenized Tobacco Leaf",
        "HTL",

        "circular economy",
        "molded fiber packaging",
        "sustainable paper converting",

        "solusi pertanian",
        "alsintan",
        "alat pertanian",
        "mesin pertanian",
        "INARI",
        "Combine Harvester",
        "Vertical Dryer",
        "Rice Milling Unit",
    ],
    openGraph: {
        title: "Kapabilitas Bisnis & Solusi Industri | BENNYTO Pura Group",
        description:
            "Solusi industri terintegrasi Pura Group dari security printing, hologram, packaging, paper & plastic converting hingga pertanian dan ALSINTAN.",
        type: "website",
        locale: "id_ID",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function CapabilitiesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}