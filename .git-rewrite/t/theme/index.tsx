import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"
import darkTheme from "./darkTheme"
import lightTheme from "./lightTheme"

export const GlobalStyle = createGlobalStyle`
  /* Normalize CSS for cross-browser consistency */
  ${normalize}

  /* Antd and component-specific overrides */
  .ant-picker-panels {
    @media screen and (max-width: 575px) {
      display: flex;
      flex-direction: column;
    }
  }

  /* Override for specific Antd components to align with design system */
  .ant-btn {
    font-family: var(--font-primary);
    border-radius: var(--border-radius-lg);
  }

  .ant-input {
    font-family: var(--font-primary);
    border-radius: var(--border-radius-lg);
    border-color: var(--color-light-gray);
  }

  .ant-input:focus,
  .ant-input-focused {
    border-color: var(--color-accent-blue);
    box-shadow: var(--shadow-focus);
  }

  /* Thai font override for specific elements */
  .font-thai,
  [lang="th"] {
    font-family: var(--font-thai);
  }

  /* Additional utility classes for compatibility */
  .container-responsive {
    max-width: calc(100% - 32px);
    margin: 0 auto;
    
    @media screen and (max-width: 575px) {
      max-width: calc(100% - 16px);
    }
  }
`

export { darkTheme, lightTheme }
