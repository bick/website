"use client"

import { useEffect, useMemo, useState, type ReactNode } from "react"
import Image from "next/image"
import { motion, type Variants } from "framer-motion"

interface BackgroundWrapperProps {
  children: ReactNode
}

function Stars() {
  const [count, setCount] = useState(20)

  useEffect(() => {
    if (window.innerWidth >= 768) setCount(60)
  }, [])

  const stars = useMemo(() => {
    const seed = 42
    const rng = (i: number) => {
      const x = Math.sin(seed + i * 127.1) * 43758.5453
      return x - Math.floor(x)
    }

    return Array.from({ length: count }, (_, i) => ({
      left: `${Math.round(rng(i * 3) * 10000) / 100}%`,
      top: `${Math.round(rng(i * 3 + 1) * 10000) / 100}%`,
      size: rng(i * 3 + 2) < 0.1 ? 6 : rng(i * 3 + 2) < 0.35 ? 4 : 3,
      delay: Math.round(rng(i * 7) * 600) / 100,
      duration: Math.round((3 + rng(i * 11) * 4) * 100) / 100,
      brightness: Math.round((0.4 + rng(i * 13) * 0.6) * 100) / 100,
    }))
  }, [count])

  return (
    <div className="pointer-events-none absolute inset-0 z-[1]">
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [star.brightness * 0.3, star.brightness, star.brightness * 0.3],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: star.delay,
          }}
        />
      ))}
    </div>
  )
}

export default function BackgroundWrapper({ children }: BackgroundWrapperProps) {
  const bubbleFloatVariants: Variants = {
    initial: {
      x: "50vw",
      y: "30vh",
      rotate: 0,
    },
    float: {
      x: ["50vw", "75vw", "20vw", "65vw", "10vw", "80vw", "30vw", "70vw", "15vw", "60vw", "50vw"],
      y: ["30vh", "10vh", "70vh", "20vh", "80vh", "60vh", "15vh", "75vh", "40vh", "25vh", "30vh"],
      rotate: [0, 8, -5, 10, -8, 12, -4, 6, -10, 5, 0],
      transition: {
        duration: 120,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  }

  return (
    <div className="bubble relative w-full overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-orange-950/40 via-black to-amber-950/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      <Stars />

      <motion.div
        className="pointer-events-none absolute inset-0 z-[1] mix-blend-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <svg className="h-full w-full">
          <filter id="homeGrain">
            <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#homeGrain)" />
        </svg>
      </motion.div>

      <div className="pointer-events-none absolute inset-0 top-0 z-[2]">
        <motion.div
          className="absolute"
          variants={bubbleFloatVariants}
          initial="initial"
          animate="float"
          style={{
            width: "min(1000px, 700px)",
            height: "min(1000px, 700px)",
            marginLeft: "min(-200px, -15vw)",
            marginTop: "min(-200px, -15vw)",
          }}
        >
          <Image
            src="/static/background.svg"
            alt=""
            fill
            className="object-contain opacity-100"
            loading="lazy"
          />
        </motion.div>
      </div>

      <div className="relative z-10">{children}</div>

      <div className="absolute bottom-0 left-0 right-0 z-[3] h-64 bg-gradient-to-t from-[hsl(0,0%,3%)] to-transparent" />
    </div>
  )
}
