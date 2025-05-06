import { Heading } from '@/components/ui/Heading';
import Line from '@/components/ui/Line';
import Image from 'next/image';
import Link from 'next/link';

export default function SideBarProjectLink({
    heading,
    slug,
    thumbnail,
}: {
    heading: string;
    slug: string;
    thumbnail: string;
}) {
    return (
        <>
            <Line />
            <div className="lg:grid lg:grid-cols-2 items-center group py-12">
                <Link
                    href={`/projects/${slug}`}                    className="col-span-2 grid grid-cols-4 items-center"
                >
                    <Heading as='h4' size='title-sm' transform='normal' className="col-span-3 relative max-lg:col-start-1 text-neutral-100 group-hover:text-neutral-50 transition-colors duration-300">
                        {heading}
                    </Heading>
                    <Image
                        src={thumbnail}
                        alt=""
                        width={84}
                        height={60}
                        className="text-title-sm text-neutral-50 col-start-4 justify-end justify-self-end w-84 h-60 grayscale-100 group-hover:grayscale-0 transition-all duration-300"
                    />
                </Link>
            </div>

        </>
    );
}
