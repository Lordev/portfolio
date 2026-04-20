'use client';
import { heroNavLinks, socialLinks } from '@/lib/data/links';
import LinkLine from '@/components/ui/LinkLine';
import { Heading } from '@/components/ui/Heading';
import { useLenis } from 'lenis/react';
import { useIsHomePage } from '@/lib/hooks/useIsHomePage';

export default function FooterBar() {
    const lenis = useLenis();
    const isHomePage = useIsHomePage();

    const handleNavClick = (e: React.MouseEvent, href: string) => {
        if (isHomePage && lenis) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target instanceof HTMLElement) {
                lenis.scrollTo(target, { duration: 1.8 });
            }
        }
    };
    return (
        <>
            {/* Desktop */}
            <div className='max-lg:hidden'>
                <div className='row in-container lg:grid lg:grid-cols-12 pt-96' />
                <div className='row in-container lg:grid lg:grid-cols-12 mt-120'>
                    <div className="text-display-md uppercase flex text-nowrap justify-between col-span-7 lg:items-center h-fit">
                        <span className='font-thin'>Let's</span>
                        <span className="w-full h-4 bg-neutral-100 mx-24"></span>
                    </div>
                </div>
                <div className='row in-container lg:grid lg:grid-cols-12 mt-24'>
                    <Heading as='h6' size='section-label-sm' className='col-span-2 col-start-1 self-end'>© 2024 Lorenzo Sallons</Heading>
                    <div className="text-display-md uppercase col-span-6 col-start-3">
                        <div>Talk.</div>
                    </div>
                    <div className="col-start-9 flex flex-col border-l border-neutral-500 col-span-2 pl-24">
                        <Heading as='h6' size='section-label-sm'>Get in touch</Heading>
                        <div className="flex flex-col gap-12 mt-24">
                            <LinkLine href={socialLinks.github.href} label={socialLinks.github.label} target="_blank" />
                            <LinkLine href={socialLinks.linkedIn.href} label={socialLinks.linkedIn.label} target="_blank" />
                        </div>
                    </div>
                    <div className="col-span-2 col-start-11 flex flex-col border-l border-neutral-500 pl-24">
                        <Heading as='h6' size='section-label-sm'>Navigate</Heading>
                        <div className="flex flex-col gap-12 mt-24">
                            {heroNavLinks.map(link => (
                                <LinkLine
                                    key={link.href}
                                    href={isHomePage ? link.href : `/${link.href}`}
                                    label={link.label}
                                    onClick={(e: React.MouseEvent) => handleNavClick(e, link.href)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile */}
            <div className='lg:hidden row in-container flex flex-col gap-48 pb-24'>
                <div className="text-display-sm uppercase flex flex-col gap-24">
                    <div className='font-thin flex items-center'>
                        Let's  
                        <span className="w-full max-w-240 h-4 bg-neutral-100 mx-24"></span>
                    </div>
                    <div className='self-center'>Talk.</div>
                </div>
                <div className='flex gap-32'>
                    <div className="flex-1 flex flex-col border-l border-neutral-500 pl-24">
                        <Heading as='h6' size='section-label-sm'>Get in touch</Heading>
                        <div className="flex flex-col gap-12 mt-24">
                            <LinkLine href={socialLinks.github.href} label={socialLinks.github.label} target="_blank" />
                            <LinkLine href={socialLinks.linkedIn.href} label={socialLinks.linkedIn.label} target="_blank" />
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col border-l border-neutral-500 pl-24">
                        <Heading as='h6' size='section-label-sm'>Navigate</Heading>
                        <div className="flex flex-col gap-12 mt-24">
                            {heroNavLinks.map(link => (
                                <LinkLine
                                    key={link.href}
                                    href={isHomePage ? link.href : `/${link.href}`}
                                    label={link.label}
                                    onClick={(e: React.MouseEvent) => handleNavClick(e, link.href)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <Heading as='h6' size='section-label-sm'>© 2024 Lorenzo Sallons</Heading>
            </div>
        </>
    )
}
