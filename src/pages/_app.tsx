import React, { useEffect } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../theme'
import '../css/app.css'
import Header from '../js/components/Header'
import FooterBar from '../js/components/FooterBar'
import PageFooter from '../js/components/PageFooter'

export default ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      // @ts-ignore
      window.dataLayer = window.dataLayer || []

      // @ts-ignore
      function gtag() {
        // @ts-ignore
        dataLayer.push(arguments)
      }
      // @ts-ignore
      gtag('js', new Date())

      // @ts-ignore
      gtag('config', 'UA-135544092-1')
    }
  }, [])

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.getElementById('jss-server-side')
    if (jssStyles) {
      ;(jssStyles.parentElement as HTMLElement).removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Nikolai Kiselev - full stack web developer</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-135544092-1"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
        <PageFooter />
        <FooterBar />
      </ThemeProvider>
    </>
  )
}
