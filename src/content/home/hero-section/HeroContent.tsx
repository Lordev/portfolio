'use client'
import { motion, useTransform, MotionValue, easeIn } from 'framer-motion'
import Image from 'next/image'
import HeroNav from './HeroNav'
import HeroBackground from './HeroBackground'
import HeroTag from './HeroTag'
import HeroHeading from './HeroHeading'

interface AnimatedContentProps {
    scrollYProgress: MotionValue<number>
}

export default function AnimatedContent({
    scrollYProgress,
}: AnimatedContentProps) {
    const yTransform = useTransform(
        scrollYProgress,
        [0, 1],
        ['0%', '50%'],
        easeIn
    )

    return (
        <div className="relative 2xl:h-screen lg:grid lg:grid-cols-12 gap-x-24 lg:h-852 2xl:max-h-1080 w-full 2xl:min-h-1080 xl:min-h-948 md:h-1000 xs:h-956 2xs:h-932 h-732">
            <HeroTag />
            <Image
                className="max-lg:hidden col-start-1 col-span-2 self-end mb-160 left-0 bottom-108 -z-10"
                src={'/_shared/img-wireframe-box.svg'}
                alt=""
                width={296}
                height={268}
            />
            <div
                className="lg:relative h-full w-full lg:border-l-1 lg:border-r-1 lg:border-neutral-800 lg:col-span-6 lg:col-start-4 justify-center flex flex-col"
            >
                <motion.div
                    style={{
                        y: yTransform,
                    }}
                    className="absolute top-0 left-0 right-0 -z-10 w-full h-full overflow-hidden"
                >
                    <HeroBackground />
                </motion.div>
            <HeroHeading />
            </div>

            <div className="col-start-11 col-span-1 -ml-24 max-lg:hidden">
                <HeroNav />
            </div>
        </div>
    )
}
