'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { MagneticButton } from '@/components/ui/MagneticButton'

export function CareersCTA() {
  return (
    <section className="relative py-32 bg-ceres-black overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[800px] opacity-10 pointer-events-none">
        <div className="w-full h-full border-[40px] border-ceres-blue rounded-full blur-[10px] transform translate-x-1/3" />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <ScrollReveal>
              <h2 className="section-label">Join The Vanguard</h2>
              <h3 className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-6">
                BUILD <br />
                <span className="text-ceres-blue">WORLDS</span> <br />
                WITH US
              </h3>
              <p className="text-text-secondary text-lg mb-10 max-w-md">
                We are always looking for visionary artists, engineers, and storytellers to help us forge the next generation of interactive entertainment.
              </p>
              
              <div className="flex items-center gap-4">
                <MagneticButton className="btn-primary" onClick={() => window.location.href = '/careers'}>
                  View Open Roles <ArrowRight className="w-4 h-4" />
                </MagneticButton>
                <MagneticButton className="btn-ghost" onClick={() => window.location.href = '/about#culture'}>
                  Our Culture
                </MagneticButton>
              </div>
            </ScrollReveal>
          </div>

          <div className="relative">
            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <div className="aspect-[3/4] rounded-2xl bg-ceres-surface overflow-hidden border border-ceres-border">
                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop')" }} />
                  </div>
                  <div className="aspect-square rounded-2xl bg-ceres-surface overflow-hidden border border-ceres-border">
                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop')" }} />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="aspect-square rounded-2xl bg-ceres-surface overflow-hidden border border-ceres-border">
                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop')" }} />
                  </div>
                  <div className="aspect-[3/4] rounded-2xl bg-ceres-surface overflow-hidden border border-ceres-border">
                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop')" }} />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
