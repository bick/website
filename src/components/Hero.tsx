"use client"

import React from "react"
import { motion, Variants } from "framer-motion"
import { GiTexas } from "react-icons/gi"

type HeroProps = {
  type?: string
  title?: string
  subtitle?: string
}

export default function Hero({ type, title, subtitle }: HeroProps) {
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

  return (
    <section className="pb-20 pt-40">
      <div className="container">
        <h1 className="mb-1 text-4xl font-bold">{title}</h1>
        <h2 className="mt-4 text-xl font-medium leading-normal">{subtitle}</h2>
      </div>
    </section>
  )
}
