import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tentang Pura Group | Sejarah, Visi & Kepemimpinan",
    description:
        "Mengenal sejarah Pura Group sejak 1908 di Kudus, Jawa Tengah, perjalanan inovasi manufaktur dan engineering, visi-misi, nilai korporat, serta warisan kepemimpinan Jacobus Busono.",
    keywords: [
        "tentang Pura Group",
        "About Pura Group",
        "Pura Group",
        "Pura Group Indonesia",
        "Pura Group Kudus",
        "sejarah Pura Group",
        "Pura Group history",
        "sejarah perusahaan Pura Group",
        "manufaktur Indonesia",
        "manufacturing Indonesia",
        "industrial manufacturing",
        "integrated manufacturing",
        "industrial engineering",

        "Jacobus Busono",
        "Dr. H.C. Jacobus Busono",
        "Bintang Mahaputera Nararya",
        "kepemimpinan Pura Group",
        "leadership Pura Group",

        "1908 Pura Group",
        "Kudus Jawa Tengah",
        "Pura Bengkel",
        "Pura Engineering",
        "inovasi Pura Group",
        "inovasi industri Indonesia",
        "substitusi impor",
        "teknologi manufaktur",

        "visi Pura Group",
        "misi Pura Group",
        "core values Pura Group",
        "nilai korporat",
        "Wisdom",
        "Imagination",
        "Integration",

        "INARI",
        "ALSINTAN",
        "mesin pertanian",
        "engineering Indonesia",
    ],
    openGraph: {
        title: "Tentang Pura Group | Sejarah, Visi & Kepemimpinan",
        description:
            "Sejarah, kepemimpinan, visi-misi, nilai korporat, dan perjalanan inovasi Pura Group sejak 1908 di Kudus, Jawa Tengah.",
        type: "website",
        locale: "id_ID",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function AboutLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}