'use client'
import { heroNavLinks } from '@/lib/data/links'
import LinkLine from '@/components/ui/LinkLine'
import { useSmoothScroll } from '@/lib/context/SmoothScrollContext'


export default function HeroNav() {
    const { setTargetSection } = useSmoothScroll()

    return (
        <div className="justify-center flex flex-col h-full">
            <nav className="border-l-1 border-neutral-500 flex flex-col gap-24 pl-24 py-24">
                {heroNavLinks.map((link) => (
                    <LinkLine
                        label={link.label}
                        key={link.label}
                        onClick={() => {
                            setTargetSection(link.href)
                        }}
                    />
                ))}
            </nav>
        </div>
    )
}
