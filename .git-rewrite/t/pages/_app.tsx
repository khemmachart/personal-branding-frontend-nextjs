import type { AppProps } from "next/app"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "theme"
import { SWRConfig } from "swr"
import { appWithTranslation } from "next-i18next"

import { Menu } from "../components/Menu"
import styled from "styled-components"
import "styles/globals.css"
import "css/font.css"
import "antd/dist/antd.css"
import "react-loading-skeleton/dist/skeleton.css"
import { ThemeConfig } from "theme/themeConfig"

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={ThemeConfig}>
      <GlobalStyle />
      <PageContainer>
        <Menu />
        <MainContent>
          <SWRConfig value={{ provider: () => new Map() }}>
            <Component {...pageProps} />
          </SWRConfig>
        </MainContent>
      </PageContainer>
    </ThemeProvider>
  )
}

export default appWithTranslation(MyApp)
