"use client"

import Hero from "@/components/Hero"
import About from "./About"
import BubbleWrapper from "./Bubble"
import Journal from "./Journal"
import News from "./News"

export default function Home() {
  return (
    <BubbleWrapper>
      <Hero type="home" />
      <Journal />
      <News />
      <About />
    </BubbleWrapper>
  )
}
