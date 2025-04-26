'use client'

import { createContext, useState, useContext } from 'react'

const mobileMenuContext = createContext<MobileMenuContextProps | undefined>(
    undefined
)

interface MobileMenuContextProps {
    menuOpen: boolean
    openMenu: () => void
    closeMenu: () => void
}

export default function MobileMenuProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const [menuOpen, setMenuOpen] = useState(false)

    const closeMenu = () => {
        setMenuOpen(false)
    }

    const openMenu = () => {
        setMenuOpen(true)
    }

    return (
        <mobileMenuContext.Provider value={{ menuOpen, closeMenu, openMenu }}>
            {children}
        </mobileMenuContext.Provider>
    )
}

export function useMobileMenu() {
    const context = useContext(mobileMenuContext)
    if (!context) {
        throw new Error(
            'useMobileMenu must be used within a MobileMenuProvider'
        )
    }
    return context
}
