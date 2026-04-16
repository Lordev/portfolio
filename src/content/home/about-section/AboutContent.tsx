'use client';
import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import AboutCardsScroller from './components/AboutCardsScroller';
import { aboutCards } from './data';

// Extra scroll space after the last card exits — keeps the section sticky
// while the footer slides over the empty about section.
const GAP_VH = 120;
const CARD_VH = aboutCards.length * 100;
const TOTAL_VH = CARD_VH + GAP_VH;

export default function AboutContent() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    // Remap so cards animate over just the first portion; the gap is "free" scroll.
    const cardRatio = CARD_VH / TOTAL_VH;
    const cardProgress = useTransform(scrollYProgress, [0, cardRatio], [0, 1], { clamp: true });

    return (
        <div
            ref={containerRef}
            className="row in-container bg-background"
            style={{ height: `${TOTAL_VH}vh` }}
        >
            <div className="sticky top-0 h-screen">
                <AboutCardsScroller scrollYProgress={cardProgress} />
            </div>
        </div>
    );
}
