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
                className="lg:px-[var(--padding-container)]  overflow-hidden gap-24"
            >
                {(scrollYProgress) => (
                    <>
                        <HeroContent scrollYProgress={scrollYProgress} />
                    </>
                )}
            </ScrollContainer>
        </section>
    )
}
