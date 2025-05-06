import Link from 'next/link';
import LinkIconSvg from '@/lib/svg/LinkIcon';

interface ProjectUrlProps { 
    url: string;
}

export default function ProjectUrl({ url }: ProjectUrlProps) {
    if (!url) return null;
    return (
        <Link
            target="_blank"
            href={url}
            className="text-neutral-100 uppercase text-label-md font-label flex items-center gap-6 hover:text-neutral-50 relative hover:border-b-neutral-100 border-b-transparent border-b transition-color duration-300 w-fit"
        >
            View Live
            <LinkIconSvg className="text-inherit" />
        </Link>
    );
}