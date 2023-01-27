import { Analytics } from '@vercel/analytics/react';
import '../styles/style.scss'

export function Bick({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default Bick
