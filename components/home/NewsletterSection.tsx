'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function NewsletterSection() {
  return (
    <section className="py-24 border-y border-ceres-border bg-ceres-black relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-ceres-blue/5 blur-[120px] pointer-events-none" />

      <div className="container-narrow relative z-10 text-center">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
            JOIN THE CERES INSIDER
          </h2>
          <p className="text-text-secondary text-lg mb-10 max-w-2xl mx-auto">
            Get exclusive developer updates, early access to closed betas, and invitations to global community events.
          </p>

          <form 
            className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-ceres-surface border border-ceres-border rounded-xl px-6 py-4 text-white placeholder:text-text-muted focus:outline-none focus:border-ceres-blue focus:ring-1 focus:ring-ceres-blue transition-all"
              required
            />
            <button type="submit" className="btn-primary py-4 px-8">
              Subscribe
            </button>
          </form>
          
          <p className="text-xs text-text-muted mt-6 font-mono">
            By subscribing, you agree to our Privacy Policy. You can unsubscribe at any time.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
