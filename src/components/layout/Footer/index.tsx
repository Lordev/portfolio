'use client'
import { useRef } from 'react'
import { useScroll } from 'framer-motion'
import FooterContent from './FooterContent'

export default function Footer() {
    const containerRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    })

    return (
        <div
            ref={containerRef}
            className="relative w-full h-screen border-t-1 border-t-neutral-800"
            id='Contact'
        >
            <FooterContent scrollYProgress={scrollYProgress} />
        </div>
    )
}
