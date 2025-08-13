import { Metadata } from 'next'
import ExperienceClientPage from './components/ExperienceClientPage'
import { resumeData } from '../../components/experiences/data/experienceData'

export const metadata: Metadata = {
  title: resumeData.seo?.meta_title || 'Resume',
  description: resumeData.seo?.meta_description || 'Professional resume and experience',
  keywords: resumeData.seo?.keywords || ['resume', 'professional', 'experience'],
}

export default function ExperiencePage() {
  return <ExperienceClientPage />
}
