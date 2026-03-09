"use client"

import Image from "next/image"
import Link from "next/link"

import Hero from "@/components/Hero"
import { Badge } from "@/components/ui/badge"

const posts = [
  {
    title: "Building Engineering Teams That Actually Ship",
    excerpt:
      "Lessons learned from scaling engineering orgs at startups — what works, what doesn't, and why culture eats process for breakfast.",
    date: "Mar 2026",
    badge: "Latest",
    badgeType: "default",
    image: "/static/smile-doctors.png",
    slug: "#",
  },
  {
    title: "The Case for Boring Technology",
    excerpt:
      "Why I keep reaching for proven tools over shiny new frameworks, and how it helps teams move faster in the long run.",
    date: "Feb 2026",
    badge: "",
    badgeType: "",
    image: "",
    slug: "#",
  },
]

export { posts }

export default function JournalPage() {
  const cardStyles =
    "flex flex-col portfolio-item bg-black border border-[rgba(255,255,255,0.2)] p-0 w-full rounded-xl no-underline box-border overflow-hidden hover:border-[#666] transition-colors duration-200"

  return (
    <>
      <Hero title="🤘 Journal" subtitle="Thoughts on engineering, leadership, and building things." gradient="blue" />
      <section className="pb-20">
        <div className="container">
          <div className="space-y-4">
            {posts.map((post, index) => (
              <Link key={index} className={cardStyles} href={post.slug}>
                <div className="flex flex-col md:flex-row">
                  {post.image && (
                    <div className="relative h-48 w-full flex-shrink-0 bg-[#111] md:h-auto md:w-64">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="flex flex-grow flex-col justify-between gap-4 p-5 md:p-6">
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-bold">{post.title}</h3>
                        {post.badge && (
                          <Badge
                            variant={post.badgeType as "default" | "secondary" | "destructive" | "outline" | undefined}
                          >
                            {post.badge}
                          </Badge>
                        )}
                      </div>
                      <p className="mt-2 text-base leading-relaxed opacity-60">
                        {post.excerpt}
                      </p>
                    </div>
                    <time className="text-sm opacity-40">{post.date}</time>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
