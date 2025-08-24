'use client'

import React from 'react'
import styled, { keyframes } from 'styled-components'
import {
  H2,
  Body,
  colors,
  spacing,
  typography,
  breakpoints,
} from '@/components/design-system'
import { 
  FaCode, 
  FaCoffee, 
  FaBeer, 
  FaDumbbell, 
  FaCamera, 
  FaTshirt, 
  FaHeart, 
  FaGamepad, 
  FaMusic,
  FaSeedling,
  FaRing,
  FaLeaf,
  FaPaw,
} from 'react-icons/fa'

// Characters data with icons
const characters = [
  {
    keyword: 'Bits',
    category: 'เทคโนโลยี',
    description: 'สายคอม, โปรแกรมเมอร์, ไอที',
    icon: FaCode,
  },
  {
    keyword: 'Brew',
    category: 'ไลฟ์สไตล์',
    description: 'กาแฟ, ความละมุน, ความชิล',
    icon: FaCoffee,
  },
  {
    keyword: 'Beer',
    category: 'ไลฟ์สไตล์',
    description: 'สังสรรค์, ความเป็นกันเอง',
    icon: FaBeer,
  },
  {
    keyword: 'Build',
    category: 'ฟิตเนส / เกม',
    description: 'การสร้างร่างกาย, พัฒนาตัวเอง, วางแผนในเกม',
    icon: FaDumbbell,
  },
  {
    keyword: 'Bokeh',
    category: 'การถ่ายภาพ',
    description: 'ภาพละลายหลัง, ความอาร์ต',
    icon: FaCamera,
  },
  {
    keyword: 'Blazer',
    category: 'แฟชั่น',
    description: 'สายแต่งตัวเนี้ยบ, Sartorial',
    icon: FaTshirt,
  },
  {
    keyword: 'Bunny',
    category: 'สัตว์เลี้ยง',
    description: 'ด้านน่ารัก, ความอ่อนโยน, ความละมุน',
    icon: FaPaw,
  },
  {
    keyword: 'Battle',
    category: 'เกม',
    description: 'การต่อสู้, ความท้าทาย, การแข่งขัน',
    icon: FaGamepad,
  },
  // {
  //   keyword: 'Beat',
  //   category: 'ดนตรี',
  //   description: 'จังหวะ, vibe, การเคลื่อนไหว, ความรู้สึกดนตรี',
  //   icon: FaMusic,
  // },
  {
    keyword: 'Bloom',
    category: 'การเติบโต',
    description: 'การเบ่งบาน, การพัฒนา, ความงาม',
    icon: FaHeart,
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
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${spacing.lg};
  margin-top: ${spacing.xxxl};
  animation: ${fadeInUp} 1s ease-out;
  animation-delay: 0.3s;
  animation-fill-mode: both;
  
  @media (max-width: ${breakpoints.tablet}) {
    gap: ${spacing.md};
  }
`

const IconContainer = styled.div<{ $index: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing.xs};
  animation: ${fadeInUp} 0.6s ease-out;
  animation-delay: ${props => props.$index * 0.1}s;
  animation-fill-mode: both;
`

const IconLabel = styled.div`
  font-size: ${typography.fontSize.caption};
  color: ${colors.graphite};
  font-weight: ${typography.fontWeight.medium};
  text-align: center;
  opacity: 0.7;
`

const FloatingIcon = styled.div<{ $animationDelay: number }>`
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, ${colors.accentBlue}, ${colors.graphite});
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: ${typography.fontWeight.bold};
  font-size: 18px;
  animation: ${float} 3s ease-in-out infinite;
  animation-delay: ${props => props.$animationDelay}s;
`

const KeywordsSection = () => {
  return (
    <KeywordsSectionContainer>
      <LandingContainer>
        <KeywordsSectionTitle>Who I am?</KeywordsSectionTitle>
        <KeywordsSectionSubtitle>
          {characters.length} keywords that represent me - from technology, lifestyle, and personal interests
        </KeywordsSectionSubtitle>
        
        <KeywordsGrid>
          {characters.map((char, index) => {
            const IconComponent = char.icon
            return (
              <IconContainer key={char.keyword} $index={index}>
                <FloatingIcon $animationDelay={index * 0.2}>
                  <IconComponent size={20} />
                </FloatingIcon>
                <IconLabel>{char.keyword}</IconLabel>
              </IconContainer>
            )
          })}
        </KeywordsGrid>
      </LandingContainer>
    </KeywordsSectionContainer>
  )
}

export default KeywordsSection
