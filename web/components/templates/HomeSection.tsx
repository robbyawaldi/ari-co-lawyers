import React from 'react'
import styles from '../../styles/templates/HomeSection.module.css'

interface HomeSectionProps {
    backgroundTitle: string
    title: string
}

export const HomeSection: React.FC<HomeSectionProps> = ({ backgroundTitle, title, children }) => {
    return (
        <div className={styles.body}>
            <style dangerouslySetInnerHTML={{
                __html: [
                    `.${backgroundTitle}:before {`,
                    `content: "${backgroundTitle}";`,
                    '}'
                ].join('\n')
            }}>
            </style>
            <h4 className={`${backgroundTitle}`}>{title}</h4>
            {children}
        </div>
    );
}

