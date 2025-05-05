import { motion } from 'framer-motion'
import AboutImage from '@/content/home/about-section/components/AboutImage'
import AboutBio from '@/content/home/about-section/components/AboutBio'
import { moveRight } from '@/lib/utils/motion'



export default function AboutContent() {
    

    return (
        <div
            className="relative row in-container bg-background  lg:min-h-1080 content-center gap-24 border-t-1 border-b-1 border-neutral-800 grid lg:grid-cols-2 py-172 lg:py-240 min-h-screen "
        >
                <motion.div
                    className="absolute bottom-0 aspect-[654/838] max-lg:-left-140 h-4/5 "
                    initial="hidden"
                    whileInView="visible"
                    variants={moveRight}
                    viewport={{ once: true, amount: 0.1 }}	    
                >
                    <AboutImage />
                </motion.div>

            <motion.div
                className="w-2/10 aspect-[447/774] right-0 absolute max-lg:hidden"
            >
            </motion.div>
            <AboutBio />
        </div>
    )
}
