import { socialLinks } from '@/lib/data/links'
import LinkLine from '@/components/ui/LinkLine'

export default function FooterBar() {
    return (
        <>
            <div className="col-span-5">
                <h6 className="text-label-sm text-neutral-300 uppercase ">
                    My socials
                </h6>
                <div className="flex mt-10 gap-10 ">
                    <LinkLine
                        href={socialLinks.github.href}
                        label={socialLinks.github.label}
                    />
                    <div className="w-16 relative">
                        <div className="border-t-2 border-gray-500 absolute top-1/2 -translate-y-1/2 w-full "></div>
                    </div>
                    <LinkLine
                        href={socialLinks.linkedIn.href}
                        label={socialLinks.linkedIn.label}
                    />
                </div>
            </div>
            <div className="col-span-4 flex-col flex">
                <h6 className="text-label-sm text-neutral-300 uppercase ">
                    Get in touch
                </h6>
                <div className="flex mt-10 gap-10">
                    <LinkLine
                        href={socialLinks.email.href}
                        label={socialLinks.email.label}
                    />
                </div>
            </div>
            <div className="col-span-2 col-start-11 flex lg:justify-end text-end">
                <h6 className="text-label-sm text-neutral-300 uppercase">
                    © {new Date().getFullYear()} Lorenzo Sallons.
                    <br />
                </h6>
            </div>
        </>
    )
}
