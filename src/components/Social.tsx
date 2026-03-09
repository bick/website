"use client"

import Link from "next/link"

export default function Social() {
  const links = [
    { label: "GitHub", handle: "@bick", href: "https://github.com/bick" },
    { label: "X", handle: "@owenbick", href: "https://x.com/owenbick" },
    { label: "LinkedIn", handle: "@bick", href: "https://linkedin.com/in/bick" },
  ]

  return (
    <section className="mt-24 pb-8">
      <div className="container">
        <h2>👀 Follow me</h2>
        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-lg">
          {links.map((link) => (
            <div key={link.label}>
              <span className="opacity-50">{link.label}: </span>
              <Link href={link.href} target="_blank">
                {link.handle}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
