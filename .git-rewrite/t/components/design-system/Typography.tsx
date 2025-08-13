import styled from 'styled-components';
import { colors, typography, spacing, borderRadius } from './tokens';

// Base text component
const BaseText = styled.span`
  font-family: ${typography.fontFamily.primary};
  color: ${colors.darkGray};
  margin: 0;
  padding: 0;
`;

// Heading Components
export const H1 = styled.h1`
  ${BaseText};
  font-size: ${typography.fontSize.h1};
  line-height: ${typography.lineHeight.h1};
  font-weight: ${typography.fontWeight.bold};
  margin-top: ${spacing.xl};
  margin-bottom: ${spacing.md};
  color: ${colors.darkGray};
`;

export const H2 = styled.h2`
  ${BaseText};
  font-size: ${typography.fontSize.h2};
  line-height: ${typography.lineHeight.h2};
  font-weight: ${typography.fontWeight.semiBold};
  margin-bottom: ${spacing.md};
  color: ${colors.darkGray};
`;

export const H3 = styled.h3`
  ${BaseText};
  font-size: ${typography.fontSize.h3};
  line-height: ${typography.lineHeight.h3};
  font-weight: ${typography.fontWeight.semiBold};
  margin-bottom: ${spacing.md};
  color: ${colors.darkGray};
`;

export const H4 = styled.h4`
  ${BaseText};
  font-size: ${typography.fontSize.bodyLarge};
  line-height: ${typography.lineHeight.bodyLarge};
  font-weight: ${typography.fontWeight.semiBold};
  margin-bottom: ${spacing.sm};
  color: ${colors.darkGray};
`;

// Body Text Components
export const Body = styled.p`
  ${BaseText};
  font-size: ${typography.fontSize.body};
  line-height: ${typography.lineHeight.body};
  font-weight: ${typography.fontWeight.regular};
  margin-bottom: ${spacing.md};
  color: ${colors.darkGray};
`;

export const BodyLarge = styled.p`
  ${BaseText};
  font-size: ${typography.fontSize.bodyLarge};
  line-height: ${typography.lineHeight.bodyLarge};
  font-weight: ${typography.fontWeight.regular};
  margin-bottom: ${spacing.md};
  color: ${colors.darkGray};
`;

export const Caption = styled.span`
  ${BaseText};
  font-size: ${typography.fontSize.caption};
  line-height: ${typography.lineHeight.caption};
  font-weight: ${typography.fontWeight.regular};
  color: ${colors.graphite};
`;

export const Small = styled.span`
  ${BaseText};
  font-size: ${typography.fontSize.small};
  line-height: ${typography.lineHeight.small};
  font-weight: ${typography.fontWeight.regular};
  color: ${colors.graphite};
`;

// Quote
export const QuoteBlock = styled.blockquote`
  background: ${colors.mutedSage};
  border-left: 4px solid ${colors.graphite};
  margin: ${spacing.md} 0;
  padding: ${spacing.md};
  border-radius: 0 ${borderRadius.lg} ${borderRadius.lg} 0;
`;

export const QuoteBody = styled.p`
  ${BaseText};
  font-size: ${typography.fontSize.body};
  line-height: ${typography.lineHeight.body};
  font-weight: ${typography.fontWeight.regular};
  margin-bottom: ${spacing.md};
  color: ${colors.darkGray};
  font-style: italic;
`;

// Specialized Text Components
export const Link = styled.a`
  ${BaseText};
  font-size: inherit;
  line-height: inherit;
  font-weight: inherit;
  color: ${colors.accentBlue};
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #2563EB;
    text-decoration: underline;
  }

  &:focus {
    outline: 2px solid ${colors.accentBlue};
    outline-offset: 2px;
  }

  &:visited {
    color: #7C3AED;
  }
`;

export const ErrorText = styled.span`
  ${BaseText};
  font-size: ${typography.fontSize.caption};
  line-height: ${typography.lineHeight.caption};
  font-weight: ${typography.fontWeight.regular};
  color: ${colors.softRed};
`;

export const Code = styled.code`
  font-family: ${typography.fontFamily.mono};
  font-size: 0.9em;
  background-color: ${colors.mutedSage};
  color: ${colors.slateGray};
  padding: 2px 6px;
  border-radius: 4px;
  border: 1px solid ${colors.lightGray};
`;

export const Pre = styled.pre`
  font-family: ${typography.fontFamily.mono};
  font-size: ${typography.fontSize.caption};
  line-height: ${typography.lineHeight.caption};
  background-color: ${colors.mutedSage};
  color: ${colors.slateGray};
  padding: ${spacing.md};
  border-radius: 8px;
  border: 1px solid ${colors.lightGray};
  overflow-x: auto;
  white-space: pre-wrap;
  margin: ${spacing.md} 0;
`;

// Label Component for forms
export const Label = styled.label`
  ${BaseText};
  font-size: ${typography.fontSize.caption};
  line-height: ${typography.lineHeight.caption};
  font-weight: ${typography.fontWeight.medium};
  color: ${colors.darkGray};
  margin-bottom: ${spacing.sm};
  display: block;
`;

// Utility Components
export const TextCenter = styled.div`
  text-align: center;
`;

export const TextLeft = styled.div`
  text-align: left;
`;

export const TextRight = styled.div`
  text-align: right;
`;

// Text with emphasis
export const Strong = styled.strong`
  font-weight: ${typography.fontWeight.semiBold};
`;

export const Em = styled.em`
  font-style: italic;
`;

// Muted text variant
export const Muted = styled.span`
  color: ${colors.graphite};
`;

// Success text
export const SuccessText = styled.span`
  color: #10B981;
  font-weight: ${typography.fontWeight.medium};
`;

// Warning text
export const WarningText = styled.span`
  color: #F59E0B;
  font-weight: ${typography.fontWeight.medium};
`; 