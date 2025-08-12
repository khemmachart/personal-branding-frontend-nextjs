import styled, { css } from 'styled-components';
import { colors, spacing, layout, breakpoints, shadows, borderRadius, typography } from './tokens';
import { Body } from './Typography';

// Container Component
export const Container = styled.div<{ 
  maxWidth?: 'article' | 'container' | 'content' | 'none';
  padding?: boolean;
  center?: boolean;
}>`
  width: 100%;
  margin: 0 auto;
  
  ${({ maxWidth = 'container' }) => {
    switch (maxWidth) {
      case 'article':
        return css`max-width: ${layout.maxWidth.article};`;
      case 'content':
        return css`max-width: ${layout.maxWidth.content};`;
      case 'none':
        return css`max-width: none;`;
      default:
        return css`max-width: ${layout.maxWidth.container};`;
    }
  }}
  
  ${({ padding = true }) => padding && css`
    padding: 0 ${spacing.containerPadding};
  `}
  
  ${({ center = true }) => center && css`
    margin: 0 auto;
  `}
`;

// Page Layout Component
export const PageLayout = styled.div`
  min-height: 100vh;
  background-color: ${colors.offWhite};
  color: ${colors.darkGray};
  font-family: ${typography.fontFamily.primary};
`;

// Main Content Area
export const Main = styled.main`
  flex: 1;
  width: 100%;
`;

// Section Component
export const Section = styled.section<{ spacing?: 'small' | 'medium' | 'large' }>`
  width: 100%;
  
  ${({ spacing: sectionSpacing = 'medium' }) => {
    switch (sectionSpacing) {
      case 'small':
        return css`padding: ${spacing.xl} 0;`;
      case 'large':
        return css`padding: ${spacing.xxxl} 0 ${spacing.xxxl} 0;`;
      default:
        return css`padding: ${spacing.sectionGap} 0;`;
    }
  }}
  
  &:not(:last-child) {
    border-bottom: 1px solid ${colors.lightGray};
  }
`;

// Grid System
export const Grid = styled.div<{
  columns?: number;
  gap?: 'small' | 'medium' | 'large';
  responsive?: boolean;
  minWidth?: string;
}>`
  display: grid;
  
  ${({ columns = 12, minWidth = '250px', responsive = true }) => {
    if (responsive) {
      return css`
        grid-template-columns: repeat(auto-fit, minmax(${minWidth}, 1fr));
      `;
    }
    return css`
      grid-template-columns: repeat(${columns}, 1fr);
    `;
  }}
  
  ${({ gap = 'medium' }) => {
    switch (gap) {
      case 'small':
        return css`gap: ${spacing.md};`;
      case 'large':
        return css`gap: ${spacing.xl};`;
      default:
        return css`gap: ${spacing.lg};`;
    }
  }}
  
  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

// Grid Item
export const GridItem = styled.div<{ span?: number; offset?: number }>`
  ${({ span }) => span && css`
    grid-column: span ${span};
  `}
  
  ${({ offset }) => offset && css`
    grid-column-start: ${offset + 1};
  `}
  
  @media (max-width: ${breakpoints.tablet}) {
    grid-column: span 1;
    grid-column-start: auto;
  }
`;

// Flex Components
export const Flex = styled.div<{
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  gap?: 'small' | 'medium' | 'large';
  wrap?: boolean;
}>`
  display: flex;
  
  ${({ direction = 'row' }) => css`
    flex-direction: ${direction};
  `}
  
  ${({ align = 'start' }) => {
    const alignMap = {
      start: 'flex-start',
      center: 'center',
      end: 'flex-end',
      stretch: 'stretch',
      baseline: 'baseline',
    };
    return css`align-items: ${alignMap[align]};`;
  }}
  
  ${({ justify = 'start' }) => {
    const justifyMap = {
      start: 'flex-start',
      center: 'center',
      end: 'flex-end',
      between: 'space-between',
      around: 'space-around',
      evenly: 'space-evenly',
    };
    return css`justify-content: ${justifyMap[justify]};`;
  }}
  
  ${({ gap = 'medium' }) => {
    switch (gap) {
      case 'small':
        return css`gap: ${spacing.sm};`;
      case 'large':
        return css`gap: ${spacing.lg};`;
      default:
        return css`gap: ${spacing.md};`;
    }
  }}
  
  ${({ wrap }) => wrap && css`
    flex-wrap: wrap;
  `}
