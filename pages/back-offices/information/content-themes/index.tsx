import React from 'react';
import BaseContentEntityPage from 'components/BaseContentEntityPage';

const ContentThemesPage: React.FC = () => {
  return (
    <BaseContentEntityPage
      apiEndpoint="/api/back-offices/v1/content-themes"
      entityType="Content Theme"
    />
  );
};

export default ContentThemesPage;
