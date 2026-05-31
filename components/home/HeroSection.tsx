'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Gamepad2 } from 'lucide-react'
import { AnimatedText } from '@/components/ui/AnimatedText'
import { MagneticButton } from '@/components/ui/MagneticButton'

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08])

  return (
    <section ref={containerRef} className="relative min-h-[100svh] md:h-screen md:min-h-[700px] w-full overflow-hidden bg-ceres-black">
      {/* Background with Parallax */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 w-full h-full transform-gpu"
      >
        <div className="absolute inset-0 bg-ceres-black/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-ceres-black via-ceres-black/20 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-ceres-black/60 via-transparent to-transparent z-10" />
        <div className="absolute inset-0 bg-noise opacity-20 z-10 mix-blend-overlay" />

        {/* Dark moody game dev background */}
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('${basePath}/images/hero-bg.png')`,
          }}
        />
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-ceres-blue/40"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 min-h-[100svh] md:h-full container-wide flex flex-col justify-end pb-16 pt-28 md:pb-32"
      >
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="flex flex-wrap items-center gap-3 sm:gap-4 mb-5 sm:mb-6"
          >
            <span className="h-px w-8 sm:w-12 bg-ceres-blue" />
            <span className="font-mono text-xs sm:text-sm tracking-[0.12em] sm:tracking-[0.2em] text-ceres-blue uppercase font-semibold flex items-center gap-2">
              <Gamepad2 className="w-3.5 h-3.5" />
              Ceres Studios — Founded 2026
            </span>
          </motion.div>

          <AnimatedText
            el="h1"
            text="FORGE YOUR LEGEND"
            className="font-display text-hero text-white mb-6 drop-shadow-2xl"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4"
          >
            <MagneticButton
              className="btn-primary justify-center"
              onClick={() => window.location.href = `${basePath}/games`}
            >
              Our Games <ArrowRight className="w-4 h-4" />
            </MagneticButton>

            <MagneticButton
              className="btn-secondary justify-center"
              onClick={() => window.location.href = `${basePath}/about`}
            >
              About the Studio
            </MagneticButton>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
