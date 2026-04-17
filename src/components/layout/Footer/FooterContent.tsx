import { motion } from 'framer-motion'
import { useRef } from 'react'
import FooterBar from './FooterBar'
import FooterBackground from './FooterBackground'
import { Heading } from '@/components/ui/Heading'

export default function FooterContent() {
    const container = useRef<HTMLDivElement>(null)

    return (
        <>
        <motion.div
            className="w-full h-full relative"
            // style={{ y }}
        >
            <FooterBackground />
            <div className="absolute bottom-0 w-full mb-12">
                <div
                    className=""
                    ref={container}
                >
                    <FooterBar />
                </div>
            </div>
        </motion.div>
        </>
    )
}
