import React, { useMemo } from 'react'
import { Section } from '../templates/Section';
import Image from 'next/image'
import { Nav } from '../atoms/Nav';
import styles from '../../styles/molecules/Footer.module.css'

interface FooterProps {

}

export const Footer: React.FC<FooterProps> = ({ }) => {
    const years = useMemo(() => new Date().getFullYear(), [])

    return (
        <Section isFull={false}>
            <div className={styles.primary}>
                <Image src="/assets/logo/logo.svg" alt="logo" width={210} height={54} />
                <Nav />
            </div>
            <div className={styles.secondary}>
                <p>{`© ${years} Ari & Co. Lawyers. All rights reserved`}</p>
                <div></div>
            </div>
        </Section>
    );
}