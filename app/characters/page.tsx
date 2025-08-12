import { Metadata } from 'next'
import CharactersClientPage from './components/CharactersClientPage'

export const metadata: Metadata = {
  title: 'My Characters',
  description: 'A collection of character keywords that represent my personality and interests in technology, lifestyle, fitness, photography, fashion, and more.',
  keywords: ['character', 'personality', 'technology', 'lifestyle', 'photography', 'fitness', 'gaming'],
}

// Force static generation
export const dynamic = 'force-static'

export default function CharactersPage() {
  return <CharactersClientPage />
}
