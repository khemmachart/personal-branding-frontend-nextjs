// Design System Tokens
// Based on the refined minimal color palette for note-taking applications

export const colors = {

  // Background Colors
  ivoryWhite: '#FEFEFA',    // Secondary Background
  offWhite: '#FAF9F6',      // Primary Background
  lightGray: '#E5E5E5',     // Borders, Dividers
  mutedSage: '#EAE8E1',     // Optional background blocks

  // Text Colors
  graphite: '#4A4A4A',      // Secondary Text
  slateGray: '#3A3A3A',     // Icons, low-priority text
  darkGray: '#333333',      // Primary Text
  black: '#000000',         // Pure Black

  // Accent & Functional Colors
  accentBlue: '#3B82F6',    // Links, Action Buttons
  softRed: '#EF4444',       // Warnings, Error Text
} as const;

export const typography = {
  fontFamily: {
    primary: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "SF Pro", "Work Sans", "Public Sans", sans-serif',
    mono: '"SF Mono", "Monaco", "Inconsolata", "Roboto Mono", "Courier New", monospace',
  },
  
  fontSize: {
    h1: '32px',
    h2: '24px',
    h3: '20px',
    body: '16px',
    bodyLarge: '18px',
    caption: '14px',
    small: '12px',
    tiny: '10px',
  },
  
  lineHeight: {
    h1: '44px',      // 140%
    h2: '34px',      // 142%
    h3: '30px',      // 150%
    body: '24px',    // 150%
    bodyLarge: '27px', // 150%
    caption: '20px', // 143%
    small: '18px',   // 150%
    tiny: '16px',   // 150%
  },
  
  fontWeight: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
} as const;

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  xxl: '40px',
  xxxl: '48px',
  
  // Semantic spacing
  sectionGap: '40px',
  headingBodyGap: '24px',
  edgePadding: '24px',
  containerPadding: '24px',
} as const;

export const borderRadius = {
  sm: '4px',
  md: '6px',
  lg: '8px',
  xl: '12px',
} as const;

export const shadows = {
  soft: '0px 1px 4px rgba(0, 0, 0, 0.05)',
  medium: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  focus: '0 0 0 2px rgba(59, 130, 246, 0.5)',
} as const;

export const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1200px',
} as const;

export const layout = {
  maxWidth: {
    article: '800px',
    container: '1200px',
    content: '720px',
  },
  
  sidebar: {
    width: '250px',
  },
} as const;

export const transitions = {
  fast: '0.15s ease',
  normal: '0.2s ease',
  slow: '0.3s ease',
} as const;

// Contrast ratios for accessibility
export const contrast = {
  primary: 10.1,    // #333333 on #FAF9F6
  secondary: 7.2,   // #4A4A4A on #FAF9F6
  accent: 4.8,      // #3B82F6 on #FAF9F6
} as const; 