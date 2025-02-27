"use client"

import type { ReactNode } from "react"
import Image from "next/image"
import { motion, type Variants } from "framer-motion"

interface BackgroundWrapperProps {
  children: ReactNode
}

export default function BackgroundWrapper({ children }: BackgroundWrapperProps) {
  const bubbleFloatVariants: Variants = {
    initial: {
      x: "50vw",
      y: "30vh",
      rotate: 0,
    },
    float: {
      // Full screen movement with padding to keep bubble fully visible
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
    <div className="bubble relative min-h-screen w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0 top-0 z-0">
        <motion.div
          className="absolute"
          variants={bubbleFloatVariants}
          initial="initial"
          animate="float"
          style={{
            width: "min(1000px, 500px)",
            height: "min(1000px, 500px)",
            marginLeft: "min(-200px, -15vw)",
            marginTop: "min(-200px, -15vw)",
          }}
        >
          <Image
            src="/static/background.svg"
            alt="Background decoration"
            fill
            className="object-contain opacity-100"
            priority
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
