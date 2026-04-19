'use client'
import { motion, easeOut, useAnimation } from 'framer-motion'
import { useLenis } from 'lenis/react'
import { scrollToElement } from '@/lib/utils/scrollToElement'

export default function HeroAvailability() {
    const lenis = useLenis()
    const sweep = useAnimation()

    const handleMouseEnter = () => {
        sweep.start({
            x: ['-6rem', '16rem'],
            transition: { duration: 1.2, repeat: Infinity, ease: 'linear' },
        })
    }

    const handleMouseLeave = () => {
        sweep.stop()
        sweep.set({ x: '-6rem' })
    }

    return (
        <motion.div
            className="absolute right-40 bottom-40 max-lg:hidden z-10 flex flex-col items-end gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1, ease: easeOut }}
        >
            <p className="text-label-sm font-label uppercase text-neutral-500">
                New work
            </p>
            <button
                onClick={() => lenis && scrollToElement(lenis, '#Contact')}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="text-label-sm font-label uppercase text-neutral-300 transition-colors duration-200 cursor-pointer"
            >
                Start a project 
            </button>
            <div className="relative overflow-hidden h-px" style={{ width: '15rem' }}>
                <div className="absolute inset-0 bg-neutral-500" />
                <motion.div
                    className="absolute inset-y-0 w-2/5"
                    style={{
                        background: 'linear-gradient(to right, transparent, #ffffff, transparent)',
                    }}
                    animate={sweep}
                    initial={{ x: '-6rem' }}
                />
            </div>
        </motion.div>
    )
}
