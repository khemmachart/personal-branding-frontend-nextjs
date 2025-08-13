import styled, { css } from 'styled-components';
import { colors, spacing, borderRadius, shadows, transitions, breakpoints } from './tokens';

// Card variant types
export type CardVariant = 'default' | 'elevated' | 'outlined' | 'filled';

// Card props interface
export interface CardProps {
  variant?: CardVariant;
  interactive?: boolean;
  fullWidth?: boolean;
  padding?: 'none' | 'small' | 'medium' | 'large';
}

// Padding styles
const paddingStyles = {
  none: css`padding: 0;`,
  small: css`padding: ${spacing.md};`,
  medium: css`padding: ${spacing.lg};`,
  large: css`padding: ${spacing.xl};`,
};

// Variant styles
const variantStyles = {
  default: css`
    background-color: ${colors.ivoryWhite};
    border: none;
    box-shadow: ${shadows.soft};
  `,
  
  elevated: css`
    background-color: ${colors.ivoryWhite};
    border: none;
    box-shadow: ${shadows.medium};
  `,
  
  outlined: css`
    background-color: ${colors.ivoryWhite};
    border: 1px solid ${colors.lightGray};
    box-shadow: none;
  `,
  
  filled: css`
    background-color: ${colors.offWhite};
    border: none;
    box-shadow: none;
  `,
};

// Base Card Component
export const Card = styled.div<CardProps>`
  border-radius: ${borderRadius.lg};
  transition: all ${transitions.normal};
  overflow: hidden;
  
  /* Variant styles */
  ${({ variant = 'default' }) => variantStyles[variant]}
  
  /* Padding styles */
  ${({ padding = 'medium' }) => paddingStyles[padding]}
  
  /* Full width */
  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `}
  
  /* Interactive styles */
  ${({ interactive, variant = 'default' }) => interactive && css`
    cursor: pointer;
    
    &:hover {
      ${variant === 'default' && css`
        box-shadow: ${shadows.medium};
      `}
      
      ${variant === 'elevated' && css`
        box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.15);
      `}
      
      ${variant === 'outlined' && css`
        border-color: ${colors.accentBlue};
        box-shadow: ${shadows.soft};
      `}
      
      ${variant === 'filled' && css`
        background-color: ${colors.mutedSage};
      `}
    }
    
    &:focus {
      outline: 2px solid ${colors.accentBlue};
      outline-offset: 2px;
    }
  `}
`;

// Card Header Component
export const CardHeader = styled.div<{ padding?: 'small' | 'medium' | 'large' }>`
  border-bottom: 1px solid ${colors.lightGray};
  
  ${({ padding = 'medium' }) => {
    switch (padding) {
      case 'small':
        return css`padding: ${spacing.md} ${spacing.lg};`;
      case 'large':
        return css`padding: ${spacing.xl} ${spacing.xl};`;
      default:
        return css`padding: ${spacing.lg} ${spacing.lg};`;
    }
  }}
`;

// Card Content Component
export const CardContent = styled.div<{ padding?: 'small' | 'medium' | 'large' }>`
  ${({ padding = 'medium' }) => {
    switch (padding) {
      case 'small':
        return css`padding: ${spacing.md} ${spacing.lg};`;
      case 'large':
        return css`padding: ${spacing.xl} ${spacing.xl};`;
      default:
        return css`padding: ${spacing.lg} ${spacing.lg};`;
    }
  }}
`;

// Card Footer Component
export const CardFooter = styled.div<{ padding?: 'small' | 'medium' | 'large'; align?: 'left' | 'center' | 'right' }>`
  border-top: 1px solid ${colors.lightGray};
  display: flex;
  gap: ${spacing.sm};
  
  ${({ padding = 'medium' }) => {
    switch (padding) {
      case 'small':
        return css`padding: ${spacing.md} ${spacing.lg};`;
      case 'large':
        return css`padding: ${spacing.xl} ${spacing.xl};`;
      default:
        return css`padding: ${spacing.lg} ${spacing.lg};`;
    }
  }}
  
  ${({ align = 'right' }) => {
    switch (align) {
      case 'left':
        return css`justify-content: flex-start;`;
      case 'center':
        return css`justify-content: center;`;
      default:
        return css`justify-content: flex-end;`;
    }
  }}
`;

// Card Title Component
export const CardTitle = styled.h3`
  font-size: ${typography.fontSize.h3};
  line-height: ${typography.lineHeight.h3};
  font-weight: ${typography.fontWeight.semiBold};
  color: ${colors.darkGray};
  margin: 0 0 ${spacing.sm} 0;
`;

// Card Subtitle Component
export const CardSubtitle = styled.h4`
  font-size: ${typography.fontSize.body};
  line-height: ${typography.lineHeight.body};
  font-weight: ${typography.fontWeight.medium};
  color: ${colors.graphite};
  margin: 0;
`;

// Card Description Component
export const CardDescription = styled.p`
  font-size: ${typography.fontSize.body};
  line-height: ${typography.lineHeight.body};
  font-weight: ${typography.fontWeight.regular};
  color: ${colors.darkGray};
  margin: ${spacing.sm} 0 0 0;
`;

// Card Image Component
export const CardImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: ${borderRadius.lg} ${borderRadius.lg} 0 0;
`;

// Card Actions Container
export const CardActions = styled.div<{ align?: 'left' | 'center' | 'right' }>`
  display: flex;
  gap: ${spacing.sm};
  
  ${({ align = 'right' }) => {
    switch (align) {
      case 'left':
        return css`justify-content: flex-start;`;
      case 'center':
        return css`justify-content: center;`;
      default:
        return css`justify-content: flex-end;`;
    }
  }}
`;

