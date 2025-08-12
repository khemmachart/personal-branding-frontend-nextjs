import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to my personal branding portfolio',
}

// Force static generation
export const dynamic = 'force-static'

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to Personal Branding Portfolio</h1>
      <p>This is the home page. Please add your content here.</p>
    </div>
  )
}
