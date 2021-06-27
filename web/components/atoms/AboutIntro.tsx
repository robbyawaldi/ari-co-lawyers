import React from 'react'
import { Section } from '../templates/Section';
import Image from 'next/image'
import aboutImg from "../../public/assets/accents/about_accent_1.png"


interface AboutIntroProps {
}

export const AboutIntro: React.FC<AboutIntroProps> = ({ }) => {
    return (
        <Section>
            <p className="text-gray-300 leading-10">
                <div className="float-right">
                    <Image src={aboutImg} alt="about page image" />
                </div>
                Kantor Hukum Ari & Co. Lawyers adalah sebuah Firma Hukum yang didirikan oleh Mohammad Azhari, S.H., C.P.C.L.E yang melayani kebutuhan jasa hukum Pengacara atau Lawyer di Indonesia.
                Mohammad Azhari merupakan lulusan terbaik di Fakultas Hukum Universitas Nasional Jakarta tahun 2016 dengan predikat cum laude. Kemudian Kantor Hukum Ari & Co.
                Lawyers berdiri sejak 5 Desember 2017, kantor advokat yang beralamat di jalan Rawa Kuning No 105 Kecamatan Cakung,
                Kelurahan Pulogebang Jakarta Timur ini telah menangani banyak kasus di Pengadilan. Adapun area praktik dari Kantor Hukum Ari & Co.
                Lawyers meliputi hukum pidana atau hukum keluarga, perdata dan tata usaha negara, hukum bisnis atau perusahaan, corporate lawyer, inhouse lawyer, dan konsultan hukum.
                Adapun tujuan dari Kantor Hukum Ari & Co.
                Lawyers antara lain melayani jasa hukum bagi klien baik perorangan maupun Badan Hukum berdasarkan prinsip profesional, mandiri, dan berintegritas berdasarkan Undang-Undang No.18 tahun 2003 tentang Advokat,
                memberikan Konsultasi Hukum sebagai konsultan hukum (Legal Consultan), memberikan bantuan hukum dengan konsentrasi bidang hukum perdata.
            </p>
        </Section>
    );
}