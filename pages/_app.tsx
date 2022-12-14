import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout/Layout'
import NextNProgress from 'nextjs-progressbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <NextNProgress color='#358DEB' />
      <Component {...pageProps} />
    </Layout>
    )
}

export default MyApp
