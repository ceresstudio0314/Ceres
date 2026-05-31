'use client'

import { motion } from 'framer-motion'
import { Trophy, Users, Globe, Target, ArrowRight, Star, Heart, Sword } from 'lucide-react'
import { leadershipTeam, studioTimeline, studioAwards } from '@/lib/data/team'
import { AnimatedText } from '@/components/ui/AnimatedText'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { CountUp } from '@/components/ui/CountUp'
import { GlowCard } from '@/components/ui/GlowCard'
import { ParallaxSection } from '@/components/ui/ParallaxSection'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-ceres-black pt-28 md:pt-32 pb-16 md:pb-24">
      
      {/* Hero Section */}
      <section className="relative min-h-[460px] md:h-[60vh] md:min-h-[500px] flex items-center justify-center text-center px-4 overflow-hidden mb-16 md:mb-24">
        <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay z-10" />
        <ParallaxSection offset={100} speed={0.3} className="absolute inset-0">
           <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1614294149010-950b698f72c0?q=80&w=2500&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
        </ParallaxSection>
        <div className="absolute inset-0 bg-gradient-to-t from-ceres-black via-transparent to-ceres-black z-10" />

        <div className="relative z-20 max-w-4xl">
          <ScrollReveal>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-6 drop-shadow-2xl">
              FORGED IN <span className="text-ceres-blue">DARKNESS</span>
            </h1>
            <p className="text-base md:text-2xl text-text-secondary font-medium leading-relaxed">
              We are a collective of dreamers, builders, and storytellers redefining the boundaries of interactive entertainment.
            </p>
          </ScrollReveal>
        </div>
      </section>



      {/* History Timeline */}
      <section className="py-16 md:py-24 bg-ceres-surface border-y border-ceres-border relative overflow-hidden mb-20 md:mb-32">
        <div className="container-narrow relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-20">
              <h2 className="section-label">Our Story</h2>
              <h3 className="font-display text-4xl md:text-5xl text-white">Your Story</h3>
            </div>
          </ScrollReveal>

          <div className="mx-auto max-w-3xl py-8 text-left md:text-center">
            <ScrollReveal delay={0.1}>
              <div className="space-y-6 text-base md:text-xl text-text-secondary leading-relaxed">
                <p>
                  Ceres Studios was born from a vision beyond Earth.
                </p>
                <p>
                  Inspired by the dwarf planet Ceres, a symbol of mystery, exploration, and the unknown, our studio was created to build worlds that players don't just play, but truly experience.
                </p>
                <p>
                  What started as a dream driven by passion and imagination is evolving into a new force in interactive entertainment. We believe great games are built on immersive storytelling, meaningful exploration, cinematic worlds, and combat that feels powerful in every moment.
                </p>
                <p>
                  At Ceres Studios, we are crafting experiences that spark emotion, inspire curiosity, and leave lasting memories long after the journey ends.
                </p>
                <p className="font-display text-3xl md:text-4xl text-white leading-none">
                  We don't just make games.
                </p>
                <p className="font-display text-4xl md:text-5xl text-ceres-blue leading-none">
                  We forge legends among the stars.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>



      {/* Leadership */}
      <section id="leadership" className="py-16 md:py-24 bg-ceres-black relative overflow-hidden mb-20 md:mb-32 scroll-mt-32">
        <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-ceres-blue/30 to-transparent" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ceres-blue/5 blur-[100px] pointer-events-none" />

        <div className="container-narrow relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="section-label">Leadership</h2>
              <h3 className="font-display text-4xl md:text-5xl text-white">Driven By Vision</h3>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="glass border border-ceres-border rounded-2xl p-5 sm:p-8 md:p-12 text-left md:text-center">
              <p className="text-base md:text-xl text-text-secondary leading-relaxed">
                Ceres Studios is driven by a passion for immersive storytelling, unforgettable worlds, and cinematic gameplay. Built on creativity, ambition, and innovation, our vision is to create experiences that inspire players and leave a lasting impact beyond the screen.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>



      {/* Locations */}
      <section className="py-16 md:py-24 bg-ceres-black relative overflow-hidden" id="locations">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-full bg-ceres-blue/5 blur-[100px] pointer-events-none" />
        
        <div className="container-wide relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="section-label">Studio Location</h2>
              <h3 className="font-display text-4xl md:text-5xl text-white">Based in India. Available Everywhere.</h3>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'India', status: 'Studio HQ', image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800&auto=format&fit=crop' },
              { name: 'Remote', status: 'Global', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop' }
            ].map((location, i) => (
              <ScrollReveal key={location.name} delay={i * 0.1}>
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden group">
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${location.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ceres-black via-ceres-black/40 to-transparent" />
                  <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none group-hover:border-ceres-blue/50 transition-colors" />
                  
                  <div className="absolute bottom-6 left-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Globe className="w-4 h-4 text-ceres-blue" />
                      <span className="font-mono text-[10px] text-ceres-blue uppercase tracking-widest font-bold">{location.status}</span>
                    </div>
                    <h4 className="font-display text-4xl text-white">{location.name}</h4>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
