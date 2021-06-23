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
                    '.title:before {',
                    `content: "${backgroundTitle}";`,
                    '}'
                ].join('\n')
            }}>
            </style>
            <h4 className="title">{title}</h4>
            {children}
        </div>
    );
}

