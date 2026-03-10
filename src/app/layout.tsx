import type { Metadata } from "next"
import type React from "react"

import "./globals.css"

import { GoogleAnalytics } from "@next/third-parties/google"
import { Analytics } from "@vercel/analytics/react"

import { PageTransitionProvider } from "@/components/Animations"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Loading from "@/components/Loading"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" storageKey="theme-preference">
          <Header />
          <Loading />
          <PageTransitionProvider>
            <div className="flex min-h-screen flex-col">{children}</div>
          </PageTransitionProvider>
          <Footer />
        </ThemeProvider>
        <Analytics />
        <GoogleAnalytics gaId="G-3X4LD4BT5X" />
      </body>
    </html>
  )
}
