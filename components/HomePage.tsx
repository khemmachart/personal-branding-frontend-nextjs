'use client'

import React from 'react'
import { resumeData } from './experiences/data/experienceData'
import ExperiencePage from './experiences/ExperiencePage'

const HomePage = () => {
  return <ExperiencePage data={resumeData} />
}

export default HomePage
