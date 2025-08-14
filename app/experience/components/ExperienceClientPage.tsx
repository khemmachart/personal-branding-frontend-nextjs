'use client'

import React from 'react'
import { resumeData } from '../../../components/experiences/data/experienceData'
import ExperiencePage from '../../../components/experiences/ExperiencePage'

const ExperienceClientPage = () => {
  return <ExperiencePage data={resumeData} />
}

export default ExperienceClientPage