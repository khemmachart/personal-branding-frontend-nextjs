import { styled } from "./styled";
import { typography, space, layout } from "../designSystem/tokens";
import { 

  H2, 
  H3, 
  Body, 
  Caption, 
  colors
} from '@/components/design-system'

export const Container = styled("main")`
  max-width:${layout.contentMax}px; margin:${space.xxl + space.lg}px auto;
  padding:0 ${space.lg}px;
  @media (max-width:${layout.mobile}px){ padding:0 ${space.md}px; margin:${space.xl}px auto; }
`;

export const H1 = styled("h1")`
  font-size:${typography.h1.size}px; font-weight:${typography.h1.weight};
  line-height:${typography.h1.lh};
  margin:0 0 ${space.lg}px 0;
`;

export const Section = styled("section")`
  margin-top:${space.xxl + space.lg}px;
  display: flex;
  gap: ${space.xxl}px;
  
  @media (max-width:${layout.mobile}px) {
    flex-direction: column;
    gap: ${space.md}px;
    margin-top:${space.xl + space.md}px;
  }
`;

export const SectionTitle = styled("h2")`
  font-size:${typography.section.size}px; font-weight:${typography.section.weight};
  letter-spacing:${typography.section.tracking}em;
  color:${colors.pinkSwan}; text-transform:uppercase; margin:0;
  width: 170px;
  flex-shrink: 0;
  text-align: right;
  line-height: 1.5;
  
  @media (max-width:${layout.mobile}px) {
    width: auto;
    flex-shrink: 1;
    margin-bottom: ${space.sm}px;
    text-align: left;
  }
`;

export const SectionContent = styled("div")`
  flex: 1;
`;

export const Item = styled("article")`
  margin-bottom:${space.xl}px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Org = styled("span")`
  font-size:${typography.org.size}px; font-weight:${typography.org.weight};
`;

export const Role = styled("span")`
  font-size:${typography.role.size}px; color:${colors.graphite}; margin-left:8px;
`;

export const Summary = styled("p")`
  margin:${space.xs}px 0 0 0; line-height:${typography.body.lh};
  font-size:${typography.body.size}px;
`;

export const Bullets = styled("ul")`
  list-style:disc; padding-left:0.85rem; 
  margin: ${space.xs}px 0 0 0;
  line-height:${typography.body.lh}; font-size:${typography.body.size}px;
  
  li {
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const Meta = styled("div")`
  color:${colors.pinkSwan}; font-size:${typography.meta.size}px;
  margin-top:${space.sm}px; font-style:italic;
`;

export const Columns = styled("div")`
  column-count:3; column-gap:${space.lg}px;
  @media (max-width:${layout.tablet}px){ column-count:2; }
  @media (max-width:${layout.mobile}px){ column-count:1; }
`;

export const ContactGrid = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${space.lg}px;
  
  @media (max-width:${layout.mobile}px) {
    grid-template-columns: 1fr;
    gap: ${space.md}px;
  }
`;

export const ContactItem = styled("div")`
  display: flex;
  align-items: center;
  gap: ${space.sm}px;
  font-size: ${typography.body.size}px;
  line-height: ${typography.body.lh};
`;

export const ContactLabel = styled("span")`
  font-weight: ${typography.section.weight};
  color: ${colors.slateGray};
  min-width: 70px;
  font-size: ${typography.meta.size}px;
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
  margin-top: ${space.md}px;
  display: flex;
  flex-wrap: wrap;
  gap: ${space.md}px;
  font-size: ${typography.meta.size}px;
  color: ${colors.slateGray};
  
  @media (max-width:${layout.mobile}px) {
    flex-direction: column;
    gap: ${space.xs}px;
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
