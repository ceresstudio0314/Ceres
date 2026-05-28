'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Mail, MessageSquare, Send, Globe } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { GlowCard } from '@/components/ui/GlowCard'
import { ParallaxSection } from '@/components/ui/ParallaxSection'

const locations = [
  {
    city: 'India',
    type: 'Studio HQ',
    address: 'Remote',
    email: 'contact@ceres-studios.com',
  }
]

export default function ContactPage() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('submitting')
    // Simulate API call
    setTimeout(() => setFormState('success'), 1500)
  }

  return (
    <div className="min-h-screen bg-ceres-black pt-32 pb-24 relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-full h-[600px] pointer-events-none opacity-20">
        <ParallaxSection offset={50} direction="down">
          <div className="w-full h-full bg-grid" />
        </ParallaxSection>
      </div>

      <div className="container-wide relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-20">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-6">
              ESTABLISH <span className="text-ceres-blue">CONTACT</span>
            </h1>
            <p className="text-xl text-text-secondary font-medium leading-relaxed">
              Whether you're a player needing support, a creator looking to partner, or press seeking intelligence — we're listening.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Contact Form */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.1}>
              <GlowCard className="p-8 md:p-12">
                <h3 className="font-display text-3xl text-white mb-8 flex items-center gap-3">
                  <MessageSquare className="w-6 h-6 text-ceres-blue" />
                  Send a Message
                </h3>
                
                {formState === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-20 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-6">
                      <Send className="w-6 h-6 text-emerald-400" />
                    </div>
                    <h4 className="font-display text-2xl text-white mb-2">Message Received</h4>
                    <p className="text-text-secondary">Our team will respond to your transmission shortly.</p>
                    <button 
                      onClick={() => setFormState('idle')}
                      className="mt-8 text-ceres-blue text-sm font-semibold hover:text-white transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-mono text-text-muted uppercase tracking-wider">Name</label>
                        <input required type="text" className="w-full bg-ceres-black border border-ceres-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-ceres-blue transition-colors" placeholder="Commander Shepard" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-mono text-text-muted uppercase tracking-wider">Email</label>
                        <input required type="email" className="w-full bg-ceres-black border border-ceres-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-ceres-blue transition-colors" placeholder="shepard@normandy.sr2" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-text-muted uppercase tracking-wider">Inquiry Type</label>
                      <select required className="w-full bg-ceres-black border border-ceres-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-ceres-blue transition-colors appearance-none">
                        <option value="">Select an option...</option>
                        <option value="support">Player Support</option>
                        <option value="press">Press / Media</option>
                        <option value="creator">Creator Partnership</option>
                        <option value="business">Business Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono text-text-muted uppercase tracking-wider">Message</label>
                      <textarea required rows={6} className="w-full bg-ceres-black border border-ceres-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-ceres-blue transition-colors resize-none" placeholder="Enter your transmission here..."></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={formState === 'submitting'}
                      className="btn-primary w-full justify-center"
                    >
                      {formState === 'submitting' ? 'Transmitting...' : 'Send Transmission'}
                    </button>
                  </form>
                )}
              </GlowCard>
            </ScrollReveal>
          </div>

          {/* Locations */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                {locations.map((loc) => (
                  <div key={loc.city} className="flex gap-4 p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                    <div className="w-10 h-10 rounded-full bg-ceres-blue/10 border border-ceres-blue/30 flex items-center justify-center shrink-0">
                      <Globe className="w-4 h-4 text-ceres-blue" />
                    </div>
                    <div>
                      <h4 className="font-display text-xl text-white mb-1">{loc.city}</h4>
                      <p className="text-xs font-mono text-text-muted uppercase tracking-wider mb-3">{loc.type}</p>
                      
                      <div className="space-y-2 text-sm text-text-secondary">
                        <p className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-text-muted shrink-0 mt-0.5" />
                          {loc.address}
                        </p>
                        <p className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-text-muted shrink-0" />
                          <a href={`mailto:${loc.email}`} className="hover:text-ceres-blue transition-colors">{loc.email}</a>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </div>
  )
}
