'use client'
import { motion, easeOut } from 'framer-motion'
import { useLenis } from 'lenis/react'
import { scrollToElement } from '@/lib/utils/scrollToElement'
import SlideButton from '@/components/ui/SlideButton'

export default function HeroAvailability({ mobile = false }: { mobile?: boolean }) {
    const lenis = useLenis()

    const content = (
        <>
            <p className="text-label-sm font-label uppercase text-neutral-500">
                New work
            </p>
            <SlideButton
                label="Start a project"
                onClick={() => lenis && scrollToElement(lenis, '#Contact')}
                className="text-label-sm font-label uppercase text-neutral-300"
            />
        </>
    )

    if (mobile) {
        return (
            <motion.div
                className="inline-flex flex-col items-start gap-4 px-[var(--padding-container)] pb-32 z-10 relative w-fit"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5, ease: easeOut }}
            >
                {content}
            </motion.div>
        )
    }

    return (
        <motion.div
            className="absolute right-40 bottom-40 max-lg:hidden z-10 flex flex-col items-end gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1, ease: easeOut }}
        >
            {content}
        </motion.div>
    )
}
