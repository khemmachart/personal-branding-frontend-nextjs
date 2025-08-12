import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { 
  Container, 
  PageLayout, 
  Section, 
  Flex,
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
} from '../../components/design-system';

// Custom styled components for the resume
const ResumeContainer = styled(Container)`
  max-width: 900px;
  margin: 0 auto;
  padding: ${spacing.xl} ${spacing.lg};
`;

const ProfileHeader = styled.div`
  text-align: center;
  margin-bottom: ${spacing.xxxl};
  padding: ${spacing.xl} 0;
  border-bottom: 2px solid ${colors.lightGray};
`;

const ProfileName = styled(H1)`
  font-size: 42px;
  font-weight: ${typography.fontWeight.bold};
  color: ${colors.darkGray};
  margin: 0 0 ${spacing.sm} 0;
  letter-spacing: -0.5px;
`;

const ProfileTitle = styled(H2)`
  font-size: 24px;
  font-weight: ${typography.fontWeight.medium};
  color: ${colors.graphite};
  margin: 0 0 ${spacing.lg} 0;
`;

const ProfileDescription = styled(Body)`
  max-width: 600px;
  margin: 0 auto ${spacing.lg} auto;
  color: ${colors.darkGray};
  line-height: 1.6;
`;

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
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  color: ${colors.graphite};
  font-size: ${typography.fontSize.caption};
  
  @media (max-width: ${breakpoints.tablet}) {
    justify-content: center;
  }
`;

const ResumeSection = styled(Section)`
  padding: ${spacing.xl} 0;
  
  &:not(:last-child) {
    border-bottom: 1px solid ${colors.lightGray};
  }
`;

const SectionTitle = styled(H2)`
  font-size: 28px;
  font-weight: ${typography.fontWeight.bold};
  color: ${colors.darkGray};
  margin: 0 0 ${spacing.lg} 0;
  padding-bottom: ${spacing.sm};
  display: inline-block;
`;

const ExperienceItem = styled.div`
  margin-bottom: ${spacing.xl};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ExperienceHeader = styled.div`
  margin-bottom: ${spacing.md};
`;

const JobTitle = styled(H3)`
  font-size: 20px;
  font-weight: ${typography.fontWeight.semiBold};
  color: ${colors.darkGray};
  margin: 0 0 ${spacing.xs} 0;
`;

const Company = styled.div`
  font-size: ${typography.fontSize.body};
  font-weight: ${typography.fontWeight.medium};
  color: ${colors.accentBlue};
  margin-bottom: ${spacing.xs};
`;

const Duration = styled(Caption)`
  color: ${colors.graphite};
  font-size: ${typography.fontSize.caption};
  margin-bottom: ${spacing.sm};
`;

const Description = styled(Body)`
  margin: ${spacing.md} 0 0 0;
  line-height: 1.6;
  color: ${colors.darkGray};
`;

const EducationItem = styled.div`
  margin-bottom: ${spacing.lg};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const Institution = styled.div`
  font-size: ${typography.fontSize.body};
  font-weight: ${typography.fontWeight.semiBold};
  color: ${colors.darkGray};
  margin-bottom: ${spacing.xs};
`;

const Degree = styled.div`
  font-size: ${typography.fontSize.body};
  color: ${colors.graphite};
  margin-bottom: ${spacing.xs};
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${spacing.lg};
  
  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const SkillCategory = styled.div`
  background: ${colors.ivoryWhite};
  padding: ${spacing.lg};
  border-radius: ${borderRadius.lg};
  border: 1px solid ${colors.lightGray};
  box-shadow: ${shadows.soft};
`;

const SkillCategoryTitle = styled.h4`
  font-size: ${typography.fontSize.bodyLarge};
  font-weight: ${typography.fontWeight.semiBold};
  color: ${colors.darkGray};
  margin: 0 0 ${spacing.md} 0;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing.sm};
`;

const SkillTag = styled.span`
  background: ${colors.mutedSage};
  color: ${colors.darkGray};
  padding: ${spacing.xs} ${spacing.sm};
  border-radius: ${borderRadius.md};
  font-size: ${typography.fontSize.caption};
  font-weight: ${typography.fontWeight.medium};
  border: 1px solid ${colors.lightGray};
`;

