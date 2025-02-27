import type { Metadata } from "next"

import Contact from "./Contact"

import { siteMetadata } from "@/lib/seo"

export const metadata: Metadata = siteMetadata.contact

export default function Page() {
  return <Contact />
}
