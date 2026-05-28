'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function LoadingScreen() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer)
          setTimeout(() => setLoading(false), 400)
          return 100
        }
        return p + Math.random() * 18 + 5
      })
    }, 80)
    return () => clearInterval(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-ceres-black"
        >
          {/* Background grid */}
          <div className="absolute inset-0 bg-grid opacity-30" />
          {/* Glow */}
          <div className="absolute inset-0 bg-hero-glow" />

          <div className="relative flex flex-col items-center gap-10">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="flex flex-col items-center gap-2"
            >
              {/* Icon mark */}
              <div className="relative w-16 h-16 mb-2">
                <div className="absolute inset-0 rounded-full border border-ceres-blue/30 animate-ping" style={{ animationDuration: '2s' }} />
                <div className="absolute inset-2 rounded-full bg-ceres-blue/10 border border-ceres-blue/50 flex items-center justify-center">
                  <span className="text-ceres-blue font-display text-2xl">C</span>
                </div>
              </div>
              <h1 className="font-display text-4xl tracking-[0.25em] text-white">CERES STUDIOS</h1>
              <p className="text-text-muted text-xs tracking-[0.3em] uppercase font-mono">
                Forged in Darkness. Built for Legends.
              </p>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="w-64 flex flex-col gap-3"
            >
              <div className="h-px bg-ceres-border rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-ceres-blue to-ceres-blue-glow rounded-full"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-muted text-[10px] font-mono tracking-widest uppercase">Loading</span>
                <span className="text-ceres-blue text-[10px] font-mono">
                  {Math.min(Math.round(progress), 100)}%
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
