import '../styles/globals.css'
import { Analytics } from '@vercel/analytics/react'   // ✅ import

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />   {/* ✅ Analytics setup */}
    </>
  )
}
