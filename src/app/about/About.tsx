"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, type Variants } from "framer-motion"
import ResumeTable from "./ResumeTable"

export default function AboutPage() {
  const bubbleFloatVariants: Variants = {
    initial: {
      x: "30vw",
      y: "20vh",
      rotate: 0,
    },
    float: {
      x: ["30vw", "60vw", "15vw", "50vw", "25vw", "65vw", "30vw"],
      y: ["20vh", "50vh", "30vh", "10vh", "60vh", "25vh", "20vh"],
      rotate: [0, 8, -5, 10, -8, 5, 0],
      transition: {
        duration: 90,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  }

  return (
    <>
      {/* Gritty gradient hero with blob */}
      <section className="relative overflow-hidden pt-40 pb-24">
        {/* Gradient background - orange tones */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-950/80 via-black to-amber-950/60" />

        {/* Noise/grain overlay */}
        <div className="absolute inset-0 opacity-30 mix-blend-overlay">
          <svg className="h-full w-full">
            <filter id="grain">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
              <feColorMatrix type="saturate" values="0" />
            </filter>
            <rect width="100%" height="100%" filter="url(#grain)" />
          </svg>
        </div>

        {/* Floating blob animation */}
        <div className="pointer-events-none absolute inset-0 z-0">
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
              alt="Background decoration"
              fill
              className="object-contain opacity-60"
              priority
            />
          </motion.div>
        </div>

        {/* Content */}
        <div className="container relative z-10">
          <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:gap-16">
            {/* Photo */}
            <div className="flex-shrink-0">
              <div className="relative h-48 w-48 overflow-hidden rounded-2xl border-2 border-white/10 shadow-2xl md:h-64 md:w-64">
                <Image
                  src="/static/headshot.jpg"
                  alt="Owen Bick"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Bio */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold md:text-5xl">Owen Bick</h1>
              <p className="mt-3 text-lg text-white/60">
                Software Engineering Leader &middot; Austin &amp; Dallas
              </p>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
                I&apos;m a Software Engineering Leader with 12+ years of experience building and scaling high-performing engineering teams. I started as a developer working with everything from WordPress to modern React and TypeScript stacks&mdash;that foundation shapes how I lead today.
              </p>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/80">
                Currently, I partner with Series C+ startups to build and scale their engineering organizations&mdash;hiring senior talent, establishing technical strategy, and ensuring teams deliver on ambitious roadmaps.
              </p>
              <div className="mt-8 flex gap-4 justify-center md:justify-start">
                <Link
                  href="/contact"
                  className="portfolio-item rounded-lg bg-white/10 px-5 py-2.5 text-sm font-medium text-white shadow-[inset_0_0_20px_rgba(255,255,255,0.1)] transition-all hover:bg-white/20 no-underline"
                >
                  Get in touch
                </Link>
                <Link
                  href="https://linkedin.com/in/bick"
                  target="_blank"
                  className="portfolio-item rounded-lg border border-white/20 px-5 py-2.5 text-sm font-medium text-white/70 transition-all hover:border-white/40 hover:text-white no-underline"
                >
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[hsl(0,0%,3%)] to-transparent" />
      </section>

      <ResumeTable />
    </>
  )
}
