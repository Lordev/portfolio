'use client';
import { MotionValue, motion, useTransform } from 'framer-motion';
import { Heading } from '@/components/ui/Heading';
import { AboutCard, cardMotionVariants } from '../data';

export default function BioCard({
    card,
    index,
    total,
    scrollYProgress,
}: {
    card: AboutCard;
    index: number;
    total: number;
    scrollYProgress: MotionValue<number>;
}) {
    const steps = total + 1;
    const segmentStart = index / steps;
    const segmentEnd = (index + 2) / steps;
    const midpoint = (index + 1) / steps;
    const variant = cardMotionVariants[index];

    const y = useTransform(
        scrollYProgress,
        [segmentStart, midpoint, segmentEnd],
        ['250%', '0%', '-110%']
    );
    const x = useTransform(
        scrollYProgress,
        [segmentStart, midpoint, segmentEnd],
        [variant.entryX, '0%', variant.exitX]
    );
    const opacity = useTransform(
        scrollYProgress,
        [segmentStart, segmentStart + 0.08, midpoint, segmentEnd - 0.08, segmentEnd],
        [0, 1, 1, 1, 0]
    );
    const scale = useTransform(
        scrollYProgress,
        [segmentStart, midpoint, segmentEnd],
        [0.96, 1.1, 0.98]
    );
    const skewX = useTransform(
        scrollYProgress,
        [segmentStart, midpoint, segmentEnd],
        [variant.entrySkewX, 0, variant.exitSkewX]
    );

    const isRight = index % 2 === 1;

    return (
        <motion.article
            className={`absolute flex w-full max-lg:inset-x-0 max-lg:px-24 lg:w-[44%] ${
                isRight
                    ? 'lg:right-0 lg:justify-end lg:pr-64'
                    : 'lg:left-0 lg:justify-start lg:pl-64'
            }`}
            style={{ y, x, opacity, scale, skewX }}
        >
            <div className="relative w-full overflow-hidden border border-neutral-700/70 bg-neutral-950/90 p-28 backdrop-blur-md shadow-[0_24px_80px_rgba(0,0,0,0.38)] lg:p-36">
                <span className="pointer-events-none absolute -bottom-8 right-8 select-none font-display text-display leading-none text-neutral-100/2">
                    {card.index}
                </span>
                <div className="mb-20 flex items-center justify-between gap-16">
                    <span className="font-label text-label-sm ">{card.label}</span>
                </div>
                <div className="mb-16 h-px bg-primary-400/40" />
                <Heading as="h3" size="title-md" transform="normal" className="mb-16 text-neutral-50">
                    {card.title}
                </Heading>
                <p className="text-body-sm text-neutral-100">
                    {card.description}
                </p>
            </div>
        </motion.article>
    );
}
