import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pura Engineering & INARI | Industrial Engineering & ALSINTAN",

    description:
        "Pura Engineering menghadirkan rekayasa permesinan presisi tinggi, manufacturing, mesin industri custom, Turnkey EPCC, dan ekosistem ALSINTAN INARI. Didukung fasilitas CNC dengan kepresisian hingga 1 mikron di Kudus.",

    keywords: [
        "Pura Engineering",
        "Pura Engineering Kudus",
        "industrial engineering",
        "engineering Indonesia",
        "industrial manufacturing",
        "manufacturing Indonesia",
        "mesin industri",
        "mesin industri custom",
        "custom machinery",
        "custom machine Indonesia",
        "Turnkey EPCC",
        "engineering design",
        "industrial fabrication",
        "precision engineering",
        "CNC machining",
        "CNC 1 mikron",
        "mesin CNC presisi",
        "substitusi impor mesin",
        "INARI",
        "ALSINTAN",
        "alat pertanian",
        "mesin pertanian",
        "BENSA",
        "PAMIGO",
        "Salt Washing Plant",
        "Rice Milling Unit",
        "Combine Harvester",
        "Pura Group",
        "Pura Group Kudus",
    ],

    openGraph: {
        title: "Pura Engineering & INARI | Industrial Engineering & ALSINTAN",
        description:
            "Rekayasa permesinan presisi tinggi, mesin industri custom, Turnkey EPCC, CNC machining, dan ekosistem ALSINTAN INARI dari Pura Engineering.",
        type: "website",
        locale: "id_ID",
    },

    robots: {
        index: true,
        follow: true,
    },
};

export default function EngineeringLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}