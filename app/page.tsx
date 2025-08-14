import { Metadata } from 'next'
import HomePage from '@/components/HomePage'
import { homePageMetadata } from '@/components/experiences/metadata'

export const metadata: Metadata = homePageMetadata

// Force static generation
export const dynamic = 'force-static'

export default function Page() {
  return <HomePage />
}
