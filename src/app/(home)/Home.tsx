"use client"
import Hero from "@/components/Hero"
import Social from "@/components/Social"
import About from "./About"
import Portfolio from "./Portfolio"
import BubbleWrapper from "./Bubble";

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

