import React, { useState } from 'react';
import styled from 'styled-components';
import { PageLayout } from 'components/design-system/Layout';

// Types
interface Topic {
  title: string;
  statusGroup: string;
  subStatus: string;
}

interface SubProject {
  name: string;
  categories: string[];
  topics: Topic[];
}

interface Project {
  name: string;
  subProjects: SubProject[];
}

// Mock Data
const STATUS_GROUPS = {
  Ideation: ['Not started', 'Idea Proposed', 'Idea Proposed (from AI)', 'Pending Discussion', 'Approved', 'Approved for AI', 'Rejected'],
  DraftContent: ['In Progress', 'In Progress (from AI)', 'Pending Discussion'],
  Reviewing: ['Ready to Review', 'Ready to Review (from AI)', 'Reviewing', 'Pending Discussion'],
  Completion: ['Ready to Auto Publish', 'Ready to Publish', 'Published', 'Cancelled'],
};

const mockProjects: Project[] = [
  {
    name: "Pool Villa Promotions",
    subProjects: [
      {
        name: "New Villas Launch 2025",
        categories: ["Awareness", "Product Info"],
        topics: [
          { title: "10 New Pool Villas in Pattaya", statusGroup: "Ideation", subStatus: "Idea Proposed (from AI)" },
          { title: "10 New Pool Villas in Pattaya", statusGroup: "Ideation", subStatus: "Not Started" },
          { title: "Luxury Villas in Hua Hin", statusGroup: "Completion", subStatus: "Published" },
          { title: "10 New Pool Villas in Pattaya ", statusGroup: "Ideation", subStatus: "Idea Proposed" },
          { title: "Luxury Villas in Hua Hin", statusGroup: "Completion", subStatus: "Published" },
          { title: "Luxury Villas in Hua Hin", statusGroup: "Completion", subStatus: "Published" },
          { title: "Luxury Villas in Hua Hin", statusGroup: "Completion", subStatus: "Published" },
          { title: "10 New Pool Villas in Pattaya", statusGroup: "Ideation", subStatus: "Idea Proposed (from AI)" },
          { title: "10 New Pool Villas in Pattaya", statusGroup: "Ideation", subStatus: "Idea Proposed (from AI)" },
          { title: "Luxury Villas in Hua Hin", statusGroup: "Completion", subStatus: "Published" },
          { title: "10 New Pool Villas in Pattaya ", statusGroup: "Ideation", subStatus: "Idea Proposed (from AI)" },
          { title: "Luxury Villas in Hua Hin", statusGroup: "Completion", subStatus: "Published" },
          { title: "Luxury Villas in Hua Hin", statusGroup: "Completion", subStatus: "Published" },
          { title: "Luxury Villas in Hua Hin", statusGroup: "Completion", subStatus: "Published" },
          { title: "10 New Pool Villas in Pattaya", statusGroup: "Ideation", subStatus: "Idea Proposed (from AI)" },
          { title: "10 New Pool Villas in Pattaya", statusGroup: "Ideation", subStatus: "Idea Proposed (from AI)" },
          { title: "Luxury Villas in Hua Hin", statusGroup: "Completion", subStatus: "Published" },
          { title: "10 New Pool Villas in Pattaya ", statusGroup: "Ideation", subStatus: "Idea Proposed (from AI)" },
          { title: "Luxury Villas in Hua Hin", statusGroup: "Completion", subStatus: "Published" },
          { title: "Luxury Villas in Hua Hin", statusGroup: "Completion", subStatus: "Published" },
          { title: "Luxury Villas in Hua Hin", statusGroup: "Completion", subStatus: "Published" },
        ],
      },
      {
        name: "Beachfront Villas",
        categories: ["Conversion", "Awareness", "Product Info"],
        topics: [
          { title: "Beachfront Villa in Bangsaen – Sleeps 15", statusGroup: "DraftContent", subStatus: "In Progress" },
          { title: "Pool Villa in Rayong – Budget Friendly", statusGroup: "Reviewing", subStatus: "Ready to Review" },
          { title: "Beachfront Villa in Bangsaen – Sleeps 15", statusGroup: "DraftContent", subStatus: "In Progress" },
          { title: "Pool Villa in Rayong – Budget Friendly", statusGroup: "Reviewing", subStatus: "Ready to Review" },
          { title: "Beachfront Villa in Bangsaen – Sleeps 15", statusGroup: "DraftContent", subStatus: "In Progress" },
          { title: "Pool Villa in Rayong – Budget Friendly", statusGroup: "Reviewing", subStatus: "Ready to Review" },
          { title: "Beachfront Villa in Bangsaen – Sleeps 15", statusGroup: "DraftContent", subStatus: "In Progress" },
          { title: "Pool Villa in Rayong – Budget Friendly", statusGroup: "Reviewing", subStatus: "Ready to Review" },
          { title: "Beachfront Villa in Bangsaen – Sleeps 15", statusGroup: "DraftContent", subStatus: "In Progress" },
          { title: "Pool Villa in Rayong – Budget Friendly", statusGroup: "Reviewing", subStatus: "Ready to Review" },
          { title: "Beachfront Villa in Bangsaen – Sleeps 15", statusGroup: "DraftContent", subStatus: "In Progress" },
          { title: "Pool Villa in Rayong – Budget Friendly", statusGroup: "Reviewing", subStatus: "Ready to Review" },
          { title: "Beachfront Villa in Bangsaen – Sleeps 15", statusGroup: "DraftContent", subStatus: "In Progress" },
          { title: "Pool Villa in Rayong – Budget Friendly", statusGroup: "Reviewing", subStatus: "Ready to Review" },
          { title: "Beachfront Villa in Bangsaen – Sleeps 15", statusGroup: "DraftContent", subStatus: "In Progress" },
          { title: "Pool Villa in Rayong – Budget Friendly", statusGroup: "Reviewing", subStatus: "Ready to Review" },
          { title: "Beachfront Villa in Bangsaen – Sleeps 15", statusGroup: "DraftContent", subStatus: "In Progress" },
        ],
      },
      {
        name: "Villa Review Campaign",
        categories: ["Consideration"],
        topics: [
          { title: "Review: Pool Villa with Karaoke Room", statusGroup: "Ideation", subStatus: "Pending Discussion" },
          { title: "Review: Pool Villa with Karaoke Room", statusGroup: "Ideation", subStatus: "Pending Discussion" },
          { title: "Review: Pool Villa with Karaoke Room", statusGroup: "Ideation", subStatus: "Pending Discussion" },
          { title: "Review: Pool Villa with Karaoke Room", statusGroup: "Ideation", subStatus: "Pending Discussion" },
          { title: "Review: Pool Villa with Karaoke Room", statusGroup: "Ideation", subStatus: "Pending Discussion" },
          { title: "Review: Pool Villa with Karaoke Room", statusGroup: "Ideation", subStatus: "Pending Discussion" },
          { title: "Review: Pool Villa with Karaoke Room", statusGroup: "Ideation", subStatus: "Pending Discussion" },
          { title: "Review: Pool Villa with Karaoke Room", statusGroup: "Ideation", subStatus: "Pending Discussion" },
          { title: "Review: Pool Villa with Karaoke Room", statusGroup: "Ideation", subStatus: "Pending Discussion" },
          { title: "Review: Pool Villa with Karaoke Room", statusGroup: "Ideation", subStatus: "Pending Discussion" },
          { title: "Review: Pool Villa with Karaoke Room", statusGroup: "Ideation", subStatus: "Pending Discussion" },
        ],
      },
    ],
  },
  {
    name: "Pool Villa Promotions",
    subProjects: [
      {
        name: "New Villas Launch 2025",
        categories: ["Awareness", "Product Info"],
        topics: [
          { title: "10 New Pool Villas in Pattaya", statusGroup: "Ideation", subStatus: "Idea Proposed (from AI)" },
          { title: "10 New Pool Villas in Pattaya", statusGroup: "Ideation", subStatus: "Idea Proposed (from AI)" },
          { title: "10 New Pool Villas in Pattaya", statusGroup: "Ideation", subStatus: "Idea Proposed (from AI)" },
          { title: "Luxury Villas in Hua Hin", statusGroup: "Completion", subStatus: "Published" },
        ],
      }
    ],
  },
];

