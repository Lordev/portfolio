export type ServiceType = {
    title: string
    description: string
}

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

export type ServiceType = {
    title: string
    description: string
}

export interface NavLink {
    name: string
    href: string
}

export interface SocialLink {
    href: string
    label: string
}

export type SocialLinks = {
    github: SocialLink
    linkedIn: SocialLink
    email: SocialLink
}
