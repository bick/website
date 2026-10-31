import type { Metadata } from "next"

import Speaking from "./Speaking"

import { siteMetadata } from "@/lib/seo"

export const metadata: Metadata = siteMetadata.speaking

export default function Page() {
  return <Speaking />
}
