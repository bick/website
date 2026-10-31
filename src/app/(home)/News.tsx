"use client"

import Link from "next/link"

export default function News() {
  const articles = [
    {
      title: "The human coders hired to mop up AI slop",
      year: "2025",
      source: "KUOW · NPR",
      url: "https://www.kuow.org/stories/the-human-coders-hired-to-mop-up-ai-slop",
    },
  ]

  return (
    <section id="news">
      <div className="container">
        <div className="section">
          <h2 className="label">In the news</h2>
          {articles.map((article) => (
            <Link key={article.url} href={article.url} target="_blank" rel="nofollow" className="portfolio-item row">
              <span className="row-meta">{article.source}</span>
              <span>
                <span className="row-name font-normal italic">{article.title}</span>
                <span className="text-muted-foreground"> ({article.year})</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
