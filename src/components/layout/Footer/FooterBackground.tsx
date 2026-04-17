'use client';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';

const spring = { stiffness: 15, damping: 25, mass: 3 };

export default function FooterBackground() {
    const mouseX = useMotionValue(0.5);
    const smoothX = useSpring(mouseX, spring);

    useEffect(() => {
        const onMove = (e: MouseEvent) => {
            mouseX.set(e.clientX / window.innerWidth);
        };
        window.addEventListener('mousemove', onMove);
        return () => window.removeEventListener('mousemove', onMove);
    }, [mouseX]);

    const x = useTransform(smoothX, [0, 1], ['-70%', '-30%']);

    return (
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-black overflow-hidden">
            <motion.div
                className="absolute bottom-0 h-full"
                style={{
                    left: x,
                    width: '200%',
                    background: 'radial-gradient(ellipse 100% 90% at 50% 100%, #ffc9afcc 0%, #e0692ecc 8%, #ff5500cc 15%, #e0380099 25%, #8a1e0077 35%, #45285a33 45%, transparent 60%)',
                }}
            />
        </div>
    );
}
