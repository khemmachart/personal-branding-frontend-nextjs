"use client"
import React, { useState } from 'react'
import { resumeData } from './data/experienceData'
import { PageLayout } from '@/components/design-system'
import { Baseline } from './ui/baseline'
import { Container, H1, Section, SectionTitle, SectionContent, Item, Org, Role, Summary, Bullets, Meta } from './ui/components'
import Image from 'next/image'
import styled from 'styled-components'
import { colors, spacing, typography, borderRadius } from '@/components/design-system'

// Simple inline iframe component
const SimpleIframe = ({ src, width, height, title, description }: any) => (
  <div style={{ 
    margin: '16px 0', 
    borderRadius: '8px', 
    overflow: 'hidden', 
    boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.05)',
    background: colors.ivoryWhite,
    display: 'flex',
    justifyContent: 'center' // Center the iframe
  }}>
    <div style={{ 
      position: 'relative', 
      width: parseInt(width) || 400, // Use original width
      height: parseInt(height) || 300, // Use original height
      maxWidth: '100%' // Prevent overflow on small screens
    }}>
      <iframe
        src={src}
        width={parseInt(width) || 400}
        height={parseInt(height) || 300}
        title={title || 'Embedded content'}
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        scrolling="no"
        frameBorder="0"
        style={{
          width: '100%',
          height: '100%',
          border: 'none'
        }}
      />
    </div>
    {(title || description) && (
      <div style={{ 
        padding: '16px', 
        background: colors.ivoryWhite, 
        borderTop: `1px solid ${colors.lightGray}`,
        width: '100%' // Full width for caption
      }}>
        {title && <h4 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 600, color: colors.darkGray }}>{title}</h4>}
        {description && <p style={{ margin: 0, fontSize: '14px', color: colors.graphite, lineHeight: 1.5 }}>{description}</p>}
        {src && (
          <p style={{
            margin: (title || description) ? '8px 0 0 0' : '0',
            fontSize: '14px',
            lineHeight: 1.5
          }}>
            <a
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: colors.accentBlue,
                textDecoration: 'underline',
                fontWeight: 500
              }}
            >
              View original video
            </a>
          </p>
        )}
      </div>
    )}
  </div>
)

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

// Modal styled components
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
  cursor: pointer;
`

const ModalContent = styled.div`
  position: relative;
  max-width: 95vw;
  max-height: 95vh;
  cursor: default;
`

const CloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 8px;
  z-index: 1001;
  
  &:hover {
    opacity: 0.7;
  }
`

const ClickableImage = styled.div`
  cursor: pointer;
  transition: opacity 0.2s ease;
  
  &:hover {
    opacity: 0.9;
  }
`

