"use client"

import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import type { Project } from "@/data/projects"

export default function CaseStudy({ project }: { project: Project }) {
  return (
    <>
      {/* Hero with full-width screenshot */}
      <section className="relative overflow-hidden pt-32 pb-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-950/70 via-black to-amber-950/40" />

        {/* Noise/grain */}
        <div className="pointer-events-none absolute inset-0 opacity-25 mix-blend-overlay">
          <svg className="h-full w-full">
            <filter id="caseGrain">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
              <feColorMatrix type="saturate" values="0" />
            </filter>
            <rect width="100%" height="100%" filter="url(#caseGrain)" />
          </svg>
        </div>

        <div className="container relative z-10">
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
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/60">
            {project.summary}
          </p>

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
              <span
                key={t}
                className="rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-white/50"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Screenshot */}
        <div className="container relative z-10 mt-12">
          <div className="overflow-hidden rounded-t-xl border border-b-0 border-[rgba(255,255,255,0.15)]">
            <div className="relative aspect-video w-full bg-[#111]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case study content */}
      <section className="pb-20">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-16 pt-16">
            {/* Challenge */}
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-white/40">
                The Challenge
              </h2>
              <p className="mt-4 text-lg leading-relaxed opacity-80">
                {project.challenge}
              </p>
            </div>

            {/* Approach */}
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-white/40">
                The Approach
              </h2>
              <p className="mt-4 text-lg leading-relaxed opacity-80">
                {project.approach}
              </p>
            </div>

            {/* Results */}
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-white/40">
                Results
              </h2>
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
    </>
  )
}
