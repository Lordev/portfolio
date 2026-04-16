'use client';
import { motion } from 'framer-motion';

const CHUNK = (
    <>
        <span className="font-thin">About</span>
        <span className="font-bold">&nbsp;Me</span>
        <span className="font-thin mx-48 select-none">—</span>
    </>
);

const repeated = Array.from({ length: 6 }, (_, i) => (
    <span key={i} className="inline-flex items-baseline">{CHUNK}</span>
));

export default function AboutMarquee() {
    return (
        <div className="pointer-events-none absolute inset-y-0 inset-x-0 z-[5] flex w-full items-center overflow-hidden opacity-10 mix-blend-difference">
            <motion.div
                animate={{ x: ['-50%', '0%'] }}
                transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                className="flex shrink-0 whitespace-nowrap mix-blend-difference"
            >
                <span className="flex items-baseline text-display uppercase text-white">
                    {repeated}
                </span>
                <span aria-hidden className="flex items-baseline text-display uppercase text-white">
                    {repeated}
                </span>
            </motion.div>
        </div>
    );
}
