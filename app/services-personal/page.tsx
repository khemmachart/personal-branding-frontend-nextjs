import { Metadata } from 'next'
import ServicesPersonalClientPage from './components/ServicesPersonalClientPage'

export const metadata: Metadata = {
  title: "Personal Services - Khemmachart Chutapetch | Business, Tech, Product & Team",
  description: "Organized service structure covering 4 main categories: Business foundations, Technology systems, Product development, and Team building. Comprehensive consulting for startups and growing companies.",
  keywords: "Personal Services, Business Strategy, Technology Advisory, Product Development, Team Building, Startup Consultation, Agile Coaching, UX Design, Software Development",
  authors: [{ name: "Khemmachart Chutapetch" }],
  openGraph: {
    type: 'website',
    url: "https://khemmachart.dev/services-personal",
    title: "Personal Services - Khemmachart Chutapetch | Business, Tech, Product & Team",
    description: "Organized service structure covering 4 main categories: Business foundations, Technology systems, Product development, and Team building. Comprehensive consulting for startups and growing companies.",
    images: [
      {
        url: "https://khemmachart.dev/images/services-personal-hero.jpg",
        width: 1200,
        height: 630,
        alt: 'Personal Professional Services Structure',
      }
    ],
    siteName: 'Khemmachart Chutapetch Personal Services',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Personal Services - Khemmachart Chutapetch | Business, Tech, Product & Team",
    description: "Organized service structure covering 4 main categories: Business foundations, Technology systems, Product development, and Team building. Comprehensive consulting for startups and growing companies.",
    images: ["https://khemmachart.dev/images/services-personal-hero.jpg"],
    creator: '@khemmachart',
  },
  alternates: {
    canonical: "https://khemmachart.dev/services-personal",
  },
  other: {
    'theme-color': '#1a1a1a',
    'msapplication-TileColor': '#1a1a1a',
  },
}

// Force static generation
export const dynamic = 'force-static'

export default function ServicesPersonalPage() {
  return <ServicesPersonalClientPage />
}
