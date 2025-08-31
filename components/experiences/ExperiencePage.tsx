import React from "react";
import styled from "styled-components";
import { Baseline } from "./ui/baseline";
import { Container, H1, Section, SectionTitle, SectionContent, Item, Org, Role, Summary, Bullets, Meta, Columns, ContactGrid, ContactItem, ContactLabel, ContactValue, HeaderContact } from "./ui/components";
import { PageLayout, colors, spacing, borderRadius, shadows } from '@/components/design-system';
import HeroSection from './components/HeroSection';
import KeywordsSection from './components/KeywordsSection';
import CTASection from './components/CTASection';
import StructuredDataScript from './components/StructuredDataScript';
import Link from 'next/link';
import Image from 'next/image';
// styled, colors, spacing, borderRadius are already imported above

type ItemT = {
  id?: string;
  org?: string;
  title?: string;
  role?: string;
  project?: string;
  summary?: string;
  details?: string[];
  start?: string;
  end?: string;
  location?: string;
  notes?: string;
  children?: ItemT[];
};

type GroupT = {
  title: string;
  events: ItemT[];
};

type ResumeDataT = {
  seo?: {
    meta_title?: string;
    meta_description?: string;
    keywords?: string[];
  };
  groups: GroupT[];
};

function formatDate(v?: string) {
  if (!v) return "";
  if (v.toLowerCase?.() === "present") return "Present";
  if (/^\d{4}-\d{2}$/.test(v)) {
    const parts = v.split("-");
    if (parts.length >= 2 && parts[0] && parts[1]) {
      const y = parseInt(parts[0], 10);
      const m = parseInt(parts[1], 10);
      if (!isNaN(y) && !isNaN(m)) {
        return new Date(y, m-1, 1).toLocaleString(undefined, { month:"short", year:"numeric" });
      }
    }
  }
  if (/^\d{4}$/.test(v)) return v;
  return v;
}

const range = (s?: string, e?: string) => {
  const left = formatDate(s);
  const right = e?.toLowerCase?.() === "present" ? "Present" : formatDate(e);
  if (!left && !right) return "";
  if (left && right) return `${left} – ${right}`;
  return left || right;
};

function parseContactInfo(contactList: string[]) {
  return contactList.map(line => {
    const text = line.trim();
    if (text.includes("Email:")) {
      const email = text.replace("Email:", "").trim();
      return { label: "Email", value: email, href: `mailto:${email}` };
    } else if (text.includes("Tel:")) {
      const tel = text.replace("Tel:", "").trim();
      return { label: "Phone", value: tel, href: `tel:${tel}` };
    } else if (text.includes("LinkedIn:")) {
      const linkedin = text.replace("LinkedIn:", "").trim();
      return { label: "LinkedIn", value: linkedin, href: `https://${linkedin}` };
    } else if (text.includes("GitHub:")) {
      const github = text.replace("GitHub:", "").trim();
      return { label: "GitHub", value: github, href: `https://${github}` };
    } else if (text.includes("Blog:")) {
      const blog = text.replace("Blog:", "").trim();
      return { label: "Blog", value: blog, href: `https://${blog}` };
    } else if (text.includes("Portfolio:")) {
      const portfolio = text.replace("Portfolio:", "").trim();
      return { label: "Website", value: portfolio, href: `https://${portfolio}` };
    } else if (text.includes("Location:")) {
      const location = text.replace("Location:", "").trim();
      return { label: "Location", value: location };
    } else if (text.includes("Facebook:")) {
      const facebook = text.replace("Facebook:", "").trim();
      return { label: "Facebook", value: facebook, href: `https://${facebook}` };
    } else if (text.includes("Instagram:")) {
      const instagram = text.replace("Instagram:", "").trim();
      return { label: "Instagram", value: instagram, href: `https://${instagram}` };
    } else if (text.includes("Twitter:")) {
      const twitter = text.replace("Twitter:", "").trim();
      return { label: "Twitter", value: twitter, href: `https://${twitter}` };
    }
    return { label: "", value: text };
  }).filter(item => item.label && item.value);
}

