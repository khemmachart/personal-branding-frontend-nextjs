# Components Design System

A refined minimal color palette focused on readability and accessibility for note-taking applications.

## 🎨 Color Palette

### Base Neutrals
| Name | HEX | Usage | Rationale |
|------|-----|-------|-----------|
| Off White | `#FAF9F6` | Primary Background | Neutral tone - not too yellow or gray, easy on the eyes |
| Dark Gray | `#333333` | Primary Text | Balanced contrast while maintaining softness |
| Graphite | `#4A4A4A` | Secondary Text | Used for labels, notes, and muted content |

### Accent & Functional Colors
| Name | HEX | Usage |
|------|-----|-------|
| Accent Blue | `#3B82F6` | Links, Action Buttons |
| Soft Red | `#EF4444` | Warnings, Error Text |
| Light Gray | `#E5E5E5` | Borders, Dividers |

### Optional Utility Colors
| Name | HEX | Usage |
|------|-----|-------|
| Muted Sage | `#EAE8E1` | Optional background blocks (quotes, highlight areas) |
| Slate Gray | `#3A3A3A` | Icons, low-priority text on dark UI |

## 🧭 Visual Usage Guide

```css
/* Primary Background */
body { background-color: #FAF9F6; }

/* Primary Text */
h1, p, nav { color: #333333; }

/* Secondary Text */
label, caption, .hint { color: #4A4A4A; }

/* Interactive Elements */
a, .primary-button { color: #3B82F6; }

/* Borders & Dividers */
.border, hr { border-color: #E5E5E5; }

/* Error States */
.error-message { color: #EF4444; }
```

## 💡 Best Practices

- **Contrast Ratio**: Maintain at least 4.5:1 contrast ratio for text readability (WCAG 2.1 AA compliance)
- **Avoid Pure Colors**: Don't use pure black (`#000000`) or pure white (`#FFFFFF`) to protect eyes during long reading sessions
- **Softened Contrast**: Use high contrast softened by tone (e.g., `#333333` on `#FAF9F6` ≈ 10:1 ratio)
- **Clean UI**: Use spacing and hierarchy instead of heavy color blocks

## 🧾 Typography

| Element | Font Size | Line Height | Font Weight | Usage |
|---------|-----------|-------------|-------------|-------|
| H1 | 32px | 44px (140%) | Bold | Main pages/articles |
| H2 | 24px | 34px | Semi-Bold | Content headings |
| H3 | 20px | 30px | Semi-Bold | Section subheadings |
| Body | 16px–18px | 24px–27px (150%) | Regular | Main content |
| Caption | 14px | 20px | Regular | Small details |

### Typography Guidelines
- **Line Height**: 120–150% of font size for optimal readability
- **Font Family**: Inter, SF Pro, Work Sans, or Public Sans
- **Max Line Length**: 65–75 characters per line to prevent eye strain

## 🧱 Layout & Spacing

### Container Guidelines
- **Article Width**: 720px–800px for long-form content
- **Edge Padding**: 24px from container edges
- **Section Spacing**: 40px between sections
- **Heading-Body Gap**: 24px between headings and content

## 🧭 UI Components (Minimal Style)

### Buttons
- **Shape**: Rounded corners (8px border-radius)
- **Primary**: `#3B82F6` text on white background
- **Secondary**: Border style with `#E5E5E5`

### Inputs & Upload
- **Style**: Minimal borders or underlines
- **Upload**: Drag-and-drop with subtle hover effects

### Cards & Lists
- **Background**: White (`#FFFFFF`)
- **Shadow**: Soft shadow (`box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05)`)
- **Border Radius**: 8px

## 🔐 Accessibility & Usability

### Guidelines
- ❌ **Avoid**: Light gray text on white backgrounds
- ✅ **Include**: Hover and focus states for all interactive elements
- 📱 **Responsive**: Optimize for both mobile and desktop with appropriate padding and text scaling

## 🧩 Use Cases

### Perfect For
- Developer blogs
- UX case studies
- Technical articles
- Documentation
- Note-taking applications

### UI Mood
- **Calm**: Relaxed, focused reading experience
- **Clear Hierarchy**: Well-defined information structure
- **Minimal**: Clean, distraction-free interface

