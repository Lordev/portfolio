'use client'
import React, { PropsWithChildren } from 'react'
import { useEffect, useRef } from 'react'
import { ReactLenis } from 'lenis/react'
import type { LenisRef } from 'lenis/react'
import { useSmoothScroll } from '@/lib/context/SmoothScrollContext'

export default function SmoothScroll({ children }: PropsWithChildren) {
    const lenisRef = useRef<LenisRef>(null)
    const { targetSection } = useSmoothScroll()
    
    useEffect(() => {
      if (!targetSection) return 
      const lenis = lenisRef.current?.lenis
      if (!lenis) return

      const scrollToTarget = () => { 
          const targetElement = document.getElementById(targetSection) 
          if (targetElement) {
              lenis.scrollTo(targetElement, {
                  duration: 1,
                  easing: (t: number) => t, 
              })
          }
      }
      scrollToTarget()

      const animate = (time: number) => {
          lenis.raf(time) 
          requestAnimationFrame(animate)
      }

      const rafId = requestAnimationFrame(animate)

      return () => cancelAnimationFrame(rafId) 
  }, [targetSection]) 


    return (
        <ReactLenis
            options={{
                duration: 2,
                durationSmooth: 0.1,
                orientation: 'vertical',
                gestureOrientation: 'vertical',
                smooth: true,
                smoothTouch: false,
                touchMultiplier: 2,
            }}
            root
            ref={lenisRef}
        >
            {children}
        </ReactLenis>
    )
}
