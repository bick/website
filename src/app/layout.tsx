import type { Metadata } from "next"
import type React from "react"

import "./globals.css"

import { GoogleAnalytics } from "@next/third-parties/google"
import { Analytics } from "@vercel/analytics/react"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/fonts/SuisseIntl-Regular-WebM.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/SuisseIntl-Medium.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" storageKey="theme-preference">
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
