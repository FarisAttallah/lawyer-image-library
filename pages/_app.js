import Head from 'next/head'
import '../styles/globals.css'
import { LanguageProvider } from '../contexts/LanguageContext'
import BrandingLoader from '../components/BrandingLoader'

export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta charSet="utf-8" />
          <link rel="shortcut icon" href="/images/favicon.png" />

        <title>Hussein Ahmed Al Mohammed Law Firm</title>
      </Head>
      <BrandingLoader />
      <Component {...pageProps} />
    </LanguageProvider>
  )
}
