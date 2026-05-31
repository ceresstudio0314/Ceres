'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { AnimatedText } from '@/components/ui/AnimatedText'
import { ParallaxSection } from '@/components/ui/ParallaxSection'

export function StudioIntro() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

  return (
    <section className="py-16 md:py-32 bg-ceres-black border-y border-ceres-border relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-35"
        style={{ backgroundImage: `url('${basePath}/images/hero-bg.png')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ceres-black via-ceres-black/75 to-ceres-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-ceres-black/60 via-ceres-blue/10 to-ceres-black/60" />
      <div className="absolute inset-0 bg-noise opacity-25 mix-blend-overlay pointer-events-none" />
      
      <div className="container-narrow text-center relative z-10">
        <ScrollReveal>
          <div className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-ceres-blue to-ceres-blue-dark p-[1px]">
            <div className="w-full h-full bg-ceres-black/80 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <span className="font-display text-2xl text-ceres-blue">CS</span>
            </div>
          </div>
        </ScrollReveal>

        <AnimatedText
          el="h2"
          text="WE DON'T JUST MAKE GAMES. WE FORGE LEGENDS."
          className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 md:mb-8"
        />

        <ScrollReveal delay={0.2}>
          <p className="text-base md:text-xl text-text-secondary font-medium leading-relaxed mb-10 md:mb-12">
            Founded in 2026, Ceres Studios was born from a passion for creating unforgettable gaming experiences. What started as an ambitious indie vision is evolving into a bold force in interactive entertainment. We believe in the power of immersive storytelling, the excitement of perfectly crafted combat, and the wonder of exploring worlds that feel truly alive.
          </p>
        </ScrollReveal>
      </div>

      {/* Floating decorative elements */}
      <ParallaxSection offset={100} speed={0.5} direction="up" className="absolute top-[10%] left-[5%] w-64 h-64 pointer-events-none opacity-20 hidden lg:block">
         <div className="w-full h-full border border-ceres-blue/30 rounded-full" />
      </ParallaxSection>
      <ParallaxSection offset={150} speed={0.8} direction="down" className="absolute bottom-[10%] right-[5%] w-96 h-96 pointer-events-none opacity-10 hidden lg:block">
         <div className="w-full h-full border border-ceres-gold/30 rounded-full" />
      </ParallaxSection>
    </section>
  )
}
