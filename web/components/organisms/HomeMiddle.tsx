import React from 'react'
import { HomeServices } from '../molecules/HomeServices';
import styles from '../../styles/organisms/HomeMiddle.module.css'
import { HomeTeam } from '../molecules/HomeTeam';
import { HomeCounter } from '../molecules/HomeCounter';
import { HomeBlog } from '../molecules/HomeBlog';

interface HomeMiddleProps {
}

export const HomeMiddle: React.FC<HomeMiddleProps> = ({ }) => {
    return (
        <div className={styles.body}>
            <HomeServices />
            <HomeTeam />
            <HomeCounter />
            <HomeBlog />
        </div>
    );
}