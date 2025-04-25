import { mobileNavLinks } from '@/lib/data/links'
import { motion } from 'framer-motion'
import { revealText } from '@/lib/utils/motion'
import LinkLine from '@/components/ui/LinkLine'
import { useMobileMenu } from '@/lib/context/mobileMenuContext'
import { useSmoothScroll } from '@/lib/context/SmoothScrollContext'


export default function MobileMenuNavLinks() {
    const { closeMenu } = useMobileMenu()
    const { setTargetSection } = useSmoothScroll()

    return (
        <>
            <nav className="flex flex-col gap-6">
                {mobileNavLinks.map((link) => (
                    <motion.div
                        key={link.label}
                        onClick={closeMenu}
                        variants={revealText}
                    >
                        <LinkLine
                            label={link.label}
                            size="lg"
                            onClick={() => {
                                setTargetSection(link.href)
                            }}
                        />
                    </motion.div>
                ))}
            </nav>
        </>
    )
}
