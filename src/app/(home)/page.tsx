import type { Metadata } from "next"

import Home from "./Home"

import { siteMetadata } from "@/lib/seo"

export const metadata: Metadata = siteMetadata.home

export default function Page() {
  return <Home />
}
