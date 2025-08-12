import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Personal Services',
  description: 'Personal services and consulting offerings',
}

// Force static generation
export const dynamic = 'force-static'

export default function ServicesPersonalPage() {
  return (
    <div>
      <h1>Personal Services</h1>
      <p>Content for personal services page will be added here.</p>
    </div>
  )
}
