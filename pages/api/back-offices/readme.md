# Back Offices API Documentation

This directory contains API endpoints for back-office management functionality.

## Overview

The back-offices API provides endpoints for managing various administrative functions including content purposes, content themes, and target audiences. These endpoints support CRUD operations for managing content-related entities in the system.

## API Endpoints

### Content Purposes

**Endpoint:** `GET /api/back-offices/v1/content-purposes`

**Description:** Retrieve all content purposes for administrative management. Content purposes define the intended goal or objective of content pieces.

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "createdAt": "date",
      "updatedAt": "date"
    }
  ],
  "pageConfig": {
    "title": "Content Purposes",
    "description": "Manage content purposes for content classification",
    "definition": "Content purposes define the intended goal or objective of content pieces",
    "responsibilities": [
      "Define content objectives",
      "Categorize content by purpose",
      "Support content strategy planning"
    ]
  }
}
```

**Use Cases:**
- Content strategy planning
- Content categorization
- Performance tracking by purpose
- Content optimization based on objectives

### Content Themes

**Endpoint:** `GET /api/back-offices/v1/content-themes`

**Description:** Retrieve all content themes for administrative management. Content themes represent the main topics or subject areas that content covers.

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "createdAt": "date",
      "updatedAt": "date"
    }
  ],
  "pageConfig": {
    "title": "Content Themes",
    "description": "Manage content themes for topic classification",
    "definition": "Content themes represent the main topics or subject areas",
    "responsibilities": [
      "Organize content by topics",
      "Support content discovery",
      "Enable thematic content planning"
    ]
  }
}
```

**Use Cases:**
- Content organization by topic
- Thematic content planning
- Content discovery and navigation
- SEO optimization by theme

### Target Audiences

**Endpoint:** `GET /api/back-offices/v1/target-audiences`

**Description:** Retrieve all target audiences for administrative management. Target audiences define the specific groups of people that content is intended for.

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "demographics": "string",
      "interests": "string[]",
      "createdAt": "date",
      "updatedAt": "date"
    }
  ],
  "pageConfig": {
    "title": "Target Audiences",
    "description": "Manage target audiences for content personalization",
    "definition": "Target audiences define specific groups of people content is intended for",
    "responsibilities": [
      "Define audience segments",
      "Support content personalization",
      "Enable targeted content delivery"
    ]
  }
}
```

**Use Cases:**
- Audience segmentation
- Content personalization
- Targeted content delivery
- Marketing campaign planning
- User experience optimization

## Page Configuration (PageConfig)

The PageConfig is a crucial feature that provides dynamic UI configuration for each back-office page. It enables consistent and maintainable frontend rendering without hardcoding page-specific information.

### PageConfig Structure

```typescript
interface PageConfig {
  title: string;           // Page title displayed in the UI
  description: string;     // Brief description of the page's purpose
  definition: string;      // Detailed explanation of the entity type
  responsibilities: string[]; // List of key responsibilities/functions
}
```

### Purpose and Benefits

1. **Dynamic UI Rendering**: The frontend can automatically generate page headers, descriptions, and help text based on the API response
2. **Consistency**: Ensures uniform presentation across all back-office pages
3. **Maintainability**: Page configuration is centralized in the API, reducing frontend code duplication
4. **Flexibility**: Easy to update page information without frontend deployments
5. **Internationalization Ready**: Structure supports multi-language content

### Frontend Integration

The `BaseContentEntityPage.tsx` component utilizes PageConfig to render:

- **Page Header**: Uses `title` and `description`
- **Help Section**: Displays `definition` and `responsibilities`
- **Breadcrumbs**: Incorporates `title` for navigation
- **Tooltips**: Uses `description` for contextual help

### Example Usage in Frontend

```typescript
// In BaseContentEntityPage.tsx
const { data, pageConfig } = await fetchPageData();

