import { easeInOut } from 'framer-motion';

export const smoothConfig = {
    type: 'spring',
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
};

export const parentVariants = {
    hidden: {},
    visible: {
        transition: {
            duration: 0.3,
            ease: easeInOut,
            staggerChildren: 0.02,
        },
    },
};

export const childVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.4, ease: easeInOut },
    },
};
