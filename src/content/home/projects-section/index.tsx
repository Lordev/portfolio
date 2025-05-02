'use client'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import ScrollContainer from '@/components/layout/ScrollContainer'
import ProjectsContent from './ProjectsContent'
import projectsData from '@/lib/data/projectsData'

export default function ProjectsSection() {
    const containerRef = useRef<HTMLDivElement>(null)



    return (
        <>
            <motion.section
                className="gap-24 relative pt-180 border-t-1 border-t-neutral-800 row in-container bg-background"
                id="Projects"
            >
                <ScrollContainer
                    offset={['start start', 'end end']}
                    containerRef={containerRef}
                >
                    {(scrollYProgress) => (
                        <div
                            style={{
                                height: projectsData.length * 100 + 'vh',
                            }}
                        >
                            <ProjectsContent
                                data={projectsData}
                                scrollYProgress={scrollYProgress}
                            />
                        </div>
                    )}
                </ScrollContainer>
            </motion.section>
        </>
    )
}
