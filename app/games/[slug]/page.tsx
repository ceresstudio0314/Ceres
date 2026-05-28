import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Play, Trophy, Calendar, Gamepad2, ArrowLeft, Star } from 'lucide-react'
import Link from 'next/link'
import { getGameBySlug, games } from '@/lib/data/games'
import { AnimatedText } from '@/components/ui/AnimatedText'
import { MagneticButton } from '@/components/ui/MagneticButton'

export async function generateStaticParams() {
  return games.map((game) => ({
    slug: game.slug,
  }))
}

export default async function GameDetailPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const game = getGameBySlug(params.slug)

  if (!game) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-ceres-black">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full flex items-end pb-24">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${game.heroImage || 'https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=3000&auto=format&fit=crop'}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ceres-black via-ceres-black/60 to-transparent" />
        <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay" />

        <div className="container-wide relative z-10 w-full">
          <Link href="/games" className="inline-flex items-center gap-2 text-text-secondary hover:text-white mb-8 transition-colors text-sm font-medium">
            <ArrowLeft className="w-4 h-4" /> Back to Games
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className={`px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider rounded-full border bg-black/40 backdrop-blur-md
                ${game.status === 'released' ? 'text-emerald-400 border-emerald-500/30' : 
                  game.status === 'coming-soon' ? 'text-ceres-gold border-ceres-gold/30' : 
                  'text-ceres-blue border-ceres-blue/30'}`}
              >
                {game.status.replace('-', ' ')}
              </span>
              {game.genre.map((g) => (
                <span key={g} className="px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider rounded-full border border-white/10 bg-white/5 text-white">
                  {g}
                </span>
              ))}
            </div>

            <AnimatedText
              el="h1"
              text={game.title}
              className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-4 drop-shadow-2xl"
            />
            
            <p className="text-xl md:text-2xl text-ceres-blue font-medium mb-8 max-w-2xl">
              {game.tagline}
            </p>

            <div className="flex flex-wrap gap-4">
              <MagneticButton className="btn-primary">
                Buy Now
              </MagneticButton>
              <MagneticButton className="btn-secondary">
                <Play className="w-4 h-4 fill-current" /> Watch Trailer
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>

      {/* Meta Bar */}
      <div className="border-y border-ceres-border bg-ceres-surface/50 backdrop-blur-md sticky top-[72px] z-40">
        <div className="container-wide py-4 flex flex-wrap gap-8 items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-text-muted" />
              <div>
                <p className="text-[10px] font-mono text-text-muted uppercase">Release Date</p>
                <p className="text-sm font-semibold text-white">{new Date(game.releaseDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
              </div>
            </div>
            <div className="w-px h-8 bg-ceres-border hidden md:block" />
            <div className="flex items-center gap-3">
              <Gamepad2 className="w-5 h-5 text-text-muted" />
              <div>
                <p className="text-[10px] font-mono text-text-muted uppercase">Platforms</p>
                <p className="text-sm font-semibold text-white">{game.platforms.join(', ')}</p>
              </div>
            </div>
          </div>

          {game.rating > 0 && (
            <div className="flex items-center gap-3">
              <div className="flex -space-x-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-5 h-5 text-ceres-gold fill-ceres-gold drop-shadow-md" />
                ))}
              </div>
              <span className="font-display text-2xl text-white mt-1">{game.rating}/10</span>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <section className="py-24 container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <h2 className="font-display text-4xl text-white mb-8">About The Game</h2>
            <div className="prose prose-invert prose-lg max-w-none prose-p:text-text-secondary prose-p:leading-relaxed">
              {game.longDescription.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* Screenshots */}
            {game.screenshots.length > 0 && (
              <div className="mt-16">
                <h3 className="font-display text-3xl text-white mb-6">Gallery</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {game.screenshots.map((ss, i) => (
                    <div key={i} className={`rounded-xl overflow-hidden aspect-video relative group ${i === 0 ? 'sm:col-span-2 aspect-[21/9]' : ''}`}>
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url('${ss || 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop'}')` }}
                      />
                      <div className="absolute inset-0 border border-white/10 rounded-xl pointer-events-none group-hover:border-ceres-blue/50 transition-colors" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-4">
            <div className="glass rounded-2xl p-8 sticky top-40 border-white/5">
              <h3 className="font-mono text-sm uppercase tracking-widest text-text-muted mb-6">Game Info</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-xs text-text-muted uppercase mb-1">Developer</p>
                  <p className="font-semibold text-white">{game.developer}</p>
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase mb-1">Publisher</p>
                  <p className="font-semibold text-white">{game.publisher}</p>
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase mb-1">Tags</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {game.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-white/5 rounded text-xs text-text-secondary">{tag}</span>
                    ))}
                  </div>
                </div>

                {game.awards.length > 0 && (
                  <div className="pt-6 border-t border-white/10">
                    <p className="text-xs text-text-muted uppercase mb-4 flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-ceres-gold" /> Accolades
                    </p>
                    <ul className="space-y-3">
                      {game.awards.map((award, i) => (
                        <li key={i} className="text-sm text-text-secondary leading-snug">
                          {award}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
