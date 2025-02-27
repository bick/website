import "./globals.css"

import { GoogleAnalytics } from "@next/third-parties/google"
import { Analytics } from "@vercel/analytics/react"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" storageKey="theme-preference">
          <Header />
          <main className="flex min-h-screen flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
        <GoogleAnalytics gaId="G-7FQPVSFHG9" />
      </body>
    </html>
  )
}
