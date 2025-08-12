'use client'

import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import {
  PageLayout,
  Container,
  H1,
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
    transform: translateY(30px);
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



// Main containers
const LandingContainer = styled(Container)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${spacing.lg};
`

// Hero Section
const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
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

// Keywords Section
const KeywordsSection = styled.div`
  padding: ${spacing.xxxl} 0;
  background: ${colors.offWhite};
`

const SectionTitle = styled(H2)`
  text-align: center;
  font-size: clamp(28px, 4vw, 40px);
  font-weight: ${typography.fontWeight.semiBold};
  color: ${colors.darkGray};
  margin-bottom: ${spacing.sm};
`

const SectionSubtitle = styled(Body)`
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
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${spacing.lg};
  margin-top: ${spacing.xxxl};
  
  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${spacing.md};
  }
`

const KeywordCard = styled.div<{ index: number; isHovered: boolean }>`
  background: ${colors.ivoryWhite};
  border: 2px solid ${props => props.isHovered ? colors.accentBlue : colors.lightGray};
  border-radius: ${borderRadius.xl};
  padding: ${spacing.xl};
  cursor: pointer;
  transition: all ${transitions.normal};
  position: relative;
  overflow: hidden;
  animation: ${fadeInUp} 0.6s ease-out;
  animation-delay: ${props => props.index * 0.1}s;
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
    transform: scaleX(${props => props.isHovered ? 1 : 0});
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

const FloatingIcon = styled.div`
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
  animation-delay: ${Math.random() * 2}s;
`

// Footer CTA Section
const CTASection = styled.div`
  background: linear-gradient(135deg, ${colors.darkGray} 0%, ${colors.slateGray} 100%);
  color: ${colors.ivoryWhite};
  padding: ${spacing.xxxl} 0;
  text-align: center;
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

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Khemmachart Chutapetch",
  "alternateName": ["Khem", "Khemmachart"],
  "description": "Developer, Designer & Creator with diverse interests in technology, lifestyle, photography, fashion, gaming, fitness, and music",
  "url": "https://khemmachart.dev",
  "email": "hello@khemmachart.dev",
  "nationality": "Thai",
  "knowsAbout": characters.map(char => ({
    "@type": "Thing",
    "name": char.keyword,
    "description": char.description,
    "category": char.category
  })),
  "hasOccupation": [
    {
      "@type": "Occupation",
      "name": "Product Software Engineer"
    },
    {
      "@type": "Occupation", 
      "name": "UI/UX Designer"
    },
    {
      "@type": "Occupation",
      "name": "Creative Consultant"
    }
  ],
  "interest": characters.map(char => char.category).filter((value, index, self) => self.indexOf(value) === index),
  "sameAs": [
    "https://github.com/khemmachart",
    "https://linkedin.com/in/khemmachart",
    "https://twitter.com/khemmachart"
  ],
  "brand": {
    "@type": "Brand",
    "name": "Khemmachart",
    "description": "Personal brand representing diverse creativity and technical expertise"
  }
}

export default function CharactersClientPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      
      <PageLayout>
        {/* Hero Section */}
        <HeroSection>
          <HeroContent>
            <HeroTagline>Personal Brand Identity</HeroTagline>
            <HeroTitle>
              สวัสดี, ผม Khemmachart
            </HeroTitle>
            <HeroSubtitle>
              คลิกแล้วได้ผม Developer, Designer & Creator ที่มีความหลากหลายในชีวิต
              <br />
              แต่ละ keyword คือตัวตนจริง ๆ ของผม
            </HeroSubtitle>
          </HeroContent>
        </HeroSection>

        {/* Keywords Section */}
        <KeywordsSection>
          <LandingContainer>
            <SectionTitle>ผมคือใคร?</SectionTitle>
            <SectionSubtitle>
              9 คำที่เล่าเรื่องราวของผม - ทั้งในด้านเทคโนโลยี ไลฟ์สไตล์ และความชอบส่วนตัว
            </SectionSubtitle>
            
            <KeywordsGrid>
              {characters.map((char, index) => (
                <KeywordCard
                  key={char.keyword}
                  index={index}
                  isHovered={hoveredCard === char.keyword}
                  onMouseEnter={() => setHoveredCard(char.keyword)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <KeywordName>
                    <FloatingIcon>
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
        </KeywordsSection>

        {/* CTA Section */}
        <CTASection>
          <LandingContainer>
            <CTATitle>มาคุยกันเพิ่มเติม</CTATitle>
            <CTADescription>
              หากคุณสนใจงานของผม หรือต้องการความช่วยเหลือในโปรเจค
              ยินดีให้คำปรึกษาและร่วมงานด้วย
            </CTADescription>
            <CTAButton href="mailto:hello@khemmachart.dev">
              📧 ติดต่อผม
            </CTAButton>
          </LandingContainer>
        </CTASection>
      </PageLayout>
    </>
  )
}