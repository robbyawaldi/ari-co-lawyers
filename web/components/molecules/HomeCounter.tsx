import React from 'react'
import { Section } from '../templates/Section';
import styles from '../../styles/molecules/HomeCounter.module.css'
import { HomeCounterBar } from '../atoms/HomeCounterBar';

interface HomeCounterProps {
}

export const HomeCounter: React.FC<HomeCounterProps> = ({ }) => {
    return (
        <Section isFull={true}>
            <div className={styles.body}>
                <div className={styles.content}>
                    <div className={styles.background}>
                    </div>
                    <div>
                        <h1>Pengacara yang sangat membantu masalah hukum Anda</h1>
                        <p>
                            Jangan khawatir, kami berpengalaman 5 tahun dalam
                            bisnis hukum dengan semua aset yang kami miliki.
                        </p>
                        <HomeCounterBar />
                    </div>
                </div>
            </div>
        </Section>
    );
}