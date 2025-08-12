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
  colors, 
  spacing, 
  typography, 
  borderRadius,
  shadows,
  breakpoints
} from '@/components/design-system'

// SEO and structured data
const seoData = {
  title: "Personal Services - Khemmachart Chutapetch | Product Engineering & Consulting",
  description: "Offering professional product engineering, software development, UX design, and consulting services. 8+ years of experience helping businesses create innovative digital solutions.",
  keywords: "Product Engineering Services, Software Development Consulting, UX Design Services, Full Stack Development, React Development, Next.js Consulting, TypeScript Services, Software Architecture Consulting, Product Design Services, Technical Consulting",
  author: "Khemmachart Chutapetch",
  url: "https://khemmachart.dev/services-personal",
  image: "https://khemmachart.dev/images/services-hero.jpg",
  email: "k.chutapetch@gmail.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  services: [
    "Product Engineering",
    "Software Development",
    "UX/UI Design",
    "Technical Consulting",
    "Software Architecture",
    "Full Stack Development"
  ]
}

// Custom styled components for the services page
const ServicesContainer = styled(Container)`
  max-width: 900px;
  margin: 0 auto;
  padding: ${spacing.xl} ${spacing.lg};
`

const ServiceHeader = styled.div`
  text-align: center;
  margin-bottom: ${spacing.xxxl};
  padding: ${spacing.xl} 0;
  border-bottom: 2px solid ${colors.lightGray};
`

const ServiceTitle = styled(H1)`
  font-size: 42px;
  font-weight: ${typography.fontWeight.bold};
  color: ${colors.darkGray};
  margin: 0 0 ${spacing.sm} 0;
  letter-spacing: -0.5px;
`

const ServiceSubtitle = styled(H2)`
  font-size: 24px;
  font-weight: ${typography.fontWeight.medium};
  color: ${colors.graphite};
  margin: 0 0 ${spacing.lg} 0;
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

const ServiceSection = styled(Section)`
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

const ServiceBlock = styled.div`
  margin-bottom: ${spacing.xl};
  background: ${colors.ivoryWhite};
  padding: ${spacing.lg};
  border-radius: ${borderRadius.lg};
  border: 1px solid ${colors.lightGray};
  box-shadow: ${shadows.soft};
`

const ServiceBlockTitle = styled(H3)`
  font-size: 20px;
  font-weight: ${typography.fontWeight.semiBold};
  color: ${colors.accentBlue};
  margin: 0 0 ${spacing.sm} 0;
`

const ServiceBlockDesc = styled(Body)`
  color: ${colors.darkGray};
  margin-bottom: ${spacing.md};
  line-height: 1.6;
`

const ServiceList = styled.ul`
  margin: 0 0 ${spacing.md} 0;
  padding-left: ${spacing.lg};
  color: ${colors.darkGray};
  li {
    margin-bottom: ${spacing.xs};
    line-height: 1.5;
  }
`

const ServiceAudience = styled.div`
  font-size: ${typography.fontSize.body};
  color: ${colors.graphite};
  margin-top: ${spacing.sm};
  margin-bottom: ${spacing.sm};
`

const CTASection = styled.div`
  background: ${colors.accentBlue};
  color: white;
  padding: ${spacing.xl};
  border-radius: ${borderRadius.lg};
  text-align: center;
  margin-top: ${spacing.xl};
`

const CTATitle = styled(H2)`
  font-size: 24px;
  font-weight: ${typography.fontWeight.bold};
  margin: 0 0 ${spacing.md} 0;
  color: white;
`

const CTADescription = styled(Body)`
  margin: 0 0 ${spacing.lg} 0;
  color: white;
  opacity: 0.9;
`

const CTAButton = styled.button`
  background: white;
  color: ${colors.accentBlue};
  padding: ${spacing.md} ${spacing.lg};
  border: none;
  border-radius: ${borderRadius.md};
  font-size: ${typography.fontSize.body};
  font-weight: ${typography.fontWeight.semiBold};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${colors.lightGray};
    transform: translateY(-2px);
  }
`

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Personal Professional Software Engineering Services",
  "description": seoData.description,
  "provider": {
    "@type": "Person",
    "name": "Khemmachart Chutapetch",
    "email": seoData.email,
    "telephone": seoData.phone,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "addressCountry": "US"
    }
  },
  "serviceType": "Software Development and Consulting",
  "areaServed": {
    "@type": "Place",
    "name": "Global"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Personal Software Engineering Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Business Strategy & Growth",
          "description": "Business foundations and growth strategies connecting product and customers"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Technology Solutions",
          "description": "Technology systems and infrastructure that support growth"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Product Development",
          "description": "Building functional products with great UX and fast delivery"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Team Development",
          "description": "Building capable teams that work efficiently with agile methodologies"
        }
      }
    ]
  }
}

