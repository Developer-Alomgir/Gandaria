import '../styles/globals.css'
import { Analytics } from '@vercel/analytics/react'  // ✅ Vercel Analytics import

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />   {/* ✅ Analytics setup */}
    </>
  )
}// components/Footer.tsx
export default function Footer() {
  return (
    <footer
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        textAlign: 'center',
        padding: '0.75rem 0',
        backgroundColor: '#f0f0f0',
        borderTop: '1px solid #ddd',
        fontSize: '0.9rem',
        color: '#333',
        zIndex: 1000,
      }}
    >
      Build By AlomgiR HosseN
    </footer>
  )
}
