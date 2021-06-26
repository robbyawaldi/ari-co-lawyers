import { NextApiRequest, NextApiResponse } from "next";

export default function handler(_: NextApiRequest, res: NextApiResponse) {
    res.status(200).json([
        {
            iconSrc: "/assets/icons/Icon-Pembuatan-Kontrak-black.png",
            title: "Pembuatan Kontrak",
            description: "Buat kontrak tanpa harus mahal dapatkan konsultasi dan revisi gratis.",
            link: "/",
        },
        {
            iconSrc: "/assets/icons/Icon-Peninjauan-Kontrak-black.png",
            title: "Peninjauan Kontrak",
            description: "Layanan penyusunan peninjauan kontrak yang kami kerjakan cepat dengan biaya yang terjangkau, sangat cocok untuk Anda yang membutuhkan dokumen sesuai pesanan atau sebuah ketentuan.",
            link: "/",
        },
        {
            iconSrc: "/assets/icons/Icon-Jasa-Pengacara-black.png",
            title: "Jasa Pengacara",
            description: "Mendampingi atau mewakili klien dalam proses negosiasi, perdamaian, pendaftaran gugatan sampai beracara di Pengadilan.",
            link: "/",
        },
        {
            iconSrc: "/assets/icons/Icon-Konsultasi-black.png",
            title: "Konsultasi Tatap Muka",
            description: "Memberikan informasi dan edukasi atau konsultasi hukum kepada Anda.",
            link: "/",
        },
        {
            iconSrc: "/assets/icons/Icon-Perjanjian-black.png",
            title: "Paket Perjanjian Kerja Karyawan",
            description: "Membantu Anda mengomunikasikan ekspektasi Anda dengan sangat jelas kepada karyawan baru.",
            link: "/",
        }
    ])
}