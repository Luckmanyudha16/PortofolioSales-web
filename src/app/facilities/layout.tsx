import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Fasilitas Manufaktur Pura Group Kudus | BENNYTO",

    description:
        "Fasilitas manufaktur Pura Group di Kudus dengan kawasan industri lebih dari 100 hektar, workshop CNC presisi 1 mikron, 30 unit produksi, armada 182 truk logistik, penerbangan korporat, dan infrastruktur keselamatan.",

    keywords: [
        "fasilitas manufaktur",
        "fasilitas manufaktur Indonesia",
        "Pura Group",
        "Pura Group Kudus",
        "Pura Group Indonesia",
        "manufaktur Kudus",
        "manufacturing Indonesia",
        "kawasan industri Kudus",
        "kawasan industri 100 hektar",
        "Pura Engineering",
        "CNC machining",
        "CNC precision workshop",
        "CNC 1 mikron",
        "precision engineering",
        "industrial facility",
        "industrial manufacturing facility",
        "armada logistik",
        "182 truk",
        "logistics fleet",
        "corporate aviation",
        "Embraer Phenom 300",
        "Bell 407",
        "Robinson R66",
        "fire safety",
        "industrial safety",
    ],

    openGraph: {
        title: "Fasilitas Manufaktur Pura Group Kudus | BENNYTO",
        description:
            "Kawasan industri Pura Group di Kudus dengan fasilitas manufaktur, workshop CNC presisi, armada logistik, aviation unit, dan infrastruktur keselamatan industri.",
        type: "website",
        locale: "id_ID",
    },

    robots: {
        index: true,
        follow: true,
    },
};

export default function FacilitiesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}