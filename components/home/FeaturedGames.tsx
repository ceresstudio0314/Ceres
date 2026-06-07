'use client'

import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import { getFeaturedGames } from '@/lib/data/games'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { motion } from 'framer-motion'

export function FeaturedGames() {
  const game = getFeaturedGames()[0]
  if (!game) return null

  return (
    <section className="py-16 md:py-32 bg-ceres-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 md:w-[600px] md:h-[600px] bg-ceres-blue/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-60 h-60 md:w-96 md:h-96 bg-ceres-gold/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-wide">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10 md:mb-14">
            <div>
              <h2 className="section-label">Our Worlds</h2>
              <h3 className="font-display text-4xl md:text-5xl lg:text-6xl text-white">Featured Games</h3>
            </div>
            <Link href="/games" className="btn-ghost group">
              View All Games
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl overflow-hidden border border-ceres-border bg-ceres-surface group max-w-5xl mx-auto"
          >
            {/* Top "coming soon" banner */}
            <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-center px-4 py-3 bg-gradient-to-r from-ceres-blue/20 via-ceres-blue/30 to-ceres-blue/20 border-b border-ceres-blue/30 backdrop-blur-sm">
              <span className="flex items-center gap-2 text-center text-ceres-blue font-mono text-[10px] sm:text-xs font-bold uppercase tracking-[0.12em] sm:tracking-[0.2em]">
                <span className="w-1.5 h-1.5 rounded-full bg-ceres-blue animate-pulse" />
                Currently In Development
                <span className="w-1.5 h-1.5 rounded-full bg-ceres-blue animate-pulse" />
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[480px]">
              {/* Left: Visual panel */}
              <div className="relative overflow-hidden bg-ceres-black min-h-[360px] lg:min-h-auto">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${game.coverImage}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ceres-black/70 via-ceres-black/10 to-ceres-black/15" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-ceres-black/20" />
                <div className="absolute inset-0 bg-noise opacity-10 mix-blend-overlay" />
                <div className="absolute bottom-5 left-5 right-5 z-10">
                  <span className="inline-flex rounded-full border border-ceres-blue/30 bg-ceres-black/60 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest text-ceres-blue backdrop-blur-md">
                    Upcoming 2D Game
                  </span>
                </div>

                {/* Bottom gradient fade */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ceres-surface to-transparent lg:hidden" />
              </div>

              {/* Right: Info panel */}
              <div className="p-5 pt-8 sm:p-8 md:p-12 lg:pt-20 flex flex-col justify-center">
                {/* Status badge */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6">
                  <span className="px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest rounded-full border bg-ceres-gold/10 text-ceres-gold border-ceres-gold/30">
                    Upcoming
                  </span>
                  <span className="px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest rounded-full border border-ceres-blue/30 text-ceres-blue bg-ceres-blue/10">
                    2D Game
                  </span>
                  <span className="px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest rounded-full border border-white/10 text-text-muted">
                    First Project
                  </span>
                </div>

                <h4 className="font-display text-4xl md:text-5xl text-white mb-4 group-hover:text-ceres-blue transition-colors duration-300">
                  {game.title}
                </h4>

                <p className="text-text-secondary text-base leading-relaxed mb-8 max-w-md">
                  {game.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-10">
                  {game.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 text-[10px] font-mono text-text-muted border border-ceres-border rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 pt-6 border-t border-ceres-border">
                  <div className="flex items-center gap-2 text-xs text-text-muted font-mono">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Release Date: TBA</span>
                  </div>
                  <span className="text-ceres-border">•</span>
                  <span className="text-xs text-text-muted font-mono">By {game.developer}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
