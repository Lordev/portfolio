'use client'
import React, { createContext, useEffect, useContext, useState } from 'react'

interface SmoothScrollContextProps {
    targetSection: string
    setTargetSection: (section: string) => void
}

const SmoothScrollContext = createContext<SmoothScrollContextProps | undefined>(undefined)

export const SmoothScrollProvider = ({ children }: { children: React.ReactNode }) => {
    const [targetSection, setTargetSection] = useState<string>('')

    useEffect(() => {
        console.log(targetSection)
    }, [targetSection])

    return (
        <SmoothScrollContext.Provider value={{ targetSection, setTargetSection }}>
            {children}
        </SmoothScrollContext.Provider>
    )
}

export const useSmoothScroll = () => {
    const context = useContext(SmoothScrollContext)
    if (!context) {
        throw new Error('useSmoothScroll must be used within a SmoothScrollProvider')
    }
    return context
}