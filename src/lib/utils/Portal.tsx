import { createPortal } from 'react-dom'
import { useRef, useState, useEffect } from 'react'

export default function Portal({ children }: { children: React.ReactNode }) {
    const eleRef = useRef<HTMLDivElement | null>(null)
    const [isMounted, setIsMounted] = useState(false)
    useEffect(() => {
        setIsMounted(true)
    }, [])

    return (
        <div ref={eleRef}>
            {isMounted &&
                eleRef.current &&
                createPortal(children, document.body)}
        </div>
    )
}