import { Metadata } from 'next'
import ExperienceClientPage from './components/ExperienceClientPage'
import { experienceMetadata } from '../../components/experiences/metadata'

export const metadata: Metadata = experienceMetadata

export default function ExperiencePage() {
  return <ExperienceClientPage />
}
