'use client';
import Line from '@/components/ui/Line'	
import { Heading } from '@/components/ui/Heading';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface SectionWithDividerProps {
    heading: string;
    details: ReactNode | string;
    className?: string;
}

export default function SectionWithDivider({
    heading,
    details,
    className,
}: SectionWithDividerProps) {
    return (
        <div
            className={twMerge(
                'grid grid-cols-4 gap-y-24 mb-24 items-center',
                className
            )}
        >
            <Line className="col-span-4" />
            <Heading
                as="h6"
                size="section-label-sm"
                className="lg:col-span-1 relative max-lg:col-start-1"
            >
                {heading}
            </Heading>
            <p className="text-body-lg text-neutral-100 col-start-2 col-span-3 ">
                {details}
            </p>
        </div>
    );
}
