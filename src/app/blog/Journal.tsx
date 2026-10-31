"use client"

import Link from "next/link"
import { posts } from "@/data/posts"

import Hero from "@/components/Hero"
import { shortDate } from "@/lib/utils"

export { posts }

export default function JournalPage() {
  return (
    <>
      <Hero title="Blog" subtitle="Thoughts on engineering, leadership, and building things." gradient="blue" />
      <section className="subtext-in pb-20" style={{ animationDelay: "0.3s" }}>
        <div className="container">
          <div className="flex flex-col border-t">
            {posts.map((post) => (
              <Link key={post.slug} className="portfolio-item row" href={`/blog/${post.slug}`}>
                <time className="row-meta">{shortDate(post.date)}</time>
                <span>
                  <span className="row-title block">{post.title}</span>
                  <span className="mt-1 block text-muted-foreground">{post.excerpt}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