export default function EntrepreneurshipVenturePage({ id }: { id: string }) {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)
  
  const group = resumeData.groups.find(g => g.title === 'entrepreneurship')
  const venture = (group?.events || []).find((e: any) => e.id === id)

  const openImageModal = (src: string, alt: string) => {
    setSelectedImage({ src, alt })
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }

  // Handle keyboard events for closing modal
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeImageModal()
      }
    }

    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown)
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [selectedImage])

  if (!venture) {
    return (
      <PageLayout>
        <Baseline />
        <Container>
          <H1>Venture not found</H1>
        </Container>
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      <Baseline />
      <Container>
        <Section id="intro">
          <SectionContent>
            <Item>
              <div>
                <Org>{(venture as any).org}</Org>
                {(venture as any).role && <Role>{(venture as any).role}</Role>}
              </div>
              {(venture as any).summary && <Summary>{(venture as any).summary}</Summary>}
              {Array.isArray((venture as any).details) && (venture as any).details.length > 0 && (
                <Bullets>
                  {(venture as any).details.map((d: string, i: number) => (
                    <li key={i}>{d}</li>
                  ))}
                </Bullets>
              )}
            </Item>
            {(venture as any).image?.src && (
                <ClickableImage 
                  style={{ position: 'relative', width: '100%', maxWidth: 960, marginBottom: 8 }}
                  onClick={() => openImageModal((venture as any).image.src, (venture as any).image.alt || '')}
                >
                  <Image 
                    src={(venture as any).image.src}
                    alt={(venture as any).image.alt || ''}
                    width={960}
                    height={540}
                    style={{ width: '100%', height: 'auto', borderRadius: 8 }}
                    unoptimized
                  />
                </ClickableImage>
              )}
          </SectionContent>
        </Section>

        {Array.isArray((venture as any).detailSections) && (venture as any).detailSections.length > 0 && (
          <Section id="details">
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
                    <ClickableImage 
                      style={{ marginTop: 12, position: 'relative', width: '100%', maxWidth: 960 }}
                      onClick={() => openImageModal(sec.image.src, sec.image.alt || '')}
                    >
                      <Image 
                        src={sec.image.src} 
                        alt={sec.image.alt || ''} 
                        width={960}
                        height={540}
                        style={{ width: '100%', height: 'auto', borderRadius: 8 }}
                        unoptimized
                      />
                    </ClickableImage>
                  )}
                  {/* Support for iframes */}
                  {Array.isArray(sec.iframes) && sec.iframes.length > 0 && (
                    <div>
                      {sec.iframes.map((iframe: any, iframeIndex: number) => (
                        <SimpleIframe
                          key={iframeIndex}
                          src={iframe.src}
                          width={iframe.width}
                          height={iframe.height}
                          title={iframe.title}
                          description={iframe.description}
                        />
                      ))}
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
                          {/* Support for single image (backward compatibility) */}
                          {sub.image?.src && (
                            <ClickableImage 
                              style={{ marginTop: 12, position: 'relative', width: '100%', maxWidth: 960 }}
                              onClick={() => openImageModal(sub.image.src, sub.image.alt || '')}
                            >
                              <Image 
                                src={sub.image.src} 
                                alt={sub.image.alt || ''} 
                                width={960}
                                height={540}
                                style={{ width: '100%', height: 'auto', borderRadius: 8 }}
                                unoptimized
                              />
                            </ClickableImage>
                          )}
                          {/* Support for multiple images */}
                          {Array.isArray(sub.images) && sub.images.length > 0 && (
                            <div style={{ marginTop: 12 }}>
                              {sub.images.map((img: any, imgIndex: number) => (
                                <ClickableImage
                                  key={imgIndex} 
                                  style={{ 
                                    marginTop: imgIndex > 0 ? 12 : 0, 
                                    position: 'relative', 
                                    width: '100%', 
                                    maxWidth: 960 
                                  }}
                                  onClick={() => openImageModal(img.src, img.alt || '')}
                                >
                                  <Image 
                                    src={img.src} 
                                    alt={img.alt || ''} 
                                    width={960}
                                    height={540}
                                    style={{ width: '100%', height: 'auto', borderRadius: 8 }}
                                    unoptimized
                                  />
                                </ClickableImage>
                              ))}
                            </div>
                          )}
                          {/* Support for iframes in subtopics */}
                          {Array.isArray(sub.iframes) && sub.iframes.length > 0 && (
                            <div style={{ marginTop: 12 }}>
                              {console.log('Found iframes in subtopic:', sub.title, sub.iframes)}
                              {sub.iframes.map((iframe: any, iframeIndex: number) => (
                                <SimpleIframe
                                  key={iframeIndex}
                                  src={iframe.src}
                                  width={iframe.width}
                                  height={iframe.height}
                                  title={iframe.title}
                                  description={iframe.description}
                                />
                              ))}
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

      {/* Full-screen Image Modal */}
      {selectedImage && (
        <ModalOverlay onClick={closeImageModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeImageModal}>&times;</CloseButton>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1920}
              height={1080}
              style={{
                width: 'auto',
                height: 'auto',
                maxWidth: '95vw',
                maxHeight: '95vh',
                objectFit: 'contain'
              }}
              unoptimized
            />
          </ModalContent>
        </ModalOverlay>
      )}
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


