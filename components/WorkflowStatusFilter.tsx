import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { Content, WorkflowStage, WorkflowStageStatus } from './ContentList';

export interface WorkflowStatusFilterProps {
  onContentsChanged: (contents: Content[]) => void;
  onWorkflowStagesChanged: (workflowStages: WorkflowStage[]) => void;
}

const FilterContainer = styled.div`
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 20px;
  overflow: hidden;
`;

const FilterHeader = styled.div`
  background: #f5f5f5;
  padding: 12px 16px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  
  &:hover {
    background: #e9ecef;
  }
`;

const FilterTitle = styled.div`
  font-weight: 600;
  color: #333;
`;

const FilterSummary = styled.div`
  font-size: 12px;
  color: #666;
  margin-top: 4px;
`;

const ToggleIcon = styled.span<{ isOpen: boolean }>`
  transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: transform 0.2s;
  font-size: 12px;
`;

const FilterContent = styled.div<{ isOpen: boolean }>`
  max-height: ${props => props.isOpen ? '400px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`;

const FilterBody = styled.div`
  padding: 16px;
  max-height: 350px;
  overflow-y: auto;
`;

const StageSection = styled.div`
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const StageHeader = styled.div`
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  font-size: 14px;
`;

const StatusList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-left: 12px;
`;

const StatusItem = styled.label<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 8px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
  background: ${props => props.isSelected ? '#e3f2fd' : 'transparent'};
  border: 1px solid ${props => props.isSelected ? '#1976d2' : 'transparent'};
  
  &:hover {
    background: ${props => props.isSelected ? '#bbdefb' : '#f5f5f5'};
  }
`;

const StatusCheckbox = styled.input`
  margin: 0;
`;

const StatusLabel = styled.span`
  flex: 1;
  color: #333;
`;

const StatusDescription = styled.span`
  font-size: 11px;
  color: #666;
  font-style: italic;
`;

const ActionButtons = styled.div`
  padding: 12px 16px;
  border-top: 1px solid #ddd;
  background: #f9f9f9;
  display: flex;
  gap: 8px;
