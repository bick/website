"use client"

import React, { ReactNode } from "react"
import { motion } from "framer-motion"

import Hero from "@/components/Hero"
import Social from "@/components/Social"
import About from "./About"
import Portfolio from "./Portfolio"

interface LayoutProps {
  children: ReactNode
  type?: string
}

const LayoutAnimation = ({ children, type }: LayoutProps) => {
  const isHome = type === "home"

  return (
    <motion.div
      className={`mx-auto w-full py-0 ${
        isHome ? "bg-[url('/static/background.svg')] bg-[length:1000px] bg-[center_-500px] bg-no-repeat py-28" : ""
      }`}
      initial={{ opacity: 0, y: 3 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

export default function Home() {
  return (
    <LayoutAnimation type="home">
      <Hero type="home" />
      <Portfolio />
      <About />
      <Social />
    </LayoutAnimation>
  )
}
