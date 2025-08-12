import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Professional services offered',
}

// Force static generation
export const dynamic = 'force-static'

export default function ServicesPage() {
  return (
    <div>
      <h1>Services</h1>
      <p>Content for services page will be added here.</p>
    </div>
  )
}
