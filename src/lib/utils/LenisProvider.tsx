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

    useEffect(() => {
        if (!lenis) {
            return;
        }

        // Frame update for Lenis raf
        function update(data: { timestamp: number }) {
            const time = data.timestamp;
            lenisRef.current?.lenis?.raf(time);
        }

        frame.update(update, true);

        // Workaround for Lenis scrolling to the top on route change
        lenis.stop();
        lenis.start();
        lenis.scrollTo(0, { immediate: true });

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
                anchors: true,
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