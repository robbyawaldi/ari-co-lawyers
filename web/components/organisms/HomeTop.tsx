import React from 'react'
import { HomeHero } from '../molecules/HomeHero';
import { NavBar } from '../molecules/NavBar';
import styles from '../../styles/organisms/HomeTop.module.css'
import { HomeServices } from '../molecules/HomeServices';

interface HomeTopProps {
}

export const HomeTop: React.FC<HomeTopProps> = ({ }) => {
    return (
        <div className={styles.body}>
            <NavBar />
            <HomeHero />
            <HomeServices />
        </div>
    );
}