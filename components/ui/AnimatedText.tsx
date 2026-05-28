'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface AnimatedTextProps {
  text: string
  el?: any
  className?: string
  once?: boolean
  delay?: number
}

export function AnimatedText({
  text,
  el: Wrapper = 'p',
  className = '',
  once = true,
  delay = 0,
}: AnimatedTextProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-20%' })

  // Split text into words, then words into characters for more granular animation if needed.
  // We'll animate by word for cleaner performance on large headings.
  const words = text.split(' ')

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: delay * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <Wrapper className={className} ref={ref}>
      <motion.span
        style={{ display: 'inline-block', overflow: 'hidden' }}
        variants={container as any}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {words.map((word, index) => (
          <motion.span
            variants={child as any}
            style={{ display: 'inline-block', marginRight: '0.25em' }}
            key={index}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  )
}
