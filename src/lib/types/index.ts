interface ProjectImage {
    imageSrc: string
    imageAlt: string
}

interface ProjectDescription {
    summary: string
    highlights: string[]
}

export interface ProjectData {
    title: string
    description: ProjectDescription
    techStack: string[]
    image: ProjectImage
    link: string
    yearBuilt: string
}


export interface Link {
    href: string
    label: string
}

export type SocialLinks = {
    github: Link
    linkedIn: Link
    email: Link
}
