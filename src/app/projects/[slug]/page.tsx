import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { projects } from "@/data/projects"

import CaseStudy from "./CaseStudy"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}

  return {
    title: `${project.title} – Owen Bick`,
    description: project.summary,
    openGraph: {
      title: `${project.title} – Owen Bick`,
      description: project.summary,
    },
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  return <CaseStudy project={project} />
}
