import React from 'react';
import styled from 'styled-components';
import { colors, spacing, typography, borderRadius, shadows } from '@/components/design-system';

interface IframeData {
  src: string;
  width?: string;
  height?: string;
  title?: string;
  description?: string;
  responsive?: boolean;
  allowFullScreen?: boolean;
}

interface IframeSectionProps {
  iframes: IframeData[];
}

const IframeContainer = styled.div`
  margin: ${spacing.md} 0;
  border-radius: ${borderRadius.lg};
  overflow: hidden;
  box-shadow: ${shadows.soft};
  background: ${colors.ivoryWhite};
  
  @media (max-width: 768px) {
    margin: ${spacing.sm} 0;
  }
`;

const IframeWrapper = styled.div`
  position: relative;
  width: 100%;
  background: ${colors.lightGray};
  
  iframe {
    display: block;
    border: none;
    width: 100%;
    height: 100%;
  }
`;

const IframeCaption = styled.div`
  padding: ${spacing.md};
  background: ${colors.ivoryWhite};
  border-top: 1px solid ${colors.lightGray};
  
  h4 {
    margin: 0 0 ${spacing.xs} 0;
    font-size: ${typography.fontSize.body};
    font-weight: ${typography.fontWeight.semiBold};
    color: ${colors.darkGray};
  }
  
  p {
    margin: 0;
    font-size: ${typography.fontSize.caption};
    color: ${colors.graphite};
    line-height: 1.5;
  }
`;

const ResponsiveIframe = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

export const IframeSection: React.FC<IframeSectionProps> = ({ iframes }) => {
  if (!iframes || iframes.length === 0) return null;

  return (
    <div style={{ marginTop: spacing.md }}>
      {iframes.map((iframe, index) => (
        <IframeContainer key={index}>
          {iframe.responsive ? (
            <ResponsiveIframe>
              <iframe
                src={iframe.src}
                title={iframe.title || 'Embedded content'}
                allowFullScreen={iframe.allowFullScreen}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                scrolling="no"
                frameBorder="0"
              />
            </ResponsiveIframe>
          ) : (
            <IframeWrapper style={{ 
              width: iframe.width || '100%', 
              height: iframe.height || '400px' 
            }}>
              <iframe
                src={iframe.src}
                width={iframe.width || '100%'}
                height={iframe.height || '400px'}
                title={iframe.title || 'Embedded content'}
                allowFullScreen={iframe.allowFullScreen}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                scrolling="no"
                frameBorder="0"
              />
            </IframeWrapper>
          )}
          
          {(iframe.title || iframe.description) && (
            <IframeCaption>
              {iframe.title && <h4>{iframe.title}</h4>}
              {iframe.description && <p>{iframe.description}</p>}
            </IframeCaption>
          )}
        </IframeContainer>
      ))}
    </div>
  );
};
