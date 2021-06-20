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
                <li>Team</li>
            </Link>
            <Link href="">
                <li>About</li>
            </Link>
            <Link href="">
                <li>About</li>
            </Link>
            <Link href="">
                <li>Contact Us</li>
            </Link>
        </ul>
    );
}