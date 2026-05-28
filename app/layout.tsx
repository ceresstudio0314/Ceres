import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { SmoothScroll } from '@/components/ui/SmoothScroll'
import { LoadingScreen } from '@/components/ui/LoadingScreen'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Ceres Studios | Forged in Darkness. Built for Legends.',
    template: '%s | Ceres Studios',
  },
  description:
    'Ceres Studios is an independent AAA game development studio crafting cinematic, story-driven experiences across PC and consoles. Home of VOID COVENANT, NEON EMPIRE, and IRON MERIDIAN.',
  keywords: ['Ceres Studios', 'AAA games', 'game developer', 'VOID COVENANT', 'NEON EMPIRE', 'IRON MERIDIAN'],
  authors: [{ name: 'Ceres Studios' }],
  creator: 'Ceres Studios',
  metadataBase: new URL('https://ceres-studios.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ceres-studios.com',
    siteName: 'Ceres Studios',
    title: 'Ceres Studios | Forged in Darkness. Built for Legends.',
    description:
      'AAA game development studio crafting cinematic, story-driven experiences. Home of VOID COVENANT, NEON EMPIRE, and IRON MERIDIAN.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Ceres Studios' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ceres Studios',
    description: 'Forged in Darkness. Built for Legends.',
    creator: '@CeresStudios',
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} dark`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <style>{`
          :root { --font-bebas: 'Bebas Neue', Impact, sans-serif; }
        `}</style>
      </head>
      <body className="bg-ceres-black text-text-primary antialiased overflow-x-hidden">
        <SmoothScroll>
          <LoadingScreen />
          <CustomCursor />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
