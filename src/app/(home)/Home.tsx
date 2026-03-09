"use client"

import Hero from "@/components/Hero"
import Social from "@/components/Social"
import About from "./About"
import BubbleWrapper from "./Bubble"
import Journal from "./Journal"
import News from "./News"
import Projects from "./Portfolio"

export default function Home() {
  return (
    <BubbleWrapper>
      <Hero type="home" />
      <Projects />
      <Journal />
      <News />
      <About />
      <Social />
    </BubbleWrapper>
  )
}
