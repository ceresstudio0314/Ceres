'use client'

import Link from 'next/link'
import { Twitter, Instagram, Youtube, Linkedin, Github, Twitch, Mail, MapPin } from 'lucide-react'
import { NewsletterForm } from '@/components/ui/NewsletterForm'

export function Footer() {
  return (
    <footer className="relative bg-ceres-black overflow-hidden pt-16 md:pt-24 pb-10 md:pb-12 border-t border-ceres-border">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 md:w-[800px] h-[300px] md:h-[400px] bg-ceres-blue/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14 md:mb-20">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="flex items-center group mb-6">
              <span className="font-display text-2xl tracking-[0.15em] text-white group-hover:text-ceres-blue transition-colors duration-300">Ceresstudio</span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-w-sm mb-8">
              Forged in Darkness. Built for Legends. We are an independent AAA game development studio crafting cinematic, story-driven experiences across PC and consoles.
            </p>
            <div className="flex items-center gap-4">
              <SocialLink href="#" icon={Twitter} label="Twitter" />
              <SocialLink href="https://www.instagram.com/ceresstudio.in/" icon={Instagram} label="Instagram" />
            </div>
          </div>

          {/* Links Cols */}
          <div className="lg:col-span-2">
            <h4 className="font-mono font-semibold text-white tracking-widest uppercase text-sm mb-6">Games</h4>
            <ul className="flex flex-col gap-3">
              <span className="text-text-secondary text-sm">Coming Soon</span>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-mono font-semibold text-white tracking-widest uppercase text-sm mb-6">Studio</h4>
            <ul className="flex flex-col gap-3">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
              <FooterLink href="/news">News & Blog</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Newsletter / Contact Col */}
          <div className="lg:col-span-4">
            <h4 className="font-mono font-semibold text-white tracking-widest uppercase text-sm mb-6">Join the Insider</h4>
            <p className="text-text-secondary text-sm mb-4">
              Get exclusive development updates, early access to betas, and community event invites.
            </p>
            <NewsletterForm compact />

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm text-text-secondary">
                <Mail className="w-4 h-4 text-ceres-blue" />
                <a href="mailto:ayush@ceresstudio.in" className="hover:text-ceres-blue transition-colors">
                  ayush@ceresstudio.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-ceres-border flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-xs text-text-muted font-mono leading-relaxed">
            &copy; {new Date().getFullYear()} Ceres Studios LLC. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-mono text-text-muted">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon: Icon, label }: { href: string; icon: any; label: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-ceres-surface border border-ceres-border flex items-center justify-center text-text-secondary hover:text-white hover:bg-ceres-blue/10 hover:border-ceres-blue/30 transition-all duration-300"
    >
      <Icon className="w-4 h-4" />
    </a>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-text-secondary hover:text-white text-sm transition-colors duration-200"
      >
        {children}
      </Link>
    </li>
  )
}
