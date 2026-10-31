"use client"

import Link from "next/link"

const links = [
  { href: "mailto:owenbick@gmail.com", label: "Email" },
  { href: "https://github.com/bick", label: "GitHub" },
  { href: "https://linkedin.com/in/bick", label: "LinkedIn" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
  { href: "/rss.xml", label: "RSS" },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="flex flex-wrap justify-between gap-4 border-t pb-12 pt-8 font-mono text-xs tracking-[0.02em] text-muted-foreground">
          <span>&copy; {new Date().getFullYear()} Owen Bick</span>
          <span className="flex flex-wrap gap-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="underline decoration-border underline-offset-4 transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </span>
        </div>
      </div>
    </footer>
  )
}
