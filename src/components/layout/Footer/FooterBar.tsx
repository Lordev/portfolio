import { socialLinks } from '@/lib/data/links';
import LinkLine from '@/components/ui/LinkLine';
import { Heading } from '@/components/ui/Heading';

export default function FooterBar() {
    return (
        <>
            <div className="col-span-5">
                <Heading as='h6' size='section-label-sm'>My socials</Heading>
                <div className="flex mt-10 gap-10 ">
                    <LinkLine
                        href={socialLinks.github.href}
                        label={socialLinks.github.label}
                        target="_blank"
                    />
                    <div className="w-16 relative">
                        <div className="border-t-2 border-gray-500 absolute top-1/2 -translate-y-1/2 w-full "></div>
                    </div>
                    <LinkLine
                        href={socialLinks.linkedIn.href}
                        label={socialLinks.linkedIn.label}
                        target="_blank"
                    />
                </div>
            </div>
            <div className="col-span-4 flex-col flex">
            <Heading as='h6' size='section-label-sm'>Get in touch</Heading>
                <div className="flex mt-10 gap-10">
                    <LinkLine
                        href={socialLinks.email.href}
                        label={socialLinks.email.label}
                        target="_blank"
                    />
                </div>
            </div>
            <div className="col-span-2 col-start-11 flex lg:justify-end text-end">
            <Heading as='h6' size='section-label-sm'>
                    © {new Date().getFullYear()} Lorenzo Sallons.
                    <br />
                </Heading>
            </div>
        </>
    );
}
