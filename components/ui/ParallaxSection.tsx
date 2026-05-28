'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  offset?: number
  speed?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

export function ParallaxSection({
  children,
  className,
  offset = 100,
  speed = 1,
  direction = 'up',
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const yVal = direction === 'up' ? offset * speed : direction === 'down' ? -offset * speed : 0
  const xVal = direction === 'left' ? offset * speed : direction === 'right' ? -offset * speed : 0

  const y = useTransform(smoothProgress, [0, 1], [yVal, -yVal])
  const x = useTransform(smoothProgress, [0, 1], [xVal, -xVal])

  return (
    <div ref={ref} className={cn('relative overflow-hidden w-full h-full', className)}>
      <motion.div
        style={{
          y: direction === 'up' || direction === 'down' ? y : 0,
          x: direction === 'left' || direction === 'right' ? x : 0,
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  )
}
