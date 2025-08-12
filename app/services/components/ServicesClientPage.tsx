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
  title: "Professional Services - Khemmachart Chutapetch | Product Engineering & Consulting",
  description: "Offering professional product engineering, software development, UX design, and consulting services. 8+ years of experience helping businesses create innovative digital solutions.",
  keywords: "Product Engineering Services, Software Development Consulting, UX Design Services, Full Stack Development, React Development, Next.js Consulting, TypeScript Services, Software Architecture Consulting, Product Design Services, Technical Consulting",
  author: "Khemmachart Chutapetch",
  url: "https://khemmachart.dev/services",
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

const ServiceItem = styled.div`
  margin-bottom: ${spacing.xl};
  background: ${colors.ivoryWhite};
  padding: ${spacing.lg};
  border-radius: ${borderRadius.lg};
  border: 1px solid ${colors.lightGray};
  box-shadow: ${shadows.soft};
  
  &:last-child {
    margin-bottom: 0;
  }
`

const ServiceItemHeader = styled.div`
  margin-bottom: ${spacing.md};
`

const ServiceName = styled(H3)`
  font-size: 20px;
  font-weight: ${typography.fontWeight.semiBold};
  color: ${colors.darkGray};
  margin: 0 0 ${spacing.xs} 0;
`

const ServiceCategory = styled.div`
  font-size: ${typography.fontSize.body};
  font-weight: ${typography.fontWeight.medium};
  color: ${colors.accentBlue};
  margin-bottom: ${spacing.xs};
`

const ServicePrice = styled(Caption)`
  color: ${colors.graphite};
  font-size: ${typography.fontSize.body};
  font-weight: ${typography.fontWeight.semiBold};
  margin-bottom: ${spacing.sm};
`

const ServiceDescription2 = styled(Body)`
  margin: ${spacing.md} 0 0 0;
  line-height: 1.6;
  color: ${colors.darkGray};
`

const ServiceFeatures = styled.ul`
  margin: ${spacing.md} 0 0 0;
  padding-left: ${spacing.lg};
  color: ${colors.darkGray};
  
  li {
    margin-bottom: ${spacing.xs};
    line-height: 1.5;
  }
`

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${spacing.lg};
  
  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

const ProcessStep = styled.div`
  background: ${colors.ivoryWhite};
  padding: ${spacing.lg};
  border-radius: ${borderRadius.lg};
  border: 1px solid ${colors.lightGray};
  box-shadow: ${shadows.soft};
  text-align: center;
`

const ProcessStepNumber = styled.div`
  width: 40px;
  height: 40px;
  background: ${colors.accentBlue};
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${typography.fontWeight.bold};
  font-size: ${typography.fontSize.bodyLarge};
  margin: 0 auto ${spacing.md} auto;
`

const ProcessStepTitle = styled.h4`
  font-size: ${typography.fontSize.bodyLarge};
  font-weight: ${typography.fontWeight.semiBold};
  color: ${colors.darkGray};
  margin: 0 0 ${spacing.md} 0;
`

