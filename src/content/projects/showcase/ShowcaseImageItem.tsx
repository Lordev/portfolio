'use client';
import { useState } from 'react';
import SlideImagePlaceholder from '@/components/ui/SlideImagePlaceholder';
import { ProjectImage } from '@/lib/types';
import Image from 'next/image';

export default function ShowcaseImageItem({ image }: { image: ProjectImage }) {
    const [loaded, setLoaded] = useState(false);
    const isWide = typeof image?.width === "number" ? image.width > 592 : false;
    
    return (
        <div
            key={image.src}
            className={`relative ${isWide ? 'col-span-2' : 'col-span-1'}`}
        >
            {/* Show placeholder until image is loaded */}
                <div className="absolute inset-0 z-10">
                    <SlideImagePlaceholder loaded={loaded} />
                </div>
            <div className='aspect-video w-full'>
            <Image
                src={image.src}
                alt={image.alt}
                fill
                className={` ${
                    isWide ? 'col-span-2' : 'col-span-1'
                }`}
                onLoadingComplete={() => setLoaded(true)}
                onLoad={() => setLoaded(true)}
            />
            </div>
        </div>
    );
}