const Resume: React.FC = () => {
  // SEO and structured data
  const seoData = {
    title: "Khemmachart Chutapetch - Product Software Engineer & Consultant",
    description: "Experienced product software engineer with 8+ years of expertise in user-centered design, full-stack development, and leading cross-functional teams. Specialized in creating innovative digital solutions for millions of users.",
    keywords: "Product Software Engineer, Software Consultant, Full Stack Developer, React Developer, Next.js, TypeScript, Software Architecture, UX Design, Product Design, SEO Specialist",
    author: "Khemmachart Chutapetch",
    url: "https://khemmachart.dev/profile", // Update with your actual domain
    image: "https://khemmachart.dev/images/khemmachart-profile.jpg", // Update with your actual image
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
  };

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
      "https://linkedin.com/in/khemmachart-chutapetch", // Update with your actual profiles
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
  };

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{seoData.title}</title>
        <meta name="title" content={seoData.title} />
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta name="author" content={seoData.author} />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={seoData.url} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="profile" />
        <meta property="og:url" content={seoData.url} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.image} />
        <meta property="og:image:alt" content="Khemmachart Chutapetch - Product Software Engineer" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Khemmachart Chutapetch" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={seoData.url} />
        <meta property="twitter:title" content={seoData.title} />
        <meta property="twitter:description" content={seoData.description} />
        <meta property="twitter:image" content={seoData.image} />
        <meta property="twitter:image:alt" content="Khemmachart Chutapetch - Product Software Engineer" />
        <meta name="twitter:creator" content="@khemmachart" />
        
        {/* Additional SEO Tags */}
        <meta name="theme-color" content="#1a1a1a" />
        <meta name="msapplication-TileColor" content="#1a1a1a" />
        
        {/* Professional Profile Specific */}
        <meta name="profile:first_name" content="Khemmachart" />
        <meta name="profile:last_name" content="Chutapetch" />
        <meta name="profile:username" content="khemmachart" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/fonts/primary-font.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
      </Head>
      
      <PageLayout>
        <ResumeContainer>
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
                <span>📧</span>
                <span>k.chutapetch@gmail.com</span>
              </ContactItem>
              <ContactItem>
                <span>📱</span>
                <span>+1 (555) 123-4567</span>
              </ContactItem>
              <ContactItem>
                <span>🌐</span>
                <span>alexjohnson.design</span>
              </ContactItem>
              <ContactItem>
                <span>📍</span>
                <span>San Francisco, CA</span>
              </ContactItem>
            </ContactInfo>
          </ProfileHeader>

          <ResumeSection>
            <SectionTitle>Experience</SectionTitle>
            
            <ExperienceItem>
              <ExperienceHeader>
                <JobTitle>Senior Product Designer</JobTitle>
                <Company>Hootsuite</Company>
                <Duration>Jun 2019 to Present — San Francisco, CA</Duration>
              </ExperienceHeader>
              <Description>
                Leading product design for social media management tools used by 17 million users. 
                Currently focused on the Measure portfolio — tools to help people analyze their 
                performance and understand their ROI on social media. Collaborated with cross-functional 
                teams to deliver user-centered solutions that improved engagement by 40%.
              </Description>
            </ExperienceItem>

            <ExperienceItem>
              <ExperienceHeader>
                <JobTitle>Product Designer II</JobTitle>
                <Company>Nanopay</Company>
                <Duration>May 2018 to Jun 2019 — Toronto, ON</Duration>
              </ExperienceHeader>
              <Description>
                Took a B2B payments app from idea to launch as lead designer. Lead the 
                end-to-end design of payments products, working with product owners and 
                software engineers in Agile. Lead whiteboarding sessions, critiques, and 
                design reviews to drive product direction. Collaborated with and mentored 
                other designers to ensure design consistency across platforms.
              </Description>
            </ExperienceItem>

            <ExperienceItem>
              <ExperienceHeader>
                <JobTitle>Customer Insights Researcher</JobTitle>
                <Company>Staples</Company>
                <Duration>Jul 2015 to Feb 2017 — Richmond Hill, ON</Duration>
              </ExperienceHeader>
              <Description>
                Designed and carried out research studies reaching ~250K Canadians, 
                focusing on service design, product usability, concept testing, and 
                customer journeys. Delivered insights to solve challenges in products 
                & services, both physical and digital. Managed Staples Canada's 
                10,000 member business & consumer panels.
              </Description>
            </ExperienceItem>
          </ResumeSection>

          <ResumeSection>
            <SectionTitle>Education</SectionTitle>
            
            <EducationItem>
              <Institution>Brainstation</Institution>
              <Degree>Certificate in UX/UI Design</Degree>
              <Duration>2018</Duration>
            </EducationItem>

            <EducationItem>
              <Institution>Ryerson University</Institution>
              <Degree>BA in Economics</Degree>
              <Duration>2015</Duration>
            </EducationItem>
          </ResumeSection>

          <ResumeSection>
            <SectionTitle>Certificates</SectionTitle>
            <EducationItem>
              <Institution>Google</Institution>
              <Degree>UX Design Professional Certificate</Degree>
              <Duration>Issued: Mar 2022</Duration>
            </EducationItem>
            <EducationItem>
              <Institution>Interaction Design Foundation</Institution>
              <Degree>Human-Computer Interaction</Degree>
              <Duration>Issued: Nov 2021</Duration>
            </EducationItem>
            <EducationItem>
              <Institution>Coursera</Institution>
              <Degree>Product Management Fundamentals</Degree>
              <Duration>Issued: Jul 2020</Duration>
            </EducationItem>
          </ResumeSection>

          <ResumeSection>
            <SectionTitle>Skills</SectionTitle>
            
            <SkillsGrid>
              <SkillCategory>
                <SkillCategoryTitle>Application Development</SkillCategoryTitle>
                <SkillsList>
                  {/* Frontend */}
                  <SkillTag>HTML/CSS</SkillTag>
                  <SkillTag>JavaScript</SkillTag>
                  <SkillTag>TypeScript</SkillTag>
                  <SkillTag>React</SkillTag>
                  <SkillTag>Next.js</SkillTag>
                  {/* Mobile */}
                  <SkillTag>Flutter</SkillTag>
                  <SkillTag>Swift</SkillTag>
                  <SkillTag>Kotlin</SkillTag>
                  {/* Backend */}
                  <SkillTag>REST APIs</SkillTag>
                  <SkillTag>GraphQL</SkillTag>
                  <SkillTag>MongoDB</SkillTag>
                  <SkillTag>PostgreSQL</SkillTag>
                </SkillsList>
              </SkillCategory>

              <SkillCategory>
                <SkillCategoryTitle>Software Architecture Design</SkillCategoryTitle>
                <SkillsList>
                  <SkillTag>Monolithic Architecture</SkillTag>
                  <SkillTag>Clean Architecture</SkillTag>
                  <SkillTag>Hexagonal Architecture</SkillTag>
                  <SkillTag>Domain-Driven Design</SkillTag>
                  <SkillTag>Event-Driven Architecture</SkillTag>
                  <SkillTag>Microservices</SkillTag>
                  <SkillTag>API Gateway</SkillTag>                
                  <SkillTag>Serverless Architecture</SkillTag>
                  <SkillTag>Containerization</SkillTag>
                  <SkillTag>Cloud Architecture</SkillTag>
                  <SkillTag>CI/CD</SkillTag>
                  <SkillTag>DevOps</SkillTag>
                  <SkillTag>Monitoring & Logging</SkillTag>
                </SkillsList>
              </SkillCategory>

              <SkillCategory>
                <SkillCategoryTitle>Design & Research</SkillCategoryTitle>
                <SkillsList>
                  <SkillTag>Design Thinking</SkillTag>
                  <SkillTag>User Research & Testing</SkillTag>
                  <SkillTag>Survey Design</SkillTag>
                  <SkillTag>User Flows</SkillTag>
                  <SkillTag>Wireframing</SkillTag>
                  <SkillTag>Prototyping</SkillTag>
                  <SkillTag>Usability Testing</SkillTag>
                  <SkillTag>Design Systems</SkillTag>
                </SkillsList>
              </SkillCategory>

              <SkillCategory>
                <SkillCategoryTitle>Collaboration</SkillCategoryTitle>
                <SkillsList>
                  <SkillTag>Cross-functional Teams</SkillTag>
                  <SkillTag>Agile/Scrum</SkillTag>
                  <SkillTag>Design Critiques</SkillTag>
                  <SkillTag>Stakeholder Management</SkillTag>
                  <SkillTag>Mentoring</SkillTag>
                  <SkillTag>Workshop Facilitation</SkillTag>
                </SkillsList>
              </SkillCategory>

              <SkillCategory>
                <SkillCategoryTitle>Project Management</SkillCategoryTitle>
                <SkillsList>
                  <SkillTag>Project Planning</SkillTag>
                  <SkillTag>Cost Estimation</SkillTag>
                  <SkillTag>Roadmapping</SkillTag>
                  <SkillTag>Resource Allocation</SkillTag>
                  <SkillTag>Risk Management</SkillTag>
                  <SkillTag>Timeline Estimation</SkillTag>
                  <SkillTag>Stakeholder Communication</SkillTag>
                  <SkillTag>Project Tracking</SkillTag>
                  <SkillTag>Agile</SkillTag>
                  <SkillTag>Scrum/LeSS</SkillTag>
                  <SkillTag>Kanban</SkillTag>
                </SkillsList>
              </SkillCategory>

              <SkillCategory>
                <SkillCategoryTitle>SEO Strategy</SkillCategoryTitle>
                <SkillsList>
                  <SkillTag>Keyword Research</SkillTag>
                  <SkillTag>On-Page Optimization</SkillTag>
                  <SkillTag>Technical SEO</SkillTag>
                  <SkillTag>Off Page SEO</SkillTag>
                  <SkillTag>Link Building</SkillTag>
                  <SkillTag>Content Strategy</SkillTag>
                  <SkillTag>SEO Audits</SkillTag>
                  <SkillTag>Competitor Analysis</SkillTag>
                  <SkillTag>Schema Markup</SkillTag>
                </SkillsList>
              </SkillCategory>
            </SkillsGrid>
          </ResumeSection>

          <ResumeSection>
            <SectionTitle>Tools</SectionTitle>
            
            <SkillsGrid>

              <SkillCategory>
                <SkillCategoryTitle>Design Tools</SkillCategoryTitle>
                <SkillsList>
                  <SkillTag>Figma</SkillTag>
                  <SkillTag>Sketch</SkillTag>
                  <SkillTag>Adobe Creative Suite (Photoshop/XD)</SkillTag>
                  <SkillTag>InVision</SkillTag>
                  <SkillTag>Miro</SkillTag>
                </SkillsList>
              </SkillCategory>

              <SkillCategory>
                <SkillCategoryTitle>Research & Analytics</SkillCategoryTitle>
                <SkillsList>
                  <SkillTag>Hotjar</SkillTag>
                  <SkillTag>Google Analytics</SkillTag>
                  <SkillTag>Google Search Console</SkillTag>
                  <SkillTag>Mixpanel</SkillTag>
                  <SkillTag>UserTesting</SkillTag>
                </SkillsList>
              </SkillCategory>

              <SkillCategory>
                <SkillCategoryTitle>Collaboration</SkillCategoryTitle>
                <SkillsList>
                  <SkillTag>Slack</SkillTag>
                  <SkillTag>Notion</SkillTag>
                  <SkillTag>Miro</SkillTag>
                  <SkillTag>Jira</SkillTag>
                  <SkillTag>Confluence</SkillTag>
                  <SkillTag>Trello</SkillTag>
                </SkillsList>
              </SkillCategory>

              <SkillCategory>
                <SkillCategoryTitle>Development</SkillCategoryTitle>
                <SkillsList>
                  <SkillTag>VS Code</SkillTag>
                  <SkillTag>GitHub</SkillTag>
                  <SkillTag>Storybook</SkillTag>
                  <SkillTag>Zeplin</SkillTag>
                  <SkillTag>Abstract</SkillTag>
                  <SkillTag>Loom</SkillTag>
                </SkillsList>
              </SkillCategory>
            </SkillsGrid>

          </ResumeSection>
        </ResumeContainer>
      </PageLayout>
    </>
  );
};

export default Resume;
