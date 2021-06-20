import React from 'react'
import styles from '../../styles/atoms/Button.module.css'

interface ButtonProps {
    variant: "primary" | "secondary",
    width?: string,
    height?: string,
}

export const Button: React.FC<ButtonProps> = ({ variant, width, height, children }) => {
    return (
        <button
            className={styles[variant]}
            style={{
                width: width ?? '',
                height: height ?? ''
            }}>
            {children}
        </button>
    );
}