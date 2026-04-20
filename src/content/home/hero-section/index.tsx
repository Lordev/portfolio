'use client'
import { useRef } from 'react'
import ScrollContainer from '@/components/layout/ScrollContainer'
import HeroContent from './HeroContent'

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null)

    return (
        <section id="Home">
            <ScrollContainer
                containerRef={containerRef}
                offset={['start start', 'end start']}
                className=" overflow-hidden gap-24 "
            >
                {() => (
                    <>
                        <HeroContent />
                    </>
                )}
            </ScrollContainer>
        </section>
    )
}
