import styled, { css } from 'styled-components';
import { colors, spacing, borderRadius, shadows, transitions, typography } from './tokens';

// Input size variants
export type InputSize = 'small' | 'medium' | 'large';

// Input state variants
export type InputState = 'default' | 'error' | 'success' | 'disabled';

// Input props interface
export interface InputProps {
  size?: InputSize;
  state?: InputState;
  fullWidth?: boolean;
  hasIcon?: boolean;
}

// Size styles
const sizeStyles = {
  small: css`
    padding: ${spacing.sm} ${spacing.md};
    font-size: ${typography.fontSize.caption};
    line-height: ${typography.lineHeight.caption};
  `,
  medium: css`
    padding: ${spacing.sm} ${spacing.md};
    font-size: ${typography.fontSize.body};
    line-height: ${typography.lineHeight.body};
  `,
  large: css`
    padding: ${spacing.md} ${spacing.lg};
    font-size: ${typography.fontSize.bodyLarge};
    line-height: ${typography.lineHeight.bodyLarge};
  `,
};

// State styles
const stateStyles = {
  default: css`
    border-color: ${colors.lightGray};
    
    &:focus {
      outline: none;
      border-color: ${colors.accentBlue};
      box-shadow: ${shadows.focus};
    }
    
    &:hover:not(:focus) {
      border-color: ${colors.graphite};
    }
  `,
  
  error: css`
    border-color: ${colors.softRed};
    
    &:focus {
      outline: none;
      border-color: ${colors.softRed};
      box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.2);
    }
  `,
  
  success: css`
    border-color: #10B981;
    
    &:focus {
      outline: none;
      border-color: #10B981;
      box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.2);
    }
  `,
  
  disabled: css`
    background-color: ${colors.mutedSage};
    border-color: ${colors.lightGray};
    color: ${colors.graphite};
    cursor: not-allowed;
    
    &::placeholder {
      color: ${colors.graphite};
    }
  `,
};

// Base Input Component
export const Input = styled.input<InputProps>`
  /* Reset and base styles */
  width: 100%;
  border: 1px solid;
  border-radius: ${borderRadius.lg};
  background-color: ${colors.ivoryWhite};
  color: ${colors.darkGray};
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.regular};
  transition: all ${transitions.normal};
  
  /* Size styles */
  ${({ size = 'medium' }) => sizeStyles[size]}
  
  /* State styles */
  ${({ state = 'default' }) => stateStyles[state]}
  
  /* Full width */
  ${({ fullWidth = true }) => fullWidth && css`
    width: 100%;
  `}
  
  /* Icon padding adjustment */
  ${({ hasIcon }) => hasIcon && css`
    padding-left: ${spacing.xxxl};
  `}
  
  /* Placeholder styles */
  &::placeholder {
    color: ${colors.graphite};
    opacity: 1;
  }
  
  /* Disabled state */
  &:disabled {
    ${stateStyles.disabled}
  }
`;

// Textarea Component
export const Textarea = styled.textarea<InputProps>`
  /* Reset and base styles */
  width: 100%;
  border: 1px solid;
  border-radius: ${borderRadius.lg};
  background-color: ${colors.ivoryWhite};
  color: ${colors.darkGray};
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.regular};
  transition: all ${transitions.normal};
  resize: vertical;
  min-height: 100px;
  
  /* Size styles */
  ${({ size = 'medium' }) => sizeStyles[size]}
  
  /* State styles */
  ${({ state = 'default' }) => stateStyles[state]}
  
  /* Full width */
  ${({ fullWidth = true }) => fullWidth && css`
    width: 100%;
  `}
  
  /* Placeholder styles */
  &::placeholder {
    color: ${colors.graphite};
    opacity: 1;
  }
  
  /* Disabled state */
  &:disabled {
    ${stateStyles.disabled}
  }
`;

// Select Component
export const Select = styled.select<InputProps>`
  /* Reset and base styles */
  width: 100%;
  border: 1px solid;
  border-radius: ${borderRadius.lg};
  background-color: ${colors.ivoryWhite};
  color: ${colors.darkGray};
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.regular};
  transition: all ${transitions.normal};
  cursor: pointer;
  
  /* Size styles */
  ${({ size = 'medium' }) => sizeStyles[size]}
  
  /* State styles */
  ${({ state = 'default' }) => stateStyles[state]}
  
  /* Full width */
  ${({ fullWidth = true }) => fullWidth && css`
    width: 100%;
  `}
  
  /* Disabled state */
  &:disabled {
    ${stateStyles.disabled}
    cursor: not-allowed;
  }
`;

