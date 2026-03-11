"use client"

import React from "react"
import { motion, type Variants } from "framer-motion"
import { GiTexas } from "react-icons/gi"

type HeroProps = {
  type?: string
  title?: string
  subtitle?: string
  gradient?: string
}

const GRADIENTS: Record<string, string> = {
  purple: "from-purple-950/80 via-black to-indigo-950/50",
  blue: "from-blue-950/70 via-black to-cyan-950/40",
  green: "from-emerald-950/70 via-black to-teal-950/40",
  red: "from-rose-950/70 via-black to-red-950/40",
  orange: "from-orange-950/70 via-black to-amber-950/40",
}

export default function Hero({ type, title, subtitle, gradient }: HeroProps) {
  const waveVariants: Variants = {
    wave: {
      rotate: [0, 14, -8, 14, -4, 10, 0],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "easeInOut",
        repeatDelay: 1,
      },
    },
  }

  if (type === "home") {
    return (
      <section className="pb-32 pt-48">
        <div className="container">
          <h1
            className="hero-fade-in block text-4xl font-bold md:flex md:items-center lg:text-6xl"
            style={{ animationDelay: "0.2s" }}
          >
            <motion.span
              className="mr-4 inline-block origin-bottom-right lg:mr-8"
              variants={waveVariants}
              animate="wave"
            >
              👋
            </motion.span>
            Hey, I&apos;m{" "}
            <span className="relative mb-12 mt-6 block h-full font-['Germanica'] text-[72px] font-medium md:mx-4 md:my-0 md:text-6xl">
              Owen Bick
            </span>
          </h1>
          <h2
            className="hero-fade-in mt-12 max-w-2xl text-2xl font-medium leading-relaxed text-white/70 md:text-3xl"
            style={{ animationDelay: "0.35s" }}
          >
            Engineering leader based in <GiTexas className="mx-1 inline text-white" /> Texas. I build teams, ship
            products, and scale startups.
          </h2>
          <div
            className="hero-fade-in mt-10 flex flex-wrap gap-4"
            style={{ animationDelay: "0.5s" }}
          >
            <a
              href="/projects"
              className="portfolio-item rounded-lg bg-white/10 px-6 py-3 text-base font-medium text-white no-underline shadow-[inset_0_0_20px_rgba(255,255,255,0.1)] transition-all hover:bg-white/20"
            >
              View my work
            </a>
            <a
              href="/contact"
              className="portfolio-item rounded-lg border border-white/20 px-6 py-3 text-base font-medium text-white/70 no-underline transition-all hover:border-white/40 hover:text-white"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>
    )
  }

  const gradientClass = gradient ? GRADIENTS[gradient] || gradient : "from-gray-950/60 via-black to-gray-900/40"

  return (
    <section className="relative overflow-hidden pb-20 pt-40">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} hero-fade-in`} />

      <div
        className="pointer-events-none absolute inset-0 mix-blend-overlay hero-fade-in opacity-25"
      >
        <svg className="h-full w-full">
          <filter id="heroGrain">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#heroGrain)" />
        </svg>
      </div>

      <div className="container relative z-10">
        <h1
          className="hero-fade-in mb-1 text-4xl font-bold"
          style={{ animationDelay: "0.2s" }}
        >
          {title}
        </h1>
        {subtitle && (
          <h2
            className="hero-fade-in mt-4 max-w-2xl text-xl font-medium leading-normal text-white/60"
            style={{ animationDelay: "0.35s" }}
          >
            {subtitle}
          </h2>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[hsl(0,0%,3%)] to-transparent" />
    </section>
  )
}
