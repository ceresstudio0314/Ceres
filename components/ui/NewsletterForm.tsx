'use client'

import { useState } from 'react'

type NewsletterFormProps = {
  compact?: boolean
}

export function NewsletterForm({ compact = false }: NewsletterFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('submitting')

    try {
      const response = await fetch('https://formsubmit.co/ajax/ayush@ceresstudio.in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: 'New Ceres Insider subscriber',
          _template: 'table',
          message: 'A new visitor subscribed to Ceres Insider.',
          email,
        }),
      })

      if (!response.ok) throw new Error('Subscription failed')

      setEmail('')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div>
      <form
        className={compact ? 'flex flex-col sm:flex-row gap-3 mb-4' : 'flex flex-col sm:flex-row gap-4 max-w-xl mx-auto'}
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          name="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value)
            if (status !== 'idle') setStatus('idle')
          }}
          placeholder={compact ? 'Enter your email' : 'Enter your email address'}
          className={
            compact
              ? 'min-w-0 flex-1 bg-ceres-surface border border-ceres-border rounded-lg px-4 py-3 text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-ceres-blue focus:ring-1 focus:ring-ceres-blue transition-all'
              : 'min-w-0 flex-1 bg-ceres-surface border border-ceres-border rounded-xl px-5 sm:px-6 py-4 text-white placeholder:text-text-muted focus:outline-none focus:border-ceres-blue focus:ring-1 focus:ring-ceres-blue transition-all'
          }
          required
        />
        <button
          type="submit"
          disabled={status === 'submitting'}
          className={compact ? 'btn-primary py-3 justify-center' : 'btn-primary py-4 px-8 justify-center'}
        >
          {status === 'submitting' ? 'Sending...' : 'Subscribe'}
        </button>
      </form>

      {status === 'success' && (
        <p className={compact ? 'text-xs text-ceres-blue font-mono mb-4' : 'text-xs text-ceres-blue font-mono mt-4'}>
          Subscribed. Your email has been sent.
        </p>
      )}
      {status === 'error' && (
        <p className={compact ? 'text-xs text-ceres-red font-mono mb-4' : 'text-xs text-ceres-red font-mono mt-4'}>
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  )
}
