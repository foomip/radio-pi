import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

import MenuMobileComponent from '../components/MenuMobileComponent'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta charset='utf-8' />
          <meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0' />
          <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.10/semantic.min.css' />
          <link rel='stylesheet' href='/static/app.css' />
        </Head>
        <body>
          <MenuMobileComponent />

          <Main />

          <NextScript />
        </body>
      </html>
    )
  }
}
