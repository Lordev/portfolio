'use client'
import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HeroHeading from '@/content/home/hero-section/HeroHeading'
import { IntroVariants, IntroBarLeft, IntroBarRight } from '@/lib/utils/motion'

export default function IntroAnimation() {
    const [isLoaded, setIsLoaded] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleLoad = () => setIsLoaded(true)
        if (document.readyState === 'complete') {
            handleLoad()
        } else {
            window.addEventListener('load', handleLoad)
            return () => document.removeEventListener('load', handleLoad)
        }
    }, [isLoaded])

    return (
        <AnimatePresence>
            <>
                <motion.div
                    ref={containerRef}
                    className="fixed inset-0 z-40 flex  flex-col h-screen w-screen items-center justify-center pointer-events-none overflow-hidden max-lg:hidden"

                    animate={isLoaded ? 'hidden' : 'show'}
                    initial="show"
                    variants={IntroVariants}
                >
                    <motion.div
                        className="w-full h-full bg-background"
                        variants={IntroBarLeft}
                    />
                    <motion.div
                        className="w-full h-full bg-background"
                        variants={IntroBarRight}
                    />
                    <motion.div
                        className="w-full h-full bg-background"
                        variants={IntroBarLeft}
                    />
                    <motion.div
                        className="w-full h-full bg-background"
                        variants={IntroBarRight}
                    />
                </motion.div>
            </>
        </AnimatePresence>
    )
}
