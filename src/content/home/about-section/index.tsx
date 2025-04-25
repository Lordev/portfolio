'use client'
import { useRef } from 'react'
import AboutContent from './AboutContent'
import ScrollContainer from '@/components/layout/ScrollContainer'

export default function AboutSection() {
    const containerRef = useRef<HTMLDivElement>(null)

    return (
        <section id="About">
        <ScrollContainer containerRef={containerRef}  className='relative z-20 overflow-hidden'>
            {(scrollYProgress) => (
                <>
                    <AboutContent scrollYProgress={scrollYProgress} />
                </>
            )}
        </ScrollContainer>
        </section>
    )
}
