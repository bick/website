"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="footer my-20 text-base">
      <div className="container">
        <ul className="mb-4 grid grid-cols-2 gap-3 sm:flex sm:gap-0">
          <li className="sm:mr-8">
            <Link href="/" className="text-lg text-white">
              Index
            </Link>
          </li>
          <li className="sm:mr-8">
            <Link href="/projects" className="text-lg text-white">
              Projects
            </Link>
          </li>
          <li className="sm:mr-8">
            <Link href="/journal" className="text-lg text-white">
              Journal
            </Link>
          </li>
          <li className="sm:mr-8">
            <Link href="/about" className="text-lg text-white">
              About
            </Link>
          </li>
          <li className="sm:mr-8">
            <Link href="/reviews" className="text-lg text-white">
              Reviews
            </Link>
          </li>
          <li className="sm:mr-8">
            <Link href="/contact" className="text-lg text-white">
              Contact
            </Link>
          </li>
        </ul>
        <span className="block text-sm text-[#788491] sm:text-base">
          Copyright &copy; {new Date().getFullYear()} Owen Bick. All Rights Reserved. Made with ❤️ and ☕
        </span>
      </div>
    </footer>
  )
}
