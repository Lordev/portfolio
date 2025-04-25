import { motion, useTransform, useSpring, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ProjectData } from '@/lib/types'
import ProjectMockup from './ProjectMockup'
import ProjectsHeading from './ProjectsHeading'
import VerticalLine from '@/components/ui/VerticalLine'
import { LinePosition } from '@/lib/enums'

interface ProjectsProps {
    scrollYProgress: number
    data: ProjectData
    currentProjectIndex: number
}

export default function ProjectsContent({
    data,
    scrollYProgress,
}: ProjectsProps) {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0)

    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange((value) => {
            const newIndex = Math.floor(value * data.length)
            if (newIndex !== currentProjectIndex && newIndex < data.length) {
                setCurrentProjectIndex(newIndex)
            }
        })

        return () => unsubscribe()
    }, [scrollYProgress, currentProjectIndex, data.length, data])

    const smoothConfig = {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        restDelta: 0.001,
    }

    const parent = {
        hidden: {},
        visible: {
            transition: {
                duration: 0.3,
                ease: 'easeInOut',
                staggerChildren: 0.02,
            },
        },
    }

    const child = {
        hidden: {
            y: 100,
            opacity: 0,
        },

        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.4,
                ease: 'easeInOut',
            },
        },
    }

    const hideOnscroll = {
        opacity: useTransform(scrollYProgress, [0, 0.02, 0.9, 1], [0, 1, 1, 0]),
    }


    const FadeOut = useSpring(
        useTransform(scrollYProgress, [0.95, 1], [1, 0]),
        smoothConfig
    )

    const BottomBarAnimations = {
        opacity: FadeOut,
    }

    const TopBarAnimations = {
        opacity: FadeOut,
    }

    const mockupAnimations = {
        opacity: FadeOut,
        y: useTransform(scrollYProgress, [0, 1], ['0%', '-10%']),
    }


    const HeadingAnimations = {
        opacity: FadeOut,
        y: useSpring(
            useTransform(scrollYProgress, [0.95, 1], ['0%', '-100%']),
            smoothConfig
        ),
    }

    return (
        <>
            <motion.div
                className="sticky top-0 -mb-100 z-20 w-full bg-background h-100 lg:hidden"
                style={TopBarAnimations}
            ></motion.div>
            <div className="flex flex-col items-center absolute text-label-md -top-102 right-1/2 translate-x-1/2 z-30">
                <span className="uppercase font-label text-label-sm text-neutral-300 h-42">
                    scroll down
                </span>
                <VerticalLine />
            </div>
            <motion.div
                className="sticky lg:top-0 top-72 pt-24 z-30 bg-gradient-to-b from-background from-50% to-transparent lg:grid lg:grid-cols-12 gap-x-24 "
                style={HeadingAnimations}
            >
                <ProjectsHeading data={data} />
                <div className="absolute top-[80vh] h-[80vh] "></div>
            </motion.div>

            <motion.div
                style={mockupAnimations}
                className="absolute lg:top-356 left-0 right-0 z-10 w-full lg:w-6/10  mx-auto overflow-hidden h-full"
            >
                <div className="absolute h-full w-full flex flex-col  pt-96">
                    {data.map((item, index) => (
                        <div key={item.title}>
                            <ProjectMockup data={data[index]} />
                        </div>
                    ))}
                </div>
            </motion.div>
            <motion.div
                className="sticky bottom-0 -z-10 w-full  h-full"
                style={BottomBarAnimations}
            ></motion.div>
            <AnimatePresence>
                <motion.div
                    className="sticky bottom-0 w-full grid grid-cols-2 lg:grid-cols-12 gap-x-24 z-20 bg-gradient-to-t from-background from-80% to-transparent pt-64 -mt-200 h-256 overflow-hidden "
                    key={data[currentProjectIndex].title}
                    initial="hidden"
                    animate="visible"
                    variants={parent}
                >
                    <motion.div
                        className="flex flex-col lg:col-start-4 lg:col-span-3 gap-8"
                        style={hideOnscroll}
                    >
                        <motion.h3
                            className="text-title-sm uppercase mt-8"
                            variants={child}
                        >
                            {data[currentProjectIndex].title}
                        </motion.h3>
                        <motion.p
                            className="text-body-sm  text-neutral-100"
                            variants={child}
                        >
                            {data[currentProjectIndex].description.summary}
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="flex flex-col col-start-7 col-span-3 max-lg:hidden"
                        style={hideOnscroll}
                    >
                        <h6 className="text-label-sm uppercase  text-neutral-300">
                            {'['}Summary{']'}
                        </h6>
                        <ul>
                            {data[
                                currentProjectIndex
                            ].description.highlights.map((highlight, index) => (
                                <motion.li
                                    key={index}
                                    className="flex items-center gap-16 mt-8"
                                    variants={child}
                                >
                                    <div className="w-6 h-6 bg-neutral-700 rounded-full"></div>
                                    <p className="text-body-sm  text-neutral-100">
                                        {highlight}
                                    </p>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div
                        className="col-start-11 col-span-2 flex flex-col gap-8  max-lg:hidden"
                        style={hideOnscroll}
                    >
                        <h6 className="text-label-sm uppercase  text-neutral-300">
                            {'['}Tools{']'}
                        </h6>
                        <div className="flex flex-wrap ">
                            {data[currentProjectIndex].techStack.map((tech) => (
                                <motion.p
                                    key={tech}
                                    className="text-label-sm text-neutral-300 
                                    uppercase not-last:after:content-['/'] not-last:after:mx-6 "
                                    variants={child}
                                >
                                    {tech}
                                </motion.p>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
                <VerticalLine VerticalLinePosition={LinePosition.Bottom} />
            </AnimatePresence>
        </>
    )
}
