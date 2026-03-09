"use client"

import Link from "next/link"

import { posts } from "@/app/journal/Journal"

export default function Journal() {
  return (
    <section className="mt-24" id="journal">
      <div className="container">
        <h2>✍️ Journal</h2>
        <div className="mt-8 space-y-0 divide-y divide-[rgba(255,255,255,0.1)]">
          {posts.slice(0, 4).map((post, index) => (
            <Link
              key={index}
              href={post.slug}
              className="portfolio-item group flex items-baseline justify-between gap-4 py-4 no-underline transition-opacity first:pt-0 hover:opacity-70"
            >
              <div className="min-w-0">
                <h3 className="text-base font-semibold text-white">{post.title}</h3>
                <p className="mt-1 text-sm leading-relaxed opacity-50 hidden sm:block">
                  {post.excerpt}
                </p>
              </div>
              <time className="flex-shrink-0 text-sm opacity-40">{post.date}</time>
            </Link>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/journal" className="portfolio-item text-[var(--link)] no-underline text-base font-medium hover:opacity-75 transition-opacity">
            Read all posts &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
