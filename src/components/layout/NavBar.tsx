'use client';
import MobileMenu from './MobileMenu/MobileMenu';
import Link from 'next/link';
import { useMobileMenu } from '@/lib/context/mobileMenuContext';
import { usePathname } from 'next/navigation';
import WorkStatus from '@/components/ui/WorkStatus';

interface NavBarProps {
    navbarDisplay?: 'absolute' | 'sticky';
}

export default function NavBar({ navbarDisplay }: NavBarProps) {
    const { openMenu } = useMobileMenu();

    const pathName = usePathname();

    const isHomePage = pathName === '/';

    const navDisplayClasses = {
        absolute: 'absolute',
        sticky: 'fixed top-0 bg-background/80 backdrop-blur-sm z-50 border-b border-neutral-800',
    };

    const navbarClass = navbarDisplay ? navDisplayClasses[navbarDisplay] : 'absolute';

    return (
        <div
            className={`w-full max-lg:z-[998] max-lg:mix-blend-difference max-lg:fixed ${navbarClass}`}
        >
            <div className="flex gap-3 py-20 px-[var(--padding-container)] justify-between items-center">
                <Link
                    href={'/'}
                    className={`relative uppercase text-body-lg lg:text-title-md ${isHomePage && 'max-lg:hidden'}`}
                >
                    <span className="font-thin">Lor</span>
                    <span className="font-medium">Dev</span>
                </Link>
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
                    <p className="text-label-sm text-neutral-300 font-label uppercase ">
                        status
                    </p>
                    <div className="flex gap-16 items-center">
                        <WorkStatus />
                    </div>
                </div>
            </div>
        </div>
    );
}
