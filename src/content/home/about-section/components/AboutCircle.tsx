'use client';
import { motion, MotionValue, useTransform } from 'framer-motion';

const R = 200;
const CIRCUMFERENCE = 2 * Math.PI * R;

export default function AboutCircle({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
    const strokeDashoffset = useTransform(scrollYProgress, [0, 1], [CIRCUMFERENCE, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);

    return (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <motion.svg
                viewBox="0 0 440 440"
                className="w-[50vmin] h-[50vmin]"
                style={{ opacity }}
            >
                {/* Track */}
                <circle
                    cx="220" cy="220" r={R}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-neutral-800"
                />
                {/* Fill */}
                <motion.circle
                    cx="220" cy="220" r={R}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeDasharray={CIRCUMFERENCE}
                    style={{ strokeDashoffset, rotate: -90 }}
                    className="text-primary-400"
                    transform-origin="220 220"
                />
            </motion.svg>
        </div>
    );
}
