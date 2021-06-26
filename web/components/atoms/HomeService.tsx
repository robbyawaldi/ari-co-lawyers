import React from 'react'
import styles from '../../styles/atoms/HomeService.module.css'
import Link from 'next/link';
import Image from 'next/image'

interface HomeServiceProps {
    iconSrc: string,
    title: string,
    description: string,
    link: string
}

export const HomeService: React.FC<HomeServiceProps> = ({ iconSrc, title, description, link }) => {
    return (
        <div className={styles.body}>
            <Image
                src={iconSrc}
                alt="service icon"
                width={50}
                height={50}
            />
            <h4>{title}</h4>
            <p>{description}</p>
            <Link href={link}>
                <a>Lihat Selengkapnya</a>
            </Link>
        </div>
    );
}