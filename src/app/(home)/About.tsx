"use client"

import Link from "next/link"

export default function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="section">
          <h2 className="label">About</h2>
          <p className="max-w-[620px]">
            I&apos;m an engineering leader with 15+ years of experience building products and scaling teams. I started
            writing code as a teenager and never really stopped. Right now I lead engineering at FieldPulse, building
            field service management software for trade contractors. I also run Weekend Labs, a product consultancy
            where I help startups go from idea to shipped product.
          </p>
          <Link href="/about" className="portfolio-item more-link">
            More about me
          </Link>
        </div>
      </div>
    </section>
  )
}
