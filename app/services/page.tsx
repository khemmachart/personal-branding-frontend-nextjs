import { Metadata } from 'next'
import ServicesClientPage from './components/ServicesClientPage'

export const metadata: Metadata = {
  title: "Professional Services - Khemmachart Chutapetch | Product Engineering & Consulting",
  description: "Offering professional product engineering, software development, UX design, and consulting services. 8+ years of experience helping businesses create innovative digital solutions.",
  keywords: "Product Engineering Services, Software Development Consulting, UX Design Services, Full Stack Development, React Development, Next.js Consulting, TypeScript Services, Software Architecture Consulting, Product Design Services, Technical Consulting",
  authors: [{ name: "Khemmachart Chutapetch" }],
  openGraph: {
    type: 'website',
    url: "https://khemmachart.dev/services",
    title: "Professional Services - Khemmachart Chutapetch | Product Engineering & Consulting",
    description: "Offering professional product engineering, software development, UX design, and consulting services. 8+ years of experience helping businesses create innovative digital solutions.",
    images: [
      {
        url: "https://khemmachart.dev/images/services-hero.jpg",
        width: 1200,
        height: 630,
        alt: 'Professional Software Engineering Services',
      }
    ],
    siteName: 'Khemmachart Chutapetch Services',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Professional Services - Khemmachart Chutapetch | Product Engineering & Consulting",
    description: "Offering professional product engineering, software development, UX design, and consulting services. 8+ years of experience helping businesses create innovative digital solutions.",
    images: ["https://khemmachart.dev/images/services-hero.jpg"],
    creator: '@khemmachart',
  },
  alternates: {
    canonical: "https://khemmachart.dev/services",
  },
  other: {
    'theme-color': '#1a1a1a',
    'msapplication-TileColor': '#1a1a1a',
  },
}

// Force static generation
export const dynamic = 'force-static'

export default function ServicesPage() {
  return <ServicesClientPage />
}
