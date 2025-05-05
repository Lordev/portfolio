import { motion } from 'framer-motion';

export default function HeroHeading() {
    const revealHeadline = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.4,
            },
        },
    };

    const headlineText = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: 'easeOut',
            },
        },
    };

    const revealTagLine = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 1.2,
            },
        },
    };

    const tagLineTextLeft = {
        hidden: { opacity: 0, x: -20 },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.7,
                ease: 'easeOut',
            },
        },
    };

    const tagLineTextRight = {
        hidden: { opacity: 0, x: 20 },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.7,
                ease: 'easeOut',
            },
        },
    };

    return (
        <motion.div
            className="text-display font-display uppercase text-primary-500 flex flex-col gap-16 xs:items-end z-50 col-span-6 col-start-4 lg:-mr-8 mt-[var(--header-height)] mb-128 max-lg:px-[var(--padding-container)]"
            initial="hidden"
            animate="show"
            variants={revealHeadline}
        >
            <motion.div variants={headlineText} className="lg:mr-32">
                Create.
            </motion.div>
            <div className="max-lg:self-start flex items-end justify-between xl:pr-132 gap-30 xl:gap-60 2xl:pr-220 lg:pr-78 lg:gap-40">
                <motion.div variants={headlineText} className="">
                    Code.
                </motion.div>

                <motion.h1
                    className="text-body-md font-main text-neutral-100 uppercase z-30 text-nowrap max-xs:absolute max-xs:bottom-152"
                    variants={revealTagLine}
                    initial="hidden"
                    animate="show"
                >
                    <motion.div variants={tagLineTextLeft} className="max-xs:text-sm">
                        Frontend <span className="font-normal">developer</span>
                    </motion.div>
                    <motion.div
                        variants={tagLineTextRight}
                        className="ml-58 max-xs:ml-32 max-xs:text-sm"
                    >
                        creating <span className="font-normal">digital art</span>{' '}
                    </motion.div>
                </motion.h1>
            </div>
            <motion.div variants={headlineText} className="lg:mr-2">
                Deliver.
            </motion.div>
        </motion.div>
    );
}
