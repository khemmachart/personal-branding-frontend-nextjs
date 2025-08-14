import { styled } from "./styled";
import { 
  typography, 
  spacing, 
  layout, 
  H2, 
  H3, 
  Body, 
  Caption, 
  colors
} from '@/components/design-system'

export const Container = styled("main")`
  max-width:1024px; margin:${spacing.xxxl} auto;
  padding:0 ${spacing.lg};
  @media (max-width:768px){ padding:0 ${spacing.md}; margin:${spacing.xl} auto; }
`;

export const H1 = styled("h1")`
  font-size:${typography.fontSize.h1}; font-weight:${typography.fontWeight.bold};
  line-height:${typography.lineHeight.h1};
  margin:0 0 ${spacing.lg} 0;
`;

export const Section = styled("section")`
  margin-top:${spacing.xxxl};
  display: flex;
  gap: ${spacing.xxxl};
  
  @media (max-width:768px) {
    flex-direction: column;
    gap: ${spacing.md};
    margin-top:${spacing.sectionGap};
  }
`;

export const SectionTitle = styled("h2")`
  font-size:${typography.fontSize.body}; font-weight:${typography.fontWeight.semiBold};
  letter-spacing:0.04em;
  color:${colors.pinkSwan}; text-transform:uppercase; margin:0;
  width: 170px;
  flex-shrink: 0;
  text-align: right;
  line-height: 1.5;
  
  @media (max-width:768px) {
    width: auto;
    flex-shrink: 1;
    margin-bottom: ${spacing.sm};
    text-align: left;
    font-size:${typography.fontSize.h2}; font-weight:${typography.fontWeight.semiBold};
    letter-spacing:0.04em;
    color:${colors.darkGray}; text-transform:uppercase; margin:0;
  }
`;

export const SectionContent = styled("div")`
  flex: 1;

  @media (max-width:768px) {
    margin: ${spacing.md};
  }
`;

export const Item = styled("article")`
  margin-bottom:${spacing.xl};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Org = styled("span")`
  font-size:${typography.fontSize.body}; font-weight:${typography.fontWeight.semiBold};
`;

export const Role = styled("span")`
  font-size:${typography.fontSize.body}; color:${colors.graphite}; margin-left:8px;
`;

export const Summary = styled("p")`
  margin:${spacing.xs} 0 0 0; line-height:${typography.lineHeight.body};
  font-size:15px;
`;

export const Bullets = styled("ul")`
  list-style:disc; 
  padding-left:1.25rem; 
  margin: ${spacing.xs} 0 0 0;
  line-height:${typography.lineHeight.body}; font-size:15px;
  
  li {
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const Meta = styled("div")`
  color:${colors.pinkSwan}; font-size:${typography.fontSize.caption};
  margin-top:${spacing.sm}; font-style:italic;
`;

export const Columns = styled("div")`
  column-count:3; column-gap:${spacing.lg};
  @media (max-width:1024px){ column-count:2; }
  @media (max-width:768px){ column-count:1; }
`;

export const ContactGrid = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${spacing.lg};
  
  @media (max-width:768px) {
    grid-template-columns: 1fr;
    gap: ${spacing.md};
  }
`;

export const ContactItem = styled("div")`
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  font-size: 15px;
  line-height: 1.6;
`;

export const ContactLabel = styled("span")`
  font-weight: ${typography.fontWeight.semiBold};
  color: ${colors.slateGray};
  min-width: 70px;
  font-size: ${typography.fontSize.caption};
  text-transform: uppercase;
  letter-spacing: 0.025em;
`;

export const ContactValue = styled("span")`
  color: ${colors.slateGray};
  
  a {
    color: inherit;
    text-decoration: none;
    
    &:hover {
      color: ${colors.slateGray};
      text-decoration: underline;
    }
  }
`;

export const HeaderContact = styled("div")`
  margin-top: ${spacing.md};
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing.md};
  font-size: ${typography.fontSize.caption};
  color: ${colors.slateGray};
  
  @media (max-width:768px) {
    flex-direction: column;
    gap: ${spacing.xs};
  }
  
  a {
    color: inherit;
    text-decoration: none;
    
    &:hover {
      color: ${colors.slateGray};
      text-decoration: underline;
    }
  }
`;
