'use client';
import MobileMenu from './MobileMenu/MobileMenu';
import Link from 'next/link';
import { useMobileMenu } from '@/lib/context/mobileMenuContext';
import WorkStatus from '@/components/ui/WorkStatus';
import { heroNavLinks } from '@/lib/data/links';
import SlideText from '@/components/ui/SlideText';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/lib/hooks/useIsMobile';
import { useIsHomePage } from '@/lib/hooks/useIsHomePage';
import { useLenis } from 'lenis/react';

interface NavBarProps {
    navbarDisplay?: 'absolute' | 'sticky';
}

export default function NavBar({ navbarDisplay }: NavBarProps) {
    const isMobile = useIsMobile();
    const isHomePage = useIsHomePage();
    const { openMenu } = useMobileMenu();
    const lenis = useLenis();

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (isHomePage && lenis) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target instanceof HTMLElement) {
                lenis.scrollTo(target, { duration: 1.8 });
            }
        }
    };

    const navDisplayClasses = {
        absolute: 'absolute z-50',
        sticky: 'fixed top-0 bg-background/80 backdrop-blur-sm z-50 border-b border-neutral-800',
    };

    const navbarClass = navbarDisplay ? navDisplayClasses[navbarDisplay] : 'absolute';


    return (
        <motion.div
            className={`w-full max-lg:z-[998] max-lg:mix-blend-difference max-lg:fixed ${navbarClass}`}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
            <div className="flex gap-3 py-20 px-[var(--padding-container)]  grid lg:grid-cols-3 gap-x-24 items-start w-full">
                <div className="flex flex-col gap-16">
                    <Link
                        href={'/'}
                        className={`relative uppercase text-title-md ${isHomePage && 'max-lg:hidden'}`}
                    >
                        <span className="font-thin">Lor</span>
                        <span className="font-medium">Dev</span>
                    </Link>
                   
                </div> 
                <nav className="hidden lg:flex flex-col gap-8 col-start-2 justify-self-center">
                    <motion.div
                        className="flex gap-48"
                        initial="hidden"
                        animate="show"
                        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.4 } } }}
                    >
                        {heroNavLinks.map((link) => (
                            <div key={link.href} className="overflow-hidden">
                                <motion.a
                                    href={isHomePage ? link.href : `/${link.href}`}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className="text-body-md text-neutral-100 cursor-pointer group flex"
                                    variants={{ hidden: { y: '110%' }, show: { y: '0%', transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } }}
                                >
                                    <SlideText label={link.label} />
                                </motion.a>
                            </div>
                        ))}
                    </motion.div>
                </nav>
                {isMobile && isHomePage && (
                    <>
                        <button
                            onClick={openMenu}
                            type="button"
                            className="text-label-lg col-start-1 text-neutral-300 font-label uppercase lg:hidden cursor-pointer group flex"
                        >
                            <SlideText label="Menu" />
                        </button>
                    <MobileMenu />
                  </>
                )}

                <div className="col-start-3 justify-self-end">
                    <p className="text-label-sm text-neutral-300 font-label uppercase">status</p>
                    <div className="flex gap-16 items-center">
                        <WorkStatus />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
