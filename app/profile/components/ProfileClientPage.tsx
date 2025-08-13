'use client'

import React from 'react'
import styled from 'styled-components'
import { 
  Container, 
  PageLayout, 
  Section, 
  H1, 
  H2, 
  H3, 
  Body, 
  Caption, 
  colors, 
  spacing, 
  typography, 
  borderRadius,
  shadows,
  breakpoints
} from '@/components/design-system'

// SEO and structured data
const seoData = {
  title: "Khemmachart Chutapetch - Product Software Engineer & Consultant",
  description: "Experienced product software engineer with 8+ years of expertise in user-centered design, full-stack development, and leading cross-functional teams. Specialized in creating innovative digital solutions for millions of users.",
  keywords: "Product Software Engineer, Software Consultant, Full Stack Developer, React Developer, Next.js, TypeScript, Software Architecture, UX Design, Product Design, SEO Specialist",
  author: "Khemmachart Chutapetch",
  url: "https://khemmachart.dev/profile",
  image: "https://khemmachart.dev/images/khemmachart-profile.jpg",
  email: "k.chutapetch@gmail.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  jobTitle: "Product Software Engineer and Consultant",
  company: "Hootsuite",
  experience: "8+ years",
  skills: [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python", 
    "Software Architecture", "UX Design", "Product Management", "SEO"
  ]
}

// Custom styled components for the resume
const ExperienceContainer = styled(Container)`
  max-width: 900px;
  margin: 0 auto;
  padding: ${spacing.xl} ${spacing.lg};
`

const ProfileHeader = styled.div`
  text-align: center;
  margin-bottom: ${spacing.xxxl};
  padding: ${spacing.xl} 0;
  border-bottom: 2px solid ${colors.lightGray};
`

const ProfileName = styled(H1)`
  font-size: 42px;
  font-weight: ${typography.fontWeight.bold};
  color: ${colors.darkGray};
  margin: 0 0 ${spacing.sm} 0;
  letter-spacing: -0.5px;
`

const ProfileTitle = styled(H2)`
  font-size: 24px;
  font-weight: ${typography.fontWeight.medium};
  color: ${colors.graphite};
  margin: 0 0 ${spacing.lg} 0;
`

const ProfileDescription = styled(Body)`
  max-width: 600px;
  margin: 0 auto ${spacing.lg} auto;
  color: ${colors.darkGray};
  line-height: 1.6;
`

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: ${spacing.xl};
  flex-wrap: wrap;
  
  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    gap: ${spacing.sm};
    text-align: center;
  }
`

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  color: ${colors.graphite};
  font-size: ${typography.fontSize.caption};
  
  @media (max-width: ${breakpoints.tablet}) {
    justify-content: center;
  }
`

const ExperienceSection = styled(Section)`
  padding: ${spacing.xl} 0;
  
  &:not(:last-child) {
    border-bottom: 1px solid ${colors.lightGray};
  }
`

const SectionTitle = styled(H2)`
  font-size: 28px;
  font-weight: ${typography.fontWeight.bold};
  color: ${colors.darkGray};
  margin: 0 0 ${spacing.lg} 0;
  padding-bottom: ${spacing.sm};
  display: inline-block;
`

const ExperienceItem = styled.div`
  margin-bottom: ${spacing.xl};
  
  &:last-child {
    margin-bottom: 0;
  }
`

const ExperienceHeader = styled.div`
  margin-bottom: ${spacing.md};
`

const JobTitle = styled(H3)`
  font-size: 20px;
  font-weight: ${typography.fontWeight.semiBold};
  color: ${colors.darkGray};
  margin: 0 0 ${spacing.xs} 0;
`

const Company = styled.div`
  font-size: ${typography.fontSize.body};
  font-weight: ${typography.fontWeight.medium};
  color: ${colors.accentBlue};
  margin-bottom: ${spacing.xs};
`

const Duration = styled(Caption)`
  color: ${colors.graphite};
  font-size: ${typography.fontSize.caption};
  margin-bottom: ${spacing.sm};
`

const Description = styled(Body)`
  margin: ${spacing.md} 0 0 0;
  line-height: 1.6;
  color: ${colors.darkGray};
`

const EducationItem = styled.div`
  margin-bottom: ${spacing.lg};
  
  &:last-child {
    margin-bottom: 0;
  }
`

const Institution = styled.div`
  font-size: ${typography.fontSize.body};
  font-weight: ${typography.fontWeight.semiBold};
  color: ${colors.darkGray};
  margin-bottom: ${spacing.xs};
`

