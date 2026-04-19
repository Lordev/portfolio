'use client';
import MobileMenu from './MobileMenu/MobileMenu';
import Link from 'next/link';
import { useMobileMenu } from '@/lib/context/mobileMenuContext';
import { usePathname } from 'next/navigation';
import WorkStatus from '@/components/ui/WorkStatus';
import { heroNavLinks } from '@/lib/data/links';

interface NavBarProps {
    navbarDisplay?: 'absolute' | 'sticky';
}

export default function NavBar({ navbarDisplay }: NavBarProps) {
    const { openMenu } = useMobileMenu();

    const pathName = usePathname();

    const isHomePage = pathName === '/';

    const navDisplayClasses = {
        absolute: 'absolute z-50',
        sticky: 'fixed top-0 bg-background/80 backdrop-blur-sm z-50 border-b border-neutral-800',
    };

    const navbarClass = navbarDisplay ? navDisplayClasses[navbarDisplay] : 'absolute';

    return (
        <div
            className={`w-full max-lg:z-[998] max-lg:mix-blend-difference max-lg:fixed ${navbarClass}`}
        >
            <div className="flex gap-3 py-20 px-[var(--padding-container)] justify-between">
                <div className="flex flex-col gap-16">
                    <Link
                        href={'/'}
                        className={`relative uppercase text-title-md ${isHomePage && 'max-lg:hidden'}`}
                    >
                        <span className="font-thin">Lor</span>
                        <span className="font-medium">Dev</span>
                    </Link>
                    <nav className="hidden lg:flex flex-col gap-8">
                        <div className="flex gap-32 border-t pt-16 border-neutral-500 pb-8">
                            {heroNavLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-body-md text-neutral-300 cursor-pointer group flex"
                                >
                                    {link.label.split('').map((char, i) => (
                                        <span key={i} className="relative overflow-hidden block">
                                            <span
                                                className="block transition-transform duration-500 ease-in-out group-hover:-translate-y-full"
                                                style={{ transitionDelay: `${i * 35}ms` }}
                                            >
                                                {char}
                                            </span>
                                            <span
                                                className="block absolute inset-0 translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0 text-white"
                                                style={{ transitionDelay: `${i * 35}ms` }}
                                            >
                                                {char}
                                            </span>
                                        </span>
                                    ))}
                                </a>
                            ))}
                        </div>
                    </nav>
                </div>
                {isHomePage && (
                    <button
                        onClick={openMenu}
                        type="button"
                        className="text-label-lg text-neutral-300 font-label uppercase lg:hidden cursor-pointer"
                    >
                        Menu
                    </button>

                )}
                <MobileMenu />

                <div className="">
                    <p className="text-label-sm text-neutral-300 font-label uppercase">status</p>
                        <div className="flex gap-16 items-center">
                            <WorkStatus />
                        </div>
                </div>
            </div>
        </div>
    );
}
