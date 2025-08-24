import { Metadata } from 'next'
import EntrepreneurshipVenturePage from '@/components/experiences/EntrepreneurshipVenturePage'

export const metadata: Metadata = {
  title: 'Venture — Entrepreneurship',
  description: 'Detailed case study for a venture.'
}

export const dynamic = 'force-dynamic'

export default function Page({ params }: { params: { id: string } }) {
  return <EntrepreneurshipVenturePage id={params.id} />
}


