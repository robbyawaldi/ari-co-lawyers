import React, { useState } from 'react'
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
    const [icon, setIcon] = useState(iconSrc)

    const onHover = (isEnter: boolean) => {
        setIcon(icon => icon.replace(/(black|white)/, isEnter ? "white" : "black"))
    }

    return (
        <div
            className={styles.body}
            onMouseEnter={() => onHover(true)}
            onMouseLeave={() => onHover(false)}>
            <Image
                src={icon}
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