'use client';
import { MotionValue } from 'framer-motion';
import AboutImage from './AboutImage';
import AboutMarquee from './AboutMarquee';
import BioCard from './BioCard';
import { aboutCards } from '../data';

export default function AboutCardsScroller({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
    return (
        <div className="sticky top-0 h-screen overflow-hidden">
            <div className="absolute inset-0" />
            <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-full lg:w-[48%] pointer-events-none">
                <AboutImage />
            </div>
            <AboutMarquee />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.12)_0%,rgba(0,0,0,0)_30%,rgba(0,0,0,0.24)_100%)]" />

            {/* Distorted grain overlay */}
            <svg className="pointer-events-none absolute left-2/4 transform -translate-x-1/2 w-3/5 h-full opacity-[0.18] mix-blend-soft-light" aria-hidden>
                <defs>
                    <filter id="about-grain">
                        <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" />
                        <feColorMatrix type="saturate" values="0" />
                    </filter>
                    <linearGradient id="about-grain-fade" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%"   stopColor="white" stopOpacity="0" />
                        <stop offset="20%"  stopColor="white" stopOpacity="1" />
                        <stop offset="80%"  stopColor="white" stopOpacity="1" />
                        <stop offset="100%" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <mask id="about-grain-mask">
                        <rect width="100%" height="100%" fill="url(#about-grain-fade)" />
                    </mask>
                </defs>
                <rect width="100%" height="100%" filter="url(#about-grain)" mask="url(#about-grain-mask)" />
            </svg>

            <div className="relative z-10 h-full items-center">
                <div className="hidden lg:block" />
                <div className="relative h-full overflow-hidden px-24 py-64 lg:px-64">
                    {aboutCards.map((card, index) => (
                        <BioCard
                            key={card.index}
                            card={card}
                            index={index}
                            total={aboutCards.length}
                            scrollYProgress={scrollYProgress}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