const Degree = styled.div`
  font-size: ${typography.fontSize.body};
  color: ${colors.graphite};
  margin-bottom: ${spacing.xs};
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${spacing.lg};
  
  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

const SkillCategory = styled.div`
  background: ${colors.ivoryWhite};
  padding: ${spacing.lg};
  border-radius: ${borderRadius.lg};
  border: 1px solid ${colors.lightGray};
  box-shadow: ${shadows.soft};
`

const SkillCategoryTitle = styled.h4`
  font-size: ${typography.fontSize.bodyLarge};
  font-weight: ${typography.fontWeight.semiBold};
  color: ${colors.darkGray};
  margin: 0 0 ${spacing.md} 0;
`

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing.sm};
`

const SkillTag = styled.span`
  background: ${colors.mutedSage};
  color: ${colors.darkGray};
  padding: ${spacing.xs} ${spacing.sm};
  border-radius: ${borderRadius.md};
  font-size: ${typography.fontSize.caption};
  font-weight: ${typography.fontWeight.medium};
  border: 1px solid ${colors.lightGray};
`

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Khemmachart Chutapetch",
  "givenName": "Khemmachart",
  "familyName": "Chutapetch",
  "jobTitle": seoData.jobTitle,
  "description": seoData.description,
  "url": seoData.url,
  "email": seoData.email,
  "telephone": seoData.phone,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "San Francisco",
    "addressRegion": "CA",
    "addressCountry": "US"
  },
  "worksFor": {
    "@type": "Organization",
    "name": "Hootsuite",
    "url": "https://hootsuite.com"
  },
  "alumniOf": [
    {
      "@type": "Organization",
      "name": "Brainstation",
      "url": "https://brainstation.io"
    },
    {
      "@type": "Organization", 
      "name": "Ryerson University",
      "url": "https://ryerson.ca"
    }
  ],
  "knowsAbout": seoData.skills,
  "sameAs": [
    "https://linkedin.com/in/khemmachart-chutapetch",
    "https://github.com/khemmachart",
    "https://twitter.com/khemmachart"
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "name": "Google UX Design Professional Certificate",
      "credentialCategory": "Professional Certificate",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Google"
      },
      "dateCreated": "2022-03"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "name": "Human-Computer Interaction Certificate",
      "credentialCategory": "Professional Certificate", 
      "recognizedBy": {
        "@type": "Organization",
        "name": "Interaction Design Foundation"
      },
      "dateCreated": "2021-11"
    }
  ],
  "workExample": [
    {
      "@type": "CreativeWork",
      "name": "Social Media Management Tools",
      "description": "Leading product design for social media management tools used by 17 million users at Hootsuite",
      "dateCreated": "2019-06"
    },
    {
      "@type": "CreativeWork", 
      "name": "B2B Payments App",
      "description": "Led end-to-end design of payments products from idea to launch at Nanopay",
      "dateCreated": "2018-05"
    }
  ]
}

