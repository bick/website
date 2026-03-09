"use client";

import Link from "next/link";





export default function News() {
  const articles = [
    {
      title: "The human coders hired to mop up AI slop (2025)",
      source: "KUOW Seattle - NPR Network",
      url: "https://www.kuow.org/stories/the-human-coders-hired-to-mop-up-ai-slop",
    },
  ]

  return (
    <section className="mt-24" id="news">
      <div className="container">
        <h2>📰 In the News</h2>
        <ul className="mt-6 space-y-3 pl-6 list-disc">
          {articles.map((article, index) => (
            <li key={index} className="text-lg">
              <Link
                href={article.url}
                target="_blank"
                rel="nofollow"
                className="portfolio-item text-white no-underline hover:opacity-75 transition-opacity"
              >
                {article.title}
              </Link>
              <span className="ml-2 opacity-40">— {article.source}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
