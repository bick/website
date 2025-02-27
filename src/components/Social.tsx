"use client"

import Link from "next/link"

export default function Social() {
  return (
    <section className="mt-20 text-lg leading-8">
      <div className="container">
        <h2>👀 Follow me</h2>
        <span className="mr-2 mt-4 inline-block">GitHub: </span>
        <Link href="https://github.com/bick" target="_blank">
          @bick
        </Link>
        <br />
        <span className="mr-2 inline-block">X: </span>
        <Link href="https://x.com/owenbick" target="_blank">
          @owenbick
        </Link>
        <br />
        <span className="mr-2 inline-block">LinkedIn: </span>
        <Link href="https://linkedin.com/in/bick" target="_blank">
          @bick
        </Link>
      </div>
    </section>
  )
}
