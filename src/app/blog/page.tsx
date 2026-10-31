import type { Metadata } from "next"

import JournalPage from "./Journal"

import { siteMetadata } from "@/lib/seo"

export const metadata: Metadata = siteMetadata.journal

export default function Page() {
  return <JournalPage />
}
