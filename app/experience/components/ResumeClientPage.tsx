'use client'

import React from 'react'
import ResumePage from '../../../components/experiences/ResumePage'
import { resumeData } from '../../../components/experiences/data/resumeData'

const ResumeClientPage = () => {
  return <ResumePage data={resumeData} />
}

export default ResumeClientPage