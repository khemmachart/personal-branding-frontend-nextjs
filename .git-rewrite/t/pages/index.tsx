import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import ContentDetailModal from 'components/ContentDetailModal';
import WorkflowStatusFilter from 'components/WorkflowStatusFilter';
import { Content, WorkflowStage } from 'components/ContentList';
import { WorkflowStageStatus } from '../components/ContentList';
import { generateSlug } from 'utils';
import { Header, HeaderDescription, PageLayout } from 'components/design-system/Layout';
import {
  Container,
  H1,
  H2,
  Button,
  Card,
  CardContent,
  CardTitle,
  CompactCard,
  CompactCardList,
  CompactCardThumbnail,
  CompactCardContent,
  CompactCardMeta,
  CompactCardBadge,
  Body,
  Caption,
  Input,
  Flex,
  Section,
  colors,
  spacing,
  H3,
  CompactCardActions
} from 'components/design-system';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  background: #ffebee;
  color: ${colors.softRed};
  padding: ${spacing.md};
  border-radius: 8px;
  text-align: center;
  margin: ${spacing.md} 0;
`;

const CreateContentContainer = styled(Card)`
  margin-top: ${spacing.xxl};
  background: ${colors.offWhite};
`;

const CreateForm = styled.form`
  display: flex;
  gap: ${spacing.md};
  align-items: stretch;
  margin-top: ${spacing.md};
`;

const CreateInputContainer = styled.div`
  flex: 1;
