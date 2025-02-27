import type { Metadata } from "next"

import ReviewsPage from "./Reviews"

import { siteMetadata } from "@/lib/seo"

export const metadata: Metadata = siteMetadata.reviews

export default function Page() {
  return <ReviewsPage />
}