export default function ServicesPersonalClientPage() {
  const handleContactClick = () => {
    window.location.href = 'mailto:k.chutapetch@gmail.com?subject=Personal Service Inquiry'
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      
      <PageLayout>
        <ServicesContainer>
          <ServiceHeader>
            <ServiceTitle>🎯 โครงสร้างบริการ</ServiceTitle>
            <ServiceSubtitle>แบ่ง 4 หมวดหลัก ครอบคลุมธุรกิจ เทคโนโลยี โปรดักต์ และทีม</ServiceSubtitle>
            <ContactInfo>
              <ContactItem>
                <span>📧</span>
                <span>k.chutapetch@gmail.com</span>
              </ContactItem>
              <ContactItem>
                <span>📱</span>
                <span>+1 (555) 123-4567</span>
              </ContactItem>
              <ContactItem>
                <span>🌐</span>
                <span>khemmachart.dev</span>
              </ContactItem>
              <ContactItem>
                <span>📍</span>
                <span>San Francisco, CA</span>
              </ContactItem>
            </ContactInfo>
          </ServiceHeader>

          {/* 1. Business */}
          <ServiceSection>
            <SectionTitle>🔹 1. <b>Business</b></SectionTitle>
            <ServiceBlock>
              <ServiceBlockDesc>
                วางรากฐานธุรกิจ + กลยุทธ์การเติบโต ที่เชื่อมโยง product และ customer
              </ServiceBlockDesc>
              <ServiceBlockTitle>Services:</ServiceBlockTitle>
              <ServiceList>
                <li>Startup Business Consultation</li>
                <li>Product-Market Fit Coaching</li>
                <li>SEO Strategy & Content Planning</li>
                <li>SEO & Organic Growth Execution</li>
                <li>Landing Page Optimization (CRO)</li>
                <li>Content & Copywriting Strategy for SEO</li>
              </ServiceList>
              <ServiceBlockTitle>เหมาะกับ:</ServiceBlockTitle>
              <ServiceAudience>
                Founder, CEO, Marketing Head, Business Strategist
              </ServiceAudience>
            </ServiceBlock>
          </ServiceSection>

          {/* 2. Tech */}
          <ServiceSection>
            <SectionTitle>🔹 2. <b>Tech</b></SectionTitle>
            <ServiceBlock>
              <ServiceBlockDesc>
                วางระบบและเทคโนโลยีที่รองรับการเติบโต
              </ServiceBlockDesc>
              <ServiceBlockTitle>Services:</ServiceBlockTitle>
              <ServiceList>
                <li>Technology Stack Advisory</li>
                <li>AI Automation Integration</li>
                <li>Internal Workflow Automation Audit</li>
                <li>Mobile & Web App Implementation</li>
                <li>Data Dashboard & Visualization Setup</li>
                <li>Website Performance Optimization</li>
                <li>System Performance & Monitoring</li>
              </ServiceList>
              <ServiceBlockTitle>เหมาะกับ:</ServiceBlockTitle>
              <ServiceAudience>
                CTO, Tech Lead, Ops Manager, Infra Engineer
              </ServiceAudience>
            </ServiceBlock>
          </ServiceSection>

          {/* 3. Product */}
          <ServiceSection>
            <SectionTitle>🔹 3. <b>Product</b></SectionTitle>
            <ServiceBlock>
              <ServiceBlockDesc>
                สร้าง product ที่ใช้งานได้จริง มี UX ที่ดี และส่งมอบได้ไว
              </ServiceBlockDesc>
              <ServiceBlockTitle>Services:</ServiceBlockTitle>
              <ServiceList>
                <li>UI/UX Review & Suggestions</li>
                <li>Prototype & MVP UI with No-code/Low-code Tools</li>
                <li>Agile Coaching & Scrum Setup <span style={{color: colors.graphite, fontSize: typography.fontSize.caption}}>(ถ้ามองจากมุม product process)</span></li>
              </ServiceList>
              <ServiceBlockTitle>เหมาะกับ:</ServiceBlockTitle>
              <ServiceAudience>
                Product Manager, Startup Founder, UX Lead, Early-stage startup
              </ServiceAudience>
            </ServiceBlock>
          </ServiceSection>

          {/* 4. Team */}
          <ServiceSection>
            <SectionTitle>🔹 4. <b>Team</b></SectionTitle>
            <ServiceBlock>
              <ServiceBlockDesc>
                สร้างทีมที่มีความสามารถ ทำงานได้อย่าง agile และมีประสิทธิภาพ
              </ServiceBlockDesc>
              <ServiceBlockTitle>Services:</ServiceBlockTitle>
              <ServiceList>
                <li>Agile Coaching & Scrum Setup <span style={{color: colors.graphite, fontSize: typography.fontSize.caption}}>(ซ้ำกับ Product แต่เน้น "ทีม")</span></li>
                <li>Team Enablement & Tech Mentorship</li>
                <li>Internal Workflow Automation Audit <span style={{color: colors.graphite, fontSize: typography.fontSize.caption}}>(ในแง่พฤติกรรมของทีม)</span></li>
              </ServiceList>
              <ServiceBlockTitle>เหมาะกับ:</ServiceBlockTitle>
              <ServiceAudience>
                Head of Product, Engineering Manager, Founder ที่เริ่ม build ทีม dev/product
              </ServiceAudience>
            </ServiceBlock>
          </ServiceSection>

          {/* How I Work */}
          <ServiceSection>
            <SectionTitle>How I Work</SectionTitle>
            <ServiceBlock>
              <ServiceBlockTitle>ขั้นตอนการทำงาน</ServiceBlockTitle>
              <ServiceList>
                <li><b>1. Discovery & Planning</b> — ทำความเข้าใจ business goal, audience, และ requirement</li>
                <li><b>2. Strategy & Design</b> — วางแผน, สร้าง wireframe/prototype, วาง technical architecture</li>
                <li><b>3. Development & Testing</b> — พัฒนาแบบ agile, มี feedback loop และปรับปรุงต่อเนื่อง</li>
                <li><b>4. Launch & Support</b> — Deploy, เทรนทีม, และดูแลหลังส่งมอบ</li>
              </ServiceList>
            </ServiceBlock>
          </ServiceSection>

          <CTASection>
            <CTATitle>Ready to Start Your Project?</CTATitle>
            <CTADescription>
              Let's discuss how I can help bring your vision to life. I offer free initial 
              consultations to understand your needs and provide tailored recommendations.
            </CTADescription>
            <CTAButton onClick={handleContactClick}>
              Get In Touch
            </CTAButton>
          </CTASection>
        </ServicesContainer>
      </PageLayout>
    </>
  )
}
