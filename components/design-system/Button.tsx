import styled, { css } from 'styled-components';
import { colors, spacing, borderRadius, shadows, transitions, typography } from './tokens';

// Button size variants
export type ButtonSize = 'small' | 'medium' | 'large';

// Button variant types
export type ButtonVariant = 'primary' | 'secondary' | 'text' | 'danger';

// Button props interface
export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

// Size styles
const sizeStyles = {
  small: css`
    padding: ${spacing.sm} ${spacing.md};
    font-size: ${typography.fontSize.caption};
    line-height: ${typography.lineHeight.caption};
  `,
  medium: css`
    padding: ${spacing.sm} ${spacing.lg};
    font-size: ${typography.fontSize.body};
    line-height: ${typography.lineHeight.body};
  `,
  large: css`
    padding: ${spacing.md} ${spacing.xl};
    font-size: ${typography.fontSize.bodyLarge};
    line-height: ${typography.lineHeight.bodyLarge};
  `,
};

// Variant styles
const variantStyles = {
  primary: css`
    background-color: ${colors.accentBlue};
    color: ${colors.ivoryWhite};
    border: 1px solid ${colors.accentBlue};

    &:hover:not(:disabled) {
      background-color: #2563EB;
      border-color: #2563EB;
    }

    &:active:not(:disabled) {
      background-color: #1D4ED8;
      border-color: #1D4ED8;
    }

    &:focus {
      box-shadow: ${shadows.focus};
    }
  `,
  
  secondary: css`
    background-color: ${colors.ivoryWhite};
    color: ${colors.darkGray};
    border: 1px solid ${colors.lightGray};

    &:hover:not(:disabled) {
      background-color: ${colors.offWhite};
      border-color: ${colors.accentBlue};
      color: ${colors.accentBlue};
    }

    &:active:not(:disabled) {
      background-color: #F3F4F6;
      border-color: #2563EB;
    }

    &:focus {
      box-shadow: ${shadows.focus};
    }
  `,
  
  text: css`
    background-color: transparent;
    color: ${colors.accentBlue};
    border: 1px solid transparent;
    padding: ${spacing.sm} ${spacing.md};

    &:hover:not(:disabled) {
      background-color: rgba(59, 130, 246, 0.1);
      color: #2563EB;
    }

    &:active:not(:disabled) {
      background-color: rgba(59, 130, 246, 0.2);
    }

    &:focus {
      box-shadow: ${shadows.focus};
    }
  `,
  
  danger: css`
    background-color: ${colors.softRed};
    color: ${colors.ivoryWhite};
    border: 1px solid ${colors.softRed};

    &:hover:not(:disabled) {
      background-color: #DC2626;
      border-color: #DC2626;
    }

    &:active:not(:disabled) {
      background-color: #B91C1C;
      border-color: #B91C1C;
    }

    &:focus {
      box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.5);
    }
  `,
};

// Base Button Component
export const Button = styled.button<ButtonProps>`
  /* Reset and base styles */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing.sm};
  
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.medium};
  text-decoration: none;
  text-align: center;
  white-space: nowrap;
  
  border-radius: ${borderRadius.lg};
  cursor: pointer;
  transition: all ${transitions.normal};
  
  /* Remove default button styles */
  outline: none;
  user-select: none;
  
  /* Size styles */
  ${({ size = 'medium' }) => sizeStyles[size]}
  
  /* Variant styles */
  ${({ variant = 'primary' }) => variantStyles[variant]}
  
  /* Full width */
  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `}
  
  /* Disabled state */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
  
  /* Loading state */
  ${({ loading }) => loading && css`
    position: relative;
    color: transparent;
    
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 16px;
      height: 16px;
      border: 2px solid currentColor;
      border-top: 2px solid transparent;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
      0% { transform: translate(-50%, -50%) rotate(0deg); }
      100% { transform: translate(-50%, -50%) rotate(360deg); }
    }
  `}
`;

// Icon Button Component
export const IconButton = styled(Button)`
  padding: ${spacing.sm};
  min-width: auto;
  
  ${({ size = 'medium' }) => {
    if (size === 'small') return css`padding: ${spacing.xs};`;
    if (size === 'large') return css`padding: ${spacing.md};`;
    return css`padding: ${spacing.sm};`;
  }}
`;

// Button Group Component
export const ButtonGroup = styled.div`
  display: inline-flex;
  
  ${Button} {
    border-radius: 0;
    
    &:first-child {
      border-top-left-radius: ${borderRadius.lg};
      border-bottom-left-radius: ${borderRadius.lg};
    }
    
    &:last-child {
      border-top-right-radius: ${borderRadius.lg};
      border-bottom-right-radius: ${borderRadius.lg};
    }
    
    &:not(:first-child) {
      border-left: none;
    }
    
    &:hover {
      z-index: 1;
      position: relative;
    }
  }
`;

// Link Button (styled as button but renders as link)
export const LinkButton = styled.a<ButtonProps>`
  /* Reset and base styles */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing.sm};
  
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.medium};
  text-decoration: none;
  text-align: center;
  white-space: nowrap;
  
  border-radius: ${borderRadius.lg};
  cursor: pointer;
  transition: all ${transitions.normal};
  
  /* Remove default link styles */
  outline: none;
  user-select: none;
  
  /* Size styles */
  ${({ size = 'medium' }) => sizeStyles[size]}
  
  /* Variant styles */
  ${({ variant = 'primary' }) => variantStyles[variant]}
  
  /* Full width */
  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `}
  
  /* Disabled state */
  ${({ disabled }) => disabled && css`
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  `}
`;

// Floating Action Button
export const FloatingActionButton = styled(Button)`
  position: fixed;
  bottom: ${spacing.lg};
  right: ${spacing.lg};
  width: 56px;
  height: 56px;
  border-radius: 50%;
  box-shadow: ${shadows.medium};
  z-index: 1000;
  
  &:hover {
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.15);
  }
`;

// Toggle Button
export const ToggleButton = styled(Button)<{ active?: boolean }>`
  ${({ active, variant = 'secondary' }) => active && css`
    ${variant === 'secondary' ? css`
      background-color: ${colors.accentBlue};
      color: ${colors.ivoryWhite};
      border-color: ${colors.accentBlue};
    ` : ''}
  `}
`; 