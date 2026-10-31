import type { Metadata } from "next"
import { IBM_Plex_Mono, Inter, Newsreader } from "next/font/google"
import type React from "react"

import "./globals.css"

import { GoogleAnalytics } from "@next/third-parties/google"
import { Analytics } from "@vercel/analytics/react"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-inter",
})

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
})

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://owenbick.com"),
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${newsreader.variable} ${plexMono.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preload" href="/fonts/SuisseIntl-Regular-WebM.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/SuisseIntl-Medium.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" storageKey="theme-preference" disableTransitionOnChange>
          <Header />
          <div className="flex min-h-screen flex-col">{children}</div>
          <Footer />
        </ThemeProvider>
        <Analytics />
        <GoogleAnalytics gaId="G-3X4LD4BT5X" />
      </body>
    </html>
  )
}
