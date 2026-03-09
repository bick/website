"use client"

import Link from "next/link"

export default function News() {
  const articles = [
    {
      title: "Article Title Here",
      source: "Publication Name",
      url: "https://example.com/article",
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
