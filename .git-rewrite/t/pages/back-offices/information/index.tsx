import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import { 
  Container, 
  Flex, 
  colors, 
  spacing, 
  typography, 
  transitions,
  breakpoints 
} from '../../../components/design-system';

const InformationWrapper = styled.div`
  padding: ${spacing.xl} 0;
  background: ${colors.ivoryWhite};
  min-height: 100vh;
`;

const InformationContainer = styled(Container)`
  padding: 0 ${spacing.containerPadding};
`;

const PageTitle = styled.h1`
  font-size: ${typography.fontSize.h1};
  font-weight: ${typography.fontWeight.bold};
  color: ${colors.darkGray};
  margin-bottom: ${spacing.xl};
  text-align: left;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${spacing.lg};
  margin-top: ${spacing.xl};
`;

const InfoCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: ${spacing.xl};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform ${transitions.normal}, box-shadow ${transitions.normal};
  cursor: pointer;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
`;

const CardTitle = styled.h2`
  font-size: ${typography.fontSize.h2};
  font-weight: ${typography.fontWeight.semiBold};
  color: ${colors.darkGray};
  margin-bottom: ${spacing.md};
`;

const CardDescription = styled.p`
  font-size: ${typography.fontSize.body};
  color: ${colors.graphite};
  line-height: 1.6;
  margin-bottom: ${spacing.lg};
`;

const CardLink = styled(Link)`
  color: ${colors.accentBlue};
  text-decoration: none;
  font-weight: ${typography.fontWeight.medium};
  font-size: ${typography.fontSize.body};
  transition: color ${transitions.normal};
  
  &:hover {
    color: ${colors.accentBlue};
  }
`;

const informationItems = [
    {
        title: 'Content Themes',
        description: 'Explore different themes and topics that align with your brand and resonate with your audience.',
        href: '/back-offices/information/content-themes'
    },
    {
        title: 'Content Purpose',
        description: 'Define the goals and objectives of your content strategy. Understand what you want to achieve with your content.',
        href: '/back-offices/information/content-purposes'
    },
    {
        title: 'Target Audiences',
        description: 'Identify and understand your target audience segments to create more relevant and engaging content.',
        href: '/back-offices/information/target-audiences'
    }
];

const InformationPage = () => {
  return (
    <InformationWrapper>
      <InformationContainer maxWidth="container">
        <PageTitle>Information</PageTitle>
        
        <CardGrid>
          {informationItems.map((item) => (
            <InfoCard key={item.href}>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
              <CardLink href={item.href}>
                Learn More →
              </CardLink>
            </InfoCard>
          ))}
        </CardGrid>
      </InformationContainer>
    </InformationWrapper>
  );
};

export default InformationPage;
