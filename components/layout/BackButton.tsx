'use client'

import { ArrowLeft } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

export function BackButton() {
  const pathname = usePathname()
  const router = useRouter()

  if (pathname === '/') return null

  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back()
      return
    }

    router.push('/')
  }

  return (
    <button
      type="button"
      onClick={handleBack}
      aria-label="Go back"
      className="fixed left-4 top-24 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-ceres-border bg-ceres-black/70 text-text-secondary backdrop-blur-md transition-all duration-200 hover:border-ceres-blue/50 hover:bg-ceres-blue/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ceres-blue md:left-6"
    >
      <ArrowLeft className="h-5 w-5" />
    </button>
  )
}
