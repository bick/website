"use client"

import Image from "next/image"
import Link from "next/link"

import Hero from "@/components/Hero"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/data/projects"

export default function ProjectsPage() {
  return (
    <>
      <Hero
        title="🚀 Projects"
        subtitle="A selection of work I've led, built, or shipped."
        gradient="orange"
      />
      <section className="pb-20">
        <div className="container">
          <div className="space-y-16">
            {projects.map((project, index) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="portfolio-item group block no-underline"
              >
                <div
                  className={`flex flex-col overflow-hidden rounded-xl border border-[rgba(255,255,255,0.2)] bg-black transition-colors duration-200 hover:border-[#666] ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Screenshot */}
                  <div className="relative h-64 w-full flex-shrink-0 overflow-hidden bg-[#111] md:h-auto md:w-1/2">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex w-full flex-col justify-center p-8 md:w-1/2 md:p-12">
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge variant="outline">{project.year}</Badge>
                      <Badge variant="secondary">{project.type}</Badge>
                    </div>
                    <h3 className="mt-4 text-2xl font-bold md:text-3xl">{project.title}</h3>
                    <p className="mt-4 text-base leading-relaxed opacity-60">
                      {project.summary}
                    </p>
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
                    <div className="mt-8">
                      <span className="text-sm font-medium text-orange-400 group-hover:text-orange-300 underline underline-offset-4 decoration-orange-400/30 group-hover:decoration-orange-300 transition-colors">
                        View case study &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
