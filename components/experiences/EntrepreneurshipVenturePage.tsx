"use client"
import React from 'react'
import { resumeData } from './data/experienceData'
import { PageLayout } from '@/components/design-system'
import { Baseline } from './ui/baseline'
import { Container, H1, Section, SectionTitle, SectionContent, Item, Org, Role, Summary, Bullets, Meta } from './ui/components'
import Image from 'next/image'
import styled from 'styled-components'
import { colors, spacing, typography, borderRadius } from '@/components/design-system'

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
}

export default function EntrepreneurshipVenturePage({ id }: { id: string }) {
  const group = resumeData.groups.find(g => g.title === 'entrepreneurship')
  const venture = (group?.events || []).find((e: any) => e.id === id)

  if (!venture) {
    return (
      <PageLayout>
        <Container style={{ marginTop: 48 }}>
          <Baseline />
          <H1>Not Found</H1>
          <Summary>We couldn’t find this venture.</Summary>
        </Container>
      </PageLayout>
    )
  }

  const range = (s?: string, e?: string) => [s, e?.toLowerCase?.() === 'present' ? 'Present' : e].filter(Boolean).join(' – ')

  return (
    <PageLayout>
      <Container style={{ marginTop: 48 }}>
        <Baseline />
        <header>
          <H1>{(venture as any).org || (venture as any).title || (venture as any).project}</H1>
          {(venture as any).links && (
            <LinksSection>
              {(venture as any).links.website && (
                <a href={(venture as any).links.website} target="_blank" rel="noopener noreferrer">Website ↗</a>
              )}
              {(venture as any).links.booking && (
                <a href={(venture as any).links.booking} target="_blank" rel="noopener noreferrer">Booking ↗</a>
              )}
              {(venture as any).links.demo && (
                <a href={(venture as any).links.demo} target="_blank" rel="noopener noreferrer">Demo ↗</a>
              )}
              {(venture as any).links.deck && (
                <a href={(venture as any).links.deck} target="_blank" rel="noopener noreferrer">Deck ↗</a>
              )}
              {Array.isArray((venture as any).links.press) && (venture as any).links.press.length > 0 && (
                <a href={(venture as any).links.press[0]} target="_blank" rel="noopener noreferrer">Press ↗</a>
              )}
              {(venture as any).links.instagram && (
                <a href={(venture as any).links.instagram} target="_blank" rel="noopener noreferrer">Instagram ↗</a>
              )}
              {(venture as any).links.twitter && (
                <a href={(venture as any).links.twitter} target="_blank" rel="noopener noreferrer">Twitter ↗</a>
              )}
            </LinksSection>
          )}
          <Summary>{(venture as any).summary}</Summary>
          <Meta>{[range((venture as any).start, (venture as any).end), (venture as any).location].filter(Boolean).join(' — ')}</Meta>
        </header>

        <Section id="overview">
          <SectionTitle>Overview</SectionTitle>
          <SectionContent>
            <Item>
              {Array.isArray((venture as any).details) && (venture as any).details.length > 0 && (
                <Bullets>
                  {(venture as any).details.map((d: string, i: number) => (
                    <li key={i}>{d}</li>
                  ))}
                </Bullets>
              )}
            </Item>
            {(venture as any).image?.src && (
              <div style={{ position: 'relative', width: '100%', maxWidth: 1024 }}>
                <Image 
                  src={(venture as any).image.src}
                  alt={(venture as any).image.alt || ''}
                  width={1024}
                  height={576}
                  style={{ width: '100%', height: 'auto', borderRadius: 8 }}
                />
              </div>
            )}
          </SectionContent>
        </Section>

        {Array.isArray((venture as any).detailSections) && (venture as any).detailSections.length > 0 && (
          <Section id="details">
            <SectionTitle>Details</SectionTitle>
            <SectionContent>
              {(venture as any).detailSections.map((sec: any, i: number) => (
                <Item key={i}>
                  <Org>{sec.title}</Org>
                  {Array.isArray(sec.items) && sec.items.length > 0 && (
                    <Bullets>
                      {sec.items.map((t: string, j: number) => (
                        <li key={j}>{t}</li>
                      ))}
                    </Bullets>
                  )}
                  {sec.image?.src && (
                    <div style={{ marginTop: 12, position: 'relative', width: '100%', maxWidth: 960 }}>
                      <Image 
                        src={sec.image.src} 
                        alt={sec.image.alt || ''} 
                        width={960}
                        height={540}
                        style={{ width: '100%', height: 'auto', borderRadius: 8 }}
                        unoptimized
                      />
                    </div>
                  )}
                  {Array.isArray(sec.subtopics) && sec.subtopics.length > 0 && (
                    <div style={{ marginTop: 12 }}>
                      {sec.subtopics.map((sub: any, k: number) => (
                        <SubtopicCard key={k}>
                          <SubtopicHeader>
                            <SubtopicBadge>Sub-topic</SubtopicBadge>
                            <SubtopicTitle>{sub.title}</SubtopicTitle>
                          </SubtopicHeader>
                          {Array.isArray(sub.items) && sub.items.length > 0 && (
                            <Bullets>
                              {sub.items.map((t: string, m: number) => (
                                <li key={m}>{t}</li>
                              ))}
                            </Bullets>
                          )}
                          {sub.image?.src && (
                            <div style={{ marginTop: 12, position: 'relative', width: '100%', maxWidth: 960 }}>
                              <Image 
                                src={sub.image.src} 
                                alt={sub.image.alt || ''} 
                                width={960}
                                height={540}
                                style={{ width: '100%', height: 'auto', borderRadius: 8 }}
                                unoptimized
                              />
                            </div>
                          )}
                        </SubtopicCard>
                      ))}
                    </div>
                  )}
                </Item>
              ))}
            </SectionContent>
          </Section>
        )}
      </Container>
    </PageLayout>
  )
}

const SubtopicCard = styled.div`
  margin-top: ${spacing.md};
  padding: ${spacing.lg};
  border: 1px solid ${colors.lightGray};
  border-radius: ${borderRadius.lg};
  background: ${colors.ivoryWhite};
`

const SubtopicHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  margin-bottom: ${spacing.sm};
`

const SubtopicBadge = styled.span`
  display: inline-block;
  font-size: ${typography.fontSize.small};
  color: ${colors.graphite};
  background: ${colors.mutedSage};
  border: 1px solid ${colors.lightGray};
  padding: 2px 8px;
  border-radius: 9999px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`

const SubtopicTitle = styled.span`
  font-weight: ${typography.fontWeight.semiBold};
  color: ${colors.darkGray};
`

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


