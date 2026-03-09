"use client"

import Link from "next/link"

export default function About() {
  return (
    <section className="about mt-24">
      <div className="container">
        <h2>😺 About Me</h2>
        <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed opacity-80">
          <p>
            I&apos;m Owen, a Software Engineering Leader with 12+ years of experience building
            and scaling high-performing engineering teams.
          </p>
          <p>
            I started my career as a developer, working hands-on with everything from WordPress
            to modern React and TypeScript stacks. That technical foundation shapes how I lead
            today&mdash;I understand the challenges engineers face and can speak their language
            while driving strategic outcomes.
          </p>
          <p>
            As a leader, I focus on building engineering cultures where teams ship quality
            software with velocity. I believe great engineering leadership means removing
            blockers, setting clear direction, and creating environments where talented people
            do their best work.
          </p>
          <p>
            Currently, I partner with Series C+ startups to build and scale their engineering
            organizations&mdash;hiring senior talent, establishing technical strategy, and
            ensuring teams deliver on ambitious roadmaps.
          </p>
        </div>
        <div className="mt-6">
          <Link href="/about" className="portfolio-item text-[var(--link)] no-underline text-base font-medium hover:opacity-75 transition-opacity">
            Read more &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
