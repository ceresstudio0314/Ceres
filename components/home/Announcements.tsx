'use client'

import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import { getFeaturedArticles } from '@/lib/data/news'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { GlowCard } from '@/components/ui/GlowCard'
import { formatDate } from '@/lib/utils'

export function Announcements() {
  const articles = getFeaturedArticles().slice(0, 3)

  return (
    <section className="py-24 md:py-32 bg-ceres-black relative">
      <div className="container-wide">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="section-label">Transmission</h2>
              <h3 className="font-display text-4xl md:text-5xl text-white">Latest Intelligence</h3>
            </div>
            <Link href="/news" className="btn-ghost group">
              View All Transmissions 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <ScrollReveal key={article.id} delay={index * 0.1}>
              <GlowCard className="h-full group card-hover flex flex-col">
                <Link href={`/news/${article.slug}`} className="flex flex-col h-full">
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ 
                        backgroundImage: `url('${article.coverImage || 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop'}')` 
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ceres-surface via-transparent to-transparent opacity-80" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-mono font-bold text-white uppercase tracking-wider">
                        {article.category.replace('-', ' ')}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-xs text-text-muted font-mono mb-4">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {formatDate(article.publishedAt)}
                      </span>
                      <span>•</span>
                      <span>{article.readTime} min read</span>
                    </div>
                    
                    <h4 className="font-display text-2xl text-white mb-3 group-hover:text-ceres-blue transition-colors line-clamp-2">
                      {article.title}
                    </h4>
                    
                    <p className="text-sm text-text-secondary line-clamp-3 mb-6 flex-1">
                      {article.excerpt}
                    </p>

                    <div className="mt-auto pt-4 border-t border-ceres-border flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-ceres-border overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${article.author.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop'})`}} />
                      <div>
                        <p className="text-xs font-semibold text-white">{article.author.name}</p>
                        <p className="text-[10px] text-text-muted font-mono uppercase">{article.author.role}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
