import React from 'react'
import styles from '../../styles/atoms/HomeQuote.module.css'
import { Section } from '../templates/Section';

interface HomeQuoteProps {
}

export const HomeQuote: React.FC<HomeQuoteProps> = ({ }) => {
    return (
        <Section isFull={true}>
            <div className={styles.body}>
                <div>
                    <p>
                        You Can Trust Us To Get You
                        The Justice You Deserve.
                    </p>
                </div>
            </div>
        </Section>
    );
}