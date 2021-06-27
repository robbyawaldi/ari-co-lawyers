import React from 'react'
import styles from '../../styles/templates/MainLayout.module.css'
import { Footer } from '../molecules/Footer';
import { NavBar } from '../molecules/NavBar';

interface MainLayoutProps {
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <main className={styles.body}>
            <NavBar />
            {children}
            <Footer />
        </main>
    );
}