import { Metadata } from 'next'
import ResumeClientPage from './components/ResumeClientPage'
import { resumeData } from '../../components/resume/data/resumeData'

export const metadata: Metadata = {
  title: resumeData.seo?.meta_title || 'Resume',
  description: resumeData.seo?.meta_description || 'Professional resume and experience',
  keywords: resumeData.seo?.keywords || ['resume', 'professional', 'experience'],
}

export default function ResumePage() {
  return <ResumeClientPage />
}
