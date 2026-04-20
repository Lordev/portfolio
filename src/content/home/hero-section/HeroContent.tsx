'use client'
import HeroBackground from './components/HeroBackground'
import HeroHeading from './components/HeroHeading'
import HeroTime from './components/HeroTime'
import HeroAvailability from './components/HeroAvailability'
import { useIsMobile } from '@/lib/hooks/useIsMobile'

export default function HeroContent() {
    const isMobile = useIsMobile()

    if (isMobile) {
        return (
            <div className="relative flex flex-col justify-between w-full min-h-652 h-screen max-h-1080 2xs:h-932 xs:h-956 md:h-1000">
                <HeroBackground />
                <div className="flex-1 flex items-center">
                    <HeroHeading />
                </div>
                <div className="flex justify-between items-end z-10 relative">
                    <HeroAvailability mobile />
                    <HeroTime mobile />
                </div>
            </div>
        )
    }

    return (
        <div className="relative 2xl:h-screen lg:grid lg:grid-cols-12 gap-x-24 lg:h-852 2xl:max-h-1080 w-full">
            <HeroBackground />
            <HeroTime />
            <HeroAvailability />
            <div className="lg:relative h-full w-full lg:col-span-6 lg:col-start-4 justify-center flex flex-col">
                <HeroHeading />
            </div>
        </div>
    )
}
