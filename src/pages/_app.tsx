import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import FooterBar from 'js/components/FooterBar'
import PageFooter from 'js/components/PageFooter'
import content from 'content/home.json'

import '../globals.css'

const App = ({ Component, pageProps }: AppProps) => {
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
      <Component {...pageProps} />
      <PageFooter />
      <FooterBar />
    </>
  )
}

export default App
