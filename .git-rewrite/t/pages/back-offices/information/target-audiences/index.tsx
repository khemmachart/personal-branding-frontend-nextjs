import React from 'react';
import BaseContentEntityPage from 'components/BaseContentEntityPage';

const TargetAudiencesPage: React.FC = () => {
  return (
    <BaseContentEntityPage
      apiEndpoint="/api/back-offices/v1/target-audiences"
      entityType="Target Audience"
    />
  );
};

export default TargetAudiencesPage;