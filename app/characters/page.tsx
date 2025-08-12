import { Metadata } from 'next'
import CharactersClientPage from './components/CharactersClientPage'

export const metadata: Metadata = {
  title: "My Characters - Khemmachart Chutapetch | Personal Traits & Interests",
  description: "A collection of character keywords that represent my personality and interests in technology, lifestyle, fitness, photography, fashion, and more. Just for fun exploration of professional and personal identity.",
  keywords: "Personal Characters, Personality Traits, Technology Interests, Lifestyle, Photography, Fashion, Gaming, Fitness, Professional Identity, Personal Branding",
  authors: [{ name: "Khemmachart Chutapetch" }],
  openGraph: {
    type: 'profile',
    url: "https://khemmachart.dev/characters",
    title: "My Characters - Khemmachart Chutapetch | Personal Traits & Interests",
    description: "A collection of character keywords that represent my personality and interests in technology, lifestyle, fitness, photography, fashion, and more. Just for fun exploration of professional and personal identity.",
    images: [
      {
        url: "https://khemmachart.dev/images/characters-hero.jpg",
        width: 1200,
        height: 630,
        alt: 'Personal Character Traits and Interests',
      }
    ],
    siteName: 'Khemmachart Chutapetch Characters',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "My Characters - Khemmachart Chutapetch | Personal Traits & Interests",
    description: "A collection of character keywords that represent my personality and interests in technology, lifestyle, fitness, photography, fashion, and more. Just for fun exploration of professional and personal identity.",
    images: ["https://khemmachart.dev/images/characters-hero.jpg"],
    creator: '@khemmachart',
  },
  alternates: {
    canonical: "https://khemmachart.dev/characters",
  },
  other: {
    'theme-color': '#1a1a1a',
    'msapplication-TileColor': '#1a1a1a',
  },
}

// Force static generation
export const dynamic = 'force-static'

export default function CharactersPage() {
  return <CharactersClientPage />
}
