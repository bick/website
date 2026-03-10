import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

import Hero from "@/components/Hero"
import { posts } from "@/data/posts"

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
    title: `${post.title} – Owen Bick`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} – Owen Bick`,
      description: post.excerpt,
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
      <Hero title={post.title} subtitle={post.date} gradient="blue" />
      <article className="pb-20">
        <div className="container">
          {post.image && (
            <div className="relative mb-10 aspect-[2/1] w-full overflow-hidden rounded-xl">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
          <div className="prose">
            <Content />
          </div>
          <div className="mt-16 border-t border-white/10 pt-8">
            <Link
              href="/journal"
              className="portfolio-item text-orange-400 hover:text-orange-300 underline underline-offset-4 decoration-orange-400/30 hover:decoration-orange-300 transition-colors text-base font-medium"
            >
              &larr; Back to journal
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
