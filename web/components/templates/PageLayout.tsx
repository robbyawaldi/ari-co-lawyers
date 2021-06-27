import React from 'react'
import styles from '../../styles/templates/PageLayout.module.css'

interface PageLayoutProps {
    title: string
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children, title }) => {
    return (
        <div className={styles['body']}>
            {title}
            {children}
        </div>
    );
}