export default function ProfileClientPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      
      <PageLayout>
        <ExperienceContainer>
          <ProfileHeader>
            <ProfileName>Khemmachart Chutapetch</ProfileName>
            <ProfileTitle>Product Software Engineer and Consultant</ProfileTitle>
            <ProfileDescription>
              Experienced product designer with 8+ years of expertise in user-centered design, 
              leading cross-functional teams, and delivering innovative digital solutions for 
              millions of users. Passionate about creating meaningful experiences that drive 
              business growth and user satisfaction.
            </ProfileDescription>
            <ContactInfo>
              <ContactItem>
                📧 k.chutapetch@gmail.com
              </ContactItem>
              <ContactItem>
                📱 +1 (555) 123-4567
              </ContactItem>
              <ContactItem>
                📍 San Francisco, CA
              </ContactItem>
              <ContactItem>
                🌐 khemmachart.dev
              </ContactItem>
            </ContactInfo>
          </ProfileHeader>

          <ExperienceSection>
            <SectionTitle>Professional Experience</SectionTitle>
            
            <ExperienceItem>
              <ExperienceHeader>
                <JobTitle>Senior Product Software Engineer</JobTitle>
                <Company>Hootsuite (Remote)</Company>
                <Duration>June 2019 - Present (4+ years)</Duration>
              </ExperienceHeader>
              <Description>
                Leading product design for social media management tools used by 17 million users globally. 
                Collaborate closely with engineering, product management, and data science teams to ship 
                features that improve user engagement by 30% and reduce churn by 25%. Spearheaded the 
                design system initiative that increased development velocity by 40%.
              </Description>
            </ExperienceItem>

            <ExperienceItem>
              <ExperienceHeader>
                <JobTitle>Product Software Engineer</JobTitle>
                <Company>Nanopay (Toronto, Canada)</Company>
                <Duration>May 2018 - May 2019 (1 year)</Duration>
              </ExperienceHeader>
              <Description>
                Led end-to-end design of payments products from idea to launch. Designed and developed 
                B2B payment solutions that processed over $50M in transactions. Worked closely with 
                fintech regulations and compliance teams to ensure product security and user trust.
              </Description>
            </ExperienceItem>

            <ExperienceItem>
              <ExperienceHeader>
                <JobTitle>UX/UI Designer & Frontend Developer</JobTitle>
                <Company>Digital Agency Solutions (Toronto, Canada)</Company>
                <Duration>March 2016 - April 2018 (2+ years)</Duration>
              </ExperienceHeader>
              <Description>
                Designed and developed responsive web applications for 20+ clients including e-commerce, 
                healthcare, and financial services. Improved client conversion rates by an average of 
                45% through user research and iterative design processes.
              </Description>
            </ExperienceItem>
          </ExperienceSection>

          <ExperienceSection>
            <SectionTitle>Education & Certifications</SectionTitle>
            
            <EducationItem>
              <Institution>Google UX Design Professional Certificate</Institution>
              <Degree>User Experience Design</Degree>
              <Duration>March 2022</Duration>
            </EducationItem>

            <EducationItem>
              <Institution>BrainStation</Institution>
              <Degree>User Experience Design Diploma</Degree>
              <Duration>September 2021 - November 2021</Duration>
            </EducationItem>

            <EducationItem>
              <Institution>Interaction Design Foundation</Institution>
              <Degree>Human-Computer Interaction Certificate</Degree>
              <Duration>November 2021</Duration>
            </EducationItem>

            <EducationItem>
              <Institution>Ryerson University (Toronto Metropolitan University)</Institution>
              <Degree>Bachelor of Commerce, Information Technology Management</Degree>
              <Duration>2012 - 2016</Duration>
            </EducationItem>
          </ExperienceSection>

          <ExperienceSection>
            <SectionTitle>Skills & Expertise</SectionTitle>
            
            <SkillsGrid>
              <SkillCategory>
                <SkillCategoryTitle>Frontend Development</SkillCategoryTitle>
                <SkillsList>
                  <SkillTag>React</SkillTag>
                  <SkillTag>Next.js</SkillTag>
                  <SkillTag>TypeScript</SkillTag>
                  <SkillTag>JavaScript</SkillTag>
                  <SkillTag>HTML5/CSS3</SkillTag>
                  <SkillTag>Styled Components</SkillTag>
                  <SkillTag>SASS/SCSS</SkillTag>
                </SkillsList>
              </SkillCategory>

              <SkillCategory>
                <SkillCategoryTitle>Backend & Tools</SkillCategoryTitle>
                <SkillsList>
                  <SkillTag>Node.js</SkillTag>
                  <SkillTag>Python</SkillTag>
                  <SkillTag>GraphQL</SkillTag>
                  <SkillTag>REST APIs</SkillTag>
                  <SkillTag>Firebase</SkillTag>
                  <SkillTag>Git</SkillTag>
                  <SkillTag>Docker</SkillTag>
                </SkillsList>
              </SkillCategory>

              <SkillCategory>
                <SkillCategoryTitle>Design & Research</SkillCategoryTitle>
                <SkillsList>
                  <SkillTag>Figma</SkillTag>
                  <SkillTag>Adobe Creative Suite</SkillTag>
                  <SkillTag>User Research</SkillTag>
                  <SkillTag>Prototyping</SkillTag>
                  <SkillTag>Design Systems</SkillTag>
                  <SkillTag>Accessibility</SkillTag>
                </SkillsList>
              </SkillCategory>

              <SkillCategory>
                <SkillCategoryTitle>Product & Strategy</SkillCategoryTitle>
                <SkillsList>
                  <SkillTag>Product Strategy</SkillTag>
                  <SkillTag>User Testing</SkillTag>
                  <SkillTag>A/B Testing</SkillTag>
                  <SkillTag>Analytics</SkillTag>
                  <SkillTag>SEO</SkillTag>
                  <SkillTag>Project Management</SkillTag>
                </SkillsList>
              </SkillCategory>
            </SkillsGrid>
          </ExperienceSection>
        </ExperienceContainer>
      </PageLayout>
    </>
  )
}
