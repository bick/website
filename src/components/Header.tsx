"use client"

import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import VanillaTilt from "vanilla-tilt"

// Define interfaces for type safety
interface VanillaTiltElement extends HTMLElement {
  vanillaTilt?: {
    destroy: () => void
  }
}

interface MenuItem {
  href: string
  label: string
}

interface SocialLink {
  href: string
  icon: React.ComponentType<{ className: string }>
  label: string
}

interface SparkleProps {
  x: number
  y: number
}

interface SparkleData {
  id: string
  x: number
  y: number
}

const SparkleEffect: React.FC<SparkleProps> = ({ x, y }) => {
  const randomDuration: number = Math.random() * 0.6 + 0.8 // Random duration between 0.8 and 1.4s
  const randomScale: number = Math.random() * 0.7 + 0.7 // Random scale between 0.7 and 1.4

  return (
    <motion.div
      className="pointer-events-none absolute text-lg"
      initial={{
        x,
        y,
        scale: 0,
        opacity: 0,
      }}
      animate={{
        y: y - 80 - Math.random() * 40, // Float up by 80-120px
        x: x + (Math.random() * 60 - 30), // Drift left or right randomly
        scale: randomScale,
        opacity: [0, 1, 0],
        rotate: Math.random() * 360,
      }}
      transition={{
        duration: randomDuration,
        ease: "easeOut",
      }}
      exit={{ opacity: 0 }}
    >
      ✨
    </motion.div>
  )
}

const Header: React.FC = () => {
  const pathname: string = usePathname()
  const tiltRef = useRef<HTMLUListElement>(null)
  const [sparkles, setSparkles] = useState<SparkleData[]>([])
  const buttonRef = useRef<HTMLDivElement>(null)

  const menuItems: MenuItem[] = [
    { href: "/#projects", label: "Projects" },
    { href: "/resume", label: "Resume" },
    { href: "/reviews", label: "Reviews" },
  ]

  const socialLinks: SocialLink[] = [
    { href: "https://github.com/bick", icon: FaGithub, label: "GitHub" },
    {
      href: "https://linkedin.com/in/bick",
      icon: FaLinkedin,
      label: "LinkedIn",
    },
  ]

  const linkClasses: string =
    "flex text-[#9797a0] font-medium text-[15px] mx-2 md:mx-3 py-5 transition-all duration-150 ease mix-blend-exclusion hover:text-white hover:no-underline hover:opacity-100 hover:[text-shadow:rgba(255,255,255,0.85)_0_0_32px]"

  const activeLinkClasses: string = "text-white opacity-100"

  // Sparkle effect function
  const createSparkles = (): void => {
    if (!buttonRef.current) return

    const buttonRect: DOMRect = buttonRef.current.getBoundingClientRect()
    const newSparkles: SparkleData[] = []

    // Create multiple sparkles
    for (let i = 0; i < 12; i++) {
      newSparkles.push({
        id: `sparkle-${Date.now()}-${i}`,
        x: Math.random() * buttonRect.width,
        y: Math.random() * buttonRect.height,
      })
    }

    setSparkles(newSparkles)

    // Clear sparkles after they've animated
    setTimeout(() => {
      setSparkles([])
    }, 1500)
  }

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 5,
        speed: 400,
        glare: true,
        "max-glare": 0.05,
      })

      return () => {
        if (tiltRef.current) {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          const tiltElement = tiltRef.current as VanillaTiltElement
          tiltElement.vanillaTilt?.destroy()
        }
      }
    }
  }, [])

  return (
    <header className="header fixed top-0 z-[9999] flex w-full items-center p-1 md:py-4">
      <ul
        className="mx-auto flex w-full items-center justify-center rounded-[10px] border border-[rgba(255,255,255,0.2)] bg-[rgba(0,0,0,0.25)] px-4 py-0.5 backdrop-blur-md transition-shadow duration-200 ease-in-out md:max-w-fit"
        ref={tiltRef}
      >
        {/* Logo */}
        <li>
          <Link
            href="/"
            className={`${linkClasses} !py-0 !ml-0 items-center !text-3xl before:content-['🗿'] hover:before:content-['🏠'] ${pathname === "/" ? activeLinkClasses : ""}`}
          ></Link>
        </li>

        {/* Menu Items */}
        {menuItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={linkClasses}
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
              className={`${linkClasses} !py-0 hidden !text-xl md:block`}
            >
              <social.icon className="m-auto flex h-full" />
            </Link>
          </li>
        ))}

        {/* Contact Button */}
        <li className="relative">
          <motion.div ref={buttonRef} className="relative" whileTap={{ scale: 0.97 }}>
            <Link
              href="/contact"
              className="ease my-0 ml-2 flex items-center rounded-[10px] border-b-0 border-none bg-white/10 px-[14px] py-[7px] text-[15px] font-medium leading-5 text-white shadow-[inset_0_0_20px_rgba(255,255,255,0.15),inset_0_1px_1px_rgba(255,255,255,0.15)] transition-all duration-200 hover:shadow-none"
              onClick={createSparkles}
            >
              <span className="hidden md:block">✨&nbsp;&nbsp;Start A Project</span>
              <span className="md:hidden">Contact</span>
            </Link>

            {/* Sparkle elements with Framer Motion */}
            <AnimatePresence>
              {sparkles.map((sparkle) => (
                <SparkleEffect key={sparkle.id} x={sparkle.x} y={sparkle.y} />
              ))}
            </AnimatePresence>
          </motion.div>
        </li>
      </ul>
    </header>
  )
}

export default Header
