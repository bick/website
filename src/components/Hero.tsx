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

  // Home type
  if (type === "home") {
    return (
      <section className="py-20">
        <div className="container">
          <h1 className="font-medium text-2xl md:text-6xl block leading-[3rem] md:flex md:items-center h-32 mb-1">
            <motion.span
              className="inline-block origin-bottom-right mr-8"
              variants={waveVariants}
              animate="wave"
            >
              👋
            </motion.span>
            Howdy, I&apos;m{" "}
            <span className="font-['Funsized'] font-medium leading-[3rem] block text-3xl md:text-6xl origin-bottom-right md:mx-4">
              Owen Bick
            </span>
          </h1>
          <h2 className="flex items-center font-medium text-3xl leading-normal">
            I&apos;m a software engineer based in{" "}
            <GiTexas className="ml-2 mr-1" /> Austin
          </h2>
        </div>
      </section>
    )
  }

  return (
    <section className="pt-40 pb-20">
      <div className="container">
        <h1 className="font-bold text-4xl mb-1">{title}</h1>
        <h2 className="font-medium text-xl mt-4 leading-normal">{subtitle}</h2>
      </div>
    </section>
  )
}
