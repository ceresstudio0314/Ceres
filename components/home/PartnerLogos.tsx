'use client'

import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Gamepad2, Palette, Globe2, Cpu, Smartphone, Box } from 'lucide-react'

const tools = [
  { name: 'PC Platform', icon: Cpu },
  { name: 'Mobile Platform', icon: Smartphone },
  { name: 'Game Development', icon: Gamepad2 },
  { name: 'Indie Publisher', icon: Globe2 },
  { name: '2D Art & Animation', icon: Palette },
  { name: '3D Art & Animation', icon: Box },
]

export function PartnerLogos() {
  return (
    <section className="py-20 border-y border-ceres-border bg-ceres-surface overflow-hidden">
      <div className="container-wide mb-10 text-center">
        <ScrollReveal>
          <p className="text-xs font-mono font-semibold text-text-muted uppercase tracking-[0.2em]">
            Crafted with expertise in
          </p>
        </ScrollReveal>
      </div>

      {/* Infinite Marquee */}
      <div className="relative w-full flex overflow-x-hidden">
        {/* Gradient Fades */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-ceres-surface to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-ceres-surface to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee whitespace-nowrap items-center">
          {[...tools, ...tools, ...tools].map((tool, index) => {
            const Icon = tool.icon
            return (
              <div
                key={index}
                className="mx-10 lg:mx-16 flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-300"
              >
                <Icon className="w-5 h-5 text-ceres-blue flex-shrink-0" />
                <span className="font-display text-2xl text-white tracking-wider whitespace-nowrap">
                  {tool.name}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