`;

// Sidebar Layout
export const SidebarLayout = styled.div<{ sidebarWidth?: string }>`
  display: grid;
  grid-template-columns: ${({ sidebarWidth = layout.sidebar.width }) => sidebarWidth} 1fr;
  gap: ${spacing.xl};
  min-height: 100vh;
  
  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

// Sidebar Component
export const Sidebar = styled.aside<{ position?: 'left' | 'right' }>`
  background-color: ${colors.offWhite};
  border-right: 1px solid ${colors.lightGray};
  padding: ${spacing.lg};
  
  ${({ position = 'left' }) => position === 'right' && css`
    border-right: none;
    border-left: 1px solid ${colors.lightGray};
    order: 2;
  `}
  
  @media (max-width: ${breakpoints.tablet}) {
    border-right: none;
    border-left: none;
    border-bottom: 1px solid ${colors.lightGray};
    order: 0;
  }
`;

// Header Component
export const Header = styled.header<{ 
  sticky?: boolean; 
  background?: boolean; 
  zIndex?: number;
}>`
  width: 100%;
  border-bottom: 1px solid ${colors.lightGray};
  
  ${({ sticky, zIndex = 100 }) => sticky && css`
    position: sticky;
    top: 0;
    z-index: ${zIndex};
  `}
  
  ${({ background = true }) => background && css`
    background-color: ${colors.ivoryWhite};
    backdrop-filter: blur(8px);
  `}
`;

export const HeaderDescription = styled(Body)`
  color: ${colors.graphite};
  font-size: 14px;
  margin: 0;
`;

// Footer Component
export const Footer = styled.footer`
  width: 100%;
  background-color: ${colors.offWhite};
  border-top: 1px solid ${colors.lightGray};
  padding: ${spacing.xl} 0;
  margin-top: auto;
`;

// Content Area
export const ContentArea = styled.div<{ maxWidth?: boolean }>`
  width: 100%;
  
  ${({ maxWidth = true }) => maxWidth && css`
    max-width: ${layout.maxWidth.content};
    margin: 0 auto;
  `}
`;

// Article Layout
export const ArticleLayout = styled.article`
  max-width: ${layout.maxWidth.article};
  margin: 0 auto;
  padding: ${spacing.xl} ${spacing.containerPadding};
  
  /* Typography spacing for article content */
  h1, h2, h3, h4, h5, h6 {
    margin-top: ${spacing.headingBodyGap};
    margin-bottom: ${spacing.md};
    
    &:first-child {
      margin-top: 0;
    }
  }
  
  p, ul, ol, blockquote, pre {
    margin-bottom: ${spacing.md};
  }
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: ${borderRadius.lg};
    margin: ${spacing.lg} 0;
  }
`;

// Stack Component (for vertical spacing)
export const Stack = styled.div<{ gap?: 'small' | 'medium' | 'large' }>`
  display: flex;
  flex-direction: column;
  
  ${({ gap = 'medium' }) => {
    switch (gap) {
      case 'small':
        return css`gap: ${spacing.sm};`;
      case 'large':
        return css`gap: ${spacing.lg};`;
      default:
        return css`gap: ${spacing.md};`;
    }
  }}
`;

// Inline Component (for horizontal spacing)
export const Inline = styled.div<{ gap?: 'small' | 'medium' | 'large'; align?: 'start' | 'center' | 'end' }>`
  display: flex;
  align-items: ${({ align = 'center' }) => {
    const alignMap = {
      start: 'flex-start',
      center: 'center',
      end: 'flex-end',
    };
    return alignMap[align];
  }};
  flex-wrap: wrap;
  
  ${({ gap = 'medium' }) => {
    switch (gap) {
      case 'small':
        return css`gap: ${spacing.sm};`;
      case 'large':
        return css`gap: ${spacing.lg};`;
      default:
        return css`gap: ${spacing.md};`;
    }
  }}
`;

