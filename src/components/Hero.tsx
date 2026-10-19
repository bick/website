"use client"

import React from "react"
import { motion, type Variants } from "framer-motion"
import { GiTexas } from "react-icons/gi"

import Signature from "@/components/Signature"

type HeroProps = {
  type?: string
  title?: string
  subtitle?: string
  gradient?: string
}

const GRADIENTS: Record<string, string> = {
  purple: "from-purple-100 dark:from-purple-950/80 via-background to-indigo-100/70 dark:to-indigo-950/50",
  blue: "from-blue-100 dark:from-blue-950/70 via-background to-cyan-100/70 dark:to-cyan-950/40",
  green: "from-emerald-100 dark:from-emerald-950/70 via-background to-teal-100/70 dark:to-teal-950/40",
  red: "from-rose-100 dark:from-rose-950/70 via-background to-red-100/70 dark:to-red-950/40",
  orange: "from-orange-100 dark:from-orange-950/70 via-background to-amber-100/70 dark:to-amber-950/40",
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
            style={{ animationDelay: "0.05s" }}
          >
            <motion.span
              className="mr-4 inline-block origin-bottom-right lg:mr-8"
              variants={waveVariants}
              animate="wave"
            >
              👋
            </motion.span>
            Hey, I&apos;m{" "}
            <span className="relative mb-12 mt-6 block md:mx-4 md:my-0">
              <span className="sr-only">Owen Bick</span>
              <Signature className="h-auto w-full max-w-sm md:h-20 md:w-auto md:max-w-none lg:h-24" />
            </span>
          </h1>
          <h2
            className="hero-fade-in mt-12 max-w-2xl text-2xl font-medium leading-relaxed text-foreground/70 md:text-3xl"
            style={{ animationDelay: "0.05s" }}
          >
            Engineering leader based in <GiTexas className="mx-1 inline text-foreground" /> Texas. I build teams, ship
            products, and scale startups.
          </h2>
          <div className="hero-fade-in mt-10 flex flex-wrap gap-4" style={{ animationDelay: "0.15s" }}>
            <a
              href="/projects"
              className="portfolio-item rounded-lg bg-foreground/10 px-6 py-3 text-base font-medium text-foreground no-underline shadow-[inset_0_0_20px_rgba(255,255,255,0.1)] transition-all hover:bg-foreground/20"
            >
              View my work
            </a>
            <a
              href="/contact"
              className="portfolio-item rounded-lg border border-foreground/20 px-6 py-3 text-base font-medium text-foreground/70 no-underline transition-all hover:border-foreground/40 hover:text-foreground"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>
    )
  }

  const gradientClass = gradient ? GRADIENTS[gradient] || gradient : "from-neutral-100 dark:from-gray-950/60 via-background to-neutral-200/50 dark:to-gray-900/40"

  return (
    <section className="relative overflow-hidden pb-20 pt-40">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} hero-fade-in`} />

      <div className="hero-fade-in pointer-events-none absolute inset-0 opacity-25 mix-blend-overlay">
        <svg className="h-full w-full">
          <filter id="heroGrain">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#heroGrain)" />
        </svg>
      </div>

      <div className="container relative z-10">
        <h1 className="hero-fade-in mb-1 text-4xl font-bold" style={{ animationDelay: "0.05s" }}>
          {title}
        </h1>
        {subtitle && (
          <h2
            className="hero-fade-in mt-4 max-w-2xl text-xl font-medium leading-normal text-foreground/60"
            style={{ animationDelay: "0.05s" }}
          >
            {subtitle}
          </h2>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
