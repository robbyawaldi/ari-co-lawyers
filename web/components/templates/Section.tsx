import React from 'react'

interface SectionProps {
    isFull: boolean
    isUsepadding?: boolean
}

export const Section: React.FC<SectionProps> = ({ isFull, children, isUsepadding = true }) => {
    return (
        <section className={`w-full ${isFull ? "" : "px-20"} ${isUsepadding ? "pt-28 pb-5" : ""}`}>
            {children}
        </section>
    );
}