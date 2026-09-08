import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Kontak & Permintaan Penawaran | BENNYTO Pura Group",
    description:
        "Hubungi Marketing BENNYTO untuk konsultasi teknis dan permintaan penawaran resmi Pura Group. Melayani kebutuhan ALSINTAN INARI, mesin industri custom, proyek turnkey BENSA, PAMIGO, Salt Washing, serta solusi security dan packaging.",
    keywords: [
        "kontak BENNYTO",
        "contact BENNYTO",
        "Marketing BENNYTO",
        "Marketing Pura Group",
        "Pura Group",
        "Pura Group Kudus",

        "permintaan penawaran mesin",
        "quotation mesin",
        "konsultasi teknis",
        "pengadaan mesin",
        "pengadaan alsintan",
        "supplier mesin industri",
        "supplier alsintan Indonesia",

        "INARI",
        "alsintan",
        "alat pertanian",
        "mesin pertanian",
        "Combine Harvester",
        "Vertical Dryer",
        "Rice Milling Unit",

        "mesin industri custom",
        "custom machinery",
        "industrial engineering",
        "Turnkey EPCC",
        "turnkey plant",
        "BENSA",
        "PAMIGO",
        "Salt Washing Plant",

        "security printing",
        "security solutions",
        "security packaging",
        "industrial packaging",
        "Pura Engineering",
    ],
    openGraph: {
        title: "Kontak & Permintaan Penawaran | BENNYTO Pura Group",
        description:
            "Konsultasi teknis dan permintaan penawaran resmi untuk ALSINTAN INARI, mesin industri custom, turnkey plant, serta solusi security dan packaging Pura Group.",
        type: "website",
        locale: "id_ID",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function ContactLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}