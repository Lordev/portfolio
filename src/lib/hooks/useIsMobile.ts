import { useEffect, useState } from 'react';

const MOBILE_BREAKPOINT = 1024;

export function useIsMobile(): boolean {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handle = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        handle();
        window.addEventListener('resize', handle);
        return () => window.removeEventListener('resize', handle);
    }, []);

    return isMobile;
}
