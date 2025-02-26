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
    VanillaTilt.init(tiltRef.current as unknown as HTMLElement, {
      max: 5,
      speed: 400,
      glare: true,
      "max-glare": 0.05,
    })

    return () => {
      if (tiltRef.current) {
        // Using proper type assertion to avoid TypeScript error
        ;(tiltRef.current as VanillaTiltElement).vanillaTilt?.destroy()
      }
    }
  }, [])

  return (
    <header className="header flex fixed items-center top-0 w-full px-2 py-4 z-[9999]">
      <ul
        className="flex justify-center bg-[rgba(0,0,0,0.38)] backdrop-blur-md w-full md:max-w-fit transition-shadow duration-200 ease-in-out mx-auto items-center py-0.5 px-4 rounded-[10px] border border-[rgba(255,255,255,0.2)]"
        ref={tiltRef}
      >
        {/* Logo */}
        <li>
          <Link
            href="/"
            className={`${linkClasses} !text-3xl items-center !ml-0 before:content-['🗿'] hover:before:content-['🏠'] ${pathname === "/" ? activeLinkClasses : ""}`}
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
              className={`${linkClasses} hidden md:block text-lg`}
            >
              <social.icon className="flex m-auto h-full" />
            </Link>
          </li>
        ))}

        {/* Contact Button */}
        <li>
          <Link
            href="/contact"
            className="flex items-center text-[15px] bg-white/10 rounded-[10px] text-white shadow-[inset_0_0_20px_rgba(255,255,255,0.15),inset_0_1px_1px_rgba(255,255,255,0.15)] py-[7px] px-[14px] font-medium leading-5 my-0 transition-all border-b-0 duration-200 ease ml-2 border-none hover:shadow-none"
          >
            <span className="hidden md:block">
              🤩&nbsp;&nbsp;Start A Project
            </span>
            <span className="md:hidden">Contact</span>
          </Link>
        </li>
      </ul>
    </header>
  )
}
