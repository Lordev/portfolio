'use client';
import { usePathname } from 'next/navigation';

export function useIsHomePage(): boolean {
    return usePathname() === '/';
}
