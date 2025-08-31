'use client'

import React from 'react'
import styled from 'styled-components'
import {
  H2,
  Body,
  colors,
  spacing,
  borderRadius,
  typography,
  shadows,
  transitions,
} from '@/components/design-system'

const CTASectionContainer = styled.div`
  background: linear-gradient(135deg, ${colors.darkGray} 0%, ${colors.slateGray} 100%);
  color: ${colors.ivoryWhite};
  padding: ${spacing.xxxl} 0;
  text-align: center;
`

const LandingContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${spacing.lg};
`

const CTATitle = styled(H2)`
  color: ${colors.ivoryWhite};
  margin-bottom: ${spacing.md};
  font-size: clamp(24px, 4vw, 32px);
`

const CTADescription = styled(Body)`
  color: ${colors.lightGray};
  font-size: ${typography.fontSize.bodyLarge};
  max-width: 500px;
  margin-bottom: ${spacing.xl};
  margin-left: auto;
  margin-right: auto;
`

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${spacing.sm};
  background: ${colors.accentBlue};
  color: white;
  padding: ${spacing.md} ${spacing.xl};
  border-radius: ${borderRadius.lg};
  text-decoration: none;
  font-weight: ${typography.fontWeight.semiBold};
  transition: all ${transitions.normal};
  font-size: ${typography.fontSize.body};
  margin: 10px;
  
  &:hover {
    background: #2563EB;
    transform: translateY(-2px);
    box-shadow: ${shadows.medium};
  }
`

const CTASection = () => {
  // Print function for specific sections
  const printSection = (sectionId: string, title: string) => {
    const content = document.getElementById(sectionId);
    if (!content) {
      console.error(`Section with id "${sectionId}" not found`);
      return;
    }

    const printWindow = window.open('', '_blank', 'width=800,height=900');
    
    if (!printWindow) {
      console.error('Failed to open print window');
      return;
    }
    
    // Get current page styles
    const currentStyles = Array.from(document.styleSheets)
      .map(sheet => {
        try {
          return Array.from(sheet.cssRules)
            .map(rule => rule.cssText)
            .join('\n');
        } catch (e) {
          return '';
        }
      })
      .filter(Boolean)
      .join('\n');

    printWindow.document.write(`
      <html>
        <head>
          <title>${title}</title>
          <style>
            @page { 
              size: A4; 
              margin: 14mm; 
            }
            body { 
              font-family: system-ui, sans-serif; 
              font-size: 12pt; 
              line-height: 1.5; 
              margin: 0;
              padding: 20px;
            }
            .no-print { 
              display: none !important; 
            }
            .print-area * { 
              break-inside: avoid; 
            }
            /* Custom styles for better print layout */
            h1, h2, h3 { 
              break-after: avoid; 
              margin-top: 20px;
              margin-bottom: 10px;
            }
            table { 
              width: 100%; 
              border-collapse: collapse; 
              margin: 15px 0;
            }
            th, td { 
              border: 1px solid #ddd; 
              padding: 8px; 
              text-align: left; 
            }
            th { 
              background-color: #f5f5f5; 
              font-weight: bold; 
            }
            img { 
              max-width: 100%; 
              height: auto; 
            }
            /* Hide navigation and unnecessary elements */
            nav, .menu, .navbar, .header, .footer { 
              display: none !important; 
            }
            ${currentStyles}
          </style>
        </head>
        <body>
          ${content.outerHTML}
          <script>
            window.onload = function() {
              // Auto-print after content loads
              setTimeout(() => {
                window.print();
                // Close window after printing (optional)
                // window.close();
              }, 500);
            };
          <\/script>
        </body>
      </html>
    `);
    
    printWindow.document.close();
  };

  return (
    <CTASectionContainer>
      <LandingContainer>
        <CTATitle>Let's talk</CTATitle>
        <CTADescription>
          If you're interested in my work or need help with a project, I'd love to chat and collaborate.
        </CTADescription>
        <CTAButton onClick={() => printSection('content', 'Khemmachart - Experience & Skills')}>
          🖨️ Print Resume
        </CTAButton>
        <CTAButton href="mailto:k.chutapetch+career@gmail.com">
          📧 Contact me
        </CTAButton>
      </LandingContainer>
    </CTASectionContainer>
  )
}

export default CTASection
