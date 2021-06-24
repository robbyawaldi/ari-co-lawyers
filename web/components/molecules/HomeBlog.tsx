import React from 'react'
import { HomeSection } from '../templates/HomeSection';
import { Section } from '../templates/Section';
import styles from '../../styles/molecules/HomeBlog.module.css'
import { BlogCard } from '../atoms/BlogCard';

interface HomeBlogProps {

}

export const HomeBlog: React.FC<HomeBlogProps> = ({ }) => {
    return (
        <Section isFull={false}>
            <HomeSection backgroundTitle="BLOG" title="Blog Terbaru">
                <div className={styles.body}>
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </div>
            </HomeSection>
        </Section>
    );
}