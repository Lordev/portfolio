import { ProjectData } from '@/lib/types'
import { motion } from 'framer-motion'
import { revealText } from '@/lib/utils/motion'

interface ProjectDescriptionProps {
    data: ProjectData[]
    currentProjectIndex: number
}

export default function ProjectDescription({
    data,
    currentProjectIndex,
}: ProjectDescriptionProps) {
    if (!data) return

    return (
        <div className="col-start-4 col-span-9 row-start-1 ">
            <div className="relative w-full">
                <div className="flex mr-42 gap-24">
                    <div className="flex flex-col">
                        <h6 className="text-label-sm text-neutral-300 uppercase ">
                            {'['}
                            <motion.span
                                initial="hidden"
                                animate="visible"
                                variants={revealText}
                            >
                                {(currentProjectIndex + 1)
                                    .toString()
                                    .padStart(2, '0')}
                            </motion.span>
                            {']'}
                        </h6>
                        <motion.h3
                            className="text-title-sm uppercase mt-8 text-nowrap "
                            initial="hidden"
                            animate="visible"
                            variants={revealText}
                        >
                            {data[currentProjectIndex].title}
                        </motion.h3>
                        <motion.p
                            className="mt-24 text-body-sm text-neutral-200"
                            initial="hidden"
                            animate="visible"
                            variants={revealText}
                        >
                            {data[currentProjectIndex].description.summary}
                        </motion.p>
                    </div>
                    <div className="flex">
                        <motion.ul>
                            {data[
                                currentProjectIndex
                            ].description.highlights.map((highlight, index) => (
                                <motion.li
                                    key={index}
                                    className="flex items-center gap-16 mt-8"
                                    initial="hidden"
                                    animate="visible"
                                    variants={revealText}
                                >
                                    <div className="w-6 h-6 bg-neutral-700 rounded-full"></div>
                                    <p className="text-body-sm text-neutral-200">
                                        {highlight}
                                    </p>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>
                    <div className="mt-48">
                        <h6 className="text-label-sm uppercase underline text-neutral-200 text-end">
                            Tools
                        </h6>
                        <motion.div
                            className="flex flex-wrap "
                            initial="hidden"
                            animate="visible"
                            variants={revealText}
                        >
                            {data[currentProjectIndex].techStack.map((tech) => (
                                <motion.p
                                    key={tech}
                                    className="text-label-sm text-neutral-300 uppercase not-last:after:content-['/'] not-last:after:mx-6 "
                                >
                                    {tech}
                                </motion.p>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}
