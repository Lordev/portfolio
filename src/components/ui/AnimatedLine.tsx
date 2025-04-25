import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

const lineVariants = {
    hidden: { width: '0%' },
    visible: { width: '100%', transition: { duration: 1 } },
};

interface AnimatedLineProps { 
    className?: string;
}

export default function AnimatedLine({className}: AnimatedLineProps) {
    return (
        <motion.div
            className={twMerge("h-1 bg-neutral-800", className)}
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
        />
    );
}