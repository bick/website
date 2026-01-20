"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="footer my-20 text-base">
      <div className="container">
        <ul className="mb-4 flex">
          <li className="mr-8">
            <Link href="/" className="text-lg text-white">
              Index
            </Link>
          </li>
          <li className="mr-8">
            <Link href="/resume" className="text-lg text-white">
              Resume
            </Link>
          </li>
          <li className="mr-8">
            <Link href="/reviews" className="text-lg text-white">
              Reviews
            </Link>
          </li>
          <li className="mr-8">
            <Link href="/contact" className="text-lg text-white">
              Contact
            </Link>
          </li>
        </ul>
        <span className="text-[#788491]">
          Copyright &copy; {new Date().getFullYear()} Owen Bick. All Rights Reserved. Made with ❤️ and ☕ in Austin.
        </span>
      </div>
    </footer>
  )
}
