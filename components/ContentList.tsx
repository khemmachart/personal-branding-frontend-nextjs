import { FileRecord } from 'libs/modules/cms/repositories/fileRepository';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

export interface BaseContentEntity {
  id: string;
  code: string;
  title: string;
  description: string;
  contentExamples: string;
  contentPurposes: string;
  sort?: number;
  createdDate: string;
  updatedDate: string;
}

export interface ContentTheme extends BaseContentEntity {}

export interface ContentPurpose extends BaseContentEntity {}

export interface TargetAudience extends BaseContentEntity {}

export interface Content {
  id: string;
  name: string;
  status: WorkflowStageStatus;
  title: string;
  description: string;
  short_form_content_text: string;
  images: ContentImage[];
  type: string;
  category: string;
  created_date: string;
  updated_date: string;
  deleted_date: string;
  archived_date: string;
}

export interface ContentImage {
    id?: string;
    content_id?: string;
    file?: FileRecord;
    created_date?: string;
    updated_date?: string;
    deleted_date?: string;
}

export interface WorkflowStageStatus {
  id: number;
  workflow_stage: WorkflowStage;
  code: string;
  title: string;
  description: string;
}

export interface WorkflowStage {
  id: number;
  code: string;
  title: string;
  description: string;
  statuses: WorkflowStageStatus[];
}

const ContentContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const SearchContainer = styled.div`
  margin-bottom: 20px;
  
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
  }
`;

const ContentCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  
  h3 {
    margin: 0 0 10px 0;
    color: #333;
  }
  
  p {
    margin: 0 0 15px 0;
    color: #666;
    line-height: 1.6;
  }
  
  .meta {
    font-size: 12px;
    color: #999;
    
    span {
      margin-right: 15px;
    }
  }
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 40px;
  color: #666;
`;

const ErrorMessage = styled.div`
  background: #ffebee;
  color: #c62828;
  padding: 15px;
  border-radius: 4px;
  margin-bottom: 20px;
`;

const ContentList = () => {
  const [contents, setContents] = useState<Content[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Content[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Fetch all contents on component mount
  useEffect(() => {
    fetchAllContents();
  }, []);

  const fetchAllContents = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('/api/contents');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setContents(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch contents');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    try {
      setIsSearching(true);
      setError(null);
      const response = await fetch(`/api/contents/search?q=${encodeURIComponent(query)}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setSearchResults(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to search contents');
    } finally {
      setIsSearching(false);
    }
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    handleSearch(query);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const displayContents = searchQuery ? searchResults : contents;
  const isLoading = loading || isSearching;

  return (
    <ContentContainer>
      <h1>Content Management</h1>
      
      <SearchContainer>
        <input
          type="text"
          placeholder="Search contents..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </SearchContainer>

      {error && (
        <ErrorMessage>
          Error: {error}
        </ErrorMessage>
      )}

      {isLoading ? (
        <LoadingMessage>
          {searchQuery ? 'Searching...' : 'Loading contents...'}
        </LoadingMessage>
      ) : (
        <div>
          {searchQuery && (
            <h2>Search Results for "{searchQuery}" ({searchResults.length} found)</h2>
          )}
          
          {displayContents.length === 0 ? (
            <LoadingMessage>
              {searchQuery ? 'No contents found matching your search.' : 'No contents available.'}
            </LoadingMessage>
          ) : (
            displayContents.map((content) => (
              <ContentCard key={content.id}>
                <h3>{content.title}</h3>
                <p>{content.description}</p>
                <div className="meta">
                  <span>Type: {content.type}</span>
                  <span>Category: {content.category || 'Uncategorized'}</span>
                  <span>Created: {formatDate(content.created_date)}</span>
                  <span>Updated: {formatDate(content.updated_date)}</span>
                </div>
              </ContentCard>
            ))
          )}
        </div>
      )}
    </ContentContainer>
  );
};

export default ContentList; 