// Card Grid Container
export const CardGrid = styled.div<{ 
  columns?: number; 
  gap?: 'small' | 'medium' | 'large';
  minWidth?: string;
}>`
  display: grid;
  
  ${({ columns, minWidth = '300px' }) => {
    if (columns) {
      return css`
        grid-template-columns: repeat(${columns}, 1fr);
      `;
    }
    return css`
      grid-template-columns: repeat(auto-fit, minmax(${minWidth}, 1fr));
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

// Compact Card Component for Item Listings
export interface CompactCardProps extends CardProps {
  layout?: 'vertical' | 'horizontal';
  imagePosition?: 'left' | 'top';
}

export const CompactCard = styled(Card)<CompactCardProps>`
  padding: ${spacing.md};
  min-height: auto;
  
  ${({ layout = 'vertical' }) => layout === 'horizontal' && css`
    display: flex;
    align-items: center;
    gap: ${spacing.md};
  `}
  
  ${CardTitle} {
    font-size: ${typography.fontSize.body};
    line-height: ${typography.lineHeight.body};
    font-weight: ${typography.fontWeight.semiBold};
    margin-bottom: ${spacing.xs};
    
    ${({ layout = 'vertical' }) => layout === 'horizontal' && css`
      margin-bottom: 2px;
    `}
  }
  
  ${CardDescription} {
    font-size: ${typography.fontSize.caption};
    line-height: ${typography.lineHeight.caption};
    color: ${colors.graphite};
    margin-top: ${spacing.xs};
    
    ${({ layout = 'vertical' }) => layout === 'horizontal' && css`
      margin-top: 2px;
    `}
  }
`;

// Compact Card Thumbnail
export const CompactCardThumbnail = styled.div<{ size?: 'small' | 'medium' | 'large' }>`
  flex-shrink: 0;
  border-radius: ${borderRadius.md};
  overflow: hidden;
  background-color: ${colors.lightGray};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  
  ${({ size = 'medium' }) => {
    switch (size) {
      case 'small':
        return css`
          width: 40px;
          height: 40px;
        `;
      case 'large':
        return css`
          width: 80px;
          height: 80px;
        `;
      default:
        return css`
          width: 60px;
          height: 60px;
        `;
    }
  }}
`;

// Compact Card Content
export const CompactCardContent = styled.div`
  flex: 1;
  min-width: 0; /* Prevent flex item from growing beyond container */
`;

// Compact Card Meta
export const CompactCardMeta = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  margin-top: ${spacing.xs};
  font-size: ${typography.fontSize.caption};
  color: ${colors.graphite};
`;

// Compact Card Actions
export const CompactCardActions = styled.div`
  display: flex;
  gap: ${spacing.xs};
  margin-top: ${spacing.sm};
  
  button {
    font-size: ${typography.fontSize.caption};
    padding: ${spacing.xs} ${spacing.sm};
    min-height: 28px;
  }
`;

// Compact Card Badge
export const CompactCardBadge = styled.span<{ variant?: 'default' | 'success' | 'warning' | 'error' }>`
  display: inline-flex;
  align-items: center;
  padding: 2px ${spacing.xs};
  border-radius: ${borderRadius.sm};
  font-size: 11px;
  font-weight: ${typography.fontWeight.medium};
  line-height: 1.2;
  
  ${({ variant = 'default' }) => {
    switch (variant) {
      case 'success':
        return css`
          background-color: #DCFCE7;
          color: #166534;
        `;
      case 'warning':
        return css`
          background-color: #FEF3C7;
          color: #92400E;
        `;
      case 'error':
        return css`
          background-color: #FEE2E2;
          color: #991B1B;
        `;
      default:
        return css`
          background-color: ${colors.mutedSage};
          color: ${colors.graphite};
        `;
    }
  }}
`;

// Compact Card List Container
export const CompactCardList = styled.div<{ gap?: 'small' | 'medium' | 'large' }>`
  display: flex;
  flex-direction: column;
  
  ${({ gap = 'small' }) => {
    switch (gap) {
      case 'medium':
        return css`gap: ${spacing.md};`;
      case 'large':
        return css`gap: ${spacing.lg};`;
      default:
        return css`gap: ${spacing.sm};`;
    }
  }}
`;

// Feature Card Component
export const FeatureCard = styled(Card)`
  text-align: center;
  
  ${CardContent} {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${spacing.md};
  }
`;

// Stats Card Component
export const StatsCard = styled(Card)`
  ${CardContent} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

// Article Card Component
export const ArticleCard = styled(Card)`
  max-width: ${layout.maxWidth.article};
  
  ${CardHeader} {
    padding-bottom: ${spacing.md};
  }
  
  ${CardContent} {
    padding-top: 0;
  }
`;

// Profile Card Component
export const ProfileCard = styled(Card)`
  ${CardContent} {
    display: flex;
    align-items: center;
    gap: ${spacing.md};
  }
`;

// Notification Card Component
export const NotificationCard = styled(Card)<{ type?: 'info' | 'success' | 'warning' | 'error' }>`
  border-left: 4px solid;
  
  ${({ type = 'info' }) => {
    switch (type) {
      case 'success':
        return css`border-left-color: #10B981;`;
      case 'warning':
        return css`border-left-color: #F59E0B;`;
      case 'error':
        return css`border-left-color: ${colors.softRed};`;
      default:
        return css`border-left-color: ${colors.accentBlue};`;
    }
  }}
`;

// Loading Card Component
export const LoadingCard = styled(Card)`
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    );
    animation: shimmer 1.5s infinite;
  }
  
  @keyframes shimmer {
    0% {
      left: -100%;
    }
    100% {
      left: 100%;
    }
  }
`;

import { typography, layout } from './tokens'; 