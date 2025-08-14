'use client'

import React from 'react'
import styled, { keyframes } from 'styled-components'
import {
  H1,
  Body,
  colors,
  spacing,
  typography,
} from '@/components/design-system'

// Animation keyframes
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const HeroSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 30vh;
  text-align: center;
  padding: ${spacing.xxxl} 0;
  background: linear-gradient(135deg, ${colors.offWhite} 0%, ${colors.ivoryWhite} 100%);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 50%, ${colors.mutedSage}20 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, ${colors.accentBlue}10 0%, transparent 50%);
    pointer-events: none;
  }
`

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  animation: ${fadeInUp} 1s ease-out;
`

const HeroTitle = styled(H1)`
  font-size: clamp(48px, 6vw, 72px);
  font-weight: ${typography.fontWeight.bold};
  color: ${colors.darkGray};
  margin-bottom: ${spacing.lg};
  line-height: 1.1;
  letter-spacing: -0.02em;
`

const HeroSubtitle = styled(Body)`
  font-size: clamp(18px, 2.5vw, 24px);
  color: ${colors.graphite};
  margin-bottom: ${spacing.xxxl};
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`

const HeroTagline = styled.div`
  font-size: ${typography.fontSize.caption};
  color: ${colors.accentBlue};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: ${spacing.md};
  font-weight: ${typography.fontWeight.medium};
`

const HeroSection = () => {
  return (
    <HeroSectionContainer>
      <HeroContent>
        <HeroTagline>Software Engineer - Product Builder - Consultant - Founder</HeroTagline>
        <HeroTitle>
          Hi, I'm Khemmachart
        </HeroTitle>
        <HeroSubtitle>
          I design, build, and launch software products that create meaningful impact at scale - combining technology, design, and strategy to drive positive change, and solve problems that truly matter.
        </HeroSubtitle>
      </HeroContent>
    </HeroSectionContainer>
  )
}

export default HeroSection
