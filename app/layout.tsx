import type { Metadata } from 'next'
import { Providers } from '@/lib/providers'
import { Menu } from '@/components/Menu'
import { SmoothScrollHandler } from '@/components/SmoothScrollHandler'
import '@/styles/globals.css'
import '@/css/font.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Personal Branding',
    default: 'Personal Branding - Professional Portfolio'
  },
  description: 'Professional personal branding portfolio showcasing skills, experience, and projects.',
  keywords: ['portfolio', 'personal branding', 'professional', 'developer', 'designer'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL || 'https://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_URL || 'https://localhost:3000',
    title: 'Personal Branding - Professional Portfolio',
    description: 'Professional personal branding portfolio showcasing skills, experience, and projects.',
    siteName: 'Personal Branding Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Personal Branding - Professional Portfolio',
    description: 'Professional personal branding portfolio showcasing skills, experience, and projects.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/static/fonts/db-heavent/DB-Heavent-Bd-Cond.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload" 
          href="/static/fonts/db-heavent/DB-Heavent-Cond.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/static/fonts/db-heavent/DB-Heavent-Med-Cond.ttf" 
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />

        {/* Preconnect to critical domains */}
        <link
          rel="preconnect"
          href="https://admin.pattayavillaresort.com"
        />
        <link 
          rel="dns-prefetch" 
          href="https://admin.pattayavillaresort.com" 
        />
      </head>
      <body>
        <Providers>
          <SmoothScrollHandler 
            extraOffset={20} 
            duration={1000}
            disableDefault={true}
          />
          <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Menu />
            <main style={{ flex: 1 }}>
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
