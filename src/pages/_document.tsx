import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" prefix="og: http://ogp.me/ns#">
        <Head></Head>
        <body className="py-10 mx-auto prose container dark:bg-light-gray">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
