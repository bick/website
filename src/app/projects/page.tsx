import type { Metadata } from "next"

import ProjectsPage from "./Projects"

import { siteMetadata } from "@/lib/seo"

export const metadata: Metadata = siteMetadata.projects

export default function Page() {
  return <ProjectsPage />
}
