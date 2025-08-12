import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Companies',
  description: 'Companies and organizations I have worked with',
}

// Force static generation
export const dynamic = 'force-static'

export default function CompaniesPage() {
  return (
    <div>
      <h1>Companies</h1>
      <p>Content for companies page will be added here.</p>
    </div>
  )
}
