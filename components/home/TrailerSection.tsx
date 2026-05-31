'use client'

import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ParallaxSection } from '@/components/ui/ParallaxSection'
import { Gamepad2, Sparkles } from 'lucide-react'

export function TrailerSection() {
  return (
    <section className="relative py-20 md:py-32 min-h-[560px] md:min-h-[600px] w-full overflow-hidden bg-ceres-black flex items-center">
      {/* Background with Parallax */}
      <ParallaxSection offset={150} speed={0.4} direction="down" className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2500&auto=format&fit=crop')`,
          }}
        />
      </ParallaxSection>

      <div className="absolute inset-0 bg-gradient-to-t from-ceres-black via-ceres-black/40 to-ceres-black z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ceres-blue/5 to-transparent z-10" />

      {/* Animated glow orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[700px] md:h-[700px] bg-ceres-blue/5 rounded-full blur-[120px] pointer-events-none z-10" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-ceres-gold/5 rounded-full blur-[80px] pointer-events-none z-10" />

      {/* Content */}
      <div className="relative z-20 w-full container-wide">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            {/* Label */}
            <div className="flex items-center justify-center gap-3 mb-6 md:mb-8">
              <span className="h-px w-6 sm:w-10 bg-ceres-blue/60" />
              <span className="font-mono text-[10px] sm:text-xs tracking-[0.14em] sm:tracking-[0.25em] text-ceres-blue uppercase font-bold flex items-center gap-2">
                <Sparkles className="w-3 h-3" />
                First Project Reveal
              </span>
              <span className="h-px w-6 sm:w-10 bg-ceres-blue/60" />
            </div>

            <h2 className="font-display text-4xl xs:text-5xl md:text-7xl lg:text-8xl text-white drop-shadow-2xl mb-6 md:mb-8 leading-none">
              SOMETHING<br />
              <span className="text-ceres-blue">IS COMING</span>
            </h2>

            <p className="text-text-secondary text-base md:text-xl max-w-xl mx-auto mb-10 md:mb-12 leading-relaxed">
              Our debut 2D game is in active development. A handcrafted experience built with passion — more details dropping soon.
            </p>

            {/* Status indicator */}
            <div className="inline-flex max-w-full flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-3 sm:gap-4 px-4 sm:px-6 py-4 rounded-2xl border border-ceres-border bg-ceres-surface/50 backdrop-blur-sm">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-ceres-blue animate-pulse" />
                <span className="font-mono text-xs text-ceres-blue uppercase tracking-widest font-bold">In Development</span>
              </span>
              <span className="hidden sm:block w-px h-4 bg-ceres-border" />
              <span className="flex items-center gap-2">
                <Gamepad2 className="w-3.5 h-3.5 text-text-muted" />
                <span className="font-mono text-xs text-text-muted uppercase tracking-widest">2D Game · PC</span>
              </span>
              <span className="hidden sm:block w-px h-4 bg-ceres-border" />
              <span className="font-mono text-xs text-ceres-gold uppercase tracking-widest font-bold">Release: TBA</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
