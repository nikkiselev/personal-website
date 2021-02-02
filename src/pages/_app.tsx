import React, { useEffect } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { ThemeProvider, withStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from 'js/theme'
import FooterBar from 'js/components/FooterBar'
import PageFooter from 'js/components/PageFooter'
import content from 'content/home.json'

const GlobalCss = withStyles({
  '@global': {
    'html, body, #__next': {
      height: '100%',
      scrollBehavior: 'smooth!important',
    },
  },
})(() => null)

const App = ({ Component, pageProps }: AppProps) => {
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
        <title>{content.seo.title}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="description" content={content.seo.desc} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kiselev.dev/" />
        <meta property="og:title" content={content.seo.title} />
        <meta property="og:description" content={content.seo.desc} />
        <meta property="og:site_name" content={content.seo.title} />
        <meta property="og:locale" content="en_US" />

        <meta
          property="og:image"
          content="https://kiselev.dev/images/avatar.jpeg"
        />
        <meta property="og:image:width" content="460" />
        <meta property="og:image:height" content="460" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalCss />
        <Component {...pageProps} />
        <PageFooter />
        <FooterBar />
        {/* <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700&display=swap"
        /> */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300,400,500,700&display=swap"
          rel="stylesheet"
        />
      </ThemeProvider>
    </>
  )
}

export default App