const ProcessStepDescription = styled(Body)`
  color: ${colors.darkGray};
  line-height: 1.6;
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
  "name": "Professional Software Engineering Services",
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
    "name": "Software Engineering Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Product Engineering & Development",
          "description": "End-to-end product development from concept to launch"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "UX/UI Design Services",
          "description": "User-centered design and interface development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Technical Consulting",
          "description": "Software architecture and technical strategy consulting"
        }
      }
    ]
  }
}

export default function ServicesClientPage() {
  const handleContactClick = () => {
    window.location.href = 'mailto:k.chutapetch@gmail.com?subject=Service Inquiry'
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
            <ServiceTitle>Strategy. Systems. Success</ServiceTitle>
            <ServiceSubtitle>From strategy to success, The system for venture that scale</ServiceSubtitle>
            
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

          <ServiceSection>
            <SectionTitle>🧠 Strategy</SectionTitle>
            <ServiceDescription2 style={{ marginBottom: spacing.lg, fontStyle: 'italic' }}>
              วางรากฐานทางธุรกิจและเทคโนโลยีที่มั่นคง เพื่อให้เติบโตได้ในระยะยาว<br/>
              <em>Building solid business and technology foundations for sustainable long-term growth</em>
            </ServiceDescription2>
            
            <ServiceItem>
              <ServiceItemHeader>
                <ServiceName>Digital Transformation Consulting</ServiceName>
                <ServiceCategory>Business Strategy</ServiceCategory>
                <ServicePrice>Starting at $200/hour</ServicePrice>
              </ServiceItemHeader>
              <ServiceDescription2>
                ช่วยประเมินว่าองค์กรของคุณพร้อมแค่ไหนในการปรับตัวสู่ระบบดิจิทัล<br/>
                <em>Assess your organization's readiness for digital transformation</em>
              </ServiceDescription2>
              <ServiceFeatures>
                <li>🔸 <strong>เหมาะกับ:</strong> บริษัทดั้งเดิม (legacy business) หรือ SME ที่ต้องการเปลี่ยนผ่านจาก manual workflow ไปสู่ digital automation</li>
                <li>Digital readiness assessment and roadmap creation</li>
                <li>Legacy system modernization planning</li>
                <li>Change management and team training</li>
                <li>ROI analysis and business case development</li>
              </ServiceFeatures>
            </ServiceItem>

            <ServiceItem>
              <ServiceItemHeader>
                <ServiceName>Startup Business Consultation</ServiceName>
                <ServiceCategory>Startup Strategy</ServiceCategory>
                <ServicePrice>Starting at $150/hour</ServicePrice>
              </ServiceItemHeader>
              <ServiceDescription2>
                ให้คำปรึกษาทั้งในด้าน product, technology และการสร้างทีมสำหรับ startup<br/>
                <em>Comprehensive consultation on product, technology, and team building for startups</em>
              </ServiceDescription2>
              <ServiceFeatures>
                <li>🔸 <strong>เหมาะกับ:</strong> ผู้ก่อตั้งหรือทีม early-stage ที่ต้องการวางแผนธุรกิจและ product ให้ตรงจุด</li>
                <li>Business model validation and refinement</li>
                <li>MVP planning and development strategy</li>
                <li>Team structure and hiring roadmap</li>
                <li>Technology stack recommendations</li>
              </ServiceFeatures>
            </ServiceItem>

            <ServiceItem>
              <ServiceItemHeader>
                <ServiceName>SEO Strategy & Content Planning</ServiceName>
                <ServiceCategory>Growth Strategy</ServiceCategory>
                <ServicePrice>Starting at $120/hour</ServicePrice>
              </ServiceItemHeader>
              <ServiceDescription2>
                วางกลยุทธ์ SEO, คำค้นหา และวางโครงสร้างคอนเทนต์ให้เหมาะกับทั้งคนและ Google<br/>
                <em>Develop SEO strategies, keyword research, and content structure for both users and Google</em>
              </ServiceDescription2>
              <ServiceFeatures>
                <li>🔸 <strong>เหมาะกับ:</strong> เว็บไซต์ที่ต้องการ organic traffic หรือ SaaS ที่ต้องการ inbound marketing</li>
                <li>Comprehensive keyword research and analysis</li>
                <li>Content strategy and editorial calendar</li>
                <li>Technical SEO audit and recommendations</li>
                <li>Competitor analysis and market positioning</li>
              </ServiceFeatures>
            </ServiceItem>

            <ServiceItem>
              <ServiceItemHeader>
                <ServiceName>Product-Market Fit Coaching</ServiceName>
                <ServiceCategory>Product Strategy</ServiceCategory>
                <ServicePrice>Starting at $180/hour</ServicePrice>
              </ServiceItemHeader>
              <ServiceDescription2>
                ช่วยให้ทีมเข้าใจว่าผลิตภัณฑ์ตอบโจทย์ตลาดจริงหรือยัง ผ่านการวิเคราะห์ customer feedback, feature usage และ market positioning<br/>
                <em>Help teams understand if their product truly fits the market through customer feedback, feature usage, and market positioning analysis</em>
              </ServiceDescription2>
              <ServiceFeatures>
                <li>🔸 <strong>เหมาะกับ:</strong> Startup ที่ยังไม่แน่ใจว่าเจอ Product-Market Fit แล้วหรือยัง</li>
                <li>Customer feedback analysis and insights</li>
                <li>Feature usage analytics and optimization</li>
                <li>Market positioning and competitive analysis</li>
                <li>Growth metrics and KPI establishment</li>
              </ServiceFeatures>
            </ServiceItem>

            <ServiceItem>
              <ServiceItemHeader>
                <ServiceName>Technology Stack Advisory</ServiceName>
                <ServiceCategory>Technical Strategy</ServiceCategory>
                <ServicePrice>Starting at $160/hour</ServicePrice>
              </ServiceItemHeader>
              <ServiceDescription2>
                ช่วยเลือกเทคโนโลยีที่เหมาะกับ scale, ทีม, และ resource<br/>
                <em>Help choose the right technology stack for your scale, team, and resources</em>
              </ServiceDescription2>
              <ServiceFeatures>
                <li>🔸 <strong>เหมาะกับ:</strong> ทีมที่ยังไม่แน่ใจว่าจะใช้ tech อะไรดี หรือกำลังจะเริ่มสร้าง MVP</li>
                <li>Technology evaluation and recommendation</li>
                <li>Scalability and performance considerations</li>
                <li>Team skill assessment and training needs</li>
                <li>Budget and timeline optimization</li>
              </ServiceFeatures>
            </ServiceItem>
          </ServiceSection>

          <ServiceSection>
            <SectionTitle>⚙️ Systems</SectionTitle>
            <ServiceDescription2 style={{ marginBottom: spacing.lg, fontStyle: 'italic' }}>
              สร้างระบบที่ทำงานได้จริง และทำให้ทีมทำงานได้อย่างมีประสิทธิภาพ<br/>
              <em>Build functional systems that enable teams to work efficiently</em>
            </ServiceDescription2>
            
            <ServiceItem>
              <ServiceItemHeader>
                <ServiceName>AI Automation Integration</ServiceName>
                <ServiceCategory>Process Automation</ServiceCategory>
                <ServicePrice>Starting at $140/hour</ServicePrice>
              </ServiceItemHeader>
              <ServiceDescription2>
                นำ AI tools เช่น ChatGPT, Make, Zapier มาช่วยลดงานซ้ำซ้อน<br/>
                <em>Integrate AI tools like ChatGPT, Make, and Zapier to reduce repetitive tasks</em>
              </ServiceDescription2>
              <ServiceFeatures>
                <li>🔸 <strong>เหมาะกับ:</strong> ทีม ops, marketing หรือทีม internal ที่ใช้เวลาไปกับ task เดิม ๆ</li>
                <li>AI workflow automation setup</li>
                <li>Custom ChatGPT integrations</li>
                <li>Zapier and Make.com workflow creation</li>
                <li>Process optimization and time savings analysis</li>
              </ServiceFeatures>
            </ServiceItem>

            <ServiceItem>
              <ServiceItemHeader>
                <ServiceName>Mobile & Web App Implementation</ServiceName>
                <ServiceCategory>Full-Stack Development</ServiceCategory>
                <ServicePrice>Starting at $150/hour</ServicePrice>
              </ServiceItemHeader>
              <ServiceDescription2>
                ออกแบบและพัฒนาแอปพลิเคชันด้วย stack ที่เหมาะกับแต่ละ use case (เช่น React, Flutter, Node.js)<br/>
                <em>Design and develop applications with the right stack for each use case (React, Flutter, Node.js)</em>
              </ServiceDescription2>
              <ServiceFeatures>
                <li>🔸 <strong>เหมาะกับ:</strong> ธุรกิจที่ต้องการสร้างแอปสำหรับลูกค้าหรือระบบภายใน</li>
                <li>React, Next.js, TypeScript development</li>
                <li>Flutter and React Native mobile apps</li>
                <li>Backend API development and integration</li>
                <li>Database design and optimization</li>
              </ServiceFeatures>
            </ServiceItem>

            <ServiceItem>
              <ServiceItemHeader>
                <ServiceName>Social Media Workflow Integration</ServiceName>
                <ServiceCategory>Workflow Automation</ServiceCategory>
                <ServicePrice>Starting at $100/hour</ServicePrice>
              </ServiceItemHeader>
              <ServiceDescription2>
                เชื่อมระบบ เช่น Google Sheets, LINE OA, Notion หรือระบบแจ้งเตือนผ่าน Telegram, Discord เพื่อให้ content workflow ง่ายขึ้น<br/>
                <em>Integrate systems like Google Sheets, LINE OA, Notion, and notifications via Telegram, Discord to streamline content workflow</em>
              </ServiceDescription2>
              <ServiceFeatures>
                <li>🔸 <strong>เหมาะกับ:</strong> ทีมคอนเทนต์ หรือ admin เพจ/แบรนด์ที่ต้องการทำงานเร็วขึ้น</li>
                <li>Social media automation and scheduling</li>
                <li>Content workflow and approval processes</li>
                <li>Multi-platform integration and synchronization</li>
                <li>Analytics and reporting automation</li>
              </ServiceFeatures>
            </ServiceItem>

            <ServiceItem>
              <ServiceItemHeader>
                <ServiceName>Agile Coaching & Scrum Setup</ServiceName>
                <ServiceCategory>Team Process</ServiceCategory>
                <ServicePrice>Starting at $130/hour</ServicePrice>
              </ServiceItemHeader>
              <ServiceDescription2>
                ช่วยตั้งระบบ Agile ให้เหมาะกับองค์กร (Scrum / Kanban / Hybrid) พร้อมโค้ชให้ทีมใช้ได้จริง<br/>
                <em>Set up Agile systems suitable for your organization (Scrum/Kanban/Hybrid) with hands-on team coaching</em>
              </ServiceDescription2>
              <ServiceFeatures>
                <li>🔸 <strong>เหมาะกับ:</strong> องค์กรที่กำลังตั้งทีมพัฒนา หรือต้องการปรับรูปแบบการทำงาน</li>
                <li>Agile methodology implementation</li>
                <li>Team coaching and training</li>
                <li>Process optimization and refinement</li>
                <li>Tool setup and integration (Jira, Trello, etc.)</li>
              </ServiceFeatures>
            </ServiceItem>

            <ServiceItem>
              <ServiceItemHeader>
                <ServiceName>Internal Workflow Automation Audit</ServiceName>
                <ServiceCategory>Process Optimization</ServiceCategory>
                <ServicePrice>Starting at $120/hour</ServicePrice>
              </ServiceItemHeader>
              <ServiceDescription2>
                วิเคราะห์กระบวนการภายใน แล้วเสนอ tools ที่เหมาะสมในการทำ automation<br/>
                <em>Analyze internal processes and recommend suitable tools for automation</em>
              </ServiceDescription2>
              <ServiceFeatures>
                <li>🔸 <strong>เหมาะกับ:</strong> ทีม operation, support หรือ HR ที่อยากลดเวลา manual task</li>
                <li>Process mapping and bottleneck identification</li>
                <li>Automation opportunity assessment</li>
                <li>Tool recommendations and implementation</li>
                <li>ROI analysis and efficiency gains</li>
              </ServiceFeatures>
            </ServiceItem>

            <ServiceItem>
              <ServiceItemHeader>
                <ServiceName>Data Dashboard & Visualization Setup</ServiceName>
                <ServiceCategory>Data Analytics</ServiceCategory>
                <ServicePrice>Starting at $110/hour</ServicePrice>
              </ServiceItemHeader>
              <ServiceDescription2>
                สร้าง dashboard ด้วย Looker Studio, Retool, Metabase เพื่อให้ทีมเห็นข้อมูลแบบ real-time<br/>
                <em>Create dashboards using Looker Studio, Retool, Metabase for real-time data visibility</em>
              </ServiceDescription2>
              <ServiceFeatures>
                <li>🔸 <strong>เหมาะกับ:</strong> ทีม marketing, product หรือ founder ที่อยากเห็น insight ได้เร็วขึ้น</li>
                <li>Custom dashboard design and development</li>
                <li>Data integration and visualization</li>
                <li>Real-time monitoring and alerts</li>
                <li>User training and documentation</li>
              </ServiceFeatures>
            </ServiceItem>
          </ServiceSection>

          <ServiceSection>
            <SectionTitle>📈 Success</SectionTitle>
            <ServiceDescription2 style={{ marginBottom: spacing.lg, fontStyle: 'italic' }}>
              ขยายผลลัพธ์ด้วยการปรับปรุงประสิทธิภาพและโฟกัสที่การเติบโต<br/>
              <em>Scale results through performance optimization and growth-focused strategies</em>
            </ServiceDescription2>
            
            <ServiceItem>
              <ServiceItemHeader>
                <ServiceName>SEO & Organic Growth Execution</ServiceName>
                <ServiceCategory>Growth Marketing</ServiceCategory>
                <ServicePrice>Starting at $100/hour</ServicePrice>
              </ServiceItemHeader>
              <ServiceDescription2>
                วางแผนการเติบโตแบบไม่ใช้โฆษณา ผ่าน content, on-page SEO และ backlink strategy<br/>
                <em>Plan organic growth without ads through content, on-page SEO, and backlink strategies</em>
              </ServiceDescription2>
              <ServiceFeatures>
                <li>🔸 <strong>เหมาะกับ:</strong> ธุรกิจที่ต้องการเพิ่ม traffic โดยไม่พึ่ง paid media</li>
                <li>Content marketing and SEO execution</li>
                <li>Link building and outreach campaigns</li>
                <li>Technical SEO optimization</li>
                <li>Performance tracking and reporting</li>
              </ServiceFeatures>
            </ServiceItem>

            <ServiceItem>
              <ServiceItemHeader>
                <ServiceName>Landing Page Optimization (CRO)</ServiceName>
                <ServiceCategory>Conversion Optimization</ServiceCategory>
                <ServicePrice>Starting at $130/hour</ServicePrice>
              </ServiceItemHeader>
              <ServiceDescription2>
                วิเคราะห์หน้า Landing Page และปรับ UX, CTA, Copy เพื่อเพิ่ม Conversion Rate<br/>
                <em>Analyze landing pages and optimize UX, CTA, and copy to increase conversion rates</em>
              </ServiceDescription2>
              <ServiceFeatures>
                <li>🔸 <strong>เหมาะกับ:</strong> Startup ที่ยิง ads แล้วแต่ convert ไม่ดี หรือเพิ่งเปิดตัวฟีเจอร์ใหม่</li>
                <li>Landing page audit and optimization</li>
                <li>A/B testing and experimentation</li>
                <li>User behavior analysis</li>
                <li>Conversion funnel optimization</li>
              </ServiceFeatures>
            </ServiceItem>

            <ServiceItem>
              <ServiceItemHeader>
                <ServiceName>Team Enablement & Tech Mentorship</ServiceName>
                <ServiceCategory>Team Development</ServiceCategory>
                <ServicePrice>Starting at $140/hour</ServicePrice>
              </ServiceItemHeader>
              <ServiceDescription2>
                ช่วยโค้ชทีม dev หรือ product ให้ทำงานได้ดีขึ้น ทั้งในด้านทักษะ, mindset และ ownership<br/>
                <em>Coach dev or product teams to work better in skills, mindset, and ownership</em>
              </ServiceDescription2>
              <ServiceFeatures>
                <li>🔸 <strong>เหมาะกับ:</strong> บริษัทที่มีทีม junior, หรือผู้นำทีมใหม่ที่อยากเสริม leadership skill</li>
                <li>Technical mentorship and skill development</li>
                <li>Leadership coaching and team building</li>
                <li>Code review and best practices</li>
                <li>Career development planning</li>
              </ServiceFeatures>
            </ServiceItem>

            <ServiceItem>
              <ServiceItemHeader>
                <ServiceName>System Performance & Monitoring</ServiceName>
                <ServiceCategory>Technical Optimization</ServiceCategory>
                <ServicePrice>Starting at $160/hour</ServicePrice>
              </ServiceItemHeader>
              <ServiceDescription2>
                ตรวจสอบและปรับปรุงระบบให้เสถียรและเร็วขึ้น พร้อมตั้ง monitoring ที่มองเห็นได้ชัด<br/>
                <em>Audit and improve system stability and speed with clear monitoring setup</em>
              </ServiceDescription2>
              <ServiceFeatures>
                <li>🔸 <strong>เหมาะกับ:</strong> ระบบ production ที่เริ่ม scale แล้วมีปัญหา latency หรือ error rate สูง</li>
                <li>Performance optimization and tuning</li>
                <li>Monitoring and alerting setup</li>
                <li>Database optimization</li>
                <li>Infrastructure scaling strategies</li>
              </ServiceFeatures>
            </ServiceItem>

            <ServiceItem>
              <ServiceItemHeader>
                <ServiceName>UI/UX Review & Optimization</ServiceName>
                <ServiceCategory>User Experience</ServiceCategory>
                <ServicePrice>Starting at $120/hour</ServicePrice>
              </ServiceItemHeader>
              <ServiceDescription2>
                รีวิว flow, usability, interaction โดยไม่ต้อง redesign ทั้งหมด พร้อมแนะนำจุดปรับปรุง<br/>
                <em>Review flow, usability, and interaction without full redesign, with improvement recommendations</em>
              </ServiceDescription2>
              <ServiceFeatures>
                <li>🔸 <strong>เหมาะกับ:</strong> SaaS, Web App, หรือแอปที่ใช้งานได้แต่ UX ยังไม่ลื่นไหล</li>
                <li>UX audit and usability testing</li>
                <li>Design system optimization</li>
                <li>Accessibility improvements</li>
                <li>User journey optimization</li>
              </ServiceFeatures>
            </ServiceItem>
          </ServiceSection>

          <ServiceSection>
            <SectionTitle>How I Work</SectionTitle>
            
            <ProcessGrid>
              <ProcessStep>
                <ProcessStepNumber>1</ProcessStepNumber>
                <ProcessStepTitle>Discovery & Planning</ProcessStepTitle>
                <ProcessStepDescription>
                  We start with a comprehensive discovery session to understand your business 
                  goals, target audience, and technical requirements.
                </ProcessStepDescription>
              </ProcessStep>

              <ProcessStep>
                <ProcessStepNumber>2</ProcessStepNumber>
                <ProcessStepTitle>Strategy & Design</ProcessStepTitle>
                <ProcessStepDescription>
                  I develop a detailed project plan, create wireframes and prototypes, and 
                  establish the technical architecture for your solution.
                </ProcessStepDescription>
              </ProcessStep>

              <ProcessStep>
                <ProcessStepNumber>3</ProcessStepNumber>
                <ProcessStepTitle>Development & Testing</ProcessStepTitle>
                <ProcessStepDescription>
                  Using agile methodologies, I build your solution with regular check-ins, 
                  continuous testing, and iterative improvements.
                </ProcessStepDescription>
              </ProcessStep>

              <ProcessStep>
                <ProcessStepNumber>4</ProcessStepNumber>
                <ProcessStepTitle>Launch & Support</ProcessStepTitle>
                <ProcessStepDescription>
                  I handle deployment, provide training, and offer ongoing support to ensure 
                  your solution continues to meet your evolving needs.
                </ProcessStepDescription>
              </ProcessStep>
            </ProcessGrid>
          </ServiceSection>

          <ServiceSection>
            <SectionTitle>Technologies & Expertise</SectionTitle>
            
            <SkillsGrid>
              <SkillCategory>
                <SkillCategoryTitle>Frontend Development</SkillCategoryTitle>
                <SkillsList>
                  <SkillTag>React</SkillTag>
                  <SkillTag>Next.js</SkillTag>
                  <SkillTag>TypeScript</SkillTag>
                  <SkillTag>JavaScript</SkillTag>
                  <SkillTag>HTML/CSS</SkillTag>
                  <SkillTag>Styled Components</SkillTag>
                  <SkillTag>Tailwind CSS</SkillTag>
                  <SkillTag>Responsive Design</SkillTag>
                </SkillsList>
              </SkillCategory>

              <SkillCategory>
                <SkillCategoryTitle>Backend Development</SkillCategoryTitle>
                <SkillsList>
                  <SkillTag>Node.js</SkillTag>
                  <SkillTag>Express.js</SkillTag>
                  <SkillTag>REST APIs</SkillTag>
                  <SkillTag>GraphQL</SkillTag>
                  <SkillTag>MongoDB</SkillTag>
                  <SkillTag>PostgreSQL</SkillTag>
                  <SkillTag>Firebase</SkillTag>
                  <SkillTag>Serverless</SkillTag>
                </SkillsList>
              </SkillCategory>

              <SkillCategory>
                <SkillCategoryTitle>Mobile Development</SkillCategoryTitle>
                <SkillsList>
                  <SkillTag>Flutter</SkillTag>
                  <SkillTag>React Native</SkillTag>
                  <SkillTag>iOS (Swift)</SkillTag>
                  <SkillTag>Android (Kotlin)</SkillTag>
                  <SkillTag>Cross-platform</SkillTag>
                  <SkillTag>App Store Deployment</SkillTag>
                </SkillsList>
              </SkillCategory>

              <SkillCategory>
                <SkillCategoryTitle>Design & UX</SkillCategoryTitle>
                <SkillsList>
                  <SkillTag>Figma</SkillTag>
                  <SkillTag>Sketch</SkillTag>
                  <SkillTag>Adobe Creative Suite</SkillTag>
                  <SkillTag>User Research</SkillTag>
                  <SkillTag>Prototyping</SkillTag>
                  <SkillTag>Design Systems</SkillTag>
                  <SkillTag>Usability Testing</SkillTag>
                  <SkillTag>Accessibility</SkillTag>
                </SkillsList>
              </SkillCategory>

              <SkillCategory>
                <SkillCategoryTitle>DevOps & Cloud</SkillCategoryTitle>
                <SkillsList>
                  <SkillTag>AWS</SkillTag>
                  <SkillTag>Google Cloud</SkillTag>
                  <SkillTag>Docker</SkillTag>
                  <SkillTag>CI/CD</SkillTag>
                  <SkillTag>GitHub Actions</SkillTag>
                  <SkillTag>Vercel</SkillTag>
                  <SkillTag>Netlify</SkillTag>
                  <SkillTag>Monitoring</SkillTag>
                </SkillsList>
              </SkillCategory>

              <SkillCategory>
                <SkillCategoryTitle>SEO & Marketing</SkillCategoryTitle>
                <SkillsList>
                  <SkillTag>Technical SEO</SkillTag>
                  <SkillTag>Google Analytics</SkillTag>
                  <SkillTag>Search Console</SkillTag>
                  <SkillTag>Keyword Research</SkillTag>
                  <SkillTag>Content Strategy</SkillTag>
                  <SkillTag>Link Building</SkillTag>
                  <SkillTag>Schema Markup</SkillTag>
                  <SkillTag>Local SEO</SkillTag>
                </SkillsList>
              </SkillCategory>
            </SkillsGrid>
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
