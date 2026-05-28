import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Clock, Share2, Twitter, Linkedin, Facebook } from 'lucide-react'
import { getArticleBySlug, newsArticles } from '@/lib/data/news'
import { formatDate } from '@/lib/utils'

export async function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }))
}

export default async function ArticlePage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const article = getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-ceres-black pt-32 pb-24">
      <div className="container-narrow">
        
        <Link href="/news" className="inline-flex items-center gap-2 text-text-secondary hover:text-white mb-10 transition-colors text-sm font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to Transmissions
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-ceres-blue/10 border border-ceres-blue/30 rounded-full text-xs font-mono font-bold text-ceres-blue uppercase tracking-wider">
              {article.category.replace('-', ' ')}
            </span>
            <span className="text-xs text-text-muted font-mono uppercase tracking-widest flex items-center gap-2">
              <Clock className="w-3.5 h-3.5" /> {article.readTime} min read
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            {article.title}
          </h1>

          <p className="text-xl text-text-secondary font-medium mb-8 leading-relaxed">
            {article.excerpt}
          </p>

          <div className="flex items-center justify-between py-6 border-y border-ceres-border">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-ceres-border overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${article.author.avatar})`}} />
              <div>
                <p className="text-sm font-semibold text-white">{article.author.name}</p>
                <p className="text-xs text-text-muted font-mono uppercase">{article.author.role} • {formatDate(article.publishedAt)}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-text-muted font-mono uppercase mr-2 hidden sm:block">Share</span>
              <button className="w-8 h-8 rounded-full border border-ceres-border flex items-center justify-center text-text-secondary hover:text-white hover:border-white transition-colors">
                <Twitter className="w-3.5 h-3.5" />
              </button>
              <button className="w-8 h-8 rounded-full border border-ceres-border flex items-center justify-center text-text-secondary hover:text-white hover:border-white transition-colors">
                <Linkedin className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <div className="aspect-[21/9] w-full rounded-2xl overflow-hidden mb-16 relative">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${article.coverImage}')` }}
          />
          <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:font-normal prose-h2:text-4xl prose-h3:text-3xl prose-a:text-ceres-blue prose-a:no-underline hover:prose-a:underline prose-p:text-text-secondary prose-p:leading-relaxed prose-strong:text-white">
          {article.content.split('\n\n').map((paragraph, i) => {
            // Very basic markdown parsing for bold text just for visual flair in the mock data
            if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
              return <h3 key={i} className="mt-10 mb-4">{paragraph.replace(/\*\*/g, '')}</h3>
            }
            return <p key={i}>{paragraph}</p>
          })}
        </div>

        {/* Tags */}
        <div className="mt-16 pt-8 border-t border-ceres-border">
          <div className="flex flex-wrap gap-2">
            {article.tags.map(tag => (
              <span key={tag} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-mono text-text-muted uppercase tracking-wider hover:bg-white/10 transition-colors cursor-pointer">
                #{tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
