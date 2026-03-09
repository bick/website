"use client"

import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { projects } from "@/data/projects"

export default function Projects() {
  const cardStyles =
    "flex flex-col portfolio-item bg-black border border-[rgba(255,255,255,0.2)] p-0 w-full rounded-xl no-underline box-border break-inside-avoid overflow-hidden min-w-full hover:border-[#666] transition-colors duration-200"

  return (
    <section className="mt-24" id="projects">
      <div className="container">
        <h2>🚀 Projects</h2>
        <div className="mt-8 md:grid md:grid-cols-2 md:gap-6">
          {projects.slice(0, 2).map((project) => (
            <Link key={project.slug} className={cardStyles} href={`/projects/${project.slug}`}>
              <div className="relative flex h-40 w-full items-center justify-center bg-[#111] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-60 transition-transform duration-500 hover:scale-105"
                />
                <Badge variant="outline" className="absolute right-2 top-2 md:right-4 md:top-4 z-10">
                  {project.year}
                </Badge>
              </div>
              <div className="p-4">
                <p className="mb-4 block text-base leading-normal opacity-60">
                  {project.summary.slice(0, 120)}...
                </p>
                <h3 className="mb-0 text-lg font-bold">{project.title}</h3>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/projects" className="portfolio-item text-[var(--link)] no-underline text-base font-medium hover:opacity-75 transition-opacity">
            View all projects &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
