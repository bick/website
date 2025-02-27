"use client"

import Hero from "@/components/Hero"
import Social from "@/components/Social"
import About from "./About"
import BubbleWrapper from "./Bubble"
import Portfolio from "./Portfolio"

export default function Home() {
  return (
    <>
      <BubbleWrapper>
        <Hero type="home" />
        <Portfolio />
      </BubbleWrapper>
      <About />
      <Social />
    </>
  )
}
