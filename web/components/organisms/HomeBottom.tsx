import React from 'react'
import { HomeQuote } from '../atoms/HomeQuote';
import { Footer } from '../molecules/Footer';

interface HomeBottomProps {
}

export const HomeBottom: React.FC<HomeBottomProps> = ({ }) => {
    return (
        <>
            <HomeQuote />
            <Footer />
        </>
    );
}