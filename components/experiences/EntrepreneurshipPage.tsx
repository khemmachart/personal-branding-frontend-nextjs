"use client"
import React from 'react'
import { resumeData } from './data/experienceData'
import { PageLayout } from '@/components/design-system'
import { Baseline } from './ui/baseline'
import { Container, H1, Section, SectionTitle, SectionContent, Item, Org, Role, Summary, Bullets, Meta } from './ui/components'
import NextLink from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import { colors, spacing, borderRadius } from '@/components/design-system'

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

function ItemBlockLite({ it }: { it: ItemT }) {
  const displayTitle = it.org || it.title || it.project
  const range = (s?: string, e?: string) => {
    const right = e?.toLowerCase?.() === 'present' ? 'Present' : e
    return [s, right].filter(Boolean).join(' – ')
  }
  return (
    <Item>
      {(it as any).image?.src && (
        <div style={{ position: 'relative', width: '100%', maxWidth: 960, marginBottom: 8 }}>
          <Image 
            src={(it as any).image.src}
            alt={(it as any).image.alt || ''}
            width={960}
            height={540}
            style={{ width: '100%', height: 'auto', borderRadius: 8 }}
            unoptimized
          />
        </div>
      )}
      <div>
        <Org>{displayTitle}</Org>
        {it.role && <Role>{it.role}</Role>}
      </div>
      {it.summary && <Summary>{it.summary}</Summary>}
      {(it as any).links && (
        <LinksSection>
          {(it as any).links.website && (
            <NextLink href={(it as any).links.website} target="_blank" rel="noopener noreferrer">Website ↗</NextLink>
          )}
          {(it as any).links.booking && (
            <NextLink href={(it as any).links.booking} target="_blank" rel="noopener noreferrer">Booking ↗</NextLink>
          )}
          {(it as any).links.demo && (
            <NextLink href={(it as any).links.demo} target="_blank" rel="noopener noreferrer">Demo ↗</NextLink>
          )}
          {(it as any).links.deck && (
            <NextLink href={(it as any).links.deck} target="_blank" rel="noopener noreferrer">Deck ↗</NextLink>
          )}
          {Array.isArray((it as any).links.press) && (it as any).links.press.length > 0 && (
            <NextLink href={(it as any).links.press[0]} target="_blank" rel="noopener noreferrer">Press ↗</NextLink>
          )}
          {(it as any).links.instagram && (
            <NextLink href={(it as any).links.instagram} target="_blank" rel="noopener noreferrer">Instagram ↗</NextLink>
          )}
          {(it as any).links.twitter && (
            <NextLink href={(it as any).links.twitter} target="_blank" rel="noopener noreferrer">Twitter ↗</NextLink>
          )}
        </LinksSection>
      )}
      {Array.isArray(it.details) && it.details.length > 0 && (
        <Bullets>
          {it.details.slice(0, 5).map((d: string, i: number) => (
            <li key={i}>{d}</li>
          ))}
        </Bullets>
      )}
      {(it.start || it.end || it.location) && (
        <Meta>{[range(it.start, it.end), it.location].filter(Boolean).join(' — ')}</Meta>
      )}
      {it.id && (
        <div style={{ marginTop: 8 }}>
          <NextLink href={`/entrepreneurship/${it.id}`}>See details →</NextLink>
        </div>
      )}
    </Item>
  )
}

export default function EntrepreneurshipPage() {
  const group = resumeData.groups.find(g => g.title === 'entrepreneurship')
  const events: ItemT[] = group?.events || []

  return (
    <PageLayout>
      <Container style={{ marginTop: 48 }}>
        <Baseline />
        <header>
          <H1>Entrepreneurship</H1>
          <Summary>Case studies, traction, and the founder journey across my ventures.</Summary>
        </header>

        <Section id="ventures">
          <SectionTitle>Ventures</SectionTitle>
          <SectionContent>
            {events.map((it: ItemT) => (
              <ItemBlockLite key={it.id} it={it} />
            ))}
          </SectionContent>
        </Section>
      </Container>
    </PageLayout>
  )
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


