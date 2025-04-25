'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { menuReveal, revealText } from '@/lib/utils/motion'
import { mobileNavLinks } from '@/lib/data/links'
import { useMobileMenu } from '@/lib/context/mobileMenuContext'
import Portal from '@/lib/utils/Portal'
import MobileMenuSocialLinks from './MobileMenuSocialLinks'
import LinkLine from '@/components/ui/LinkLine'
import MobileMenuNavLinks from './MobileMenuNavLinks'

export default function MobileMenu() {
    const { menuOpen, closeMenu } = useMobileMenu()
    return (
        <Portal>
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={menuReveal}
                        className={`h-screen w-full bg-primary-500/70 transition-all duration-300 backdrop-blur-sm z-[999] fixed top-0 px-[var(--padding-container)] lg:hidden`}
                    >
                        <div className="relative h-full flex flex-col justify-between py-24 px-8">
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={revealText}
                                className="text-label-lg font-label cursor-pointer mb-12 uppercase self-end text-white/70"
                                onClick={closeMenu}
                            >
                                Close
                            </motion.div>
                            <div className="flex flex-col justify-between flex-grow overflow-hidden">
                                <MobileMenuNavLinks />
                                <MobileMenuSocialLinks />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Portal>
    )
}
