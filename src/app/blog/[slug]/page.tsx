import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { posts } from "@/data/posts"

import Hero from "@/components/Hero"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) return {}

  return {
    title: `${post.title} | Owen Bick`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Owen Bick`,
      description: post.excerpt,
      images: [{ url: "/static/owen2026.jpeg", width: 800, height: 800, alt: "Owen Bick" }],
    },
    twitter: {
      card: "summary",
      title: `${post.title} | Owen Bick`,
      description: post.excerpt,
      images: ["/static/owen2026.jpeg"],
    },
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) notFound()

  let Content: React.ComponentType
  try {
    const mod = await import(`@/content/journal/${slug}.mdx`)
    Content = mod.default
  } catch {
    notFound()
  }

  return (
    <>
      <Link href="/blog" className="portfolio-item label absolute left-6 top-9 z-[10000] hidden no-underline lg:block">
        &larr; Back to Blog
      </Link>
      <Hero title={post.title} subtitle={post.date} gradient="blue" splitText={false} />
      <article className="subtext-in pb-20" style={{ animationDelay: "0.3s" }}>
        <div className="container">
          <div className="prose">
            <Content />
          </div>
          <div className="mt-16 border-t pt-4">
            <Link href="/blog" className="portfolio-item more-link">
              &larr; Back to blog
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
