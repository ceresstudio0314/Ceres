'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Gamepad2, Users, Newspaper, MessageSquare, HelpCircle, Globe, Zap, Star, ArrowRight, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { dropdownVariant } from '@/lib/animations'

const navItems = [
  {
    label: 'Games',
    href: '/games',
    icon: Gamepad2,
    sections: [
      {
        title: 'Games',
        items: [
          { label: 'All Games', desc: 'Browse full catalog', href: '/games', icon: Gamepad2 },
          { label: '2D Games', desc: 'Side-scrolling & flat worlds', href: '/games?type=2d', icon: Star },
          { label: '3D Games', desc: 'Immersive 3D experiences', href: '/games?type=3d', icon: Globe },
          { label: 'Upcoming Games', desc: 'What\'s coming next', href: '/games?filter=coming-soon', icon: Zap },
        ],
      },
    ],
  },
  {
    label: 'Studio',
    href: '/about',
    icon: Users,
    sections: [
      {
        title: 'About Us',
        items: [
          { label: 'Our Story', desc: 'How Ceres was built', href: '/about', icon: Star },
          { label: 'Leadership', desc: 'Meet the team', href: '/about#leadership', icon: Users },
        ],
      },
    ],
  },
  {
    label: 'News',
    href: '/news',
    icon: Newspaper,
    sections: [
      {
        title: 'Latest',
        items: [
          { label: 'Updates', desc: 'Latest studio progress', href: '/news?category=update', icon: Globe },
          { label: 'Community', desc: 'Fan spotlights & events', href: '/news?category=community', icon: Users },
        ],
      },
    ],
  },
  {
    label: 'Community',
    href: '#',
    icon: MessageSquare,
    sections: [
      {
        title: 'Connect',
        items: [
          { label: 'Discord', desc: 'Join 500k+ players', href: '#', icon: MessageSquare },
        ],
      },
    ],
  },
  {
    label: 'Support',
    href: '/contact',
    icon: HelpCircle,
    sections: [
      {
        title: 'Help',
        items: [
          { label: 'Contact Us', desc: 'Get in touch', href: '/contact', icon: MessageSquare },
          { label: 'Press & Media', desc: 'Press kit & inquiries', href: '/contact#press', icon: Newspaper },
          { label: 'Help Center', desc: 'FAQs & troubleshooting', href: '#', icon: HelpCircle },
        ],
      },
    ],
  },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setActiveMenu(null)
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveMenu(label)
  }
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 150)
  }
  const handleLinkClick = (href: string, event?: React.MouseEvent<HTMLAnchorElement>) => {
    setActiveMenu(null)
    setMobileOpen(false)

    const [path, hash] = href.split('#')
    if (!hash || path !== pathname) return

    event?.preventDefault()
    window.history.pushState(null, '', href)
    window.setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 0)
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 inset-x-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-ceres-black/80 backdrop-blur-xl border-b border-ceres-border/60 py-0'
            : 'bg-transparent py-2'
        )}
      >
        <nav className="container-wide flex items-center justify-between h-[72px]" aria-label="Main navigation">
          {/* Logo */}
          <Link href="/" className="flex items-center group z-10">
            <span className="font-display text-xl tracking-[0.15em] text-white group-hover:text-ceres-blue transition-colors duration-300">
              Ceresstudio
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1" role="menubar">
            {navItems.map((item) => (
              <li key={item.label} role="none" onMouseEnter={() => handleMouseEnter(item.label)} onMouseLeave={handleMouseLeave}>
                <button
                  role="menuitem"
                  aria-haspopup="true"
                  aria-expanded={activeMenu === item.label}
                  className={cn(
                    'flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-medium font-sans transition-all duration-200',
                    'text-text-secondary hover:text-white hover:bg-white/5',
                    pathname.startsWith(item.href) && item.href !== '#' && 'text-white bg-white/5'
                  )}
                >
                  {item.label}
                  <ChevronDown
                    className={cn('w-3.5 h-3.5 transition-transform duration-200', activeMenu === item.label && 'rotate-180')}
                  />
                </button>

                {/* Mega Dropdown */}
                <AnimatePresence>
                  {activeMenu === item.label && (
                    <motion.div
                      variants={dropdownVariant}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute top-full left-0 right-0 mt-0 pt-2"
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="container-wide">
                        <div className="glass border border-ceres-border rounded-2xl p-6 shadow-card flex gap-6">
                          {/* Sections */}
                          <div className="flex gap-8 flex-1">
                            {item.sections.map((section) => (
                              <div key={section.title} className="min-w-[200px]">
                                <p className="text-xs font-mono font-semibold text-text-muted uppercase tracking-[0.15em] mb-3">
                                  {section.title}
                                </p>
                                <ul className="flex flex-col gap-1">
                                  {section.items.map((link) => (
                                    <li key={link.label}>
                                      <Link
                                        href={link.href}
                                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 group/link transition-all duration-200"
                                        onClick={(event) => handleLinkClick(link.href, event)}
                                      >
                                        <div className="mt-0.5 w-8 h-8 rounded-lg bg-ceres-surface border border-ceres-border group-hover/link:border-ceres-blue/30 group-hover/link:bg-ceres-blue/5 flex items-center justify-center flex-shrink-0 transition-all duration-200">
                                          <link.icon className="w-4 h-4 text-text-muted group-hover/link:text-ceres-blue transition-colors" />
                                        </div>
                                        <div>
                                          <div className="flex items-center gap-2">
                                            <span className="text-sm font-medium text-text-primary group-hover/link:text-white transition-colors">
                                              {link.label}
                                            </span>
                                            {(link as any).tag && (
                                              <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-full bg-ceres-blue/10 text-ceres-blue border border-ceres-blue/20">
                                                {(link as any).tag}
                                              </span>
                                            )}
                                          </div>
                                          <span className="text-xs text-text-muted">{link.desc}</span>
                                        </div>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>

                          {/* Featured card */}
                          {(item as any).featured && (
                            <div className="w-56 flex-shrink-0 border-l border-ceres-border pl-6">
                              <p className="text-xs font-mono font-semibold text-text-muted uppercase tracking-[0.15em] mb-3">Featured</p>
                              <Link
                                href={(item as any).featured.href}
                                className="block p-4 rounded-xl bg-gradient-to-br from-ceres-blue/10 to-ceres-blue/5 border border-ceres-blue/20 hover:border-ceres-blue/40 transition-all duration-300 group/feat"
                              >
                                <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-ceres-gold/20 text-ceres-gold border border-ceres-gold/30">
                                  {(item as any).featured.badge}
                                </span>
                                <h4 className="font-display text-xl text-white mt-2 mb-1">{(item as any).featured.label}</h4>
                                <p className="text-xs text-text-muted mb-3">{(item as any).featured.desc}</p>
                                <span className="flex items-center gap-1.5 text-ceres-blue text-xs font-semibold group-hover/feat:gap-2 transition-all">
                                  Explore <ArrowRight className="w-3.5 h-3.5" />
                                </span>
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>

          {/* Right spacer keeps the desktop nav visually centered. */}
          <div className="hidden lg:block w-20" />

          {/* Mobile Toggle */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-ceres-black lg:hidden flex flex-col"
          >
            <div className="flex-1 overflow-y-auto pt-24 pb-8 px-6">
              <div className="flex flex-col gap-2">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <Link
                      href={item.href === '#' ? '#' : item.href}
                      className="flex items-center justify-between py-4 border-b border-ceres-border/50 group"
                      onClick={() => setMobileOpen(false)}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className="w-5 h-5 text-text-muted group-hover:text-ceres-blue transition-colors" />
                        <span className="font-display text-2xl text-white group-hover:text-ceres-blue transition-colors">
                          {item.label.toUpperCase()}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-text-muted" />
                    </Link>
                    <div className="flex flex-col gap-1 py-2 pl-8">
                      {item.sections[0]?.items.slice(0, 3).map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          className="text-sm text-text-secondary hover:text-white py-1 transition-colors"
                          onClick={(event) => handleLinkClick(link.href, event)}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <Link href="/contact" className="btn-secondary justify-center">
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
