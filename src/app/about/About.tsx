"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, type Variants } from "framer-motion"

import SplitText from "@/components/SplitText"

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
      <section className="relative overflow-hidden pb-24 pt-40">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-100 dark:from-purple-950/80 via-background to-indigo-100/70 dark:to-indigo-950/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        <motion.div
          className="absolute inset-0 mix-blend-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <svg className="h-full w-full">
            <filter id="grain">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
              <feColorMatrix type="saturate" values="0" />
            </filter>
            <rect width="100%" height="100%" filter="url(#grain)" />
          </svg>
        </motion.div>

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

        <div className="container relative z-10">
          <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:gap-16">
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut", delay: 0.05 }}
            >
              <div className="relative h-48 w-48 overflow-hidden border md:h-56 md:w-56">
                <Image src="/static/owen2026.jpeg" alt="Owen Bick" fill className="object-cover" priority />
              </div>
            </motion.div>

            <div className="text-center md:text-left">
              <h1 className="page-title">
                <SplitText>Owen Bick</SplitText>
              </h1>
              <p className="subtext-in label mt-3" style={{ animationDelay: "0.2s" }}>
                Software Engineering Leader &middot; Austin &amp; Dallas
              </p>
              <p className="subtext-in mt-6 max-w-xl" style={{ animationDelay: "0.3s" }}>
                I&apos;m a Software Engineering Leader with 15+ years of experience building and
                scaling high-performing engineering teams. I started as a developer working with
                everything from WordPress to modern React and TypeScript stacks, that foundation
                shapes how I lead today.
              </p>
              <p className="subtext-in mt-4 max-w-xl" style={{ animationDelay: "0.5s" }}>
                Currently, I partner with Series C+ startups to build and scale their engineering
                organizations where I work on hiring senior talent, establishing technical strategy,
                and ensuring teams deliver on ambitious roadmaps.
              </p>
              <div className="hero-fade-in flex justify-center gap-5 md:justify-start" style={{ animationDelay: "0.9s" }}>
                <Link href="/contact" className="portfolio-item more-link">
                  Get in touch
                </Link>
                <Link href="https://linkedin.com/in/bick" target="_blank" className="portfolio-item more-link">
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      <ResumeTable />
    </>
  )
}
