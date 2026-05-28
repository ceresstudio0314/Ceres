'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Briefcase, ChevronRight, Globe, Zap, Users, Filter } from 'lucide-react'
import { jobPostings, departments } from '@/lib/data/jobs'
import { AnimatedText } from '@/components/ui/AnimatedText'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { GlowCard } from '@/components/ui/GlowCard'

export default function CareersPage() {
  const [activeDept, setActiveDept] = useState<string | null>(null)

  const filteredJobs = activeDept 
    ? jobPostings.filter(job => job.department === activeDept)
    : jobPostings

  return (
    <div className="min-h-screen bg-ceres-black pt-32 pb-24">
      {/* Hero */}
      <section className="relative container-wide mb-24">
        <ScrollReveal>
          <div className="max-w-4xl">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-6">
              FORGE <span className="text-ceres-blue">LEGENDS</span>
            </h1>
            <p className="text-xl text-text-secondary font-medium leading-relaxed max-w-2xl mb-8">
              Join a collective of world-class artists, engineers, and storytellers building the next generation of interactive entertainment. 
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => document.getElementById('open-roles')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                View Open Roles
              </button>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-ceres-surface border-y border-ceres-border mb-24">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="section-label">Life at Ceres</h2>
              <h3 className="font-display text-4xl md:text-5xl text-white">We Take Care of Our Own</h3>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <BenefitCard icon={Globe} title="Remote First" desc="Work from anywhere in India. We are a fully distributed team." />
            <BenefitCard icon={Zap} title="Creative Freedom" desc="Have a direct impact on the game's direction from day one." />
            <BenefitCard icon={Users} title="Small Team" desc="No corporate bureaucracy. Just passionate developers making games." />
            <BenefitCard icon={Briefcase} title="Growth" desc="Learn by doing, building a game from scratch to launch." />
          </div>
        </div>
      </section>

      {/* Jobs Listing */}
      <section id="open-roles" className="container-wide scroll-mt-32">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Sidebar Filters */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="sticky top-24">
                <div className="flex items-center gap-2 mb-6 text-white font-mono text-sm uppercase tracking-widest">
                  <Filter className="w-4 h-4 text-ceres-blue" /> Departments
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => setActiveDept(null)}
                    className={`text-left px-4 py-2 rounded-lg text-sm transition-colors ${
                      activeDept === null ? 'bg-ceres-blue text-white font-semibold' : 'text-text-secondary hover:text-white hover:bg-white/5'
                    }`}
                  >
                    All Roles
                  </button>
                  {departments.map(dept => {
                    const count = jobPostings.filter(j => j.department === dept).length
                    if (count === 0) return null
                    
                    return (
                      <button
                        key={dept}
                        onClick={() => setActiveDept(dept)}
                        className={`text-left px-4 py-2 rounded-lg text-sm transition-colors flex justify-between items-center ${
                          activeDept === dept ? 'bg-ceres-blue text-white font-semibold' : 'text-text-secondary hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {dept}
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${activeDept === dept ? 'bg-white/20' : 'bg-white/10'}`}>
                          {count}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Jobs List */}
            <div className="flex-1">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-display text-3xl text-white">
                  {activeDept || 'All Open Roles'} <span className="text-text-muted">({filteredJobs.length})</span>
                </h3>
              </div>

              <div className="flex flex-col gap-4">
                <AnimatePresence mode="popLayout">
                  {filteredJobs.map(job => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      key={job.id}
                    >
                      <Link href={`#`} className="block group">
                        <GlowCard className="p-6 transition-all duration-300 group-hover:border-ceres-blue/50">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                              <div className="flex items-center gap-3 mb-2">
                                <span className="text-[10px] font-mono font-bold text-ceres-blue uppercase tracking-widest px-2 py-1 bg-ceres-blue/10 rounded">
                                  {job.department}
                                </span>
                                {job.featured && (
                                  <span className="text-[10px] font-mono font-bold text-ceres-gold uppercase tracking-widest px-2 py-1 bg-ceres-gold/10 rounded border border-ceres-gold/20">
                                    Hot Role
                                  </span>
                                )}
                              </div>
                              <h4 className="font-display text-2xl text-white mb-2 group-hover:text-ceres-blue transition-colors">
                                {job.title}
                              </h4>
                              <div className="flex flex-wrap items-center gap-4 text-xs text-text-muted font-mono">
                                <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {job.location}</span>
                                <span className="flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5" /> {job.type} • {job.remote}</span>
                              </div>
                            </div>
                            
                            <div className="flex items-center justify-between md:justify-end gap-6 mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-ceres-border">
                              {job.salary && (
                                <span className="text-sm font-semibold text-text-secondary">{job.salary}</span>
                              )}
                              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-ceres-blue group-hover:border-ceres-blue group-hover:text-white transition-all text-text-muted">
                                <ChevronRight className="w-5 h-5" />
                              </div>
                            </div>
                          </div>
                        </GlowCard>
                      </Link>
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                {filteredJobs.length === 0 && (
                  <div className="p-12 text-center border border-dashed border-ceres-border rounded-2xl">
                    <p className="text-text-muted">No open roles in this department right now.</p>
                    <button onClick={() => setActiveDept(null)} className="mt-4 text-ceres-blue text-sm hover:underline">
                      View all roles
                    </button>
                  </div>
                )}
              </div>
            </div>
            
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}

function BenefitCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="p-6 rounded-2xl border border-ceres-border bg-ceres-black/50 hover:bg-ceres-black transition-colors group">
      <div className="w-12 h-12 rounded-xl bg-ceres-blue/10 border border-ceres-blue/30 flex items-center justify-center mb-6 group-hover:bg-ceres-blue group-hover:border-ceres-blue transition-colors">
        <Icon className="w-6 h-6 text-ceres-blue group-hover:text-white transition-colors" />
      </div>
      <h4 className="font-display text-xl text-white mb-2">{title}</h4>
      <p className="text-sm text-text-secondary">{desc}</p>
    </div>
  )
}
