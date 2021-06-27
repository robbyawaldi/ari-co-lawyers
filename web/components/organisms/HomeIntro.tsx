import React from 'react'
import { HomeHero } from '../molecules/HomeHero';
import styles from '../../styles/organisms/HomeIntro.module.css'
import { HomeServices } from '../molecules/HomeServices';

interface HomeIntroProps {
}

export const HomeIntro: React.FC<HomeIntroProps> = ({ }) => {
    return (
        <div className={styles.body}>
            <HomeHero />
            <HomeServices />
        </div>
    );
}