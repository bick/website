"use client"

import React, { ReactNode } from "react"
import { motion } from "framer-motion"

import Hero from "@/components/Hero"
import Social from "@/components/Social"
import About from "./About"
import Portfolio from "./Portfolio"

export default function Home() {
  return (
    <>
      <Hero type="home" />
      <Portfolio />
      <About />
      <Social />
    </>
  )
}