`;

// Mock data for status-based quick actions
const STATUS_QUICK_ACTIONS = {
  1: { // Draft/Initial status
    action: 'Submit for Review',
    nextStatusId: 2,
    variant: 'primary' as const
  },
  15: { // Ready to review
    action: 'Start Reviewing',
    nextStatusId: 17,
    variant: 'secondary' as const
  }
};

const ProjectsPage: React.FC = () => {
  const [contents, setContents] = useState<Content[]>([]);
  const [workflowStages, setWorkflowStages] = useState<WorkflowStage[]>([]);
  const [loading, setLoading] = useState(true);
  const [listError, setListError] = useState<string | null>(null);
  const [createError, setCreateError] = useState<string | null>(null);
  const [selectedContentId, setSelectedContentId] = useState<string | null>(null);
  const [newContentName, setNewContentName] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [selectedStatusIds, setSelectedStatusIds] = useState<string[]>([]);
  const [updatingContentId, setUpdatingContentId] = useState<string | null>(null);
  const router = useRouter();

  const fetchContents = async (filterStatuses: WorkflowStageStatus[] = []) => {
    setLoading(true);
    setListError(null);
    
    // Build URL with optional status filter
    let url = '/api/cms/v1/contents';
    if (filterStatuses.length > 0) {
      const statusCodesParam = filterStatuses.map(status => status.code.toLowerCase()).join(',');
      url += `?filterStatuses=${statusCodesParam}`;
    }

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      setContents(data);
    } catch (e: unknown) {
      if (e instanceof Error) {
        setListError(e.message);
      } else {
        setListError('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  }

  const handleOpenModal = (contentId: string) => {
    router.push(`?contentId=${contentId}`, undefined, { shallow: true });
    setSelectedContentId(contentId);
  };

  const handleCloseModal = () => {
    router.push('/', undefined, { shallow: true });
    setSelectedContentId(null);
  };

  const handleUpdateSuccess = () => {
    fetchContents();
  };

  const handleDelete = () => {
    fetchContents();
  };

  const handleContentsChanges = (contents: Content[]) => {
    setContents(contents);
  };

  const handleWorkflowStagesChanges = (workflowStages: WorkflowStage[]) => {
    setWorkflowStages(workflowStages);
  };

  const handleQuickStatusChange = async (contentId: string, nextWorkflowStageStatusId: number) => {
    setUpdatingContentId(contentId);
    try {
      const selectedContent = contents.find(content => content.id === contentId);
      const nextStatus = workflowStages
        .flatMap(stage => stage.statuses)
        .find(status => status.id === nextWorkflowStageStatusId);

      const contentData = {
        ...selectedContent,
        status: nextStatus
      };
      
      const response = await fetch(`/api/cms/v1/contents/${contentId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contentData),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to update content.');
      }

      setContents(prevContents => 
        prevContents.map(content => 
          content.id === contentId 
            ? { 
                ...selectedContent,
                status: nextStatus
              }
            : content
        )
      );
      
    } catch (error) {
      console.error('Failed to update status:', error);
    } finally {
      setUpdatingContentId(null);
    }
  };

  // Helper function for mock status titles
  const getStatusTitle = (statusId: string): string => {
    const statusTitles: Record<string, string> = {
      '1': 'Draft',
      '17': 'Reviewing'
    };
    return statusTitles[statusId] || 'Unknown';
  };

  const handleCreateContent = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newContentName.trim()) return;

    setIsCreating(true);
    setCreateError(null);

    try {
      const initialStatus = { id: 1 } as WorkflowStageStatus;
      const name = generateSlug(newContentName.trim());
      const content = { title: newContentName.trim(), name, status: initialStatus } as Content;
      const response = await fetch('/api/cms/v1/contents', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create content.');
      }

      const newContent = await response.json();
      
      setNewContentName('');
      setContents([...contents, newContent]);
    } catch (e: any) {
      setCreateError(e.message);
    } finally {
      setIsCreating(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (listError) {
    return (
      <Container maxWidth="container" padding>
        <ErrorContainer>
          <Body>Error: {listError}</Body>
        </ErrorContainer>
      </Container>
    );
  }

  return (
    <PageLayout>

      <Header background sticky>
        <Container>
          <Flex justify="between" align="center" style={{ padding: `${spacing.lg} 0` }}>
            <H3 style={{ margin: 0 }}>Content List</H3>
            <HeaderDescription>
              This is a list of all the contents in the database.
            </HeaderDescription>
          </Flex>
        </Container>
      </Header>
      
      <Container maxWidth="container" padding>
        <Section spacing="medium">
          <H1>Content List</H1>

          <WorkflowStatusFilter
            onContentsChanged={handleContentsChanges}
            onWorkflowStagesChanged={handleWorkflowStagesChanges}
          />

          {loading && contents.length === 0 && (
            <Body style={{ textAlign: 'center', margin: `${spacing.md} 0`, color: colors.graphite }}>
              No results found.
            </Body>
          )}

          <CompactCardList gap="medium">
            {contents.map((content) => (
              <CompactCard 
                key={content.id} 
                variant="default" 
                interactive 
                layout="horizontal"
                onClick={() => handleOpenModal(content.id)}
              >
                <CompactCardThumbnail size="small">
                  <img 
                    src={content.images[0]?.file?.file_thumbnail_url ? `${process.env.NEXT_PUBLIC_AWS_CLOUDFRONT_DISTRIBUTION_DOMAIN}${content.images[0]?.file?.file_thumbnail_url}` : null}
                    alt={content.title}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </CompactCardThumbnail>
                <CompactCardContent>
                  <CardTitle>{content.title}</CardTitle>
                  {content.description && (
                    <Body style={{ margin: `${spacing.xs} 0 0 0`, fontSize: '14px' }}>
                      {content.description}
                    </Body>
                  )}
                  <CompactCardMeta>
                    <CompactCardBadge variant={content.status?.id === 1 ? 'default' : 'success'}>
                      {content.status ? content.status.title : 'No Status'}
                    </CompactCardBadge>
                  </CompactCardMeta>
                </CompactCardContent>
                <CompactCardActions>
                  {content.status?.id && STATUS_QUICK_ACTIONS[content.status.id as keyof typeof STATUS_QUICK_ACTIONS] && (
                    <Button 
                      variant={STATUS_QUICK_ACTIONS[content.status.id as keyof typeof STATUS_QUICK_ACTIONS].variant}
                      size="small" 
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent card click
                        handleQuickStatusChange(
                          content.id, 
                          STATUS_QUICK_ACTIONS[content.status.id as keyof typeof STATUS_QUICK_ACTIONS].nextStatusId
                        );
                      }}
                      disabled={updatingContentId === content.id}
                      loading={updatingContentId === content.id}
                    >
                      {updatingContentId === content.id 
                        ? 'Updating...' 
                        : STATUS_QUICK_ACTIONS[content.status.id as keyof typeof STATUS_QUICK_ACTIONS].action
                      }
                    </Button>
                  )}
                  <Button 
                     variant="text" 
                     size="small" 
                     onClick={(e) => {
                       e.stopPropagation(); // Prevent card click
                       handleOpenModal(content.id);
                     }}
                   >
                     View
                   </Button>
                </CompactCardActions>
              </CompactCard>
            ))}
          </CompactCardList>

          {contents.length === 0 && !loading && (
            <Body style={{ textAlign: 'center', margin: `${spacing.xl} 0`, color: colors.graphite }}>
              {selectedStatusIds.length > 0 
                ? 'No content found matching the selected workflow statuses.' 
                : 'No content found.'
              }
            </Body>
          )}

          <CreateContentContainer variant="filled" padding="large">
            <H2 style={{ margin: 0 }}>Create New Content</H2>
            <CreateForm onSubmit={handleCreateContent}>
              <CreateInputContainer>
                <Input
                  placeholder="Enter new content name..."
                  value={newContentName}
                  onChange={(e) => setNewContentName(e.target.value)}
                  disabled={isCreating}
                />
              </CreateInputContainer>
              <Button 
                type="submit" 
                variant="primary" 
                size="medium"
                disabled={isCreating || !newContentName.trim()}
                loading={isCreating}
              >
                {isCreating ? 'Creating...' : 'Create'}
              </Button>
            </CreateForm>
            {createError && (
              <ErrorContainer style={{ marginTop: spacing.md }}>
                <Body>{createError}</Body>
              </ErrorContainer>
            )}
          </CreateContentContainer>
        </Section>

        {selectedContentId && (
          <ContentDetailModal
            contentId={selectedContentId}
            isOpen={!!selectedContentId}
            onClose={handleCloseModal}
            onUpdateSuccess={handleUpdateSuccess}
            onDelete={handleDelete}
            disableBackdropClick={false}
          />
        )}
      </Container>
    </PageLayout>
  );
};

export default ProjectsPage;
