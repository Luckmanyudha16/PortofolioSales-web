import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Alat & Mesin Pertanian (ALSINTAN) | BENNYTO Pura Group",

    description:
        "Katalog alat dan mesin pertanian (ALSINTAN) serta mesin rekayasa industri Pura Engineering. Tersedia Combine Harvester, Vertical Dryer, Rice Milling Unit, dan solusi mesin custom dengan presisi hingga 1 mikron.",

    keywords: [
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
        "Pura Engineering",
        "mesin rekayasa industri",
        "mesin industri",
        "mesin custom",
        "mesin industri custom",
        "Pura Group",
        "Pura Group Kudus",
    ],

    openGraph: {
        title: "Alat & Mesin Pertanian (ALSINTAN) | BENNYTO Pura Group",
        description:
            "Katalog alat dan mesin pertanian INARI serta mesin rekayasa industri Pura Engineering untuk kebutuhan industri dan instansi.",
        type: "website",
        locale: "id_ID",
    },

    robots: {
        index: true,
        follow: true,
    },
};

export default function ProductsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}