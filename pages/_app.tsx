import '../styles/globals.css'
import { Analytics } from '@vercel/analytics/react'
import Footer from '../components/Footer'
import type { AppProps } from 'next/app'   // ✅ Import AppProps

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />       {/* Sticky footer */}
      <Analytics />
    </>
  )
}
