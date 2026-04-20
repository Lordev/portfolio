'use client';
import { heroNavLinks, socialLinks } from '@/lib/data/links';
import LinkLine from '@/components/ui/LinkLine';
import { Heading } from '@/components/ui/Heading';
import { useLenis } from 'lenis/react';
import { useIsHomePage } from '@/lib/hooks/useIsHomePage';
import { useIsMobile } from '@/lib/hooks/useIsMobile';

export default function FooterBar() {
    const lenis = useLenis();
    const isHomePage = useIsHomePage();
    const isMobile = useIsMobile();

    const handleNavClick = (e: React.MouseEvent, href: string) => {
        if (isHomePage && lenis) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target instanceof HTMLElement) {
                lenis.scrollTo(target, { duration: 1.8 });
            }
        }
    };

    const date = new Date().getFullYear();

    const copyright = <Heading as='h6' size='section-label-sm'>© {date} Lorenzo Sallons</Heading>;

    const navLinks = heroNavLinks.map(link => (
        <LinkLine
            key={link.href}
            href={isHomePage ? link.href : `/${link.href}`}
            label={link.label}
            onClick={(e: React.MouseEvent) => handleNavClick(e, link.href)}
        />
    ));

    const renderContactSection = (className?: string) => (
        <div className={`flex flex-col border-l border-neutral-500 pl-24 ${className}`}>
            <Heading as='h6' size='section-label-sm'>Get in touch</Heading>
            <div className="flex flex-col gap-12 mt-24">
                <LinkLine href={`mailto:${socialLinks.email.href}`} label={socialLinks.email.label} target="_blank" />
                <LinkLine href={socialLinks.github.href} label={socialLinks.github.label} target="_blank" />    
                <LinkLine href={socialLinks.linkedIn.href} label={socialLinks.linkedIn.label} target="_blank" />
            </div>
        </div>
    );

    const renderNavigateSection = (className?: string) => (
        <div className={`flex flex-col border-l border-neutral-500 pl-24 ${className}`}>
            <Heading as='h6' size='section-label-sm'>Navigate</Heading>
            <div className="flex flex-col gap-12 mt-24">
                {navLinks}
            </div>
        </div>
    );

    if (isMobile) {
        return (
            <div className='row in-container flex flex-col gap-48 pb-24'>
                <div className="text-display-sm uppercase flex flex-col gap-24">
                    <div className='font-thin flex items-center'>
                        Let&apos;s
                        <span className="w-full max-w-240 h-4 bg-neutral-100 mx-24"></span>
                    </div>
                    <div className='self-center'>Talk.</div>
                </div>
                <div className='flex gap-32'>
                    {renderContactSection('flex-1')}
                    {renderNavigateSection('flex-1')}
                </div>
                {copyright}
            </div>
        );
    }

    return (
        <div>
            <div className='row in-container grid grid-cols-12 mt-120'>
                <div className="text-display-md uppercase flex text-nowrap justify-between col-span-7 items-center h-fit">
                    <span className='font-thin'>Let&apos;s</span>
                    <span className="w-full h-4 bg-neutral-100 mx-24"></span>
                </div>
            </div>
            <div className='row in-container grid grid-cols-12 mt-24'>
                <div className="col-span-2 col-start-1 self-end">{copyright}</div>
                <div className="text-display-md uppercase col-span-5 col-start-3">
                    <div>Talk.</div>
                </div>
                {renderContactSection('lg:ml-48 xl:ml-0 xl:col-start-9 col-start-8 col-span-2')}
                {renderNavigateSection('col-span-2 col-start-11')}
            </div>
        </div>
    );
}
