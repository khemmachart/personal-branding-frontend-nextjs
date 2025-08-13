'use client'

import React from 'react'
import ResumePage from '../../../components/resume/ResumePage'
import { resumeData } from '../../../components/resume/data/resumeData'

const ResumeClientPage = () => {
  return <ResumePage data={resumeData} />
}

export default ResumeClientPage