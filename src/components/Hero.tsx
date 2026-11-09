"use client"

import React from "react"
import { GiTexas } from "react-icons/gi"

import SplitText from "@/components/SplitText"

type HeroProps = {
  type?: string
  title?: string
  subtitle?: string
  gradient?: string
  splitText?: boolean
}

const GRADIENTS: Record<string, string> = {
  purple: "from-purple-100 dark:from-purple-950/80 via-background to-indigo-100/70 dark:to-indigo-950/50",
  blue: "from-blue-100 dark:from-blue-950/70 via-background to-cyan-100/70 dark:to-cyan-950/40",
  green: "from-emerald-100 dark:from-emerald-950/70 via-background to-teal-100/70 dark:to-teal-950/40",
  red: "from-rose-100 dark:from-rose-950/70 via-background to-red-100/70 dark:to-red-950/40",
  orange: "from-orange-100 dark:from-orange-950/70 via-background to-amber-100/70 dark:to-amber-950/40",
}

export default function Hero({ type, title, subtitle, gradient, splitText = true }: HeroProps) {
  if (type === "home") {
    return (
      <section className="pb-24 pt-48">
        <div className="container">
          <p className="subtext-in label mb-5">
            Engineering leader based in <GiTexas className="mx-0.5 inline align-[-4px] text-base text-foreground" />{" "}
            Austin
          </p>
          <h1 className="page-title max-w-155">
            <SplitText delay={0.1}>
              I build engineering teams, ship products, and help startups scale without giving up on <em>craft</em>.
            </SplitText>
          </h1>
          <p className="subtext-in max-w-140 mt-7 text-muted-foreground" style={{ animationDelay: "0.5s" }}>
            I lead engineering at <a href="https://fieldpulse.com">FieldPulse</a>. I write about engineering leadership.
          </p>
        </div>
      </section>
    )
  }

  const gradientClass = gradient
    ? GRADIENTS[gradient] || gradient
    : "from-neutral-100 dark:from-gray-950/60 via-background to-neutral-200/50 dark:to-gray-900/40"

  return (
    <section className="relative overflow-hidden pb-20 pt-40">
      <div className={`bg-linear-to-br absolute inset-0 ${gradientClass} hero-fade-in`} />

      <div className="hero-fade-in pointer-events-none absolute inset-0 mix-blend-overlay">
        <svg className="h-full w-full">
          <filter id="heroGrain">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#heroGrain)" />
        </svg>
      </div>

      <div className="container relative z-10">
        {splitText ? (
          <h1 className="page-title">
            <SplitText>{title}</SplitText>
          </h1>
        ) : (
          <h1 className="page-title title-fade-in" style={{ animationDelay: "0.1s" }}>
            {title}
          </h1>
        )}
        {subtitle && (
          <p className="subtext-in max-w-140 mt-4 text-muted-foreground" style={{ animationDelay: "0.3s" }}>
            {subtitle}
          </p>
        )}
      </div>

      <div className="bg-linear-to-t absolute bottom-0 left-0 right-0 h-16 from-background to-transparent" />
    </section>
  )
}