// Input Group Container
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.sm};
  width: 100%;
`;

// Input Label Component
export const InputLabel = styled.label<{ required?: boolean }>`
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.fontSize.caption};
  line-height: ${typography.lineHeight.caption};
  font-weight: ${typography.fontWeight.medium};
  color: ${colors.darkGray};
  
  ${({ required }) => required && css`
    &::after {
      content: ' *';
      color: ${colors.softRed};
    }
  `}
`;

// Helper Text Component
export const HelperText = styled.span<{ state?: InputState }>`
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.fontSize.caption};
  line-height: ${typography.lineHeight.caption};
  font-weight: ${typography.fontWeight.regular};
  
  ${({ state = 'default' }) => {
    switch (state) {
      case 'error':
        return css`color: ${colors.softRed};`;
      case 'success':
        return css`color: #10B981;`;
      default:
        return css`color: ${colors.graphite};`;
    }
  }}
`;

// Input with Icon Container
export const InputWithIcon = styled.div`
  position: relative;
  width: 100%;
`;

// Icon Container for Input
export const InputIcon = styled.div<{ position?: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: ${colors.graphite};
  pointer-events: none;
  z-index: 1;
  
  ${({ position = 'left' }) => position === 'left' ? css`
    left: ${spacing.md};
  ` : css`
    right: ${spacing.md};
  `}
`;

// Search Input Component
export const SearchInput = styled(Input)`
  padding-left: ${spacing.xxxl};
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M9 9l10.5-10.5M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'/%3e%3c/svg%3e");
  background-position: left ${spacing.md} center;
  background-repeat: no-repeat;
  background-size: 16px 16px;
`;

// File Input Component
export const FileInput = styled.input.attrs({ type: 'file' })`
  display: none;
`;

// File Upload Area
export const FileUploadArea = styled.div<{ isDragOver?: boolean; hasError?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${spacing.xxxl} ${spacing.lg};
  border: 2px dashed;
  border-radius: ${borderRadius.lg};
  background-color: ${colors.ivoryWhite};
  cursor: pointer;
  transition: all ${transitions.normal};
  text-align: center;
  
  ${({ isDragOver, hasError }) => {
    if (hasError) {
      return css`
        border-color: ${colors.softRed};
        background-color: rgba(239, 68, 68, 0.05);
      `;
    }
    if (isDragOver) {
      return css`
        border-color: ${colors.accentBlue};
        background-color: rgba(59, 130, 246, 0.05);
      `;
    }
    return css`
      border-color: ${colors.lightGray};
      
      &:hover {
        border-color: ${colors.accentBlue};
        background-color: rgba(59, 130, 246, 0.02);
      }
    `;
  }}
`;

// File Upload Text
export const FileUploadText = styled.p`
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.fontSize.body};
  line-height: ${typography.lineHeight.body};
  color: ${colors.graphite};
  margin: ${spacing.sm} 0 0 0;
`;

// Checkbox Component
export const Checkbox = styled.input.attrs({ type: 'checkbox' })<{ size?: InputSize }>`
  width: ${({ size = 'medium' }) => size === 'small' ? '16px' : size === 'large' ? '24px' : '20px'};
  height: ${({ size = 'medium' }) => size === 'small' ? '16px' : size === 'large' ? '24px' : '20px'};
  accent-color: ${colors.accentBlue};
  cursor: pointer;
  
  &:focus {
    outline: 2px solid ${colors.accentBlue};
    outline-offset: 2px;
  }
  
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

// Radio Component
export const Radio = styled.input.attrs({ type: 'radio' })<{ size?: InputSize }>`
  width: ${({ size = 'medium' }) => size === 'small' ? '16px' : size === 'large' ? '24px' : '20px'};
  height: ${({ size = 'medium' }) => size === 'small' ? '16px' : size === 'large' ? '24px' : '20px'};
  accent-color: ${colors.accentBlue};
  cursor: pointer;
  
  &:focus {
    outline: 2px solid ${colors.accentBlue};
    outline-offset: 2px;
  }
  
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

// Form Group for Radio/Checkbox
export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.sm};
`;

// Form Item for individual Radio/Checkbox
export const FormItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
`;

// Form Item Label
export const FormItemLabel = styled.label`
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.fontSize.body};
  line-height: ${typography.lineHeight.body};
  font-weight: ${typography.fontWeight.regular};
  color: ${colors.darkGray};
  cursor: pointer;
`; 