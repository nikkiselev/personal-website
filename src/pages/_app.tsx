import React, { useEffect } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { ThemeProvider, withStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../theme'
import Header from '../js/components/Header'
import FooterBar from '../js/components/FooterBar'
import PageFooter from '../js/components/PageFooter'
import Particles from '../js/components/Particles'
import { initGA, logPageView } from '../analytics'
import { Router } from 'next/dist/client/router'

const GlobalCss = withStyles({
  '@global': {
    'html, body, #__next': {
      height: '100%',
      scrollBehavior: 'smooth!important',
    },
  },
})(() => null)

export default ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    initGA()
    logPageView()

    Router.events.on('routeChangeComplete', logPageView)

    return () => {
      Router.events.off('routeChangeComplete', logPageView)
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
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <GlobalCss />
        <Particles />
        <Header />
        <Component {...pageProps} />
        <PageFooter />
        <FooterBar />
      </ThemeProvider>
    </>
  )
}
