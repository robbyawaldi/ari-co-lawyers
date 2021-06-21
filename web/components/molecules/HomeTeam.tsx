import React from 'react'
import { Section } from '../templates/Section';
import styles from '../../styles/molecules/HomeTeam.module.css'
import { HomeLawyer } from '../atoms/HomeLawyer';

interface HomeTeamProps {

}

export const HomeTeam: React.FC<HomeTeamProps> = ({ }) => {
    return (
        <Section isFull={false}>
            <div className={styles.body}>
                <h4>Pengacara Kami</h4>
                <div>
                    <HomeLawyer name="Ichsan Saputro, S.H" />
                    <HomeLawyer name="Mohammad Azhari, S.H., C.P.C.L.E" />
                    <HomeLawyer name="Farah Dewi Utami, S.H" />
                </div>
            </div>
        </Section>
    );
}