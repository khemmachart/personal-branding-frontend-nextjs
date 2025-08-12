// Design System Utilities
// Helper functions to bridge CSS custom properties with styled-components

/**
 * Get CSS custom property value
 * Useful for accessing design tokens in styled-components
 */
export const getCSSVar = (property: string): string => `var(${property})`;

/**
 * Design system CSS custom properties map
 * For easy access in styled-components
 */
export const cssVars = {
  // Colors
  color: {
    offWhite: getCSSVar('--color-off-white'),
    darkGray: getCSSVar('--color-dark-gray'),
    graphite: getCSSVar('--color-graphite'),
    accentBlue: getCSSVar('--color-accent-blue'),
    softRed: getCSSVar('--color-soft-red'),
    lightGray: getCSSVar('--color-light-gray'),
    mutedSage: getCSSVar('--color-muted-sage'),
    slateGray: getCSSVar('--color-slate-gray'),
    white: getCSSVar('--color-white'),
    black: getCSSVar('--color-black'),
  },

  // Typography
  font: {
    primary: getCSSVar('--font-primary'),
    thai: getCSSVar('--font-thai'),
    mono: getCSSVar('--font-mono'),
  },

  fontSize: {
    h1: getCSSVar('--font-size-h1'),
    h2: getCSSVar('--font-size-h2'),
    h3: getCSSVar('--font-size-h3'),
    body: getCSSVar('--font-size-body'),
    bodyLarge: getCSSVar('--font-size-body-large'),
    caption: getCSSVar('--font-size-caption'),
    small: getCSSVar('--font-size-small'),
  },

  lineHeight: {
    h1: getCSSVar('--line-height-h1'),
    h2: getCSSVar('--line-height-h2'),
    h3: getCSSVar('--line-height-h3'),
    body: getCSSVar('--line-height-body'),
    bodyLarge: getCSSVar('--line-height-body-large'),
    caption: getCSSVar('--line-height-caption'),
    small: getCSSVar('--line-height-small'),
  },

  fontWeight: {
    regular: getCSSVar('--font-weight-regular'),
    medium: getCSSVar('--font-weight-medium'),
    semiBold: getCSSVar('--font-weight-semi-bold'),
    bold: getCSSVar('--font-weight-bold'),
  },

  // Spacing
  spacing: {
    xs: getCSSVar('--spacing-xs'),
    sm: getCSSVar('--spacing-sm'),
    md: getCSSVar('--spacing-md'),
    lg: getCSSVar('--spacing-lg'),
    xl: getCSSVar('--spacing-xl'),
    xxl: getCSSVar('--spacing-xxl'),
    xxxl: getCSSVar('--spacing-xxxl'),
    sectionGap: getCSSVar('--spacing-section-gap'),
    headingBodyGap: getCSSVar('--spacing-heading-body-gap'),
    edgePadding: getCSSVar('--spacing-edge-padding'),
    containerPadding: getCSSVar('--spacing-container-padding'),
  },

  // Border Radius
  borderRadius: {
    sm: getCSSVar('--border-radius-sm'),
    md: getCSSVar('--border-radius-md'),
    lg: getCSSVar('--border-radius-lg'),
    xl: getCSSVar('--border-radius-xl'),
  },

  // Shadows
  shadow: {
    soft: getCSSVar('--shadow-soft'),
    medium: getCSSVar('--shadow-medium'),
    focus: getCSSVar('--shadow-focus'),
  },

  // Layout
  maxWidth: {
    article: getCSSVar('--max-width-article'),
    container: getCSSVar('--max-width-container'),
    content: getCSSVar('--max-width-content'),
  },

  // Transitions
  transition: {
    fast: getCSSVar('--transition-fast'),
    normal: getCSSVar('--transition-normal'),
    slow: getCSSVar('--transition-slow'),
  },
};

/**
 * Media query helpers using design system breakpoints
 */
export const media = {
  mobile: (styles: string) => `
    @media (max-width: var(--breakpoint-mobile)) {
      ${styles}
    }
  `,
  tablet: (styles: string) => `
    @media (max-width: var(--breakpoint-tablet)) {
      ${styles}
    }
  `,
  desktop: (styles: string) => `
    @media (min-width: var(--breakpoint-desktop)) {
      ${styles}
    }
  `,
  wide: (styles: string) => `
    @media (min-width: var(--breakpoint-wide)) {
      ${styles}
    }
  `,
};

/**
 * Helper function to create consistent focus styles
 */
export const focusStyles = `
  outline: 2px solid ${cssVars.color.accentBlue};
  outline-offset: 2px;
  border-radius: ${cssVars.borderRadius.sm};
`;

/**
 * Helper function for consistent hover transitions
 */
export const hoverTransition = `
  transition: all ${cssVars.transition.normal};
`;

/**
 * Typography mixins for consistent text styling
 */
export const typographyMixins = {
  h1: `
    font-size: ${cssVars.fontSize.h1};
    line-height: ${cssVars.lineHeight.h1};
    font-weight: ${cssVars.fontWeight.bold};
    color: ${cssVars.color.darkGray};
  `,
  h2: `
    font-size: ${cssVars.fontSize.h2};
    line-height: ${cssVars.lineHeight.h2};
    font-weight: ${cssVars.fontWeight.semiBold};
    color: ${cssVars.color.darkGray};
  `,
  h3: `
    font-size: ${cssVars.fontSize.h3};
    line-height: ${cssVars.lineHeight.h3};
    font-weight: ${cssVars.fontWeight.semiBold};
    color: ${cssVars.color.darkGray};
  `,
  body: `
    font-size: ${cssVars.fontSize.body};
    line-height: ${cssVars.lineHeight.body};
    font-weight: ${cssVars.fontWeight.regular};
    color: ${cssVars.color.darkGray};
  `,
  caption: `
    font-size: ${cssVars.fontSize.caption};
    line-height: ${cssVars.lineHeight.caption};
    font-weight: ${cssVars.fontWeight.regular};
    color: ${cssVars.color.graphite};
  `,
};

/**
 * Export everything for easy access
 */
const utils = {
  cssVars,
  media,
  focusStyles,
  hoverTransition,
  typographyMixins,
  getCSSVar,
};

export default utils; 