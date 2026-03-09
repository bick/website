import type { Metadata } from "next"

import AboutPage from "./About"

import { siteMetadata } from "@/lib/seo"

export const metadata: Metadata = siteMetadata.about

export default function Page() {
  return <AboutPage />
}
