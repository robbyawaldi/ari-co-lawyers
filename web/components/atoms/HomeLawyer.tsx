import React from 'react'
import styles from '../../styles/atoms/HomeLawyer.module.css'

interface HomeLawyerProps {
    name: string
}

export const HomeLawyer: React.FC<HomeLawyerProps> = ({ name }) => {
    return (
        <div className={styles.body}>
            <div className={styles.name}>{name}</div>
        </div>
    );
}