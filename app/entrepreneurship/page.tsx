import { Metadata } from 'next'
import EntrepreneurshipPage from '@/components/experiences/EntrepreneurshipPage'

export const metadata: Metadata = {
  title: 'Entrepreneurship — Portfolio',
  description: 'Founder-led ventures, case studies, and metrics.'
}

export const dynamic = 'force-static'

export default function Page() {
  return <EntrepreneurshipPage />
}


