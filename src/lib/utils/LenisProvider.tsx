'use client';
import { ReactLenis, useLenis } from 'lenis/react';
import type { LenisRef } from 'lenis/react';
import { useRef, useEffect, ReactNode } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { cancelFrame, frame } from 'framer-motion';

export const LenisProvider = ({ children }: { children: ReactNode }) => {
    const lenis = useLenis();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const lenisRef = useRef<LenisRef | null>(null);
    const prevPathname = useRef('');

    useEffect(() => {
        if (!lenis) {
            return;
        }

        function update(data: { timestamp: number }) {
            lenisRef.current?.lenis?.raf(data.timestamp);
        }

        frame.update(update, true);

        if (prevPathname.current !== pathname) {
            prevPathname.current = pathname;
            lenis.stop();
            lenis.start();

            const hash = window.location.hash;
            if (hash) {
                history.replaceState(null, '', pathname);
                lenis.scrollTo(0, { immediate: true });
                setTimeout(() => {
                    const target = document.querySelector(hash);
                    if (target instanceof HTMLElement) {
                        lenis.scrollTo(target, { duration: 1.8 });
                    }
                }, 300);
            } else {
                lenis.scrollTo(0, { immediate: true });
            }
        }

        return () => cancelFrame(update);
    }, [pathname, searchParams, lenis]);

    return (
        <ReactLenis
            className="h-full"
            options={{
                duration: 2,
                orientation: 'vertical',
                gestureOrientation: 'vertical',
                touchMultiplier: 2,
                anchors: false,
                lerp: 0.1,
                autoRaf: false,
            }}
            root
            ref={lenisRef}
        >
            {children}
        </ReactLenis>
    );
};