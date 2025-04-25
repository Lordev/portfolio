'use client'
import MobileMenu from './MobileMenu/MobileMenu'
import { useState } from 'react'
import { useMobileMenu } from '@/lib/context/mobileMenuContext'

export default function NavBar() {
    const { openMenu } = useMobileMenu()


    return (
        <div className="absolute w-full max-lg:z-[998] mix-blend-difference max-lg:fixed">
            <div className="flex gap-3 py-20 px-[var(--padding-container)] justify-between items-center">
                <div className=" relative uppercase text-body-sm max-lg:hidden">
                    <p className="">Digital memories</p>
                    <p className='after:content-[""] after:w-8'>
                        every pixel counts
                    </p>
                </div>
                <button
                    onClick={openMenu}
                    type='button'
                    className="text-label-lg text-neutral-300 font-label uppercase lg:hidden cursor-pointer"
                >
                    Menu
                </button>
                <MobileMenu />
                <div className="">
                    <p className="text-label-sm text-neutral-300 font-label uppercase ">
                        status
                    </p>
                    <div className="flex gap-16 items-center">
                        <span className="text-body-md">Open for work</span>
                        <span className="w-8 h-8 bg-green-400 rounded-full animate-pulse"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
