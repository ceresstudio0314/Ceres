'use client'

import { Suspense, useEffect, useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, Search, ArrowRight } from 'lucide-react'
import { newsArticles } from '@/lib/data/news'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { GlowCard } from '@/components/ui/GlowCard'
import { formatDate } from '@/lib/utils'
import { staggerContainer, fadeUp } from '@/lib/animations'

const categories = ['All', 'update', 'award', 'community']

function NewsContent() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get('category')
  const [activeCategory, setActiveCategory] = useState(
    initialCategory && categories.includes(initialCategory) ? initialCategory : 'All'
  )
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    setActiveCategory(
      initialCategory && categories.includes(initialCategory) ? initialCategory : 'All'
    )
  }, [initialCategory])

  const visibleArticles = newsArticles.filter(a => a.category !== 'announcement' && a.category !== 'dev-diary')
  const featuredArticle = visibleArticles.find(a => a.featured)
  const remainingArticles = visibleArticles.filter(a => a.id !== featuredArticle?.id)

  const filteredArticles = remainingArticles.filter(article => {
    const matchesCategory = activeCategory === 'All' || article.category === activeCategory
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-ceres-black pt-32 pb-24 relative">
      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-ceres-blue/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-wide relative z-10">
        <ScrollReveal>
          <div className="mb-16">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-6">
              STUDIO <span className="text-ceres-blue">TRANSMISSIONS</span>
            </h1>
            <p className="text-xl text-text-secondary font-medium max-w-2xl">
              The latest intelligence, development updates, and community highlights from Ceres Studios.
            </p>
          </div>
        </ScrollReveal>

        {/* Featured Article */}
        {featuredArticle && activeCategory === 'All' && !searchQuery && (
          <ScrollReveal delay={0.1}>
            <Link href={`/news/${featuredArticle.slug}`} className="block group mb-20">
              <div className="relative rounded-3xl overflow-hidden border border-ceres-border bg-ceres-surface">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="aspect-[4/3] lg:aspect-auto relative overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${featuredArticle.coverImage}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ceres-surface lg:from-transparent lg:bg-gradient-to-r via-ceres-surface/20 to-transparent" />
                  </div>
                  
                  <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="px-3 py-1 bg-ceres-blue/10 border border-ceres-blue/30 rounded-full text-xs font-mono font-bold text-ceres-blue uppercase tracking-wider">
                        Featured
                      </span>
                      <span className="text-xs text-text-muted font-mono uppercase tracking-widest">
                        {featuredArticle.category.replace('-', ' ')}
                      </span>
                    </div>

                    <h2 className="font-display text-4xl md:text-5xl text-white mb-6 group-hover:text-ceres-blue transition-colors">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-lg text-text-secondary mb-8 line-clamp-3">
                      {featuredArticle.excerpt}
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-8 border-t border-ceres-border">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-ceres-border overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${featuredArticle.author.avatar})`}} />
                        <div>
                          <p className="text-sm font-semibold text-white">{featuredArticle.author.name}</p>
                          <p className="text-xs text-text-muted font-mono uppercase flex items-center gap-2">
                            <Clock className="w-3 h-3" /> {formatDate(featuredArticle.publishedAt)}
                          </p>
                        </div>
                      </div>
                      
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-ceres-blue group-hover:border-ceres-blue group-hover:text-white transition-all text-text-muted">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        )}

        {/* Filters & Search */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12 pb-6 border-b border-ceres-border">
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-widest transition-all ${
                    activeCategory === cat 
                      ? 'bg-white text-ceres-black font-bold' 
                      : 'text-text-muted hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {cat.replace('-', ' ')}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
              <input 
                type="text" 
                placeholder="Search transmissions..." 
                className="w-full bg-ceres-surface border border-ceres-border rounded-lg pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-ceres-blue transition-colors"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Article Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredArticles.map(article => (
              <motion.div key={article.id} layout variants={fadeUp} exit={{ opacity: 0, scale: 0.9 }}>
                <GlowCard className="h-full group card-hover flex flex-col">
                  <Link href={`/news/${article.slug}`} className="flex flex-col h-full">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url('${article.coverImage}')` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ceres-surface via-transparent to-transparent opacity-90" />
                      
                      <div className="absolute top-4 left-4">
                        <span className="px-2.5 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-mono font-bold text-white uppercase tracking-wider">
                          {article.category.replace('-', ' ')}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <h4 className="font-display text-2xl text-white mb-3 group-hover:text-ceres-blue transition-colors line-clamp-2">
                        {article.title}
                      </h4>
                      <p className="text-sm text-text-secondary line-clamp-3 mb-6 flex-1">
                        {article.excerpt}
                      </p>

                      <div className="mt-auto pt-4 border-t border-ceres-border flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-ceres-border overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${article.author.avatar})`}} />
                          <div className="text-xs font-mono text-text-muted">
                            <span className="text-white font-sans font-semibold block">{article.author.name}</span>
                            {formatDate(article.publishedAt)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </GlowCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-20">
            <p className="text-text-muted font-mono">No transmissions found matching your criteria.</p>
          </div>
        )}

      </div>
    </div>
  )
}

export default function NewsPage() {
  return (
    <Suspense fallback={null}>
      <NewsContent />
    </Suspense>
  )
}
