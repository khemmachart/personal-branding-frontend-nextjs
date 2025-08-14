'use client'

import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import {
  H2,
  Body,
  colors,
  spacing,
  borderRadius,
  typography,
  breakpoints,
  shadows,
  transitions,
} from '@/components/design-system'

// Characters data
const characters = [
  {
    keyword: 'Bits',
    category: 'เทคโนโลยี',
    description: 'สายคอม, โปรแกรมเมอร์, ไอที',
  },
  {
    keyword: 'Brew',
    category: 'ไลฟ์สไตล์',
    description: 'กาแฟ, ความละมุน, ความชิล',
  },
  {
    keyword: 'Beer',
    category: 'ไลฟ์สไตล์',
    description: 'สังสรรค์, ความเป็นกันเอง',
  },
  {
    keyword: 'Build',
    category: 'ฟิตเนส / เกม',
    description: 'การสร้างร่างกาย, พัฒนาตัวเอง, วางแผนในเกม',
  },
  {
    keyword: 'Bokeh',
    category: 'การถ่ายภาพ',
    description: 'ภาพละลายหลัง, ความอาร์ต',
  },
  {
    keyword: 'Blazer',
    category: 'แฟชั่น',
    description: 'สายแต่งตัวเนี้ยบ, Sartorial',
  },
  {
    keyword: 'Bunny',
    category: 'สัตว์เลี้ยง',
    description: 'ด้านน่ารัก, ความอ่อนโยน, ความละมุน',
  },
  {
    keyword: 'Battle',
    category: 'เกม',
    description: 'การต่อสู้, ความท้าทาย, การแข่งขัน',
  },
  {
    keyword: 'Beat',
    category: 'ดนตรี',
    description: 'จังหวะ, vibe, การเคลื่อนไหว, ความรู้สึกดนตรี',
  },
]

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

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`

const KeywordsSectionContainer = styled.div`
  padding: ${spacing.xxxl} 0;
  background: ${colors.offWhite};
  animation: ${fadeInUp} 1s ease-out;
  animation-delay: 0.3s;
  animation-fill-mode: both;
`

const LandingContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${spacing.lg};
`

const KeywordsSectionTitle = styled(H2)`
  text-align: center;
  font-size: clamp(28px, 4vw, 40px);
  font-weight: ${typography.fontWeight.semiBold};
  color: ${colors.darkGray};
  margin-bottom: ${spacing.sm};
`

const KeywordsSectionSubtitle = styled(Body)`
  text-align: center;
  color: ${colors.graphite};
  margin-bottom: ${spacing.xxxl};
  font-size: ${typography.fontSize.bodyLarge};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`

const KeywordsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${spacing.lg};
  margin-top: ${spacing.xxxl};
  animation: ${fadeInUp} 1s ease-out;
  animation-delay: 0.3s;
  animation-fill-mode: both;
  
  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${spacing.md};
  }
`

const KeywordCard = styled.div<{ $index: number; $isHovered: boolean }>`
  background: ${colors.ivoryWhite};
  border: 2px solid ${props => props.$isHovered ? colors.accentBlue : colors.lightGray};
  border-radius: ${borderRadius.xl};
  padding: ${spacing.xl};
  cursor: pointer;
  transition: all ${transitions.normal};
  position: relative;
  overflow: hidden;
  animation: ${fadeInUp} 0.6s ease-out;
  animation-delay: ${props => props.$index * 0.1}s;
  animation-fill-mode: both;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: ${shadows.medium};
    border-color: ${colors.accentBlue};
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${colors.accentBlue}, ${colors.graphite});
    transform: scaleX(${props => props.$isHovered ? 1 : 0});
    transition: transform ${transitions.normal};
    transform-origin: left;
  }
`

const KeywordName = styled.div`
  font-size: ${typography.fontSize.h3};
  font-weight: ${typography.fontWeight.bold};
  color: ${colors.darkGray};
  margin-bottom: ${spacing.sm};
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
`

const KeywordCategory = styled.div`
  font-size: ${typography.fontSize.caption};
  color: ${colors.accentBlue};
  background: ${colors.accentBlue}15;
  padding: ${spacing.xs} ${spacing.md};
  border-radius: ${borderRadius.lg};
  margin-bottom: ${spacing.md};
  display: inline-block;
  font-weight: ${typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`

const KeywordDescription = styled(Body)`
  color: ${colors.graphite};
  margin: 0;
  line-height: 1.6;
`

const FloatingIcon = styled.div<{ $animationDelay: number }>`
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, ${colors.accentBlue}, ${colors.graphite});
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: ${typography.fontWeight.bold};
  font-size: 14px;
  animation: ${float} 3s ease-in-out infinite;
  animation-delay: ${props => props.$animationDelay}s;
`

const KeywordsSection = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <KeywordsSectionContainer>
      <LandingContainer>
        <KeywordsSectionTitle>Who I am?</KeywordsSectionTitle>
        <KeywordsSectionSubtitle>
          9 keywords that represent me - from technology, lifestyle, and personal interests
        </KeywordsSectionSubtitle>
        
        <KeywordsGrid>
          {characters.map((char, index) => (
            <KeywordCard
              key={char.keyword}
              $index={index}
              $isHovered={hoveredCard === char.keyword}
              onMouseEnter={() => setHoveredCard(char.keyword)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <KeywordName>
                <FloatingIcon $animationDelay={index * 0.2}>
                  {char.keyword.charAt(0)}
                </FloatingIcon>
                {char.keyword}
              </KeywordName>
              <KeywordCategory>{char.category}</KeywordCategory>
              <KeywordDescription>
                {char.description}
              </KeywordDescription>
            </KeywordCard>
          ))}
        </KeywordsGrid>
      </LandingContainer>
    </KeywordsSectionContainer>
  )
}

export default KeywordsSection
