import React from 'react'
import { HomeQuote } from '../atoms/HomeQuote';

interface HomeBottomProps {
}

export const HomeBottom: React.FC<HomeBottomProps> = ({ }) => {
    return (
        <>
            <HomeQuote />
        </>
    );
}