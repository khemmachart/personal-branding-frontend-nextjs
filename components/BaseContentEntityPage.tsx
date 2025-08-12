import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BaseContentEntity } from './ContentList';
import {
  Container,
  H1,
  H2,
  H3,
  H4,
  Body,
  Card,
  CardContent,
  CardTitle,
  Section,
  colors,
  spacing,
  borderRadius,
  typography,
  PageLayout,
  QuoteBlock,
  QuoteBody
} from './design-system';

interface PageConfig {
  title: string;
  description: string;
  definition: string;
  responsibilities: string[];
}

interface ApiResponse {
  data: BaseContentEntity[];
  pageConfig: PageConfig;
}

interface BaseContentEntityPageProps {
  apiEndpoint: string;
  entityType: string;
}

const ResponsibilityList = styled.ul`
  list-style: none;
  padding: 0;
  margin: ${spacing.md} 0;
`;

const ResponsibilityItem = styled.li`
  margin-bottom: ${spacing.xs};
  padding-left: ${spacing.lg};
  position: relative;
  font-size: ${typography.fontSize.body};
  color: ${colors.darkGray};

  &:before {
    content: "•";
    position: absolute;
    left: 0;
    color: ${colors.accentBlue};
    font-weight: bold;
  }
`;

const EntityCard = styled(Card)`
  margin: ${spacing.sm} 0;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${colors.ivoryWhite};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  }
`;

const CharacteristicsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: ${spacing.sm} 0;
`;

const CharacteristicItem = styled.li`
  padding: ${spacing.xs} 0;
  position: relative;
  padding-left: ${spacing.md};
  font-size: ${typography.fontSize.caption};
  color: ${colors.darkGray};
  
  &:before {
    content: "•";
    position: absolute;
    left: 0;
    color: ${colors.accentBlue};
    font-weight: bold;
  }
`;

const ContentGoalContainer = styled.div`
  background: rgba(46, 125, 50, 0.05);
  border-radius: ${borderRadius.md};
  padding: ${spacing.sm};
  margin: ${spacing.sm} 0;
  border-left: 3px solid #2e7d32;
`;

const ContentGoalTitle = styled(H4)`
  color: #2e7d32;
  margin: 0 0 ${spacing.xs} 0;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
`;

const ErrorContainer = styled.div`
  background: #ffebee;
  color: ${colors.softRed};
  padding: ${spacing.md};
  border-radius: ${borderRadius.lg};
  margin: ${spacing.md} 0;
  border-left: 4px solid ${colors.softRed};
  text-align: center;
`;

const BaseContentEntityPage: React.FC<BaseContentEntityPageProps> = ({
  apiEndpoint,
  entityType
}) => {
  const [data, setData] = useState<BaseContentEntity[]>([]);
  const [pageConfig, setPageConfig] = useState<PageConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(apiEndpoint);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result: ApiResponse = await response.json();
        setData(result.data);
        setPageConfig(result.pageConfig);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred while fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiEndpoint]);

  if (loading) {
    return (
      <Container maxWidth="container" padding>
        <LoadingContainer>
          <Body>Loading {entityType}s...</Body>
        </LoadingContainer>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="container" padding>
        <ErrorContainer>
          <Body>Error: {error}</Body>
        </ErrorContainer>
      </Container>
    );
  }

  if (!pageConfig) {
    return (
      <Container maxWidth="container" padding>
        <ErrorContainer>
          <Body>No configuration found for {entityType}s</Body>
        </ErrorContainer>
      </Container>
    );
  }

  return (
    <PageLayout>
      <Container maxWidth="container" padding>
        <Section spacing="medium">
          <H1>{pageConfig.title}</H1>
          <Body>{pageConfig.description}</Body>

          {pageConfig.definition && (
            <div>
              <H2>Definition</H2>
              <QuoteBlock>
                <QuoteBody>{pageConfig.definition}</QuoteBody>
              </QuoteBlock>
            </div>
          )}

          {pageConfig.responsibilities && pageConfig.responsibilities.length > 0 && (
            <div>
              <H2>Key Responsibilities</H2>
              <ResponsibilityList>
                {pageConfig.responsibilities.map((responsibility, index) => (
                  <ResponsibilityItem key={index}>
                    <Body>{responsibility}</Body>
                  </ResponsibilityItem>
                ))}
              </ResponsibilityList>
            </div>
          )}

          <H2>Available {entityType}s</H2>
          {data.length === 0 ? (
            <Body style={{ textAlign: 'center', color: colors.graphite }}>
              No {entityType.toLowerCase()}s found.
            </Body>
          ) : (
            data.map((entity) => (
              <EntityCard key={entity.id} variant="default">
                <CardContent>
                  <CardTitle>{entity.title}</CardTitle>
                  {entity.description && (
                    <Body style={{ fontStyle: 'italic', color: colors.graphite, marginBottom: spacing.sm }}>
                      {entity.description}
                    </Body>
                  )}
                  
                                  {entity.contentExamples && (
                    <div>
                      <H4 style={{ marginTop: spacing.md, marginBottom: spacing.sm }}>
                        Content Examples:
                      </H4>
                      <CharacteristicsList>
                        {entity.contentExamples.split('\n').map((example, index) => (
                          example.trim() && (
                            <CharacteristicItem key={index}>
                              {example.replace(/^- /, '')}
                            </CharacteristicItem>
                          )
                        ))}
                      </CharacteristicsList>
                    </div>
                  )}

                  {entity.contentPurposes && (
                    <div>
                      <H4 style={{ marginTop: spacing.md, marginBottom: spacing.sm }}>
                        Content Purposes:
                      </H4>
                      <CharacteristicsList>
                        {entity.contentPurposes.split('\n').map((purpose, index) => (
                          purpose.trim() && (
                            <CharacteristicItem key={index}>
                              {purpose.replace(/^- /, '')}
                            </CharacteristicItem>
                          )
                        ))}
                      </CharacteristicsList>
                    </div>
                  )}
                </CardContent>
              </EntityCard>
            ))
          )}
        </Section>
      </Container>
    </PageLayout>
  );
};

export default BaseContentEntityPage; 