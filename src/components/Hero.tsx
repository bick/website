"use client"

import React from "react"
import { motion, Variants } from "framer-motion"
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
      <section className="pt-48 pb-32">
        <div className="container">
          <motion.h1
            className="block text-3xl font-bold md:flex md:items-center lg:text-6xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            <motion.span
              className="mr-4 inline-block origin-bottom-right lg:mr-8"
              variants={waveVariants}
              animate="wave"
            >
              👋
            </motion.span>
            Hey, I&apos;m{" "}
            <span className="mb-12 h-full mt-6 block relative font-['Funsized'] text-5xl font-medium md:mx-4 md:my-0 md:text-6xl">
              Owen Bick
            </span>
          </motion.h1>
          <motion.h2
            className="text-2xl mt-12 font-medium leading-relaxed max-w-2xl text-white/70 md:text-3xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 }}
          >
            Engineering leader based in <GiTexas className="mx-1 inline text-white" /> Texas.
            I build teams, ship products, and scale startups.
          </motion.h2>
          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          >
            <a
              href="/projects"
              className="portfolio-item rounded-lg bg-white/10 px-6 py-3 text-base font-medium text-white shadow-[inset_0_0_20px_rgba(255,255,255,0.1)] transition-all hover:bg-white/20 no-underline"
            >
              View my work
            </a>
            <a
              href="/contact"
              className="portfolio-item rounded-lg border border-white/20 px-6 py-3 text-base font-medium text-white/70 transition-all hover:border-white/40 hover:text-white no-underline"
            >
              Get in touch
            </a>
          </motion.div>
        </div>
      </section>
    )
  }

  const gradientClass = gradient
    ? GRADIENTS[gradient] || gradient
    : "from-gray-950/60 via-black to-gray-900/40"

  return (
    <section className="relative overflow-hidden pb-20 pt-40">
      {/* Gradient background - fades in */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${gradientClass}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* Noise/grain texture - fades in with gradient */}
      <motion.div
        className="pointer-events-none absolute inset-0 mix-blend-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <svg className="h-full w-full">
          <filter id="heroGrain">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#heroGrain)" />
        </svg>
      </motion.div>

      {/* Content - slides up and fades in */}
      <div className="container relative z-10">
        <motion.h1
          className="mb-1 text-4xl font-bold"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.h2
            className="mt-4 max-w-2xl text-xl font-medium leading-normal text-white/60"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 }}
          >
            {subtitle}
          </motion.h2>
        )}
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[hsl(0,0%,3%)] to-transparent" />
    </section>
  )
}
