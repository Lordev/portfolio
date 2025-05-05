'use client';
import { motion, MotionStyle } from 'framer-motion';
import { ProjectData } from '@/lib/types';
import { Heading } from '@/components/ui/Heading';
import { childVariants, parentVariants } from '../animations';

interface ProjectDetailsProps {
    project: ProjectData;
    motionStyle: MotionStyle;
}

export default function ProjectDetails({ project, motionStyle }: ProjectDetailsProps) {
    if (!project) return null;

    return (
        <motion.div
            className="sticky bottom-0 w-full grid grid-cols-2 lg:grid-cols-12 gap-x-24 z-20 bg-gradient-to-t from-background from-80% to-transparent pt-64 -mt-200 h-256 overflow-hidden"
            key={project.title}
            initial="hidden"
            animate="visible"
            variants={parentVariants}
        >
            <motion.div
                className="flex flex-col lg:col-start-4 lg:col-span-3 gap-8"
                style={motionStyle}
            >
                <motion.div className="mt-8" variants={childVariants}>
                    <Heading as="h6" size="title-sm">
                        {project.title}
                    </Heading>
                </motion.div>
                <motion.p className="text-body-sm text-neutral-100" variants={childVariants}>
                    {project.description.summary}
                </motion.p>
            </motion.div>

            <motion.div
                className="flex flex-col col-start-7 col-span-3 max-lg:hidden"
                style={motionStyle}
            >
                <Heading as="h6" size="section-label-sm" className="text-neutral-300 text-label-sm">
                    {'['}Summary{']'}
                </Heading>
                <ul>
                    {project.description.highlights.map((highlight, idx) => (
                        <motion.li
                            key={idx}
                            className="flex items-center gap-16 mt-8"
                            variants={childVariants}
                        >
                            <div className="w-6 h-6 bg-neutral-700 rounded-full" />
                            <p className="text-body-sm text-neutral-100">{highlight}</p>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
            <motion.div
                className="col-start-11 col-span-2 flex flex-col gap-8 max-lg:hidden"
                style={motionStyle}
            >
                <Heading as="h6" size="section-label-sm">
                    {'['}Tools{']'}
                </Heading>
                <div className="flex flex-wrap">
                    {project.techStack.map((tech) => (
                        <motion.p
                            key={tech}
                            className="text-label-sm text-neutral-300 uppercase not-last:after:content-['/'] not-last:after:mx-6"
                            variants={childVariants}
                        >
                            {tech}
                        </motion.p>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
}
