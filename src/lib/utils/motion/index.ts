import { easeIn } from 'framer-motion'

export const menuReveal = {
    hidden: {
        opacity: 0,
        y: '-100%',
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
            ease: 'easeInOut',
            staggerChildren: 0.2,
        },
    },
    exit: {
        opacity: 0,
        y: '-100%',
        transition: {
            delay: 0.6,
            duration: 0.2,
            ease: 'easeInOut',
            staggerChildren: 0.1,
        },
    },
}

export const revealText = {
    hidden: {
        opacity: 0,
        y: -10,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: easeIn,
        },
    },
    exit: {
        opacity: 0,
        y: -10,
        transition: {
            duration: 0.5,
            ease: easeIn,
        },
    },
}

export const moveRight = { 
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: easeIn,
        },
    },
}

// Page intro configs
export const IntroVariants = {
    hidden: {
        transition: {
            duration: 0.5,
            ease: 'easeInOut',
            staggerChildren: 0.25,
        },
    },
    show: {},
}

export const IntroBarLeft = {
    hidden: {
        x: '100%',
        transition: {
            duration: 1,
            ease: 'easeInOut',
        },
    },
    show: {
        x: 0,
    },
}

export const IntroBarRight = {
    hidden: {
        x: '-100%',
        transition: {
            duration: 1,
            ease: 'easeInOut',
        },
    },
    show: {
        x: 0,
    },
}
