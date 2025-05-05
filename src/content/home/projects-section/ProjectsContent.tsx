'use client';
import { useTransform, useSpring, MotionValue } from 'framer-motion';
import { useEffect, useState, useCallback } from 'react';
import { ProjectData } from '@/lib/types';
import VerticalLine from '@/components/ui/VerticalLine';
import { LinePosition } from '@/lib/enums';
import { smoothConfig } from './animations';
import StickyBar from './components/StickyBar';
import ScrollDownLabel from '../../../components/ui/ScrollDownLabel';
import HeadingSection from './components/HeadingSection';
import ProjectMockups from './components/ProjectMockups';
import ProjectDetails from './components/ProjectDetails';

interface ProjectsProps {
    scrollYProgress: MotionValue<number>;
    data: ProjectData[];
}

export default function ProjectsContent({ data, scrollYProgress }: ProjectsProps) {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    const handleScroll = useCallback(
        (value: number) => {
            const newIndex = Math.floor(value * data.length);
            if (newIndex !== currentProjectIndex && newIndex < data.length) {
                setCurrentProjectIndex(newIndex);
            }
        },
        [data.length, currentProjectIndex]
    );

    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange(handleScroll);
        return () => unsubscribe();
    }, [scrollYProgress, handleScroll]);

    const hideOnscroll = {
        opacity: useTransform(scrollYProgress, [0, 0.02, 0.9, 1], [0, 1, 1, 0]),
    };

    const fadeOut = useSpring(useTransform(scrollYProgress, [0.95, 1], [1, 0]), smoothConfig);

    const barAnimations = { opacity: fadeOut };

    const mockupAnimations = {
        opacity: fadeOut,
        y: useTransform(scrollYProgress, [0, 1], ['0%', '-10%']),
    };

    const headingAnimations = {
        opacity: fadeOut,
        y: useSpring(useTransform(scrollYProgress, [0.95, 1], ['0%', '-100%']), smoothConfig),
    };

    const currentProject = data[currentProjectIndex];

    return (
        <>
            <VerticalLine LinePosition={LinePosition.Top} />
            <StickyBar motionStyle={barAnimations}/>
            <ScrollDownLabel />
            <HeadingSection data={data} motionStyle={headingAnimations} />
            <ProjectMockups data={data} motionStyle={mockupAnimations} />
            <div className="sticky bottom-0 -z-10 w-full h-full" />
            <ProjectDetails project={currentProject} motionStyle={hideOnscroll} />
            <VerticalLine LinePosition={LinePosition.Bottom} /> 
        </>
    );
}
