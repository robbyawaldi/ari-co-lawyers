import React from 'react';
import Image from 'next/image';
import { Nav } from '../atoms/Nav';
import styles from '../../styles/molecules/NavBar.module.css';
import { Button } from '../atoms/Button';
import { Section } from '../templates/Section';

interface NavBarProps {
}

export const NavBar: React.FC<NavBarProps> = ({ }) => {
    return (
        <Section isFull={false}>
            <div className={styles.body}>
                <Image src="/assets/logo/logo.svg" alt="logo" width={210} height={54} />
                <Nav />
                <Button variant="secondary" width="6.25rem" height="2.5rem">Masuk</Button>
                <Button variant="primary" width="6.25rem" height="2.5rem">Daftar</Button>
            </div>
        </Section>
    );
}