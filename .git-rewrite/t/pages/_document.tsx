import Document, { Head, Html, Main, NextScript } from "next/document"
import { ServerStyleSheet } from "styled-components"

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="th">
        <Head>
          {/* Preload critical fonts */}
          <link
            rel="preload"
            href="/static/fonts/db-heavent/DB-Heavent-Bd-Cond.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload" 
            href="/static/fonts/db-heavent/DB-Heavent-Cond.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/static/fonts/db-heavent/DB-Heavent-Med-Cond.ttf" 
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />

          {/* Preload critical CSS */}
          <link
            rel="preload"
            href="/_next/static/css/critical.css"
            as="style"
          />

          {/* Preconnect to critical domains */}
          <link
            rel="preconnect"
            href="https://admin.pattayavillaresort.com"
          />
          <link 
            rel="dns-prefetch" 
            href="https://admin.pattayavillaresort.com" 
          />

          {/* Preload critical images */}
          <link
            rel="preload"
            as="image"
            href="/static/images/logo/logo.png"
            type="image/png"
          />



          {/* Add module/nomodule scripts for better performance */}
          <script
            type="module"
            src="/_next/static/chunks/modern.js"
            defer
          />
          <script
            noModule
            src="/_next/static/chunks/legacy.js"
            defer
          />

          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
