import ShowcaseImageList from '@/content/projects/showcase/ShowcaseImageList';
import { ProjectData } from '@/lib/types';

export default function ProjectShowcase({ project }: { project: ProjectData }) {
    if (!project) return null;
    return (
        <div className="relative grid-span-3 max-lg:flex max-lg:flex-col lg:col-span-3 lg:col-start-2 lg:grid lg:grid-cols-2 gap-24 lg:mb-24 lg:pt-124 border-l border-r border-neutral-800">
            <ShowcaseImageList images={project.showcaseImages || []} />
        </div>
    );
}
