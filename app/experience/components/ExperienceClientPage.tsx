'use client'

import React from 'react'
import ResumePage from '../../../components/experiences/ExperiencePage'
import { resumeData } from '../../../components/experiences/data/experienceData'

const ResumeClientPage = () => {
  return <ResumePage data={resumeData} />
}

export default ResumeClientPage