return (
  <div>
    <PageHeader 
      title={pageConfig.title}
      description={pageConfig.description}
    />
    
    <HelpSection>
      <Definition>{pageConfig.definition}</Definition>
      <Responsibilities>
        {pageConfig.responsibilities.map(responsibility => (
          <ResponsibilityItem key={responsibility}>
            {responsibility}
          </ResponsibilityItem>
        ))}
      </Responsibilities>
    </HelpSection>
    
    <EntityList data={data} />
  </div>
);
```

### PageConfig Examples by Entity Type

#### Content Purposes
```json
{
  "title": "Content Purposes",
  "description": "Manage content purposes for content classification",
  "definition": "Content purposes define the intended goal or objective of content pieces, helping to categorize and organize content based on its primary function.",
  "responsibilities": [
    "Define content objectives and goals",
    "Categorize content by intended purpose",
    "Support content strategy planning and execution",
    "Enable performance tracking by purpose"
  ]
}
```

#### Content Themes
```json
{
  "title": "Content Themes",
  "description": "Manage content themes for topic classification",
  "definition": "Content themes represent the main topics or subject areas that content covers, providing a framework for organizing and discovering related content.",
  "responsibilities": [
    "Organize content by topic and subject area",
    "Support content discovery and navigation",
    "Enable thematic content planning and strategy",
    "Facilitate SEO optimization by theme"
  ]
}
```

#### Target Audiences
```json
{
  "title": "Target Audiences",
  "description": "Manage target audiences for content personalization",
  "definition": "Target audiences define specific groups of people that content is intended for, enabling personalized content delivery and improved user experience.",
  "responsibilities": [
    "Define and segment audience groups",
    "Support content personalization strategies",
    "Enable targeted content delivery",
    "Facilitate marketing campaign planning"
  ]
}
```

## Data Models

### BaseContentEntity
All entities follow a common base structure:
```typescript
interface BaseContentEntity {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}
```

### PageConfig
Each API response includes page configuration for UI rendering:
```typescript
interface PageConfig {
  title: string;
  description: string;
  definition: string;
  responsibilities: string[];
}
```

## Error Handling

All endpoints return standardized error responses:

```json
{
  "success": false,
  "error": {
    "message": "Error description",
    "code": "ERROR_CODE"
  }
}
```

**Common Error Codes:**
- `UNAUTHORIZED` - Authentication required
- `FORBIDDEN` - Insufficient permissions
- `NOT_FOUND` - Resource not found
- `VALIDATION_ERROR` - Invalid request data
- `INTERNAL_ERROR` - Server error

## Authentication

These endpoints require appropriate authentication and authorization. Ensure you have the necessary permissions to access back-office functionality.

## Usage Examples

### Fetching Content Purposes
```javascript
const response = await fetch('/api/back-offices/v1/content-purposes');
const data = await response.json();

if (data.success) {
  console.log('Content purposes:', data.data);
  console.log('Page config:', data.pageConfig);
}
```

### Fetching Content Themes
```javascript
const response = await fetch('/api/back-offices/v1/content-themes');
const data = await response.json();

if (data.success) {
  console.log('Content themes:', data.data);
  console.log('Page config:', data.pageConfig);
}
```

### Fetching Target Audiences
```javascript
const response = await fetch('/api/back-offices/v1/target-audiences');
const data = await response.json();

if (data.success) {
  console.log('Target audiences:', data.data);
  console.log('Page config:', data.pageConfig);
}
```

## Related Components

These APIs are used by the following frontend components:
- `pages/back-offices/content-purposes/index.tsx`
- `pages/back-offices/content-themes/index.tsx`
- `pages/back-offices/target-audiences/index.tsx`
- `components/BaseContentEntityPage.tsx` - Shared component for entity management

## Business Logic

The API endpoints utilize the following business logic layers:

### Repositories
- `libs/modules/backOffices/repositories/contentPurposeRepository.ts`
- `libs/modules/backOffices/repositories/contentThemeRepository.ts`
- `libs/modules/backOffices/repositories/targetAudienceRepository.ts`

### Use Cases
- `libs/modules/backOffices/useCases/getAllTargetAudiencesUseCase.ts`

## Development

The API endpoints are implemented using Next.js API routes and follow the repository pattern with use cases for business logic separation.

### File Structure
