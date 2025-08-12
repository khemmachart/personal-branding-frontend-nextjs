import { Metadata } from 'next'
import ProfileClientPage from './components/ProfileClientPage'

export const metadata: Metadata = {
  title: "Khemmachart Chutapetch - Product Software Engineer & Consultant",
  description: "Experienced product software engineer with 8+ years of expertise in user-centered design, full-stack development, and leading cross-functional teams. Specialized in creating innovative digital solutions for millions of users.",
  keywords: "Product Software Engineer, Software Consultant, Full Stack Developer, React Developer, Next.js, TypeScript, Software Architecture, UX Design, Product Design, SEO Specialist",
  authors: [{ name: "Khemmachart Chutapetch" }],
  openGraph: {
    type: 'profile',
    url: "https://khemmachart.dev/profile",
    title: "Khemmachart Chutapetch - Product Software Engineer & Consultant",
    description: "Experienced product software engineer with 8+ years of expertise in user-centered design, full-stack development, and leading cross-functional teams. Specialized in creating innovative digital solutions for millions of users.",
    images: [
      {
        url: "https://khemmachart.dev/images/khemmachart-profile.jpg",
        width: 1200,
        height: 630,
        alt: 'Khemmachart Chutapetch - Product Software Engineer',
      }
    ],
    siteName: 'Khemmachart Chutapetch',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Khemmachart Chutapetch - Product Software Engineer & Consultant",
    description: "Experienced product software engineer with 8+ years of expertise in user-centered design, full-stack development, and leading cross-functional teams. Specialized in creating innovative digital solutions for millions of users.",
    images: ["https://khemmachart.dev/images/khemmachart-profile.jpg"],
    creator: '@khemmachart',
  },
  alternates: {
    canonical: "https://khemmachart.dev/profile",
  },
  other: {
    'profile:first_name': 'Khemmachart',
    'profile:last_name': 'Chutapetch',
    'profile:username': 'khemmachart',
  },
}

// Force static generation
export const dynamic = 'force-static'

export default function ProfilePage() {
  return <ProfileClientPage />
}
