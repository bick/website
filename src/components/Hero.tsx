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
          <h1 className="block text-3xl font-bold md:flex md:items-center lg:text-6xl">
            <motion.span
              className="mr-4 inline-block origin-bottom-right lg:mr-8"
              variants={waveVariants}
              animate="wave"
            >
              👋
            </motion.span>
            Howdy, I&apos;m{" "}
            <span className="mb-12 h-full mt-6 block relative font-['Funsized'] text-5xl font-medium md:mx-4 md:my-0 md:text-6xl">
              Owen Bick
            </span>
          </h1>
          <h2 className="text-3xl mt-12 font-medium leading-normal">
            I&apos;m a software engineer based in <GiTexas className="mx-1 inline" /> Austin &amp; Dallas
          </h2>
        </div>
      </section>
    )
  }

  const gradientClass = gradient
    ? GRADIENTS[gradient] || gradient
    : "from-gray-950/60 via-black to-gray-900/40"

  return (
    <section className="relative overflow-hidden pb-20 pt-40">
      {/* Gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass}`} />

      {/* Noise/grain texture */}
      <div className="pointer-events-none absolute inset-0 opacity-25 mix-blend-overlay">
        <svg className="h-full w-full">
          <filter id="heroGrain">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#heroGrain)" />
        </svg>
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <h1 className="mb-1 text-4xl font-bold">{title}</h1>
        {subtitle && (
          <h2 className="mt-4 max-w-2xl text-xl font-medium leading-normal text-white/60">{subtitle}</h2>
        )}
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[hsl(0,0%,3%)] to-transparent" />
    </section>
  )
}