## 📁 Component Structure

This directory contains reusable UI components that follow the design system above:

- `BaseContentEntityPage.tsx` - Base page layout component
- `Breadcrumb.tsx` - Navigation breadcrumb component
- `ContentDetailModal.tsx` - Modal for content details
- `ContentList.tsx` - List component for displaying content
- `ImageUploadWithOptimization.tsx` - Image upload with optimization
- `Menu.tsx` - Navigation menu component
- `projects/` - Project-specific components
- `design-system/` - **Core design system components (see below)**

## 🎨 Design System Components

The `design-system/` folder contains styled components that implement the color palette and design principles above:

### 📦 Design Tokens (`tokens.ts`)
Centralized design tokens including:
- **Colors**: All color variables (offWhite, darkGray, accentBlue, etc.)
- **Typography**: Font sizes, line heights, font weights, font families
- **Spacing**: Consistent spacing scale (xs, sm, md, lg, xl, etc.)
- **Layout**: Container max-widths, breakpoints, sidebar dimensions
- **Effects**: Border radius, shadows, transitions
- **Accessibility**: Contrast ratios for WCAG compliance

### ✍️ Typography Components (`Typography.tsx`)
Ready-to-use text components:
```tsx
import { H1, H2, H3, Body, Caption, Link, ErrorText } from '@/components/design-system';

// Usage
<H1>Main Heading</H1>
<H2>Section Heading</H2>
<Body>Main content text with optimal readability</Body>
<Caption>Small descriptive text</Caption>
<Link href="/path">Accessible link</Link>
<ErrorText>Error message text</ErrorText>
```

### 🔘 Button Components (`Button.tsx`)
Consistent button styles with multiple variants:
```tsx
import { Button, IconButton } from '@/components/design-system';

// Variants: primary, secondary, text, danger
// Sizes: small, medium, large
<Button variant="primary" size="medium">Primary Action</Button>
<Button variant="secondary" size="small">Secondary Action</Button>
<Button variant="text">Text Button</Button>
<Button variant="danger" disabled>Danger Action</Button>
<IconButton variant="text" size="small">🔍</IconButton>
```

### 📝 Input Components (`Input.tsx`)
Form input components with consistent styling:
```tsx
import { Input, Textarea, Select, InputGroup } from '@/components/design-system';

// States: default, error, success, disabled
// Sizes: small, medium, large
<InputGroup>
  <Input placeholder="Enter text" state="default" />
  <Input placeholder="Error state" state="error" />
  <Textarea placeholder="Multi-line text" />
  <Select>
    <option>Choose option</option>
  </Select>
</InputGroup>
```

### 🃏 Card Components (`Card.tsx`)
Flexible card system for content organization:
```tsx
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from '@/components/design-system';

// Variants: default, elevated, outlined, filled
// Interactive cards with hover states
<Card variant="elevated" interactive>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
  <CardFooter>
    <Button variant="primary">Action</Button>
  </CardFooter>
</Card>
```

### 📐 Layout Components (`Layout.tsx`)
Responsive layout utilities:
```tsx
import { Container, Grid, Flex, Section, SidebarLayout } from '@/components/design-system';

// Responsive containers
<Container maxWidth="article">
  <Section spacing="large">
    <Grid columns={3} gap="medium" responsive>
      <div>Grid item 1</div>
      <div>Grid item 2</div>
      <div>Grid item 3</div>
    </Grid>
  </Section>
</Container>

// Flexible layouts
<Flex direction="row" justify="between" align="center" gap="medium">
  <div>Left content</div>
  <div>Right content</div>
</Flex>
```

### 🔄 Component Import
All components are exported from a single entry point:
```tsx
// Import everything from design system
import { 
  Button, 
  Input, 
  Card, 
  H1, 
  Container,
  colors,
  spacing 
} from '@/components/design-system';
```

## 🚀 Getting Started

When creating new components, ensure they follow the established design system:

1. Use the defined color palette
2. Follow typography guidelines
3. Implement proper spacing
4. Include accessibility features
5. Test on multiple devices

## 📝 Notes

This design system prioritizes readability and accessibility while maintaining a modern, minimal aesthetic suitable for content-heavy applications like note-taking systems.
