"use client"

import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import dynamic from "next/dynamic"

const SpotifyWidget = dynamic(() => import("@/components/SpotifyWidget"), { ssr: false })

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
  const randomDuration: number = Math.random() * 0.6 + 0.8
  const randomScale: number = Math.random() * 0.7 + 0.7

  return (
    <motion.div
      className="pointer-events-none absolute text-lg"
      initial={{ x, y, scale: 0, opacity: 0 }}
      animate={{
        y: y - 80 - Math.random() * 40,
        x: x + (Math.random() * 60 - 30),
        scale: randomScale,
        opacity: [0, 1, 0],
        rotate: Math.random() * 360,
      }}
      transition={{ duration: randomDuration, ease: "easeOut" }}
      exit={{ opacity: 0 }}
    >
      ✨
    </motion.div>
  )
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <div className="flex h-5 w-5 flex-col items-center justify-center gap-[5px]">
      <motion.span
        className="block h-[2px] w-5 rounded-full bg-white"
        animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="block h-[2px] w-5 rounded-full bg-white"
        animate={open ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className="block h-[2px] w-5 rounded-full bg-white"
        animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  )
}

const Header: React.FC = () => {
  const pathname: string = usePathname()
  const isHome = pathname === "/"
  const tiltRef = useRef<HTMLUListElement>(null)
  const [sparkles, setSparkles] = useState<SparkleData[]>([])
  const [logoSpin, setLogoSpin] = useState(0)
  const [tooltipReady, setTooltipReady] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)
  const buttonRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setLogoSpin(0)
    setTooltipReady(false)
    setMobileOpen(false)
  }, [pathname])



  const menuItems: MenuItem[] = [
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/journal", label: "Journal" },
    { href: "/reviews", label: "Reviews" },
  ]

  const socialLinks: SocialLink[] = [
    { href: "https://github.com/bick", icon: FaGithub, label: "GitHub" },
    { href: "https://linkedin.com/in/bick", icon: FaLinkedin, label: "LinkedIn" },
  ]

  const linkClasses: string =
    "flex text-[#9797a0] font-medium text-[15px] mx-2 md:mx-3 py-5 transition-all duration-150 ease mix-blend-exclusion hover:text-white hover:no-underline hover:opacity-100 hover:[text-shadow:rgba(255,255,255,0.85)_0_0_32px]"

  const createSparkles = (): void => {
    if (!buttonRef.current) return
    const buttonRect: DOMRect = buttonRef.current.getBoundingClientRect()
    const newSparkles: SparkleData[] = []
    for (let i = 0; i < 12; i++) {
      newSparkles.push({
        id: `sparkle-${Date.now()}-${i}`,
        x: Math.random() * buttonRect.width,
        y: Math.random() * buttonRect.height,
      })
    }
    setSparkles(newSparkles)
    setTimeout(() => setSparkles([]), 1500)
  }

  useEffect(() => {
    if (tiltRef.current) {
      import("vanilla-tilt").then((VanillaTilt) => {
        if (tiltRef.current) {
          VanillaTilt.default.init(tiltRef.current, {
            max: 5,
            speed: 400,
            glare: true,
            "max-glare": 0.05,
          })
        }
      })
      return () => {
        if (tiltRef.current) {
          const tiltElement = tiltRef.current as VanillaTiltElement
          tiltElement.vanillaTilt?.destroy()
        }
      }
    }
  }, [])

  return (
    <>
      <header className="header fixed top-0 z-[9999] flex w-full items-center p-1 md:py-4">
        {/* Desktop nav */}
        <ul
          className="mx-auto hidden w-full items-center justify-center rounded-[10px] border border-[rgba(255,255,255,0.2)] bg-[rgba(0,0,0,0.25)] px-4 py-0.5 backdrop-blur-md transition-shadow duration-200 ease-in-out md:flex md:max-w-fit"
          ref={tiltRef}
        >
          <li
            className="relative group mr-4"
            onMouseLeave={() => { if (!tooltipReady) setTooltipReady(true) }}
          >
            {isHome ? (
              <>
                <motion.span
                  className={`${linkClasses} !mx-0 items-center !py-0 !text-3xl cursor-pointer select-none`}
                  animate={{ rotate: logoSpin }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setLogoSpin((prev) => prev + 720)}
                >
                  👻
                </motion.span>
                {tooltipReady && (
                  <div className="pointer-events-none absolute left-1/2 top-full mt-3 -translate-x-1/2 rounded-md bg-neutral-800 dark:bg-neutral-200 px-2.5 py-1.5 text-xs font-medium text-white dark:text-black opacity-0 transition-opacity group-hover:opacity-100 whitespace-nowrap">
                    <div className="absolute -top-[6px] left-1/2 -translate-x-1/2 h-0 w-0 border-l-[6px] border-r-[6px] border-b-[6px] border-l-transparent border-r-transparent border-b-neutral-800 dark:border-b-neutral-200" />
                    Gotta blast!
                  </div>
                )}
              </>
            ) : (
              <>
                <Link
                  href="/"
                  className={`${linkClasses} !mx-0 items-center !py-0 !text-3xl before:content-['🧙🏻‍♂️'] hover:before:content-['🏠']`}
                />
                <div className="pointer-events-none absolute left-1/2 top-full mt-3 -translate-x-1/2 rounded-md bg-neutral-800 dark:bg-neutral-200 px-2.5 py-1.5 text-xs font-medium text-white dark:text-black opacity-0 transition-opacity group-hover:opacity-100 whitespace-nowrap">
                  <div className="absolute -top-[6px] left-1/2 -translate-x-1/2 h-0 w-0 border-l-[6px] border-r-[6px] border-b-[6px] border-l-transparent border-r-transparent border-b-neutral-800 dark:border-b-neutral-200" />
                  Go home
                </div>
              </>
            )}
          </li>

          {menuItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={linkClasses}>{item.label}</Link>
            </li>
          ))}

          {socialLinks.map((social) => (
            <li key={social.href}>
              <Link
                href={social.href}
                target="_blank"
                rel="nofollow"
                aria-label={social.label}
                className={`${linkClasses} !py-0 !text-xl`}
              >
                <social.icon className="m-auto flex h-full" />
              </Link>
            </li>
          ))}

          <li className="relative">
            <motion.div ref={buttonRef} className="relative" whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="ease my-0 ml-2 flex items-center rounded-[10px] border-b-0 border-none bg-white/10 px-[14px] py-[7px] text-[15px] font-medium leading-5 text-white shadow-[inset_0_0_20px_rgba(255,255,255,0.15),inset_0_1px_1px_rgba(255,255,255,0.15)] transition-all duration-200 hover:shadow-none"
                onClick={createSparkles}
              >
                ✨&nbsp;&nbsp;Start A Project
              </Link>
              <AnimatePresence>
                {sparkles.map((sparkle) => (
                  <SparkleEffect key={sparkle.id} x={sparkle.x} y={sparkle.y} />
                ))}
              </AnimatePresence>
            </motion.div>
          </li>
        </ul>

        {/* Mobile nav bar */}
        <div className="w-full overflow-hidden rounded-[10px] border border-[rgba(255,255,255,0.2)] bg-[rgba(0,0,0,0.25)] backdrop-blur-md md:hidden">
          <div className="flex items-center justify-between px-4 py-2.5">
            <Link href="/" className="text-3xl no-underline">
              🧙🏻‍♂️
            </Link>
            <div className="flex items-center gap-5">
              {socialLinks.map((social) => (
                <Link
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="nofollow"
                  aria-label={social.label}
                  className="text-white/50 no-underline transition-colors hover:text-white"
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
              <button
                onClick={() => setMobileOpen((prev) => !prev)}
                className="relative z-[10001] flex h-9 w-9 items-center justify-center"
                aria-label="Toggle menu"
              >
                <HamburgerIcon open={mobileOpen} />
              </button>
            </div>
          </div>

          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                className="overflow-hidden"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="px-4 pb-5 pt-3">
                  <nav className="flex flex-col gap-1">
                    {menuItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="rounded-lg px-3 py-3 text-lg font-medium text-white/80 no-underline transition-colors hover:bg-white/5 hover:text-white"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>

                  <div className="mt-4 flex items-center justify-between">
                    <Link
                      href="/contact"
                      onClick={() => setMobileOpen(false)}
                      className="inline-block rounded-lg bg-white/10 px-5 py-2.5 text-base font-medium text-white no-underline shadow-[inset_0_0_20px_rgba(255,255,255,0.15)] transition-all hover:bg-white/20"
                    >
                      ✨ Start A Project
                    </Link>

                    <SpotifyWidget compact />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Desktop Spotify widget */}
      <div className="hidden md:block">
        <SpotifyWidget />
      </div>
    </>
  )
}

export default Header