// Spacer Component
export const Spacer = styled.div<{ size?: 'small' | 'medium' | 'large' | 'xlarge' }>`
  ${({ size = 'medium' }) => {
    switch (size) {
      case 'small':
        return css`height: ${spacing.md}; width: ${spacing.md};`;
      case 'large':
        return css`height: ${spacing.xl}; width: ${spacing.xl};`;
      case 'xlarge':
        return css`height: ${spacing.xxxl}; width: ${spacing.xxxl};`;
      default:
        return css`height: ${spacing.lg}; width: ${spacing.lg};`;
    }
  }}
`;

// Divider Component
export const Divider = styled.hr<{ margin?: 'small' | 'medium' | 'large' }>`
  border: none;
  border-top: 1px solid ${colors.lightGray};
  
  ${({ margin = 'medium' }) => {
    switch (margin) {
      case 'small':
        return css`margin: ${spacing.md} 0;`;
      case 'large':
        return css`margin: ${spacing.xl} 0;`;
      default:
        return css`margin: ${spacing.lg} 0;`;
    }
  }}
`;

// Box Component (utility container)
export const Box = styled.div<{
  padding?: 'small' | 'medium' | 'large';
  margin?: 'small' | 'medium' | 'large';
  background?: 'white' | 'offWhite' | 'sage';
  border?: boolean;
  rounded?: boolean;
  shadow?: boolean;
}>`
  ${({ padding }) => {
    if (!padding) return '';
    switch (padding) {
      case 'small':
        return css`padding: ${spacing.md};`;
      case 'large':
        return css`padding: ${spacing.xl};`;
      default:
        return css`padding: ${spacing.lg};`;
    }
  }}
  
  ${({ margin }) => {
    if (!margin) return '';
    switch (margin) {
      case 'small':
        return css`margin: ${spacing.md};`;
      case 'large':
        return css`margin: ${spacing.xl};`;
      default:
        return css`margin: ${spacing.lg};`;
    }
  }}
  
  ${({ background }) => {
    if (!background) return '';
    switch (background) {
      case 'white':
        return css`background-color: ${colors.ivoryWhite};`;
      case 'sage':
        return css`background-color: ${colors.mutedSage};`;
      default:
        return css`background-color: ${colors.offWhite};`;
    }
  }}
  
  ${({ border }) => border && css`
    border: 1px solid ${colors.lightGray};
  `}
  
  ${({ rounded }) => rounded && css`
    border-radius: ${borderRadius.lg};
  `}
  
  ${({ shadow }) => shadow && css`
    box-shadow: ${shadows.soft};
  `}
`;

// Responsive utilities
export const ShowOn = styled.div<{ breakpoint: 'mobile' | 'tablet' | 'desktop' }>`
  ${({ breakpoint }) => {
    switch (breakpoint) {
      case 'mobile':
        return css`
          display: none;
          @media (max-width: ${breakpoints.mobile}) {
            display: block;
          }
        `;
      case 'tablet':
        return css`
          display: none;
          @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.desktop}) {
            display: block;
          }
        `;
      case 'desktop':
        return css`
          display: none;
          @media (min-width: ${breakpoints.desktop}) {
            display: block;
          }
        `;
    }
  }}
`;

export const HideOn = styled.div<{ breakpoint: 'mobile' | 'tablet' | 'desktop' }>`
  ${({ breakpoint }) => {
    switch (breakpoint) {
      case 'mobile':
        return css`
          @media (max-width: ${breakpoints.mobile}) {
            display: none;
          }
        `;
      case 'tablet':
        return css`
          @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.desktop}) {
            display: none;
          }
        `;
      case 'desktop':
        return css`
          @media (min-width: ${breakpoints.desktop}) {
            display: none;
          }
        `;
    }
  }}
`;

 