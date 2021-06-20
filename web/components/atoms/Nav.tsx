import React from 'react'
import Link from 'next/link'
import styles from '../../styles/atoms/Nav.module.css'

interface NavProps {
}

export const Nav: React.FC<NavProps> = ({ }) => {
    return (
        <ul className={styles.body}>
            <Link href="">
                <li>Home</li>
            </Link>
            <Link href="">
                <li>Tim</li>
            </Link>
            <Link href="">
                <li>Tentang</li>
            </Link>
            <Link href="">
                <li>Blog</li>
            </Link>
            <Link href="">
                <li>Kontak Kami</li>
            </Link>
        </ul>
    );
}