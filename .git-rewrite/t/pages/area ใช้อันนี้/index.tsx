import React from 'react';
import { useRouter } from 'next/router';
import { areas } from 'libs/service';
import styled from 'styled-components';

interface TopicContentProps {
  children?: React.ReactNode;
}

interface WithChildren {
  children?: React.ReactNode;
}

interface TopicButtonProps extends WithChildren {
  onClick?: () => void;
  className?: string;
  key?: string;
}

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;

  @media (min-width: 600px) {
    padding: 20px;
  }

  @media (min-width: 1200px) {
    padding: 24px;
  }
`;

const AreasGrid = styled.div<WithChildren>`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  color: #333;

  @media (min-width: 900px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const AreaCard = styled.div<WithChildren>`
  background: white;
  border-radius: 6px;
  border: 1px solid #cccccc;
  padding: 16px;
`;

const AreaTitle = styled.h2<WithChildren>`
  font-size: 1.5rem;
  margin-bottom: 16px;
  color: #333;
`;

const TopicsList = styled.div<WithChildren>`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const TopicButton = styled.button<TopicButtonProps>`
  background: #f5f5f5;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #666;
  font-size: 0.875rem;
  width: 100%;
  white-space: normal;
  word-break: break-word;

  @media (min-width: 900px) {
    padding: 12px 16px;
    font-size: 1rem;
  }

  &:hover {
    background: #e0e0e0;
    color: #333;
  }
`;

const TopicContent = styled.div<TopicContentProps>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

const TopicTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 4px;
`;

const ProgressBar = styled.div`
  flex: 1;
  height: 3px;
  background-color: #eee;
  border-radius: 2px;
  overflow: hidden;
`;

const ProgressFill = styled.div<{ progress: number }>`
  height: 100%;
  background-color: #4CAF50;
  transition: width 0.3s ease;
  width: ${props => props.progress}%;
`;

const ProgressText = styled.span`
  font-size: 0.75rem;
  color: #666;
  min-width: 40px;
  text-align: right;
`;

const AreaImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  width: 100%;
  position: relative;
  padding-top: 75%; /* 4:3 Aspect Ratio */

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export default function HomePage() {
  const router = useRouter();

  const handleAreaClick = (areaId: string, topicId: string, projectId: string) => {
    router.push({
      pathname: `/areas/${areaId}/topics/${topicId}/projects/${projectId}`,
    });
  };

  return (
    <Container>
      <Title>Areas</Title>
      <AreasGrid>
        {areas.map((area) => (
          <AreaCard key={area.title}>
            <AreaImage>
              {area.title === "การมีสุขภาพที่ดี" && (
                <img src="/images/healthy.png" alt="Health"/>
              )}
              {area.title === "ความสัมพันธ์" && (
                <img src="/images/relationship.png" alt="Relationships"/>
              )}
              {area.title === "งาน" && (
                <img src="/images/work.png" alt="Work"/>
              )}
              {area.title === "เรื่องส่วนตัว" && (
                <img src="/images/personal.png" alt="Learning"/>
              )}
            </AreaImage>
            <AreaTitle>{area.title}</AreaTitle>
            <TopicsList>
              {area.subProjects?.map((project) => {
                // Calculate total progress for the topic
                const allTasks = [
                  ...project.tasks || [],
                  ...(project.subProjects?.flatMap(project => project.tasks) || [])
                ];
                const progress = allTasks?.length > 0
                  ? Math.round((allTasks.filter(task => task?.isCompleted).length / allTasks.length) * 100)
                  : 0;

                return (
                  <TopicButton
                    key={project.title}
                    onClick={() => handleAreaClick(area.id, area.id, project.id)}
                  >
                    <TopicContent>
                      <TopicTitle>
                        {project.title} ({project.subProjects?.length || 0})
                      </TopicTitle>
                      <ProgressContainer>
                        <ProgressBar>
                          <ProgressFill progress={progress} />
                        </ProgressBar>
                        <ProgressText>{progress}%</ProgressText>
                      </ProgressContainer>
                    </TopicContent>
                  </TopicButton>
                );
              })}
            </TopicsList>
          </AreaCard>
        ))}
      </AreasGrid>
    </Container>
  );
}


