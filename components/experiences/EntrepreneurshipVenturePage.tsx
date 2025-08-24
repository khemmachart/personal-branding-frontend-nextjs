"use client"
import React from 'react'
import { resumeData } from './data/experienceData'
import { PageLayout } from '@/components/design-system'
import { Baseline } from './ui/baseline'
import { Container, H1, Section, SectionTitle, SectionContent, Item, Org, Role, Summary, Bullets, Meta } from './ui/components'

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
          <H1>{venture.org || venture.title || venture.project}</H1>
          <Summary>{venture.summary}</Summary>
          <Meta>{[range(venture.start, venture.end), venture.location].filter(Boolean).join(' — ')}</Meta>
        </header>

        <Section id="overview">
          <SectionTitle>Overview</SectionTitle>
          <SectionContent>
            <Item>
              {Array.isArray(venture.details) && venture.details.length > 0 && (
                <Bullets>
                  {venture.details.map((d: string, i: number) => (
                    <li key={i}>{d}</li>
                  ))}
                </Bullets>
              )}
            </Item>
          </SectionContent>
        </Section>
      </Container>
    </PageLayout>
  )
}