`;

const ActionButton = styled.button<{ variant?: 'primary' | 'secondary' }>`
  padding: 6px 12px;
  border: 1px solid ${props => props.variant === 'primary' ? '#1976d2' : '#ddd'};
  background: ${props => props.variant === 'primary' ? '#1976d2' : 'white'};
  color: ${props => props.variant === 'primary' ? 'white' : '#333'};
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  
  &:hover {
    background: ${props => props.variant === 'primary' ? '#1565c0' : '#f5f5f5'};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  padding: 16px;
  background: #ffebee;
  color: #c62828;
  font-size: 14px;
  border-radius: 4px;
  margin: 16px;
`;

const WorkflowStatusFilter: React.FC<WorkflowStatusFilterProps> = ({
  onContentsChanged, // Callback to update the filter statuses
  onWorkflowStagesChanged, // Callback to update the workflow stages
}) => {
  const router = useRouter();
  const [isFinishPreSelectFilter, setIsFinishPreSelectFilter] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStatuses, setSelectedStatuses] = useState<WorkflowStageStatus[]>([]);
  const [workflowStages, setWorkflowStages] = useState<WorkflowStage[]>([]);
  
  const fetchContents = async (filterStatuses: WorkflowStageStatus[] = []) => {
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
      onContentsChanged(data);
    } catch (e: unknown) {
      // Error Handling
    } finally {
      // Error Handling
    }
  }

  const fetchWorkflowStages = async () => {
    try {
      const response = await fetch('/api/cms/v1/workflows/stages/statuses');
      if (!response.ok) {
        throw new Error('Failed to fetch workflow stages');
      }
      
      const data = await response.json();
      setWorkflowStages(data);
      onWorkflowStagesChanged(data);
    } catch (err) {
      // Error handling
    } finally {
      // Error handling
    }
  };

  useEffect(() => {
    fetchWorkflowStages();
  }, []);
  
  // Initialize from URL query parameters on mount
  useEffect(() => {

    if (!router.isReady || workflowStages.length === 0) {
      return;
    } 
    
    const queryFilterStatuses = router.query.filterStatuses as string | undefined;
    const filterStatuses = queryFilterStatuses
      ? queryFilterStatuses.split(',').map(s => s.toUpperCase()).filter(Boolean)
      : [];

    const allStatuses = workflowStages.flatMap(stage => stage.statuses);
    const preSelectedStatuses = allStatuses.filter(status => filterStatuses.includes(status.code.toUpperCase()));

    setSelectedStatuses(preSelectedStatuses);
    fetchContents(preSelectedStatuses);

  }, [router.isReady, router.query.filterStatuses, workflowStages]);

  const updateUrl = useCallback((statuses: WorkflowStageStatus[]) => {
    // Avoid URL encoding: build the query string manually and use window.history.replaceState
    const newFilterStatuses = statuses.length > 0
      ? statuses.map(status => status.code.toLowerCase()).join(',')
      : [];

    // Get the current query string without encoding
    const currentQuery = { ...router.query };
    const currentFilterStatuses = currentQuery.filterStatuses as string | undefined;

    if (currentFilterStatuses !== newFilterStatuses) {
      if (newFilterStatuses.length > 0) {
        currentQuery.filterStatuses = newFilterStatuses;
      } else {
        delete currentQuery.filterStatuses;
      }

      // Build the query string manually to avoid encoding
      const queryString = Object.entries(currentQuery)
        .filter(([_, v]) => v !== undefined && v !== null && v !== '')
        .map(([k, v]) => `${k}=${v}`)
        .join('&');

      const newUrl = `${router.pathname}${queryString ? '?' + queryString : ''}`;

      window.history.replaceState(null, '', newUrl);
    }
  }, [router]);

  const handleStatusToggle = (status: WorkflowStageStatus) => {
    const isSelected = selectedStatuses.some(s => s.id === status.id);
    const newSelectedStatuses = isSelected
      ? selectedStatuses.filter(s => s.id !== status.id)
      : [...selectedStatuses, status];

    // Update the selected statuses and the URL
    setSelectedStatuses(newSelectedStatuses);
    fetchContents(newSelectedStatuses);
    updateUrl(newSelectedStatuses);
  };

  const handleSelectAll = () => {
    const allStatuses = workflowStages.flatMap(stage => stage.statuses);
    setSelectedStatuses(allStatuses);
    fetchContents(allStatuses);
    updateUrl(allStatuses);
  };

  const handleClearAll = () => {
    setSelectedStatuses([]);
    fetchContents([]);
    updateUrl([]);
  };

  const getSelectedStatusNames = () => {
    if (selectedStatuses.length === 0) return 'No Selected Status';
    if (selectedStatuses.length === 1) return selectedStatuses[0].title;
    return `${selectedStatuses.length} statuses selected`;
  };

  const totalStatuses = workflowStages.reduce((total, stage) => total + stage.statuses.length, 0);

  return (
    <FilterContainer>
      <FilterHeader onClick={() => setIsOpen(!isOpen)}>
        <div>
          <FilterTitle>Filter by Workflow Status</FilterTitle>
          <FilterSummary>
            {getSelectedStatusNames()}
            {selectedStatuses.length > 0 && ` (${selectedStatuses.length}/${totalStatuses})`}
          </FilterSummary>
        </div>
        <ToggleIcon isOpen={isOpen}>▼</ToggleIcon>
      </FilterHeader>

      <FilterContent isOpen={isOpen}>
          <>
            <FilterBody>
              {workflowStages.map((stage) => (
                <StageSection key={stage.code}>
                  <StageHeader>{stage.title}</StageHeader>
                  <StatusList>
                    {stage.statuses.map((status) => {
                      const isSelected = selectedStatuses.some(s => s.id === status.id);
                      const checkboxId = `status-${status.id}`;
                      
                      return (
                        <StatusItem
                          key={status.id}
                          isSelected={isSelected}
                          htmlFor={checkboxId}
                        >
                          <StatusCheckbox
                            id={checkboxId}
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => handleStatusToggle(status)}
                          />
                          <StatusLabel>{status.title}</StatusLabel>
                          {status.description && (
                            <StatusDescription>- {status.description}</StatusDescription>
                          )}
                        </StatusItem>
                      );
                    })}
                  </StatusList>
                </StageSection>
              ))}
            </FilterBody>

            {workflowStages.length > 0 && (
              <ActionButtons>
                <ActionButton
                  variant="secondary"
                  onClick={handleSelectAll}
                  disabled={selectedStatuses.length === totalStatuses}
                >
                  Select All
                </ActionButton>
                <ActionButton
                  variant="primary"
                  onClick={handleClearAll}
                  disabled={selectedStatuses.length === 0}
                >
                  Clear All
                </ActionButton>
              </ActionButtons>
            )}
          </>
      </FilterContent>
    </FilterContainer>
  );
};

export default WorkflowStatusFilter; 