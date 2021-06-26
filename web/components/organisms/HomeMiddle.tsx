import React from 'react'
import { HomeTeam } from '../molecules/HomeTeam';
import { HomeCounter } from '../molecules/HomeCounter';
import { HomeBlog } from '../molecules/HomeBlog';

interface HomeMiddleProps {
}

export const HomeMiddle: React.FC<HomeMiddleProps> = ({ }) => {
    return (
        <>
            <HomeTeam />
            <HomeCounter />
            <HomeBlog />
        </>
    );
}