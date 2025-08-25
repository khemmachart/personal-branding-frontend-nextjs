import { Metadata } from 'next'
import EntrepreneurshipVenturePage from '@/components/experiences/EntrepreneurshipVenturePage'

export const metadata: Metadata = {
  title: 'Venture — Entrepreneurship',
  description: 'Detailed case study for a venture.'
}

export const dynamic = 'force-dynamic'

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return <EntrepreneurshipVenturePage id={id} />
}


