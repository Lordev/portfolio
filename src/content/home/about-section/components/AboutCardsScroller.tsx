'use client';
import Image from 'next/image';
import { MotionValue } from 'framer-motion';
import AboutImage from './AboutImage';
import AboutMarquee from './AboutMarquee';
import BioCard from './BioCard';
import { aboutCards } from '../data';

export default function AboutCardsScroller({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
    return (
        <div className="sticky top-0 h-screen overflow-hidden">
            <div className="pointer-events-none absolute inset-0 opacity-90">
                <Image
                    src="/about/about-background.jpg"
                    alt=""
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority={false}
                />
            </div>
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
