import { Metadata } from 'next'
import CharactersClientPage from '@/components/CharactersClientPage'

export const metadata: Metadata = {
  title: "Khemmachart Chutapetch | Developer, Designer & Creator",
  description: "สวัสดี, ผม Khemmachart - Developer, Designer & Creator ที่มีความหลากหลายในชีวิต. ผ่าน 9 keywords ที่เป็นตัวแทนของผม ตั้งแต่ Bits (Technology) ไปจนถึง Beat (Music) และอีกมากมาย",
  keywords: "Khemmachart Chutapetch, Developer, Designer, Creator, Personal Brand, Technology, Photography, Fashion, Gaming, Fitness, Thailand Developer, Frontend Developer, Product Engineer",
  authors: [{ name: "Khemmachart Chutapetch" }],
  openGraph: {
    type: 'profile',
    url: "https://khemmachart.dev",
    title: "Khemmachart Chutapetch | Developer, Designer & Creator",
    description: "สวัสดี, ผม Khemmachart - Developer, Designer & Creator ที่มีความหลากหลายในชีวิต. ผ่าน 9 keywords ที่เป็นตัวแทนของผม",
    images: [
      {
        url: "https://khemmachart.dev/images/khemmachart-hero.jpg",
        width: 1200,
        height: 630,
        alt: 'Khemmachart Chutapetch - Developer, Designer & Creator',
      }
    ],
    siteName: 'Khemmachart Chutapetch',
    locale: 'th_TH',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Khemmachart Chutapetch | Developer, Designer & Creator",
    description: "สวัสดี, ผม Khemmachart - Developer, Designer & Creator ที่มีความหลากหลายในชีวิต",
    images: ["https://khemmachart.dev/images/khemmachart-hero.jpg"],
    creator: '@khemmachart',
  },
  alternates: {
    canonical: "https://khemmachart.dev",
  },
  other: {
    'theme-color': '#3B82F6',
    'msapplication-TileColor': '#3B82F6',
  },
}

// Force static generation
export const dynamic = 'force-static'

export default function HomePage() {
  return <CharactersClientPage />
}
