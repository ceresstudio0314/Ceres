'use client'

import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const springX = useSpring(mouseX, { stiffness: 500, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 500, damping: 30 })

  const dotX = useSpring(mouseX, { stiffness: 800, damping: 35 })
  const dotY = useSpring(mouseY, { stiffness: 800, damping: 35 })

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches
    if (isTouchDevice) return

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const handleMouseEnterLink = () => {
      cursorRef.current?.classList.add('scale-[2.5]', 'border-ceres-blue', 'bg-ceres-blue/10')
    }
    const handleMouseLeaveLink = () => {
      cursorRef.current?.classList.remove('scale-[2.5]', 'border-ceres-blue', 'bg-ceres-blue/10')
    }

    window.addEventListener('mousemove', moveCursor)

    const links = document.querySelectorAll('a, button, [role="button"]')
    links.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnterLink)
      el.addEventListener('mouseleave', handleMouseLeaveLink)
    })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [mouseX, mouseY])

  return (
    <>
      {/* Outer ring */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 w-9 h-9 rounded-full border border-white/40 pointer-events-none z-[9999] hidden lg:block transition-all duration-200 mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      {/* Center dot */}
      <motion.div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-white pointer-events-none z-[9999] hidden lg:block mix-blend-difference"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  )
}
