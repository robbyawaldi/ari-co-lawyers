import React from 'react'
import styles from '../../styles/templates/LayoutFront.module.css'

interface LayoutFrontProps {
}

export const LayoutFront: React.FC<LayoutFrontProps> = ({ children }) => {
    return (
        <main className={styles.body}>
            {children}
        </main>
    );
}