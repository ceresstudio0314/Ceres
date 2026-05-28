'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { Game } from '@/lib/data/games'
import { GlowCard } from '@/components/ui/GlowCard'
import { cardImageHover } from '@/lib/animations'

interface GameCardProps {
  game: Game
}

export function GameCard({ game }: GameCardProps) {
  return (
    <GlowCard className="h-full group card-hover flex flex-col">
      <Link href={`/games/${game.slug}`} className="flex flex-col h-full">
        <div className="relative aspect-[3/4] overflow-hidden">
          <motion.div
            variants={cardImageHover}
            initial="rest"
            whileHover="hover"
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${game.coverImage || 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop'}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ceres-surface via-ceres-surface/20 to-transparent opacity-90" />
          
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            <span className={`px-2.5 py-1 backdrop-blur-md border rounded-full text-[10px] font-mono font-bold uppercase tracking-wider w-max
              ${game.status === 'released' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' : 
                game.status === 'coming-soon' ? 'bg-ceres-gold/20 text-ceres-gold border-ceres-gold/30' : 
                'bg-ceres-blue/20 text-ceres-blue border-ceres-blue/30'}`}
            >
              {game.status.replace('-', ' ')}
            </span>
          </div>

          {game.rating > 0 && (
            <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/60 backdrop-blur-md border border-white/10 px-2 py-1 rounded-lg">
              <Star className="w-3 h-3 text-ceres-gold fill-ceres-gold" />
              <span className="text-xs font-mono font-bold text-white">{game.rating}</span>
            </div>
          )}
        </div>

        <div className="p-6 flex flex-col flex-1 bg-ceres-surface">
          <h3 className="font-display text-2xl text-white mb-2 group-hover:text-ceres-blue transition-colors line-clamp-1">
            {game.title}
          </h3>
          <p className="text-sm text-text-secondary line-clamp-2 mb-4 flex-1">
            {game.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mt-auto">
            {game.platforms.map((platform) => (
              <span key={platform} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono text-text-muted uppercase">
                {platform}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </GlowCard>
  )
}
