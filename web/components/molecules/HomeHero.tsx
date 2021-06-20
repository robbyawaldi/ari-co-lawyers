import React from 'react'
import styles from '../../styles/molecules/HomeHero.module.css'
import { Section } from '../templates/Section';

interface HomeHeroProps {
}

export const HomeHero: React.FC<HomeHeroProps> = ({ }) => {
    return (
        <Section isFull={false}>
            <div className={styles.body}>
                <div className={styles.content}>
                    <h1>Solusi Hukum <br /> Untuk Masalah Sehari-hari.</h1>
                    <p>Kami siap membantu masalah anda <br /> dengan cara paling efisien.</p>
                    <a href="">Lihat kasus kami yang terpecahkan</a>
                </div>
                <div className={styles.hero}>
                    <div className={styles.heroImage}></div>
                </div>
            </div>
        </Section>
    );
}