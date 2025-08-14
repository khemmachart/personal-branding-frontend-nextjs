'use client'

import React from 'react'
import styled from 'styled-components'
import {
  H2,
  Body,
  colors,
  spacing,
  borderRadius,
  typography,
  shadows,
  transitions,
} from '@/components/design-system'

const CTASectionContainer = styled.div`
  background: linear-gradient(135deg, ${colors.darkGray} 0%, ${colors.slateGray} 100%);
  color: ${colors.ivoryWhite};
  padding: ${spacing.xxxl} 0;
  text-align: center;
`

const LandingContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${spacing.lg};
`

const CTATitle = styled(H2)`
  color: ${colors.ivoryWhite};
  margin-bottom: ${spacing.md};
  font-size: clamp(24px, 4vw, 32px);
`

const CTADescription = styled(Body)`
  color: ${colors.lightGray};
  margin-bottom: ${spacing.xl};
  font-size: ${typography.fontSize.bodyLarge};
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${spacing.sm};
  background: ${colors.accentBlue};
  color: white;
  padding: ${spacing.md} ${spacing.xl};
  border-radius: ${borderRadius.lg};
  text-decoration: none;
  font-weight: ${typography.fontWeight.semiBold};
  transition: all ${transitions.normal};
  font-size: ${typography.fontSize.body};
  
  &:hover {
    background: #2563EB;
    transform: translateY(-2px);
    box-shadow: ${shadows.medium};
  }
`

const CTASection = () => {
  return (
    <CTASectionContainer>
      <LandingContainer>
        <CTATitle>Let's talk</CTATitle>
        <CTADescription>
          If you're interested in my work or need help with a project, I'd love to chat and collaborate.
        </CTADescription>
        <CTAButton href="mailto:hello@khemmachart.dev">
          📧 Contact me
        </CTAButton>
      </LandingContainer>
    </CTASectionContainer>
  )
}

export default CTASection
