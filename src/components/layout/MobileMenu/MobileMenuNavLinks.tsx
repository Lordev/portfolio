'use client';
import { mobileNavLinks } from '@/lib/data/links'
import { motion } from 'framer-motion'
import { revealText } from '@/lib/utils/motion'
import LinkLine from '@/components/ui/LinkLine'
import { useMobileMenu } from '@/lib/context/mobileMenuContext'
import { scrollToElement } from '@/lib/utils/scrollToElement';
import { useLenis } from 'lenis/react'



export default function MobileMenuNavLinks() {
    const lenis = useLenis();
    const { closeMenu } = useMobileMenu()

    return (
        <>
            <nav className="flex flex-col gap-6">
                {mobileNavLinks.map((link) => (
                    <motion.div
                        key={link.label}
                        variants={revealText}
                        onClick={closeMenu}
                    >
                        <LinkLine
                            label={link.label}
                            size='lg'
                            onClick={() => lenis && scrollToElement(lenis, link.href)}
                        />
                    </motion.div>
                ))}
            </nav>
        </>
    )
}
