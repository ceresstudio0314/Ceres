'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'

export default function GamesPage() {

  return (
    <div className="min-h-screen bg-ceres-black pt-28 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-ceres-blue/5 to-transparent pointer-events-none" />
      
      <div className="container-wide relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h1 className="font-display text-5xl md:text-7xl text-white mb-6">OUR WORLDS</h1>
            <p className="text-base md:text-lg text-text-secondary">
              We are a new indie studio with our first game in development. More worlds are on the way.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="text-center py-20 md:py-32">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-ceres-blue/10 border border-ceres-blue/30 mb-6">
              <span className="font-display text-2xl text-ceres-blue">C</span>
            </div>
            <h2 className="font-display text-3xl text-white mb-4">Titles Coming Soon</h2>
            <p className="text-text-muted">We are currently forging our next generation of worlds.</p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
