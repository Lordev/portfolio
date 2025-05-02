export interface ProjectImage {
    src: string
    alt: string
    width?: number
    height?: number
}

export interface Link {
    href: string
    label: string
}

interface ProjectDescription {
    summary: string
    highlights: string[]
}

export interface ProjectData {
    title: string
    slug: string
    description: ProjectDescription
    largeDescription?: string
    techStack: string[]
    image: ProjectImage
    link: string
    yearBuilt: string
    showcaseImages: ProjectImage[]
    thumbnail: string
}

export type SocialLinks = {
    github: Link
    linkedIn: Link
    email: Link
}
