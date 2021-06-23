import React from 'react'
import { HomeSection } from '../templates/HomeSection';
import { Section } from '../templates/Section';
import styles from '../../styles/molecules/HomeTeam.module.css'
import { HomeLawyer } from '../atoms/HomeLawyer';

interface HomeTeamProps {

}

export const HomeTeam: React.FC<HomeTeamProps> = ({ }) => {
    return (
        <Section isFull={false}>
            <HomeSection backgroundTitle="TEAM" title="Pengacara Kami">
                <div className={styles.body}>
                    <HomeLawyer name="Ichsan Saputro, S.H" />
                    <HomeLawyer name="Mohammad Azhari, S.H., C.P.C.L.E" />
                    <HomeLawyer name="Farah Dewi Utami, S.H" />
                </div>
            </HomeSection>
        </Section>
    );
}