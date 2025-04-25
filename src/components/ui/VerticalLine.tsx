import { VerticalLinePosition } from "@/lib/enums"

interface VerticalLineProps {
    VerticalLinePosition: VerticalLinePosition
}

export default function VerticalLine({
    VerticalLinePosition: VerticalLinePosition}: VerticalLineProps) {
    return (
        <div
            className={`h-120  ${VerticalLinePosition} w-1 bg-neutral-700 z-50`}
        ></div>
    )
}
