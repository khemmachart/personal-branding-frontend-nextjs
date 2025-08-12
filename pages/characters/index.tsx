import React from 'react';
import styled from 'styled-components';
import {
  PageLayout,
  Container,
  Section,
  H1,
  H2,
  Body,
  colors,
  spacing,
  borderRadius,
  typography,
  breakpoints,
} from '../../components/design-system';

const characters = [
  {
    keyword: 'Bits',
    category: 'เทคโนโลยี',
    description: 'สายคอม, โปรแกรมเมอร์, ไอที',
  },
  {
    keyword: 'Brew',
    category: 'ไลฟ์สไตล์',
    description: 'กาแฟ, ความละมุน, ความชิล',
  },
  {
    keyword: 'Beer',
    category: 'ไลฟ์สไตล์',
    description: 'สังสรรค์, ความเป็นกันเอง',
  },
  {
    keyword: 'Build',
    category: 'ฟิตเนส / เกม',
    description: 'การสร้างร่างกาย, พัฒนาตัวเอง, วางแผนในเกม',
  },
  {
    keyword: 'Bokeh',
    category: 'การถ่ายภาพ',
    description: 'ภาพละลายหลัง, ความอาร์ต',
  },
  {
    keyword: 'Blazer',
    category: 'แฟชั่น',
    description: 'สายแต่งตัวเนี้ยบ, Sartorial',
  },
  {
    keyword: 'Bunny',
    category: 'สัตว์เลี้ยง',
    description: 'ด้านน่ารัก, ความอ่อนโยน, ความละมุน',
  },
  {
    keyword: 'Battle',
    category: 'เกม',
    description: 'การต่อสู้, ความท้าทาย, การแข่งขัน',
  },
  {
    keyword: 'Beat',
    category: 'ดนตรี',
    description: 'จังหวะ, vibe, การเคลื่อนไหว, ความรู้สึกดนตรี',
  },
];

const CharactersContainer = styled(Container)`
  max-width: 600px;
  margin: 0 auto;
  padding: ${spacing.xl} ${spacing.lg};
`;

const CharactersHeader = styled.div`
  text-align: center;
  margin-bottom: ${spacing.xxl};
  padding: ${spacing.xl} 0;
`;

const CharactersTitle = styled(H1)`
  font-size: 32px;
  font-weight: ${typography.fontWeight.bold};
  color: ${colors.darkGray};
  margin-bottom: ${spacing.sm};
`;

const CharactersSubtitle = styled(Body)`
  color: ${colors.graphite};
  margin-bottom: ${spacing.lg};
`;

const CharactersTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  border-radius: ${borderRadius.lg};
  overflow: hidden;
  background: ${colors.ivoryWhite};
  border: 1px solid ${colors.lightGray};
`;

const CharacterRow = styled.div`
  display: grid;
  grid-template-columns: 160px 1fr;
  align-items: center;
  padding: ${spacing.md} ${spacing.lg};
  border-bottom: 1px solid ${colors.lightGray};
  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    padding: ${spacing.md};
    gap: ${spacing.xs};
  }
  &:last-child {
    border-bottom: none;
  }
`;

const CharacterKeyword = styled(H2)`
  font-size: 22px;
  font-weight: ${typography.fontWeight.bold};
  color: ${colors.accentBlue};
  margin: 0;
  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: ${spacing.xs};
  }
`;

const CharacterDescription = styled(Body)`
  font-size: ${typography.fontSize.body};
  color: ${colors.darkGray};
  margin: 0;
`;

const CharactersPage: React.FC = () => {
  return (
    <PageLayout>
      <CharactersContainer>
        <CharactersHeader>
          <CharactersTitle>My Characters</CharactersTitle>
          <CharactersSubtitle>
            ไม่จริงจังมาก แค่รวมคาแรกเตอร์ที่ชอบใช้ในชีวิตและงาน (Just for fun!)
          </CharactersSubtitle>
        </CharactersHeader>
        <Section spacing="small">
          <CharactersTable>
            {characters.map((char) => (
              <CharacterRow key={char.keyword}>
                <CharacterKeyword as="div">{char.keyword}</CharacterKeyword>
                <CharacterDescription>{char.description}</CharacterDescription>
              </CharacterRow>
            ))}
          </CharactersTable>
        </Section>
      </CharactersContainer>
    </PageLayout>
  );
};

export default CharactersPage;