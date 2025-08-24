"use client"
import React from 'react'
import { resumeData } from './data/experienceData'
import { PageLayout } from '@/components/design-system'
import { Baseline } from './ui/baseline'
import { Container, H1, Section, SectionTitle, SectionContent, Item, Org, Role, Summary, Bullets, Meta } from './ui/components'
import NextLink from 'next/link'
import Image from 'next/image'

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


