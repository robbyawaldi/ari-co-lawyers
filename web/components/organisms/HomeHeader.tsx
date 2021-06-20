import React from 'react'
import { HomeHero } from '../molecules/HomeHero';
import { HomeServices } from '../molecules/HomeServices';
import { NavBar } from '../molecules/NavBar';
import { Section } from '../templates/Section';
import styles from '../../styles/organisms/HomeHeader.module.css'

interface HomeHeaderProps {
}

export const HomeHeader: React.FC<HomeHeaderProps> = ({ }) => {
    return (
        <div className={styles.body}>
            <Section isFull={false}>
                <NavBar />
                <HomeHero />
                <HomeServices />
            </Section>
        </div>
    );
}