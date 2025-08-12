import React from 'react';
import BaseContentEntityPage from 'components/BaseContentEntityPage';

const ContentPurposesPage: React.FC = () => {
  return (
    <BaseContentEntityPage
      apiEndpoint="/api/back-offices/v1/content-purposes"
      entityType="Content Purpose"
    />
  );
};

export default ContentPurposesPage;
