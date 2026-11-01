import type { ReactNode } from "react"
import Image from "next/image"

interface BackgroundWrapperProps {
  children: ReactNode
}

const STAR_COUNT = 60
// Phones render only the first few, in CSS so the count is right from the first paint.
const MOBILE_STAR_COUNT = 20
const STAR_GROUPS = 8

const rng = (i: number) => {
  const x = Math.sin(42 + i * 127.1) * 43758.5453
  return x - Math.floor(x)
}

const stars = Array.from({ length: STAR_COUNT }, (_, i) => ({
  left: `${Math.round(rng(i * 3) * 10000) / 100}%`,
  top: `${Math.round(rng(i * 3 + 1) * 10000) / 100}%`,
  size: rng(i * 3 + 2) < 0.1 ? 6 : rng(i * 3 + 2) < 0.35 ? 4 : 3,
  brightness: Math.round((0.4 + rng(i * 13) * 0.6) * 100) / 100,
  hiddenOnMobile: i >= MOBILE_STAR_COUNT,
}))

const starGroups = Array.from({ length: STAR_GROUPS }, (_, group) => ({
  delay: Math.round(rng(group * 7) * 600) / 100,
  duration: Math.round((3 + rng(group * 11) * 4) * 100) / 100,
  stars: stars.filter((_, i) => i % STAR_GROUPS === group),
}))

function Stars() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1]">
      {starGroups.map((group, groupIndex) => (
        <div
          key={groupIndex}
          className="star-group"
          style={{ animationDuration: `${group.duration}s`, animationDelay: `${group.delay}s` }}
        >
          {group.stars.map((star, i) => (
            <div
              key={i}
              className={`absolute rounded-full bg-neutral-400 dark:bg-white ${star.hiddenOnMobile ? "hidden md:block" : ""}`}
              style={{ left: star.left, top: star.top, width: star.size, height: star.size, opacity: star.brightness }}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default function BackgroundWrapper({ children }: BackgroundWrapperProps) {
  return (
    <div className="bubble relative w-full overflow-hidden">
      <div className="backdrop-fade-in absolute inset-0 bg-gradient-to-br from-orange-100/70 dark:from-orange-950/40 via-background to-amber-100/50 dark:to-amber-950/30" />

      <Stars />

      <div className="backdrop-fade-in pointer-events-none absolute inset-0 z-[1] opacity-20 mix-blend-overlay">
        <svg className="h-full w-full">
          <filter id="homeGrain">
            <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#homeGrain)" />
        </svg>
      </div>

      <div className="pointer-events-none absolute inset-0 top-0 z-[2]">
        <div className="bubble-float bubble-float-home">
          <Image src="/static/background.svg" alt="" fill className="object-contain opacity-100" loading="lazy" />
        </div>
      </div>

      <div className="relative z-10">{children}</div>

      <div className="absolute bottom-0 left-0 right-0 z-[3] h-64 bg-gradient-to-t from-background to-transparent" />
    </div>
  )
}
