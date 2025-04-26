import { motion } from 'framer-motion'
import { revealText } from '@/lib/utils/motion'
import AnimatedLine from '@/components/ui/AnimatedLine'
export default function AboutBio() {
    return (
        <div className="lg:col-start-2 z-10 ">
            <div className="gap-24 gap-y-52 flex flex-col ">
                <div className="lg:grid lg:grid-cols-2 gap-y-24 max-lg:flex max-lg:flex-col">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={revealText}
                        className="text-heading-lg  lg:text-heading-sm uppercase leading-none"
                    >
                        <span className="font-thin">Who </span>am I
                    </motion.h2>
                    <div className="lg:text-end">
                        <motion.p
                            className="text-body-sm text-neutral-100"
                            initial="hidden"
                            whileInView="visible"
                            variants={revealText}
                            viewport={{ once: true }}
                        >
                            Rotterdam-based frontend developer turning static 
                            websites into dynamic experiences. Skilled in modern 
                            web tech with a passion for thoughtful animation. 
                            Beyond code, I like to create music and explore different aspects of design.
                        </motion.p>
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-y-24">
                    <h6 className="text-label-sm font-label text-neutral-300 uppercase lg:col-span-2 relative max-lg:col-start-2">
                        {'['}my philosophy{']'}
                    </h6>
                    <AnimatedLine className="max-lg:col-start-2 col-span-2" />

                    <motion.p
                        className="text-body-sm text-neutral-100 col-start-2"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={revealText}
                    >
                        I like to strike that sweet spot between pushing
                        creative boundaries and keeping things accessible. Every
                        project is a chance to prove that websites can be both
                        functional and unforgettable.
                        <br />
                    </motion.p>

                </div>
                <div className="grid lg:grid-cols-2 lg:col-start-2 gap-y-24">
                    <h6 className="text-label-sm font-label text-neutral-300 uppercase lg:col-span-2 mt-32 max-lg:mt-64">
                        {'['}my Toolset{']'}
                    </h6>
                    <AnimatedLine className="lg:col-span-2" />
                    <motion.div
                        className="lg:col-start-2 grid grid-cols-3  text-neutral-200 text-label-sm gap-24 h-fit"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={revealText}
                    >
                        <div className="flex flex-col gap-8">
                            <span>REACT</span>
                            <span>NEXTJS</span>
                            <span>JAVASCRIPT</span>
                            <span>TYPESCRIPT</span>
                        </div>
                        <div className="flex flex-col gap-8">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>PHP</span>
                            <span>THREE.JS</span>
                        </div>
                        <div className="flex flex-col gap-8">
                            <span>WORDPRESS</span>
                            <span>FIGMA</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
