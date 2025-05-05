import Image from 'next/image'
import { ProjectData } from '@/lib/types'
import Link from 'next/link'

interface ProjectFrameProps {
    project: ProjectData
}

export default function ProjectMockup({ project }: ProjectFrameProps) {

    if (!project) return null
    return (
        <div className="relative h-screen w-full" 
        >
            <div className="relative w-full aspect-[1092/593]">
                <Image
                    className="object-contain object-top"
                    src={project.image.imageSrc}
                    alt={project.image.imageAlt}
                    fill
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Link className="text-primary-500 pb-8 font-bold font-label xs:text-label-lg text-label-md uppercase after:content-[''] after:absolute after:bottom-0 after:w-full after:h-1 after:bg-neutral-100 after:left-1/2 after:-translate-x-1/2 z-10"
                    href={project.link}
                    target="_blank"
                    >
                        View project
                    </Link>
                </div>
            </div>
        </div>
    )
}
