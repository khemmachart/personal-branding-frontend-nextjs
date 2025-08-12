// Theme configuration aligned with design system
export const ThemeConfig = {
  // Breakpoints aligned with design system
  screen: {
    mobile: '480px',      // --breakpoint-mobile
    tablet: '768px',      // --breakpoint-tablet
    desktop: '1024px',    // --breakpoint-desktop
    wide: '1200px',       // --breakpoint-wide
    desktop_xl: '1980px', // Legacy support
  },
  
  // Design system tokens for styled-components theme
  colors: {
    // Base Neutrals
    offWhite: '#FAF9F6',
    darkGray: '#333333',
    graphite: '#4A4A4A',
    
    // Accent & Functional
    accentBlue: '#3B82F6',
    softRed: '#EF4444',
    lightGray: '#E5E5E5',
    
    // Optional Utility
    mutedSage: '#EAE8E1',
    slateGray: '#3A3A3A',
  },
  
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '40px',
    xxxl: '48px',
  },
  
  typography: {
    fontFamily: {
      primary: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "SF Pro", "Work Sans", "Public Sans", sans-serif',
      thai: '"DB-Heavent", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
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
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
  },
  
  borderRadius: {
    sm: '4px',
    md: '6px',
    lg: '8px',
    xl: '12px',
  },
  
  shadows: {
    soft: '0px 1px 4px rgba(0, 0, 0, 0.05)',
    medium: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    focus: '0 0 0 2px rgba(59, 130, 246, 0.5)',
  },
}
