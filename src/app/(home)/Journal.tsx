"use client"

import Link from "next/link"
import { posts } from "@/data/posts"

import { shortDate } from "@/lib/utils"

export default function Journal() {
  return (
    <section id="blog">
      <div className="container">
        <div className="section">
          <h2 className="label">Writing</h2>
          <div className="flex flex-col">
            {posts.slice(0, 4).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="portfolio-item row">
                <time className="row-meta">{shortDate(post.date)}</time>
                <span className="row-title">{post.title}</span>
              </Link>
            ))}
          </div>
          <Link href="/blog" className="portfolio-item more-link">
            All writing
          </Link>
        </div>
      </div>
    </section>
  )
}
