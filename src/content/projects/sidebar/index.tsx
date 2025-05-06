'use client';
import { ProjectData } from '@/lib/types';
import SideBarItem from '@/content/projects/sidebar/components/SideBarItem';
import ProjectUrl from '@/content/projects/sidebar/components/ProjectUrl';
import TechStack from '@/content/projects/sidebar/components/TechStack';
import { Heading } from '@/components/ui/Heading';
import Line from '@/components/ui/Line';
import SideBarProjectLinks from './components/SideBarProjectLinks';

interface ProjectSidebarProps {
    project: ProjectData;
    otherProjectsLinks?: { thumbnail: string; title: string; slug: string }[];
}

export default function ProjectSidebar({
    project,
    otherProjectsLinks,
}: ProjectSidebarProps) {
    if (!project) return null;
    if (!otherProjectsLinks) {
        otherProjectsLinks = [
            { thumbnail: '', title: '', slug: '' },
            { thumbnail: '', title: '', slug: '' },
        ];
    }

    return (
        <div className="lg:sticky lg:top-0 lg:h-screen">
            <div className=" flex flex-col justify-between h-full pt-124 lg:pb-24 pb-64">
                <div>
                    <Heading
                        as="h3"
                        size="title-md"
                        transform="normal"
                        className="mb-32"
                    >
                        {project.title}
                    </Heading>
                    <SideBarItem heading="[Year]" details={project.yearBuilt} />
                    <SideBarItem
                        heading="[Link]"
                        details={<ProjectUrl url={project.link} />}
                    />
                    <SideBarItem
                        heading="[Tech]"
                        details={<TechStack stack={project.techStack} />}
                    />
                    <Line className="max-lg:col-start-2 col-span-2" />
                    <p className="mt-52 text-body-md">{project.largeDescription}</p>
                </div>
                <div className="max-lg:hidden">
                    <SideBarProjectLinks
                        otherProjectsLinks={otherProjectsLinks}
                    />
                </div>
            </div>
        </div>
    );
}