// Styled Components
const PageContainer = styled.div`
  padding: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectSection = styled.div`
  margin-bottom: 1.5rem;
  background: white;
  border-radius: 6px;
  border: 1px solid #e0e0e0;
`;

const ProjectHeader = styled.div`
  padding: 1rem 1.25rem;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

const ProjectTitle = styled.h2`
  margin: 0;
  font-size: 1.25rem;
  color: #1a1a1a;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ToggleIcon = styled.span<{ isExpanded: boolean }>`
  display: inline-block;
  transition: transform 0.2s ease;
  transform: rotate(${({ isExpanded }) => isExpanded ? '90deg' : '0deg'});
  color: #666;
  font-size: 0.875rem;
`;

const ProjectContent = styled.div<{ isExpanded: boolean }>`
  max-height: ${({ isExpanded }) => isExpanded ? '10000px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  opacity: ${({ isExpanded }) => isExpanded ? '1' : '0'};
  transition: opacity 0.2s ease-in-out;
`;

const SubProjectCard = styled.div`
  padding: 1rem 1.25rem 1rem 2.5rem;
  border-bottom: 1px solid #e0e0e0;
  &:last-child {
    border-bottom: none;
  }
`;

const SubProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
  cursor: pointer;
  user-select: none;
`;

const SubProjectTitle = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SubProjectContent = styled.div<{ isExpanded: boolean }>`
  max-height: ${({ isExpanded }) => isExpanded ? '10000px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  opacity: ${({ isExpanded }) => isExpanded ? '1' : '0'};
  transition: opacity 0.2s ease-in-out;
  padding-left: 0.75rem;
`;

const Categories = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Category = styled.span`
  background: #f0f0f0;
  padding: 0.25rem 0.75rem;
  border-radius: 16px;
  font-size: 0.875rem;
  color: #666;
`;

const StatusGroupBlock = styled.div`
  margin-bottom: 1rem;
  padding-left: 0.75rem;
`;

const StatusGroupHeader = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  padding: 0.25rem 0;
`;

const StatusGroupTitle = styled.h4`
  margin: 0;
  font-size: 0.9rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const TopicsContainer = styled.div<{ isExpanded: boolean }>`
  max-height: ${({ isExpanded }) => isExpanded ? '1000px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  opacity: ${({ isExpanded }) => isExpanded ? '1' : '0'};
  transition: opacity 0.2s ease-in-out;
  padding-left: 0.75rem;
`;

const TopicItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.25rem 0.25rem 0.25rem 1rem;
  background: #fafafa;
  border-radius: 4px;
  margin-bottom: 0.375rem;
  gap: 0.75rem;
  margin-left: 0.75rem;
  border: 1px solid #e0e0e0;
`;

const TopicTitle = styled.div`
  flex: 1;
  font-size: 0.9rem;
  color: #333;
`;

const StatusBadge = styled.span<{ statusGroup: string }>`
  padding: 0.125rem 0.5rem;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 500;
  background: ${({ statusGroup }) => {
    switch (statusGroup) {
      case 'Ideation': return '#FFF3E0';
      case 'DraftContent': return '#E3F2FD';
      case 'Reviewing': return '#E8F5E9';
      case 'Completion': return '#F3E5F5';
      default: return '#F5F5F5';
    }
  }};
  color: ${({ statusGroup }) => {
    switch (statusGroup) {
      case 'Ideation': return '#E65100';
      case 'DraftContent': return '#1565C0';
      case 'Reviewing': return '#2E7D32';
      case 'Completion': return '#6A1B9A';
      default: return '#616161';
    }
  }};
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  padding: 0.375rem;
  cursor: pointer;
  color: #666;
  &:hover {
    color: #333;
  }
`;

const QuickActionButton = styled.button`
  padding: 0.375rem 0.75rem;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
  background: white;
  color: #333;
  font-size: 0.8rem;
  cursor: pointer;
  &:hover {
    background: #f5f5f5;
  }
`;

const AddTopicButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.75rem;
  background: #f5f5f5;
  border: 1px dashed #e0e0e0;
  border-radius: 4px;
  color: #666;
  font-size: 0.9rem;
  cursor: pointer;
  &:hover {
    background: #eee;
  }
`;

// Components
const TopicItemComponent: React.FC<{ topic: Topic }> = ({ topic }) => {
  const getQuickActionText = (statusGroup: string) => {
    switch (statusGroup) {
      case 'Ideation': return '→ In Progress';
      case 'DraftContent': return '→ Ready to Review';
      case 'Reviewing': return '→ Ready to Publish';
      case 'Completion': return '→ Published';
      default: return '';
    }
  };

  return (
    <TopicItem>
      <TopicTitle>{topic.title}</TopicTitle>
      {/* <ActionButton>⋯</ActionButton> */}
      <StatusBadge statusGroup={topic.statusGroup}>{topic.subStatus}</StatusBadge>
      <QuickActionButton>{getQuickActionText(topic.statusGroup)}</QuickActionButton>
    </TopicItem>
  );
};

const StatusGroupBlockComponent: React.FC<{ 
  title: string; 
  topics: Topic[] 
}> = ({ title, topics }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const filteredTopics = topics.filter(topic => topic.statusGroup === title);
  
  if (filteredTopics.length === 0) return null;

  return (
    <StatusGroupBlock>
      <StatusGroupHeader onClick={() => setIsExpanded(!isExpanded)}>
        <StatusGroupTitle>
          <ToggleIcon isExpanded={isExpanded}>▶</ToggleIcon>
          {title} ({filteredTopics.length})
        </StatusGroupTitle>
      </StatusGroupHeader>
      <TopicsContainer isExpanded={isExpanded}>
        {filteredTopics.map((topic, index) => (
          <TopicItemComponent key={index} topic={topic} />
        ))}
      </TopicsContainer>
    </StatusGroupBlock>
  );
};

const SubProjectCardComponent: React.FC<{ subProject: SubProject }> = ({ subProject }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <SubProjectCard>
      <SubProjectHeader onClick={() => setIsExpanded(!isExpanded)}>
        <SubProjectTitle>
          <ToggleIcon isExpanded={isExpanded}>▶</ToggleIcon>
          {subProject.name}
        </SubProjectTitle>
        <Categories>
          {subProject.categories.map((category, index) => (
            <Category key={index}>{category}</Category>
          ))}
        </Categories>
      </SubProjectHeader>
      
      <SubProjectContent isExpanded={isExpanded}>
        {Object.keys(STATUS_GROUPS).map((statusGroup) => (
          <StatusGroupBlockComponent
            key={statusGroup}
            title={statusGroup}
            topics={subProject.topics}
          />
        ))}
        
        <AddTopicButton>+ ADD TOPIC</AddTopicButton>
      </SubProjectContent>
    </SubProjectCard>
  );
};

const ProjectSectionComponent: React.FC<{ project: Project }> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <ProjectSection>
      <ProjectHeader onClick={() => setIsExpanded(!isExpanded)}>
        <ProjectTitle>
          <ToggleIcon isExpanded={isExpanded}>▶</ToggleIcon>
          {project.name}
        </ProjectTitle>
      </ProjectHeader>
      <ProjectContent isExpanded={isExpanded}>
        {project.subProjects.map((subProject, index) => (
          <SubProjectCardComponent key={index} subProject={subProject} />
        ))}
      </ProjectContent>
    </ProjectSection>
  );
};

// Main Page Component
const ProjectsPage: React.FC = () => {
  return (
    <PageLayout>
      <PageContainer>
        {mockProjects.map((project, index) => (
          <ProjectSectionComponent key={index} project={project} />
        ))}
      </PageContainer>
    </PageLayout>
  );
};

export default ProjectsPage;
