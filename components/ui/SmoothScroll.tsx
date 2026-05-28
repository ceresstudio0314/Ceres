'use client'

import { useEffect, useRef } from 'react'

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<any>(null)

  useEffect(() => {
    let lenis: any = null

    const initLenis = async () => {
      try {
        const Lenis = (await import('@studio-freight/lenis')).default
        lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'vertical',
          smoothWheel: true,
          touchMultiplier: 2,
        })
        lenisRef.current = lenis

        function raf(time: number) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
      } catch (e) {
        // Lenis unavailable — native scroll fallback
      }
    }

    initLenis()

    return () => {
      lenis?.destroy()
    }
  }, [])

  return <>{children}</>
}
