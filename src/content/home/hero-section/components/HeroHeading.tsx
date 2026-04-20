import { motion } from 'framer-motion';
import HeroAutograph from './HeroAutograph';

const expo = [0.16, 1, 0.3, 1] as const;

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
};

const line = {
    hidden: { y: '105%', skewX: -4 },
    show: {
        y: '0%',
        skewX: 0,
        transition: { duration: 1, ease: expo },
    },
};

const tagline = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.55,
        },
    },
};

const taglineItem = {
    hidden: { opacity: 0, y: 10 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: expo },
    },
};

export default function HeroHeading() {
    return (
        <motion.div
            className="md:text-display-sm mx-auto sm:text-display-md text-display-sm relative font-display uppercase text-primary-500 flex flex-col xs:gap-20 gap-16 lg:items-end z-50 col-span-6 col-start-4  max-lg:px-[var(--padding-container)]"
            initial="hidden"
            animate="show"
            variants={container}
        >
            <div className="overflow-hidden ml-48 sm:ml-80 lg:mr-240 xl:mr-270">
                <motion.div variants={line}>Create.</motion.div>
            </div>

            <div className="max-lg:self-start flex items-end justify-between sm:gap-30 xl:gap-60 lg:gap-40 w-full">
                <div className="overflow-hidden self-start">
                    <motion.div variants={line}>Code.</motion.div>
                </div>

                <motion.h1
                    className="font-main text-neutral-100 uppercase z-30 text-nowrap max-xs:-bottom-96 lg:mr-96 xl:mr-152"
                    variants={tagline}
                    initial="hidden"
                    animate="show"
                >
                    <motion.div variants={taglineItem} className="text-body-sm">
                        Fullstack <span className="font-normal">developer</span>
                    </motion.div>
                    <motion.div variants={taglineItem} className="ml-24 md:ml-58 text-body-sm">
                        creating <span className="font-normal">digital art</span>
                    </motion.div>
                </motion.h1>
            </div>

            <div className="overflow-hidden ml-72 sm:ml-76 lg:mr-140">
                <motion.div variants={line}>Deliver.</motion.div>
            </div>

            <HeroAutograph />
        </motion.div>
    );
}
