'use client'
import { useTransform, MotionValue, easeIn } from 'framer-motion'
import HeroBackground from './components/HeroBackground'
import HeroHeading from './components/HeroHeading'
import HeroTime from './components/HeroTime'
import HeroAvailability from './components/HeroAvailability'

interface HeroContentProps {
    scrollYProgress: MotionValue<number>
}

export default function HeroContent({
    scrollYProgress,
}: HeroContentProps) {
    const yTransform = useTransform(scrollYProgress, [0, 1], ['0%', '50%'], {
        clamp: false,
        ease: easeIn,
    })

    return (
        <div className="relative 2xl:h-screen lg:grid lg:grid-cols-12 gap-x-24 lg:h-852 2xl:max-h-1080 w-full md:h-1000 xs:h-956 2xs:h-932 h-732">
            <HeroBackground />
            <HeroTime />
            <HeroAvailability />
            <div className="lg:relative h-full w-full lg:col-span-6 lg:col-start-4 justify-center flex flex-col">
                <HeroHeading />
            </div>
        </div>
    )
}
