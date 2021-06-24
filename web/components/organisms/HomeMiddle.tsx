import React from 'react'
import { HomeServices } from '../molecules/HomeServices';
import { HomeTeam } from '../molecules/HomeTeam';
import { HomeCounter } from '../molecules/HomeCounter';
import { HomeBlog } from '../molecules/HomeBlog';

interface HomeMiddleProps {
}

export const HomeMiddle: React.FC<HomeMiddleProps> = ({ }) => {
    return (
        <>
            <HomeServices />
            <HomeTeam />
            <HomeCounter />
            <HomeBlog />
        </>
    );
}