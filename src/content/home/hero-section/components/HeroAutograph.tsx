'use client'
import { motion } from 'framer-motion'

export default function HeroAutograph() {
    return (
        <svg
            viewBox="0 0 460 95"
            fill="none"
            aria-hidden="true"
            className="xl:w-360 md:w-320 sm:w-320 xs:w-320 w-200 visible pointer-events-none absolute right-16 -bottom-20 md:-bottom-40 transform rotate-5 z-0"
        >
            <motion.path
                d="M 25,70 C 24,30 22,12 28,10 C 34,8 35,20 34,38 C 33,54 36,64 44,62 C 54,58 58,44 66,42 C 76,40 80,58 78,68 C 76,76 70,74 76,66 C 84,58 96,62 102,72 C 108,80 114,76 124,66 C 136,54 140,44 152,42 C 166,40 170,56 168,68 C 166,76 158,76 166,68 C 176,58 192,64 198,74 L 208,82 C 218,88 232,80 240,68 C 250,54 252,44 264,40 C 278,36 284,56 282,66 C 280,76 272,76 280,68 C 290,58 306,64 312,72"
                stroke="var(--color-neutral-400)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                    pathLength: { duration: 1, ease: [0.4, 0, 0.2, 1], delay: 0.9 },
                    opacity: { duration: 0.15, delay: 0.9 },
                }}
            />
            <motion.path
                d="M 10,86 C 80,96 170,78 260,88 C 330,96 390,80 455,86"
                stroke="var(--color-neutral-400)"
                strokeWidth="1.4"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                    pathLength: { duration: 0.4, ease: [0.4, 0, 0.2, 1], delay: 1.85 },
                    opacity: { duration: 0.1, delay: 1.85 },
                }}
            />
        </svg>
    )
}
