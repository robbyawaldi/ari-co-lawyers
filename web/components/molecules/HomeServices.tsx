import React from 'react';
import styles from '../../styles/molecules/HomeServices.module.css'
import { HomeService } from '../atoms/HomeService';
import { Section } from '../templates/Section';

interface HomeServicesProps {
}

export const HomeServices: React.FC<HomeServicesProps> = ({ }) => {
    return (
        <Section isFull={false}>
            <div className={styles.body}>
                <h2>Pelayanan Kami</h2>
                <h3>{"Solusi hukum yang andal & efektif"}</h3>
                <p>dapatkan informasi dan saran langsung dari pengacara berpengalaman</p>
                <div className={styles.services}>
                    <HomeService
                        iconSrc="/assets/icons/Icon-Pembuatan-Kontrak-black.png"
                        title="Pembuatan Kontrak"
                        description="Buat kontrak tanpa harus mahal dapatkan konsultasi dan revisi gratis."
                        variant="white"
                        link="/" />
                    <HomeService
                        iconSrc="/assets/icons/Icon-Peninjauan-Kontrak-black.png"
                        title="Peninjauan Kontrak"
                        description="Layanan penyusunan peninjauan kontrak yang kami kerjakan cepat dengan biaya yang terjangkau, sangat cocok untuk Anda yang membutuhkan dokumen sesuai pesanan atau sebuah ketentuan."
                        variant="gold"
                        link="/" />
                    <HomeService
                        iconSrc="/assets/icons/Icon-Jasa-Pengacara-black.png"
                        title="Jasa Pengacara"
                        description="Mendampingi atau mewakili klien dalam proses negosiasi, perdamaian, pendaftaran gugatan sampai beracara di Pengadilan."
                        variant="white"
                        link="/" />
                    <HomeService
                        iconSrc="/assets/icons/Icon-Konsultasi-black.png"
                        title="Konsultasi Tatap Muka"
                        description="Memberikan informasi dan edukasi atau konsultasi hukum kepada Anda."
                        variant="white"
                        link="/" />
                    <HomeService
                        iconSrc="/assets/icons/Icon-Perjanjian-black.png"
                        title="Paket Perjanjian Kerja Karyawan"
                        description="Membantu Anda mengomunikasikan ekspektasi Anda dengan sangat jelas kepada karyawan baru."
                        variant="white"
                        link="/" />
                </div>
            </div>
        </Section>
    );
}