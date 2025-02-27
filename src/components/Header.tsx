"use client"

import React, { useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import VanillaTilt from "vanilla-tilt"

interface VanillaTiltElement extends HTMLElement {
  vanillaTilt?: {
    destroy: () => void
  }
}

export default function Header() {
  const pathname = usePathname()
  const tiltRef = useRef(null)

  const menuItems = [
    { href: "/#projects", label: "Projects" },
    { href: "/resume", label: "Resume" },
    { href: "/reviews", label: "Reviews" },
  ]

  const socialLinks = [
    { href: "https://github.com/bick", icon: FaGithub, label: "GitHub" },
    {
      href: "https://linkedin.com/in/bick",
      icon: FaLinkedin,
      label: "LinkedIn",
    },
  ]

  const linkClasses =
    "flex text-[#9797a0] font-medium text-base md:text-[15px] mx-2 md:mx-3 h-12 leading-[3rem] transition-all duration-150 ease mix-blend-exclusion hover:text-white hover:no-underline hover:opacity-100 hover:[text-shadow:rgba(255,255,255,0.85)_0_0_32px]"
  const activeLinkClasses = "text-white opacity-100"

  useEffect(() => {
    const tiltElement = tiltRef.current as unknown as HTMLElement

    VanillaTilt.init(tiltElement, {
      max: 5,
      speed: 400,
      glare: true,
      "max-glare": 0.05,
    })

    return () => {
      if (tiltElement) {
        ;(tiltElement as VanillaTiltElement).vanillaTilt?.destroy()
      }
    }
  }, [])

  return (
    <header className="header fixed top-0 z-[9999] flex w-full items-center px-2 py-4">
      <ul
        className="mx-auto flex w-full items-center justify-center rounded-[10px] border border-[rgba(255,255,255,0.2)] bg-[rgba(0,0,0,0.38)] px-4 py-0.5 backdrop-blur-md transition-shadow duration-200 ease-in-out md:max-w-fit"
        ref={tiltRef}
      >
        {/* Logo */}
        <li>
          <Link
            href="/"
            className={`${linkClasses} !ml-0 items-center !text-3xl before:content-['🗿'] hover:before:content-['🏠'] ${pathname === "/" ? activeLinkClasses : ""}`}
          ></Link>
        </li>

        {/* Menu Items */}
        {menuItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`${linkClasses} ${pathname === item.href || (item.href.startsWith("/#") && pathname === "/") ? activeLinkClasses : ""}`}
            >
              {item.label}
            </Link>
          </li>
        ))}

        {/* Social Links */}
        {socialLinks.map((social) => (
          <li key={social.href}>
            <Link
              href={social.href}
              target="_blank"
              rel="nofollow"
              aria-label={social.label}
              className={`${linkClasses} hidden !text-lg md:block`}
            >
              <social.icon className="m-auto flex h-full" />
            </Link>
          </li>
        ))}

        {/* Contact Button */}
        <li>
          <Link
            href="/contact"
            className="ease my-0 ml-2 flex items-center rounded-[10px] border-b-0 border-none bg-white/10 px-[14px] py-[7px] text-[15px] font-medium leading-5 text-white shadow-[inset_0_0_20px_rgba(255,255,255,0.15),inset_0_1px_1px_rgba(255,255,255,0.15)] transition-all duration-200 hover:shadow-none"
          >
            <span className="hidden md:block">🤩&nbsp;&nbsp;Start A Project</span>
            <span className="md:hidden">Contact</span>
          </Link>
        </li>
      </ul>
    </header>
  )
}
