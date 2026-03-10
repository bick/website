"use client"

import Link from "next/link"

export default function About() {
  return (
    <section className="about mt-24">
      <div className="container">
        <h2>😺 About Me</h2>
        <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed opacity-80">
          <p>
            I&apos;m Owen, an engineering leader with 12+ years of experience building products and scaling teams. I
            started writing code as a teenager and never really stopped.
          </p>
          <p>
            I&apos;ve worked across the full stack, from early-stage MVPs at MIT and Harvard-affiliated startups to
            leading teams at companies processing hundreds of millions in annual transactions. That hands-on technical
            background is what makes me effective as a leader. I know what good engineering looks like because I&apos;ve
            done it.
          </p>
          <p>
            Right now I lead engineering at Smile Doctors, where my team builds the booking, payments, and mobile
            systems behind a $1B+ healthcare platform serving 600+ locations. I also run Weekend Labs, a product
            consultancy where I help startups go from idea to shipped product.
          </p>
        </div>
        <div className="mt-6">
          <Link
            href="/about"
            className="portfolio-item text-base font-medium text-orange-400 underline decoration-orange-400/30 underline-offset-4 transition-colors hover:text-orange-300 hover:decoration-orange-300"
          >
            Read more &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
