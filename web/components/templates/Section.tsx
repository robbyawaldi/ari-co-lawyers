import React from 'react'

interface SectionProps {
    isFull: boolean
}

export const Section: React.FC<SectionProps> = ({ isFull, children }) => {
    return (
        <section className={`w-full ${isFull ? "" : "px-20 py-8"}`}>
            {children}
        </section>
    );
}