"use client"

import "./globals.css"

import React from "react"
import Head from "next/head"
import { GoogleAnalytics } from "@next/third-parties/google"
import { Analytics } from "@vercel/analytics/react"

import { PageTransitionProvider } from "@/components/Animations"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Loading from "@/components/Loading"
import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
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
        <GoogleAnalytics gaId="G-7FQPVSFHG9" />
      </body>
    </html>
  )
}
