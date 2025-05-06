'use client';
import {motion } from 'framer-motion';

export interface SlideImagePlaceholderProps {
    children?: React.ReactNode;
    loaded?: boolean;
}

export default function SlideImagePlaceholder({children, loaded}: SlideImagePlaceholderProps) {
    return (
        <div
            className="overflow-hidden relative top-0 w-full h-full"
        >
            <motion.div
                className="bg-primary-500 w-full h-full"
                initial={{ y: '0%' }}
                whileInView={loaded ? { y: '-100%' } : {}}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                viewport={{ once: true, amount: .1 }}
            >
            </motion.div>
            {children}
        </div>
    )
}