function formatTitle(title?: string) {
  if (!title) return title;
  
  // Handle specific cases
  const titleMap: Record<string, string> = {
    'technical_projects': 'Technical Projects',
    'business_consulting_projects': 'Business Consulting Projects',
    'professional_experiences': 'Professional Experience',
    'independent_projects': 'Independent Projects',
  };
  
  if (titleMap[title]) {
    return titleMap[title];
  }
  
  // General case: convert snake_case to Title Case
  return title
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

// Resume specific styled container
const ResumeContainer = styled(Container)`
  margin-top: ${spacing.xxxl};
`;

function ItemBlock({ it }: { it: ItemT }) {
  const displayTitle = it.org || formatTitle(it.title) || it.project;
  
  return (
    <Item>
      <div>
        <Org>{displayTitle}</Org>
        {it.role && <Role>{it.role}</Role>}
      </div>
      {it.summary && <Summary>{it.summary}</Summary>}
      {Array.isArray(it.details) && it.details.length > 0 && (
        <Bullets>
          {it.details.slice(0,5).map((d: string, i: number) => <li key={i}>{d}</li>)}
        </Bullets>
      )}
      {(it.start || it.end || it.location) && (
        <Meta>
          {[range(it.start, it.end), it.location].filter(Boolean).join(" — ")}
          {it.notes && <div style={{marginTop: 4}}>{it.notes}</div>}
        </Meta>
      )}
      {Array.isArray(it.children) && it.children.length > 0 && (
        <div style={{marginTop: 16, paddingLeft: 24, borderLeft: '2px solid #E5E7EB'}}>
          {it.children.map((sub: ItemT) => (
            <div key={sub.id || Math.random()} style={{marginTop: 24}}>
              <ItemBlock it={sub} />
            </div>
          ))}
        </div>
      )}
    </Item>
  );
}

export default function ResumePage({ data }: { data: ResumeDataT }) {
  // Create a sections object for easier access
  const sections = data.groups.reduce((acc, group) => {
    acc[group.title] = { events: group.events };
    return acc;
  }, {} as Record<string, { events: ItemT[] }>);

  const profile = sections?.profile?.events?.[0];
  const contact = sections?.contact?.events?.[0];
  const contactList = Array.isArray(contact?.details) ? contact.details : [];
  const contactInfo = parseContactInfo(contactList);

  return (
    <>
      <StructuredDataScript />
      
      <PageLayout>
        {/* Resume Section */}
        <ResumeContainer>
          
          <header id="home">
            {/* Hero Section */}
            <HeroSection />

            {/* Keywords Section */}
            <KeywordsSection />
            <Baseline />
            <H1>{profile?.title || "Khemmachart"}</H1>
            {profile?.summary && <Summary>{profile.summary}</Summary>}
          </header>

          {contactInfo.length > 0 && (
            <Section id="contact">
              <SectionTitle>Contact</SectionTitle>
              <SectionContent>
                <ContactGrid>
                  {contactInfo.map((item, i) => (
                    <ContactItem key={i}>
                      <ContactLabel>{item.label}</ContactLabel>
                      <ContactValue>
                        {item.href ? (
                          <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                            {item.value}
                          </a>
                        ) : (
                          item.value
                        )}
                      </ContactValue>
                    </ContactItem>
                  ))}
                </ContactGrid>
              </SectionContent>
            </Section>
          )}

          {sections?.professional_experiences?.events?.length ? (
            <Section id="experience">
              <SectionTitle>Experience</SectionTitle>
              <SectionContent>
                {sections.professional_experiences.events.map((it: ItemT) => (
                  <ItemBlock key={it.id} it={it} />
                ))}
              </SectionContent>
            </Section>
          ) : null}

          {sections?.entrepreneurship?.events?.length ? (
            <Section id="entrepreneurship">
              <SectionTitle>Entrepreneurship (Own Products)</SectionTitle>
              <SectionContent>
                {sections.entrepreneurship.events.map((it: ItemT) => (
                  <div key={it.id}>
                    <ItemBlock it={it} />
                    {(it as any).links && (
                      <LinksSection>
                        {(it as any).links.website && (
                          <Link href={(it as any).links.website} target="_blank" rel="noopener noreferrer">Website ↗</Link>
                        )}
                        {(it as any).links.booking && (
                          <Link href={(it as any).links.booking} target="_blank" rel="noopener noreferrer">Booking ↗</Link>
                        )}
                        {(it as any).links.demo && (
                          <Link href={(it as any).links.demo} target="_blank" rel="noopener noreferrer">Demo ↗</Link>
                        )}
                        {(it as any).links.deck && (
                          <Link href={(it as any).links.deck} target="_blank" rel="noopener noreferrer">Deck ↗</Link>
                        )}
                        {(it as any).links.articles && (
                          <Link href={(it as any).links.articles} target="_blank" rel="noopener noreferrer">Articles ↗</Link>
                        )}
                        {(it as any).links.facebook && (
                          <Link href={(it as any).links.facebook} target="_blank" rel="noopener noreferrer">Facebook ↗</Link>
                        )}
                        {(it as any).links.instagram && (
                          <Link href={(it as any).links.instagram} target="_blank" rel="noopener noreferrer">Instagram ↗</Link>
                        )}
                        {(it as any).links.twitter && (
                          <Link href={(it as any).links.twitter} target="_blank" rel="noopener noreferrer">Twitter ↗</Link>
                        )}
                        {(it as any).links.services && (
                          <Link href={(it as any).links.services} target="_blank" rel="noopener noreferrer">Services ↗</Link>
                        )}
                      </LinksSection>
                    )}
                    
                    {it.id && (
                      <LinksSection style={{ marginBottom: 24 }}>
                        <Link href={`/entrepreneurship/${it.id}`}>See more details →</Link>
                      </LinksSection>
                    )}
                  </div>
                ))}
              </SectionContent>
            </Section>
          ) : null}

          {sections?.independent_projects?.events?.length ? (
            <Section id="independent-projects">
              <SectionTitle>Independent Projects (Part-time, Freelance)</SectionTitle>
              <SectionContent>
                {sections.independent_projects.events.map((it: ItemT) => (
                  <ItemBlock key={it.id} it={it} />
                ))}
              </SectionContent>
            </Section>
          ) : null}

          {sections?.education?.events?.length ? (
            <Section id="education">
              <SectionTitle>Education and Certifications</SectionTitle>
              <SectionContent>
                {sections.education.events.map((it: ItemT) => (
                  <ItemBlock key={it.id} it={it} />
                ))}
              </SectionContent>
            </Section>
          ) : null}

          {sections?.skills?.events?.length ? (
            <Section id="skills">
              <SectionTitle>Skills</SectionTitle>
              <SectionContent>
                {sections.skills.events.map((it: ItemT) => (
                  <ItemBlock key={it.id} it={it} />
                ))}
              </SectionContent>
            </Section>
          ) : null}
        </ResumeContainer>

        {/* CTA Section */}
        <CTASection />
      </PageLayout>
    </>
  );
}

const LinksSection = styled.div`
  margin-top: ${spacing.sm};
  padding: ${spacing.md};
  border: 1px solid ${colors.lightGray};
  border-radius: ${borderRadius.lg};
  background: ${colors.ivoryWhite};
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`
