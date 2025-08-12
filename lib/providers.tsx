'use client'

import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '@/theme'
import { ThemeConfig } from '@/theme/themeConfig'
import { StyledComponentsRegistry } from './styled-components-registry'

interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={ThemeConfig}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  )
}
