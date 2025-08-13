import { styled } from "./styled";
import { colors, typography, space, layout } from "../designSystem/tokens";

export const Container = styled("main")`
  max-width:${layout.contentMax}px; margin:${space.xxl}px auto;
  padding:0 ${space.md}px;
  @media (max-width:${layout.mobile}px){ padding:0 ${space.sm}px; margin:${space.lg}px auto; }
`;

export const H1 = styled("h1")`
  font-size:${typography.h1.size}px; font-weight:${typography.h1.weight};
  line-height:${typography.h1.lh};
  margin:0 0 ${space.sm}px 0;
`;

export const Section = styled("section")`
  margin-top:${space.xl + space.md}px;
`;

export const SectionTitle = styled("h2")`
  font-size:${typography.section.size}px; font-weight:${typography.section.weight};
  letter-spacing:${typography.section.tracking}em;
  color:${colors.soft}; text-transform:uppercase; margin:0 0 ${space.sm}px 0;
`;

export const Item = styled("article")`
  margin-bottom:${space.lg}px;
`;

export const Org = styled("span")`
  font-size:${typography.org.size}px; font-weight:${typography.org.weight};
`;

export const Role = styled("span")`
  font-size:${typography.role.size}px; color:${colors.muted}; margin-left:8px;
`;

export const Summary = styled("p")`
  margin:${space.xs}px 0 0 0; line-height:${typography.body.lh};
  font-size:${typography.body.size}px;
`;

export const Bullets = styled("ul")`
  list-style:disc; padding-left:1.2rem; margin:${space.xs}px 0 0 0;
  line-height:${typography.body.lh}; font-size:${typography.body.size}px;
`;

export const Meta = styled("div")`
  color:${colors.soft}; font-size:${typography.meta.size}px;
  margin-top:${space.xs}px; font-style:italic;
`;

export const Columns = styled("div")`
  column-count:3; column-gap:${space.lg}px;
  @media (max-width:${layout.tablet}px){ column-count:2; }
  @media (max-width:${layout.mobile}px){ column-count:1; }
`;
