import { LinePosition } from '@/lib/enums'

interface VerticalLineProps {
    LinePosition?: LinePosition
}

export default function VerticalLine({
    LinePosition,
}: VerticalLineProps) {
    return (
        <div className={`h-120  ${LinePosition} w-1 bg-neutral-700 z-50`}></div>
    )
}
