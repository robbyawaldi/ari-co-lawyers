import React from 'react'
import styles from '../../styles/atoms/HomeService.module.css'
import Image from 'next/image'
import Link from 'next/link';

interface HomeServiceProps {
    iconSrc: string,
    title: string,
    description: string,
    link: string
    variant: "gold" | "white"
}

export const HomeService: React.FC<HomeServiceProps> = ({ iconSrc, title, description, link, variant }) => {
    return (
        <div className={`${styles.body} ${styles[variant]}`}>
            <img
                src={iconSrc}
                alt="service icon"
            />
            <h4>{title}</h4>
            <p>{description}</p>
            <Link href={link}>
                <a>Lihat Selengkapnya</a>
            </Link>
        </div>
    );
}