import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { BackButton } from '@/components/layout/BackButton'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { SmoothScroll } from '@/components/ui/SmoothScroll'
import { LoadingScreen } from '@/components/ui/LoadingScreen'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  applicationName: 'Ceres Studios',
  title: {
    default: 'Ceres Studios | Forged in Darkness. Built for Legends.',
    template: '%s | Ceres Studios',
  },
  description:
    'Ceres Studios is an independent AAA game development studio crafting cinematic, story-driven experiences across PC and consoles. Home of VOID COVENANT, NEON EMPIRE, and IRON MERIDIAN.',
  keywords: ['Ceres Studios', 'Ceres Studio', 'game studio', 'game developer', 'cinematic games', 'story-driven games', 'interactive entertainment'],
  authors: [{ name: 'Ceres Studios' }],
  creator: 'Ceres Studios',
  publisher: 'Ceres Studios',
  metadataBase: new URL('https://ceres-studios.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ceres-studios.com',
    siteName: 'Ceres Studios',
    title: 'Ceres Studios | Forged in Darkness. Built for Legends.',
    description:
      'AAA game development studio crafting cinematic, story-driven experiences. Home of VOID COVENANT, NEON EMPIRE, and IRON MERIDIAN.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Ceres Studios logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ceres Studios',
    description: 'Forged in Darkness. Built for Legends.',
    creator: '@CeresStudios',
    images: [{ url: '/og-image.jpg', alt: 'Ceres Studios logo' }],
  },
  robots: { index: true, follow: true },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    title: 'Ceres Studios',
    statusBarStyle: 'black-translucent',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [
      { rel: 'icon', url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'icon', url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  category: 'games',
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
          <BackButton />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
