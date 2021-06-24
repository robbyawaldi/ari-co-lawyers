import React from 'react'
import styles from '../../styles/atoms/BlogCard.module.css'

interface BlogCardProps {

}

export const BlogCard: React.FC<BlogCardProps> = ({ }) => {
    return (
        <div className={styles.body}>
            <div></div>
            <h6>Juni 13, 2021</h6>
            <h1>5 Pilar untuk Pemulihan Hijau dan Tangguh dari COVID 19</h1>
            <p>Saat ini, Indonesia sedang merencanakan pembangunan berkelanjutan untuk membangun sistem perekonomian yang lebih tangguh.</p>
        </div>
    );
}