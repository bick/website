"use client"

import Image from "next/image"
import Link from "next/link"
import type { Project } from "@/data/projects"
import { motion } from "framer-motion"

import { Badge } from "@/components/ui/badge"

export default function CaseStudy({ project }: { project: Project }) {
  return (
    <>
      <section className="relative overflow-hidden pb-0 pt-32">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-orange-950/70 via-black to-amber-950/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        <motion.div
          className="pointer-events-none absolute inset-0 mix-blend-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <svg className="h-full w-full">
            <filter id="caseGrain">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
              <feColorMatrix type="saturate" values="0" />
            </filter>
            <rect width="100%" height="100%" filter="url(#caseGrain)" />
          </svg>
        </motion.div>

        <motion.div
          className="container relative z-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          <Link
            href="/projects"
            className="portfolio-item mb-8 inline-block text-sm font-medium text-white/50 no-underline transition-colors hover:text-white/80"
          >
            &larr; All Projects
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="outline">{project.year}</Badge>
            <Badge variant="secondary">{project.type}</Badge>
          </div>

          <h1 className="mt-4 text-4xl font-bold md:text-5xl">{project.title}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/60">{project.summary}</p>

          {project.url && (
            <Link
              href={project.url}
              target="_blank"
              rel="nofollow"
              className="portfolio-item mt-6 inline-block rounded-lg border border-white/20 px-5 py-2.5 text-sm font-medium text-white/70 no-underline transition-all hover:border-white/40 hover:text-white"
            >
              Visit site &rarr;
            </Link>
          )}

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-white/50">
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="container relative z-10 mt-12"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <div className="mt-12 overflow-hidden rounded-t-xl border border-b-0 border-[rgba(255,255,255,0.15)]">
            <div className="relative aspect-video w-full bg-[#111]">
              <Image src={project.image} alt={project.title} fill className="object-cover" priority />
            </div>
          </div>
        </motion.div>
      </section>

      <section className="pb-20">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-16 pt-16">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-white/40">The Challenge</h2>
              <p className="mt-4 text-lg leading-relaxed opacity-80">{project.challenge}</p>
            </div>

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-white/40">The Approach</h2>
              <p className="mt-4 text-lg leading-relaxed opacity-80">{project.approach}</p>
            </div>

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-white/40">Results</h2>
              <ul className="mt-4 space-y-3">
                {project.results.map((result, i) => (
                  <li key={i} className="flex gap-3 text-lg opacity-80">
                    <span className="mt-1 flex-shrink-0 text-white/40">•</span>
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.03] to-transparent" />
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold">Got something worth building?</h2>
            <p className="mt-4 text-lg leading-relaxed text-white/60">
              I&apos;m always down to talk shop. Whether it&apos;s a ground-up build, a redesign, or just an idea on a
              napkin. Let&apos;s figure it out together.
            </p>
            <Link
              href="/contact"
              className="portfolio-item mt-8 inline-block rounded-lg bg-white/10 px-8 py-3.5 text-base font-medium text-white no-underline shadow-[inset_0_0_20px_rgba(255,255,255,0.1)] transition-all hover:bg-white/20"
            >
              Get in touch &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
