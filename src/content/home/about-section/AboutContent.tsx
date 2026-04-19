'use client';
import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import AboutCardsScroller from './components/AboutCardsScroller';
import { aboutCards } from './data';

export default function AboutContent() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    return (
        <div
            ref={containerRef}
            className="bg-background"
            style={{ height: `${aboutCards.length * 100}vh` }}
        >
            <div className="sticky top-0 h-screen">
                <AboutCardsScroller scrollYProgress={scrollYProgress} />
            </div>
        </div>
    );
}
