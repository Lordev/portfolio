import { Heading } from '@/components/ui/Heading';
import SideBarProjectLink from './SideBarProjectLink';
import Line from '@/components/ui/Line';

interface OtherProjectsLinks {
    otherProjectsLinks: {
        title: string;
        slug: string;
        thumbnail: string;
    }[];
}

export default function SideBarProjectLinks({
    otherProjectsLinks,
}: OtherProjectsLinks) {
    return (
        <>
            <Heading as="h6" size="section-label-sm" className="mb-16 lg:mt-52">
                {'['}Other Projects{']'}
            </Heading>
            <div className="flex flex-col ">
                {otherProjectsLinks.map(item => (
                    <SideBarProjectLink
                        key={item.title}
                        heading={item.title}
                        thumbnail={item.thumbnail}
                        slug={item.slug}
                    />
                ))}
                <Line />
            </div>
        </>
    );
}
