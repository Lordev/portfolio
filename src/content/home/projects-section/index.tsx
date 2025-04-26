'use client'
import { ProjectData } from '@/lib/types'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import ScrollContainer from '@/components/layout/ScrollContainer'
import ProjectsContent from './ProjectsContent'

export default function ProjectsSection() {
    const containerRef = useRef<HTMLDivElement>(null)

    const projectsData: ProjectData[] = [
        {
            title: 'StrategySphere Advisors',
            description: {
                summary: 'Business website',
                highlights: [
                    "Dynamic blog integrated with Sanity.io's server-side filtering",
                    'Scalable architecture for easy adaptations ',
                    'Fully responsive layout',
                ],
            },
            techStack: ['Next.js', 'Tailwind', 'Vercel', 'Sanity.io'],
            image: {
                imageSrc: '/projects/strategysphere-frame.png',
                imageAlt: 'StrategySphere Advisors',
            },
            link: 'https://strategysphere-advisors.vercel.app/en',
            yearBuilt: '2024',
        },
        {
            title: 'Trade Tribe',
            description: {
                summary: 'A Hiking boots custom e-commerce website',
                highlights: [
                    'WooCommerce integration',
                    'Fully Dynamic Content',
                    'ACF plugin for easy management',
                ],
            },
            techStack: ['WordPress', 'WooCommerce', 'ACF'],
            image: {
                imageSrc: '/projects/trade-tribe-frame.png',
                imageAlt: 'Trade Tribe',
            },
            link: 'https://www.trade-tribe.duckdns.org/',
            yearBuilt: '2025',
        },
        {
            title: 'Radiant festival',
            description: {
                summary: 'A festival themed website',
                highlights: [
                    'Payment integration with Stripe API',
                    'Framer Motion animations',
                    'Fully responsive design',
                ],
            },
            techStack: ['Next.js', 'Tailwind CSS', 'Stripe', 'Framer Motion'],
            image: {
                imageSrc: '/projects/radiant-festival-frame.png',
                imageAlt: 'StrategySphere Advisors',
            },
            link: 'https://radiant-festival.vercel.app/',
            yearBuilt: '2024',
        },
        {
            title: 'SP 01 - Mockup showcase',
            description: {
                summary: 'Three.js website',
                highlights: [
                    'Headset 3D model with interactive features',
                    'Fully responsive design',
                    'Different color showcases',
                ],
            },
            techStack: ['Next.js', 'Tailwind CSS', 'Three.js'],
            image: {
                imageSrc: '/projects/sp-01-frame.png',
                imageAlt: 'StrategySphere Advisors',
            },
            link: 'https://sp-01-model.vercel.app/',
            yearBuilt: '2024',
        },
    ]

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
